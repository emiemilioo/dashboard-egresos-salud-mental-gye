import { Box, Container, Typography } from '@mui/material'

interface DashboardHeaderProps {
  title: string
  subtitle: string
}

function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: '#123B5D',
        color: '#FFFFFF',
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontSize: { xs: '1.6rem', md: '2.2rem' },
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 1,
            color: '#D8E7F2',
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  )
}

export default DashboardHeader