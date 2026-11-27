import {
  useMemo,
  type ReactNode,
} from 'react';
import {
  Box,
  Container,
} from '@mui/material';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { EgresoHospitalario } from '../../types/dashboard';
import ChartCard from './ChartCard';

interface ChartsSectionProps {
  records: EgresoHospitalario[];
}

const COLORS = [
  '#14AFA0',
  '#7567E8',
  '#E5A400',
  '#FF6B57',
  '#2980B9',
  '#9B59B6',
  '#27AE60',
  '#D35400',
];

function ChartContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 280,
      }}
    >
      {children}
    </Box>
  );
}

function ChartsSection({
  records,
}: ChartsSectionProps) {
  const temporalData = useMemo(() => {
    const cantidades = new Map<number, number>();

    records.forEach((record) => {
      const year = Number(record.anio_egreso);

      if (Number.isFinite(year)) {
        cantidades.set(
          year,
          (cantidades.get(year) ?? 0) + 1
        );
      }
    });

    return Array.from(cantidades.entries())
      .map(([year, total]) => ({
        year,
        total,
      }))
      .sort((a, b) => a.year - b.year);
  }, [records]);

  const diagnosisData = useMemo(() => {
    const cantidades = new Map<string, number>();

    records.forEach((record) => {
      const nombre =
        record.grupo_dashboard ||
        record.grupo_cie10 ||
        record.diagnostico_principal ||
        'Sin información';

      cantidades.set(
        nombre,
        (cantidades.get(nombre) ?? 0) + 1
      );
    });

    return Array.from(cantidades.entries())
      .map(([name, total]) => ({
        name,
        total,
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 8);
  }, [records]);

  const ageSexData = useMemo(() => {
    const grupos = new Map<
      string,
      {
        grupo: string;
        hombres: number;
        mujeres: number;
        otros: number;
      }
    >();

    records.forEach((record) => {
      const grupo =
        record.grupo_edad || 'Sin información';

      const valores = grupos.get(grupo) ?? {
        grupo,
        hombres: 0,
        mujeres: 0,
        otros: 0,
      };

      const sexo = (record.sexo || '')
        .trim()
        .toLowerCase();

      if (sexo === 'hombre') {
        valores.hombres += 1;
      } else if (sexo === 'mujer') {
        valores.mujeres += 1;
      } else {
        valores.otros += 1;
      }

      grupos.set(grupo, valores);
    });

    return Array.from(grupos.values());
  }, [records]);

  const stayData = useMemo(() => {
    const agrupados = new Map<
      number,
      {
        totalDias: number;
        cantidad: number;
      }
    >();

    records.forEach((record) => {
      const year = Number(record.anio_egreso);
      const dias = Number(record.dias_estancia);

      if (
        Number.isFinite(year) &&
        Number.isFinite(dias)
      ) {
        const valores = agrupados.get(year) ?? {
          totalDias: 0,
          cantidad: 0,
        };

        valores.totalDias += dias;
        valores.cantidad += 1;

        agrupados.set(year, valores);
      }
    });

    return Array.from(agrupados.entries())
      .map(([year, valores]) => ({
        year,
        promedio:
          valores.cantidad > 0
            ? Number(
                (
                  valores.totalDias /
                  valores.cantidad
                ).toFixed(1)
              )
            : 0,
      }))
      .sort((a, b) => a.year - b.year);
  }, [records]);

  const sectorData = useMemo(() => {
    const cantidades = new Map<string, number>();

    records.forEach((record) => {
      const sector =
        record.sector_agrupado || 'Sin información';

      cantidades.set(
        sector,
        (cantidades.get(sector) ?? 0) + 1
      );
    });

    return Array.from(cantidades.entries())
      .map(([name, value]) => ({
        name,
        value,
      }))
      .sort((a, b) => b.value - a.value);
  }, [records]);

  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
          },
          gap: 2,
        }}
      >
        <Box
          sx={{
            gridColumn: {
              xs: 'auto',
              md: '1 / -1',
            },
          }}
        >
          <ChartCard
            title="Evolución temporal de los egresos"
            description={
              temporalData.length === 1
                ? 'Total de egresos del año seleccionado'
                : 'Cantidad anual de egresos entre 2017 y 2024'
            }
          >
            <ChartContainer>
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                {temporalData.length === 1 ? (
                  <BarChart
                    data={temporalData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 10,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                    />

                    <XAxis dataKey="year" />

                    <YAxis allowDecimals={false} />

                    <Tooltip />

                    <Legend />

                    <Bar
                      dataKey="total"
                      name="Total de egresos"
                      fill="#14AFA0"
                      radius={[6, 6, 0, 0]}
                      maxBarSize={180}
                    />
                  </BarChart>
                ) : (
                  <LineChart
                    data={temporalData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 10,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                    />

                    <XAxis dataKey="year" />

                    <YAxis allowDecimals={false} />

                    <Tooltip />

                    <Legend />

                    <Line
                      type="monotone"
                      dataKey="total"
                      name="Total de egresos"
                      stroke="#14AFA0"
                      strokeWidth={3}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </ChartContainer>
          </ChartCard>
        </Box>

        <ChartCard
          title="Diagnósticos principales"
          description="Ocho grupos diagnósticos con más egresos"
        >
          <ChartContainer>
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={diagnosisData}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  type="number"
                  allowDecimals={false}
                />

                <YAxis
                  type="category"
                  dataKey="name"
                  width={145}
                  tick={{ fontSize: 11 }}
                />

                <Tooltip />

                <Bar
                  dataKey="total"
                  name="Egresos"
                  fill="#7567E8"
                  radius={[0, 5, 5, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartCard>

        <ChartCard
          title="Distribución por sexo y edad"
          description="Comparación por sexo dentro de cada grupo de edad"
        >
          <ChartContainer>
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={ageSexData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 20,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="grupo"
                  tick={{ fontSize: 11 }}
                  angle={-20}
                  textAnchor="end"
                  height={60}
                />

                <YAxis allowDecimals={false} />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="hombres"
                  name="Hombres"
                  stackId="sexo"
                  fill="#2980B9"
                />

                <Bar
                  dataKey="mujeres"
                  name="Mujeres"
                  stackId="sexo"
                  fill="#E85D9E"
                />

                <Bar
                  dataKey="otros"
                  name="Otros/sin información"
                  stackId="sexo"
                  fill="#95A5A6"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartCard>

        <ChartCard
          title="Duración de la hospitalización"
          description="Promedio anual de días de estancia"
        >
          <ChartContainer>
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              {stayData.length === 1 ? (
                <BarChart
                  data={stayData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 5,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis dataKey="year" />

                  <YAxis />

                  <Tooltip />

                  <Legend />

                  <Bar
                    dataKey="promedio"
                    name="Promedio de días"
                    fill="#E5A400"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={180}
                  />
                </BarChart>
              ) : (
                <LineChart
                  data={stayData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 5,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis dataKey="year" />

                  <YAxis />

                  <Tooltip />

                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="promedio"
                    name="Promedio de días"
                    stroke="#E5A400"
                    strokeWidth={3}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </ChartContainer>
        </ChartCard>

        <ChartCard
          title="Sector de atención"
          description="Participación de establecimientos públicos y privados"
        >
          <ChartContainer>
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={sectorData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {sectorData.map((item, index) => (
                    <Cell
                      key={item.name}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartCard>
      </Box>
    </Container>
  );
}

export default ChartsSection;