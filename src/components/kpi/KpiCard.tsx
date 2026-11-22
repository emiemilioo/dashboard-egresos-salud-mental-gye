import type { ReactNode } from 'react'
import {
  Avatar,
  Box,
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
        borderLeft: `4px solid ${color}`,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#17324D',
              }}
            >
              {value}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color,
                fontWeight: 600,
              }}
            >
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
        </Box>
      </CardContent>
    </Card>
  )
}

export default KpiCard