import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined'
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined'
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined'
import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import ChartCard from './ChartCard'

function ChartPlaceholder() {
  return (
    <Box sx={{ textAlign: 'center', color: '#78909C' }}>
      <BarChartOutlinedIcon sx={{ fontSize: 52 }} />

      <Typography variant="body2" sx={{ mt: 1 }}>
        Contenedor preparado para el gráfico
      </Typography>
    </Box>
  )
}

function ChartsSection() {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            lg: 'repeat(2, 1fr)',
          },
          gap: 2,
        }}
      >
        <Box sx={{ gridColumn: { xs: 'auto', lg: '1 / -1' } }}>
          <ChartCard
            title="Evolución temporal de los egresos"
            description="Cambios anuales entre 2017 y 2024"
          >
            <ShowChartOutlinedIcon
              sx={{ fontSize: 64, color: '#1565C0' }}
            />
          </ChartCard>
        </Box>

        <ChartCard
          title="Diagnósticos principales"
          description="Comparación de egresos por grupo diagnóstico"
        >
          <ChartPlaceholder />
        </ChartCard>

        <ChartCard
          title="Distribución por sexo y edad"
          description="Comparación por sexo dentro de cada grupo de edad"
        >
          <StackedBarChartOutlinedIcon
            sx={{ fontSize: 64, color: '#7B1FA2' }}
          />
        </ChartCard>

        <ChartCard
          title="Duración de la hospitalización"
          description="Evolución del promedio o mediana de días de estancia"
        >
          <ShowChartOutlinedIcon
            sx={{ fontSize: 64, color: '#ED6C02' }}
          />
        </ChartCard>

        <ChartCard
          title="Sector de atención"
          description="Participación de establecimientos públicos y privados"
        >
          <DonutLargeOutlinedIcon
            sx={{ fontSize: 64, color: '#2E7D32' }}
          />
        </ChartCard>
      </Box>
    </Container>
  )
}

export default ChartsSection