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
    color: '#14AFA0',
    backgroundColor: '#E4F8F5',
  },
  {
    id: 'variation',
    title: 'Variación del periodo',
    value: '+12,4 %',
    comparison: 'Comparación entre el primer y último año',
    icon: <TrendingUpIcon />,
    color: '#7567E8',
    backgroundColor: '#EEECFF',
  },
  {
    id: 'average-stay',
    title: 'Estancia promedio',
    value: '9,6 días',
    comparison: 'Promedio de duración hospitalaria',
    icon: <BedIcon />,
    color: '#E5A400',
    backgroundColor: '#FFF5D6',
  },
  {
    id: 'hospital-deaths',
    title: 'Fallecimiento hospitalario',
    value: '1,8 %',
    comparison: 'Proporción sobre el total de egresos',
    icon: <MonitorHeartIcon />,
    color: '#FF6B57',
    backgroundColor: '#FFE9E5',
  },
]