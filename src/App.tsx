import { useState } from 'react'
import { Box } from '@mui/material'
import ChartsSection from './components/charts/ChartsSection'
import FilterBar from './components/filters/FilterBar'
import KpiSection from './components/kpi/KpiSection'
import DashboardFooter from './components/layout/DashboardFooter'
import DashboardHeader from './components/layout/DashboardHeader'
import DataTableSection from './components/table/DataTableSection'
import {
  diagnosisOptions,
  periodOptions,
} from './data/filterOptions'
import { kpiData } from './data/kpiData'
import { dischargeRecords } from './data/dischargeRecords'

function App() {
  const [period, setPeriod] = useState('all')
  const [diagnosis, setDiagnosis] = useState('all')

  const handleClearFilters = () => {
    setPeriod('all')
    setDiagnosis('all')
  }

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

        <FilterBar
          period={period}
          diagnosis={diagnosis}
          periodOptions={periodOptions}
          diagnosisOptions={diagnosisOptions}
          onPeriodChange={setPeriod}
          onDiagnosisChange={setDiagnosis}
          onClear={handleClearFilters}
        />

        <KpiSection kpis={kpiData} />

        <ChartsSection />

        <DataTableSection records={dischargeRecords} />
      </Box>

      <DashboardFooter />
    </Box>
  )
}

export default App