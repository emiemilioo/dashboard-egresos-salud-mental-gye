import { useState } from 'react'
import { Box } from '@mui/material'
import DashboardHeader from './components/layout/DashboardHeader'
import FilterBar from './components/filters/FilterBar'
import KpiSection from './components/kpi/KpiSection'
import {
  diagnosisOptions,
  periodOptions,
} from './data/filterOptions'
import { kpiData } from './data/kpiData'
import ChartsSection from './components/charts/ChartsSection'
import DataTableSection from './components/table/DataTableSection'
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
      component="main"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F4F7FA',
        pb: 4,
      }}
    >
      <DashboardHeader
        title="Egresos hospitalarios por salud mental"
        subtitle="Análisis de residentes de Guayaquil durante el periodo 2017–2024"
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
  )
}

export default App