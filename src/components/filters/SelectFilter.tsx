import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from '@mui/material'
import type { FilterOption } from '../../types/dashboard'

interface SelectFilterProps {
  label: string
  value: string
  options: FilterOption[]
  onChange: (value: string) => void
}

function SelectFilter({
  label,
  value,
  options,
  onChange,
}: SelectFilterProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)
  }

  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>

      <Select value={value} label={label} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectFilter