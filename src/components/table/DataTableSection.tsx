import {
  Container,
  Paper,
  Typography,
} from '@mui/material'
import type { DischargeRecord } from '../../types/dashboard'
import DischargeTable from './DischargeTable'

interface DataTableSectionProps {
  records: DischargeRecord[]
}

function DataTableSection({ records }: DataTableSectionProps) {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Paper
        elevation={0}
        sx={{
          border: '1px solid #DCE4EA',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Typography
          component="h2"
          variant="h6"
          sx={{
            px: { xs: 2, md: 3 },
            pt: 3,
            fontWeight: 700,
          }}
        >
          Tabla detallada de egresos
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            px: { xs: 2, md: 3 },
            mt: 0.5,
            mb: 2,
          }}
        >
          Registros utilizados para explorar los egresos hospitalarios
        </Typography>

        <DischargeTable records={records} />
      </Paper>
    </Container>
  )
}

export default DataTableSection