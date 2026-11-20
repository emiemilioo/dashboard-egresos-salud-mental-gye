import { Box, Container, Paper, Typography } from '@mui/material'
import type { FilterOption } from '../../types/dashboard'
import ClearFiltersButton from './ClearFiltersButton'
import SelectFilter from './SelectFilter'

interface FilterBarProps {
  period: string
  diagnosis: string
  periodOptions: FilterOption[]
  diagnosisOptions: FilterOption[]
  onPeriodChange: (value: string) => void
  onDiagnosisChange: (value: string) => void
  onClear: () => void
}

function FilterBar({
  period,
  diagnosis,
  periodOptions,
  diagnosisOptions,
  onPeriodChange,
  onDiagnosisChange,
  onClear,
}: FilterBarProps) {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Paper
        elevation={0}
        sx={{
          border: '1px solid #DCE4EA',
          borderRadius: 2,
          p: { xs: 2, md: 3 },
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
          Filtros
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'minmax(200px, 1fr) minmax(200px, 1fr) auto',
            },
            gap: 2,
            alignItems: 'center',
          }}
        >
          <SelectFilter
            label="Periodo"
            value={period}
            options={periodOptions}
            onChange={onPeriodChange}
          />

          <SelectFilter
            label="Diagnóstico"
            value={diagnosis}
            options={diagnosisOptions}
            onChange={onDiagnosisChange}
          />

          <ClearFiltersButton onClick={onClear} />
        </Box>
      </Paper>
    </Container>
  )
}

export default FilterBar