import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import type { DischargeRecord } from '../../types/dashboard'
import SectorBadge from './SectorBadge'

interface DischargeTableProps {
  records: DischargeRecord[]
}

function DischargeTable({ records }: DischargeTableProps) {
  return (
    <TableContainer sx={{ overflowX: 'auto' }}>
      <Table sx={{ minWidth: 900 }}>
        <TableHead
        sx={{
            '& .MuiTableCell-root': {
            backgroundColor: '#123B5D',
            color: '#FFFFFF',
            fontWeight: 700,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            },
        }}
        >
        <TableRow>
            <TableCell>Año</TableCell>
            <TableCell>Diagnóstico</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Grupo de edad</TableCell>
            <TableCell>Sector</TableCell>
            <TableCell>Días de estancia</TableCell>
            <TableCell>Condición al egreso</TableCell>
        </TableRow>
        </TableHead>

        <TableBody>
          {records.map((record) => (
            <TableRow
              key={record.id}
              hover
              sx={{
                '&:last-child td': {
                  borderBottom: 0,
                },
              }}
            >
              <TableCell>{record.year}</TableCell>
              <TableCell>{record.diagnosis}</TableCell>
              <TableCell>{record.sex}</TableCell>
              <TableCell>{record.ageGroup}</TableCell>
              <TableCell>
                <SectorBadge sector={record.sector} />
              </TableCell>
              <TableCell align="right">{record.stayDays}</TableCell>
              <TableCell>
                <Typography
                  variant="body2"
                  sx={{
                    color:
                      record.dischargeCondition === 'Fallecido'
                        ? '#C62828'
                        : '#2E7D32',
                    fontWeight: 600,
                  }}
                >
                  {record.dischargeCondition}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DischargeTable