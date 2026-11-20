import type { ReactNode } from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'

interface KpiCardProps {
  title: string
  value: number | string
  comparison: string
  icon: ReactNode
  color: string
  backgroundColor: string
}

function KpiCard({
  title,
  value,
  comparison,
  icon,
  color,
  backgroundColor,
}: KpiCardProps) {
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
        <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: 'space-between',
                alignItems: 'flex-start',
            }}
        >
          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, color: '#17324D' }}>
              {value}
            </Typography>

            <Typography variant="caption" color="text.secondary">
              {comparison}
            </Typography>
          </Stack>

          <Avatar
            sx={{
              width: 44,
              height: 44,
              color,
              backgroundColor,
            }}
          >
            {icon}
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default KpiCard