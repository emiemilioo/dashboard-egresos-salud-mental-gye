import { Box } from '@mui/material'
import DashboardHeader from './components/layout/DashboardHeader'

function App() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F4F7FA',
      }}
    >
      <DashboardHeader
        title="Egresos hospitalarios por salud mental"
        subtitle="Análisis de residentes de Guayaquil durante el periodo 2017–2024"
      />
    </Box>
  )
}

export default App