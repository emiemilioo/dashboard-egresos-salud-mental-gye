import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { Button } from '@mui/material'

interface ClearFiltersButtonProps {
  onClick: () => void
}

function ClearFiltersButton({ onClick }: ClearFiltersButtonProps) {
  return (
    <Button
      variant="outlined"
      startIcon={<RestartAltIcon />}
      onClick={onClick}
      sx={{ height: 40, whiteSpace: 'nowrap' }}
    >
      Limpiar filtros
    </Button>
  )
}

export default ClearFiltersButton