import {
  Box,
  Container,
  Typography,
} from '@mui/material'

function DashboardFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 3,
        backgroundColor: '#123B5D',
        color: '#FFFFFF',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
            textAlign: 'center',
        }}
        >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Egresos hospitalarios por salud mental
        </Typography>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 0.5,
            color: '#D8E7F2',
          }}
        >
          Guayaquil · Periodo 2017–2024
        </Typography>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 0.5,
            color: '#D8E7F2',
          }}
        >
          Fuente: Instituto Nacional de Estadística y Censos
        </Typography>
      </Container>
    </Box>
  )
}

export default DashboardFooter