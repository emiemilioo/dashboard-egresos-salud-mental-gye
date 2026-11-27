import { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';

import ChartsSection from './components/charts/ChartsSection';
import FilterBar from './components/filters/FilterBar';
import KpiSection from './components/kpi/KpiSection';
import DashboardFooter from './components/layout/DashboardFooter';
import DashboardHeader from './components/layout/DashboardHeader';
import DataTableSection from './components/table/DataTableSection';

import { crearKpiData } from './data/kpiData';
import { obtenerEgresos } from './services/egresosService';

import type {
  DischargeRecord,
  EgresoHospitalario,
  FilterOption,
} from './types/dashboard';

function App() {
  const [period, setPeriod] = useState('all');
  const [diagnosis, setDiagnosis] = useState('all');

  const [egresos, setEgresos] = useState<EgresoHospitalario[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function cargarEgresos() {
      try {
        setCargando(true);
        setError(null);

        const registros = await obtenerEgresos();

        setEgresos(registros);
      } catch (errorConsulta) {
        console.error(
          'Error al consultar Firebase:',
          errorConsulta
        );

        setError(
          'No se pudieron cargar los registros.'
        );
      } finally {
        setCargando(false);
      }
    }

    cargarEgresos();
  }, []);

  const obtenerNombreDiagnostico = (
    registro: EgresoHospitalario
  ) =>
    registro.grupo_dashboard ||
    registro.grupo_cie10 ||
    registro.diagnostico_principal ||
    '';

  const periodOptions = useMemo<FilterOption[]>(() => {
    const years = Array.from(
      new Set(
        egresos
          .map((registro) =>
            Number(registro.anio_egreso)
          )
          .filter((year) => Number.isFinite(year))
      )
    ).sort((a, b) => a - b);

    const primerYear = years[0];
    const ultimoYear = years[years.length - 1];

    return [
      {
        value: 'all',
        label:
          years.length > 0
            ? `Todo el periodo: ${primerYear}–${ultimoYear}`
            : 'Todo el periodo',
      },
      ...years.map((year) => ({
        value: String(year),
        label: String(year),
      })),
    ];
  }, [egresos]);

  const diagnosisOptions = useMemo<FilterOption[]>(() => {
    const nombres = Array.from(
      new Set(
        egresos
          .map(obtenerNombreDiagnostico)
          .filter(
            (nombre): nombre is string =>
              nombre.trim().length > 0
          )
      )
    ).sort((a, b) =>
      a.localeCompare(b, 'es')
    );

    return [
      {
        value: 'all',
        label: 'Todos los diagnósticos',
      },
      ...nombres.map((nombre) => ({
        value: nombre,
        label: nombre,
      })),
    ];
  }, [egresos]);

  const egresosFiltrados = useMemo(() => {
    return egresos.filter((registro) => {
      const coincidePeriodo =
        period === 'all' ||
        String(registro.anio_egreso) === period;

      const coincideDiagnostico =
        diagnosis === 'all' ||
        obtenerNombreDiagnostico(registro) === diagnosis;

      return coincidePeriodo && coincideDiagnostico;
    });
  }, [egresos, period, diagnosis]);

  const handleClearFilters = () => {
    setPeriod('all');
    setDiagnosis('all');
  };

  const indicadores = useMemo(
    () => crearKpiData(egresosFiltrados),
    [egresosFiltrados]
  );

  const registrosTabla = useMemo<DischargeRecord[]>(() => {
    return egresosFiltrados.map(
      (registro, index) => ({
        id: index + 1,

        year: registro.anio_egreso,

        diagnosis: registro.codigo_cie10
          ? `${registro.codigo_cie10} - ${
              registro.diagnostico_principal ||
              registro.grupo_dashboard ||
              'Diagnóstico no registrado'
            }`
          : registro.grupo_dashboard ||
            registro.grupo_cie10 ||
            registro.diagnostico_principal ||
            'Diagnóstico no registrado',

        sex: registro.sexo || 'Sin información',

        ageGroup:
          registro.grupo_edad || 'Sin información',

        sector:
          registro.sector_agrupado || 'Sin información',

        stayDays:
          typeof registro.dias_estancia === 'number'
            ? registro.dias_estancia
            : 0,

        dischargeCondition:
          registro.condicion_egreso ||
          'Sin información',
      })
    );
  }, [egresosFiltrados]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F4F7FA',
      }}
    >
      <Box component="main" sx={{ flex: 1 }}>
        <DashboardHeader
          title="Egresos hospitalarios y salud mental"
          subtitle="Análisis de egresos hospitalarios en Guayaquil durante el periodo 2017–2024"
        />

        {cargando && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              py: 4,
            }}
          >
            <CircularProgress size={26} />

            <Typography>
              Cargando...
            </Typography>
          </Box>
        )}

        {error && (
          <Box
            sx={{
              maxWidth: 1440,
              mx: 'auto',
              px: 3,
              py: 2,
            }}
          >
            <Alert severity="error">
              {error}
            </Alert>
          </Box>
        )}

        {!cargando && !error && (
          <>
            <FilterBar
              period={period}
              diagnosis={diagnosis}
              periodOptions={periodOptions}
              diagnosisOptions={diagnosisOptions}
              onPeriodChange={setPeriod}
              onDiagnosisChange={setDiagnosis}
              onClear={handleClearFilters}
            />

            <KpiSection kpis={indicadores} />

            <ChartsSection
              records={egresosFiltrados}
            />

            <DataTableSection
              records={registrosTabla}
            />
          </>
        )}
      </Box>

      <DashboardFooter />
    </Box>
  );
}

export default App;