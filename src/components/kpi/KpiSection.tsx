import { Box, Container } from '@mui/material'
import type { KpiData } from '../../types/dashboard'
import KpiCard from './KpiCard'

interface KpiSectionProps {
  kpis: KpiData[]
}

function KpiSection({ kpis }: KpiSectionProps) {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 2,
        }}
      >
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            comparison={kpi.comparison}
            icon={kpi.icon}
            color={kpi.color}
            backgroundColor={kpi.backgroundColor}
          />
        ))}
      </Box>
    </Container>
  )
}

export default KpiSection