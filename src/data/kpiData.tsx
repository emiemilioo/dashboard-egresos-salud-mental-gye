import BedIcon from '@mui/icons-material/Bed'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import type { KpiData } from '../types/dashboard'

export const kpiData: KpiData[] = [
  {
    id: 'total-discharges',
    title: 'Total de egresos',
    value: '8.542',
    comparison: 'Registros entre 2017 y 2024',
    icon: <LocalHospitalIcon />,
    color: '#1565C0',
    backgroundColor: '#E3F2FD',
  },
  {
    id: 'variation',
    title: 'Variación del periodo',
    value: '+12,4 %',
    comparison: 'Comparación entre el primer y último año',
    icon: <TrendingUpIcon />,
    color: '#2E7D32',
    backgroundColor: '#E8F5E9',
  },
  {
    id: 'average-stay',
    title: 'Estancia promedio',
    value: '9,6 días',
    comparison: 'Promedio de duración hospitalaria',
    icon: <BedIcon />,
    color: '#ED6C02',
    backgroundColor: '#FFF3E0',
  },
  {
    id: 'hospital-deaths',
    title: 'Fallecimiento hospitalario',
    value: '1,8 %',
    comparison: 'Proporción sobre el total de egresos',
    icon: <MonitorHeartIcon />,
    color: '#C62828',
    backgroundColor: '#FFEBEE',
  },
]