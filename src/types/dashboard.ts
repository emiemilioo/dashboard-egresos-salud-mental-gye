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

export interface DischargeRecord {
  id: number
  year: number
  diagnosis: string
  sex: string
  ageGroup: string
  sector: string
  stayDays: number
  dischargeCondition: string
}

export interface EgresoHospitalario {
  id: string;
  anio_egreso: number;
  fecha_ingreso: string;
  fecha_egreso: string;
  anio_mes: string;
  periodo_pandemia: string;
  codigo_cie10: string;
  diagnostico_principal: string;
  grupo_cie10: string;
  grupo_dashboard: string;
  sexo: string;
  edad_original: number | null;
  unidad_edad: string;
  edad_anios: number | null;
  grupo_edad: string;
  dias_estancia: number;
  sector_detalle: string;
  sector_agrupado: string;
  entidad: string;
  condicion_egreso: string;
  fallecimiento: boolean;
  especialidad: string;
  canton_residencia: string;
  canton_atencion: string;
}