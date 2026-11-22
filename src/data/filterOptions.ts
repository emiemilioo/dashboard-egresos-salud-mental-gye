import type { FilterOption } from '../types/dashboard'

export const periodOptions: FilterOption[] = [
  { value: 'all', label: 'Todo el periodo: 2017–2024' },
  { value: 'before', label: 'Antes de la pandemia: 2017–2019' },
  { value: 'during', label: 'Durante la pandemia: 2020–2021' },
  { value: 'after', label: 'Después de la pandemia: 2022–2024' },
]

export const diagnosisOptions: FilterOption[] = [
  { value: 'all', label: 'Todos los diagnósticos' },
  { value: 'F20', label: 'F20 - Esquizofrenia' },
  { value: 'F32', label: 'F32 - Episodio depresivo' },
  { value: 'F10', label: 'F10 - Trastornos por consumo de alcohol' },
  { value: 'F41', label: 'F41 - Otros trastornos de ansiedad' },
]