import { Chip } from '@mui/material'

interface SectorBadgeProps {
  sector: string
}

function SectorBadge({ sector }: SectorBadgeProps) {
  const isPublic = sector === 'Público'

  return (
    <Chip
      label={sector}
      size="small"
      sx={{
        fontWeight: 600,
        color: isPublic ? '#1565C0' : '#7B1FA2',
        backgroundColor: isPublic ? '#E3F2FD' : '#F3E5F5',
      }}
    />
  )
}

export default SectorBadge