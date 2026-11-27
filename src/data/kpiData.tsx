import BedIcon from '@mui/icons-material/Bed';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import type {
  EgresoHospitalario,
  KpiData,
} from '../types/dashboard';

const formatoNumero = new Intl.NumberFormat('es-EC');

export function crearKpiData(
  records: EgresoHospitalario[]
): KpiData[] {
  const totalEgresos = records.length;

  const years = Array.from(
    new Set(
      records
        .map((record) => Number(record.anio_egreso))
        .filter((year) => Number.isFinite(year))
    )
  ).sort((a, b) => a - b);

  const primerYear = years[0];
  const ultimoYear = years[years.length - 1];
  const hayComparacion = years.length >= 2;

  const totalPrimerYear = records.filter(
    (record) =>
      Number(record.anio_egreso) === primerYear
  ).length;

  const totalUltimoYear = records.filter(
    (record) =>
      Number(record.anio_egreso) === ultimoYear
  ).length;

  const variacion =
    hayComparacion && totalPrimerYear > 0
      ? ((totalUltimoYear - totalPrimerYear) /
          totalPrimerYear) *
        100
      : 0;

  const registrosConEstancia = records.filter(
    (record) =>
      Number.isFinite(Number(record.dias_estancia))
  );

  const totalDias = registrosConEstancia.reduce(
    (acumulado, record) =>
      acumulado + Number(record.dias_estancia),
    0
  );

  const estanciaPromedio =
    registrosConEstancia.length > 0
      ? totalDias / registrosConEstancia.length
      : 0;

  const totalFallecimientos = records.filter(
    (record) =>
      record.fallecimiento === true ||
      (record.condicion_egreso || '')
        .toLowerCase()
        .startsWith('fallecido')
  ).length;

  const porcentajeFallecimientos =
    totalEgresos > 0
      ? (totalFallecimientos / totalEgresos) * 100
      : 0;

  return [
    {
      id: 'total-discharges',
      title: 'Total de egresos',
      value: formatoNumero.format(totalEgresos),

      comparison:
        years.length === 0
          ? 'Sin registros disponibles'
          : years.length === 1
            ? `Registros del año ${primerYear}`
            : `Registros entre ${primerYear} y ${ultimoYear}`,

      icon: <LocalHospitalIcon />,
      color: '#14AFA0',
      backgroundColor: '#E4F8F5',
    },

    {
      id: 'variation',
      title: 'Variación del periodo',

      value: hayComparacion
        ? `${variacion > 0 ? '+' : ''}${variacion
            .toFixed(1)
            .replace('.', ',')} %`
        : 'No aplica',

      comparison: hayComparacion
        ? `Cambio entre ${primerYear} y ${ultimoYear}`
        : years.length === 1
          ? 'No se calcula para un solo año'
          : 'Sin registros disponibles',

      icon: <TrendingUpIcon />,
      color: '#7567E8',
      backgroundColor: '#EEECFF',
    },

    {
      id: 'average-stay',
      title: 'Estancia promedio',

      value: `${estanciaPromedio
        .toFixed(1)
        .replace('.', ',')} días`,

      comparison: 'Promedio de duración hospitalaria',
      icon: <BedIcon />,
      color: '#E5A400',
      backgroundColor: '#FFF5D6',
    },

    {
      id: 'hospital-deaths',
      title: 'Fallecimiento hospitalario',

      value: `${porcentajeFallecimientos
        .toFixed(1)
        .replace('.', ',')} %`,

      comparison: 'Proporción sobre el total de egresos',
      icon: <MonitorHeartIcon />,
      color: '#FF6B57',
      backgroundColor: '#FFE9E5',
    },
  ];
}