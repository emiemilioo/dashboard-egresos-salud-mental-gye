
import { Container, Grid } from '@mui/material'
import type { KpiData } from '../../types/dashboard'
import KpiCard from './KpiCard'

interface KpiSectionProps {
  kpis: KpiData[]
}

function KpiSection({ kpis }: KpiSectionProps) {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {kpis.map((kpi) => (
          <Grid key={kpi.id} size={{ xs: 12, md: 3 }}>
            <KpiCard
              title={kpi.title}
              value={kpi.value}
              comparison={kpi.comparison}
              icon={kpi.icon}
              color={kpi.color}
              backgroundColor={kpi.backgroundColor}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default KpiSection
