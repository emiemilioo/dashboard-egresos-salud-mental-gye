import { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import type { DischargeRecord } from '../../types/dashboard';
import SectorBadge from './SectorBadge';

interface DischargeTableProps {
  records: DischargeRecord[];
}

function DischargeTable({ records }: DischargeTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setPage(0);
  }, [records]);

  const visibleRecords = records.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
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
            {visibleRecords.map((record) => (
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

                <TableCell align="right">
                  {record.stayDays}
                </TableCell>

                <TableCell>
                  <Typography
                    variant="body2"
                    sx={{
                      color: record.dischargeCondition
                        .toLowerCase()
                        .startsWith('fallecido')
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

      <TablePagination
        component="div"
        count={records.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, 50]}
        onPageChange={(_event, newPage) => {
          setPage(newPage);
        }}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(Number(event.target.value));
          setPage(0);
        }}
        labelRowsPerPage="Filas por página:"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}–${to} de ${count}`
        }
      />
    </Box>
  );
}

export default DischargeTable;