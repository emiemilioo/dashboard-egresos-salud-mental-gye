import type { ReactNode } from 'react'

export interface FilterOption {
  value: string
  label: string
}

export interface KpiData {
  id: string
  title: string
  value: number | string
  comparison: string
  icon: ReactNode
  color: string
  backgroundColor: string
}