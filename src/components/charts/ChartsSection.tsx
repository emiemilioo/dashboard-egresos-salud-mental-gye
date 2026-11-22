import { Box, Container } from '@mui/material'
import ChartCard from './ChartCard'

function ChartPlaceholder() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 220,
      }}
    />
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
            md: 'repeat(2, 1fr)',
          },
          gap: 2,
        }}
      >
        <Box
          sx={{
            gridColumn: {
              xs: 'auto',
              md: '1 / -1',
            },
          }}
        >
          <ChartCard
            title="Evolución temporal de los egresos"
            description="Cambios anuales entre 2017 y 2024"
          >
            <ChartPlaceholder />
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
          <ChartPlaceholder />
        </ChartCard>

        <ChartCard
          title="Duración de la hospitalización"
          description="Evolución del promedio o mediana de días de estancia"
        >
          <ChartPlaceholder />
        </ChartCard>

        <ChartCard
          title="Sector de atención"
          description="Participación de establecimientos públicos y privados"
        >
          <ChartPlaceholder />
        </ChartCard>
      </Box>
    </Container>
  )
}

export default ChartsSection