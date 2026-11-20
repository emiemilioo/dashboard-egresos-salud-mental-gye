import type { ReactNode } from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material'

interface ChartCardProps {
  title: string
  description: string
  children: ReactNode
}

function ChartCard({
  title,
  description,
  children,
}: ChartCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        border: '1px solid #DCE4EA',
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography
          component="h2"
          variant="h6"
          sx={{ fontWeight: 700 }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            mt: 3,
            minHeight: 280,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
      </CardContent>
    </Card>
  )
}

export default ChartCard