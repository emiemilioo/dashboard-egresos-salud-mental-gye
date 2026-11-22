# Egresos hospitalarios y salud mental

Dashboard interactivo para analizar los egresos hospitalarios relacionados con trastornos mentales y del comportamiento en residentes del cantón Guayaquil durante el periodo 2017–2024.

La información utilizada pertenece al Registro Estadístico de Egresos Hospitalarios, elaborado y publicado por el Instituto Nacional de Estadística y Censos del Ecuador (INEC).

Cada registro representa una hospitalización que terminó con el egreso del paciente y no necesariamente una persona única, debido a que un mismo paciente puede haber sido hospitalizado más de una vez.

Los diagnósticos relacionados con salud mental se identifican mediante los códigos F00–F99 de la Clasificación Internacional de Enfermedades CIE-10.

## Sitio web

El dashboard se encuentra disponible en:

https://emiemilioo.github.io/dashboard-egresos-salud-mental-gye/

## Objetivo

El objetivo del proyecto es facilitar la consulta y comprensión de los cambios en los egresos hospitalarios relacionados con la salud mental durante el periodo 2017–2024.

El dashboard permite analizar indicadores generales, periodos temporales, diagnósticos, características demográficas, duración de las hospitalizaciones, sector de atención y condición de los pacientes al momento del egreso.

## Funcionalidades

- Consulta de egresos hospitalarios entre 2017 y 2024.
- Filtro por periodo.
- Filtro por diagnóstico.
- Restablecimiento de filtros.
- Visualización de indicadores principales.
- Comparación de diagnósticos.
- Análisis de la distribución por sexo y grupo de edad.
- Análisis de la duración de las hospitalizaciones.
- Comparación entre el sector público y privado.
- Consulta de registros mediante una tabla detallada.
- Interfaz adaptable a computadoras y dispositivos móviles.

## Indicadores principales

El dashboard presenta los siguientes indicadores:

- Total de egresos hospitalarios.
- Variación de los egresos durante el periodo.
- Promedio de días de estancia hospitalaria.
- Proporción de fallecimientos hospitalarios.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Material UI
- Python
- Pandas
- Git
- GitHub

## Estructura del repositorio

```text
data/
├── egresos_salud_mental_guayaquil_2017_2024.csv
└── egresos_salud_mental_guayaquil_2017_2024.json

public/

scripts/
└── convertir_csv_json.py

src/
├── components/
│   ├── charts/
│   ├── filters/
│   ├── kpi/
│   ├── layout/
│   └── table/
├── data/
├── types/
├── App.tsx
├── index.css
└── main.tsx

eslint.config.js
index.html
package.json
package-lock.json
README.md
requirements.txt
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Instalación

Para descargar el repositorio:

```bash
git clone https://github.com/emiemilioo/dashboard-egresos-salud-mental-gye.git
```

Después se debe ingresar a la carpeta del proyecto:

```bash
cd dashboard-egresos-salud-mental-gye
```

Las dependencias se instalan mediante:

```bash
npm install
```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local desde la cual se puede abrir el dashboard.

## Verificación

Para revisar el código con ESLint:

```bash
npm run lint
```

Para generar la versión de producción:

```bash
npm run build
```

Los archivos generados se guardarán en la carpeta `dist`.

Para revisar localmente la versión de producción:

```bash
npm run preview
```

## Procesamiento de los datos

Los archivos originales correspondientes al periodo 2017–2024 fueron revisados, filtrados y unificados en un solo conjunto de datos.

Durante la preparación se normalizaron:

- Nombres de variables.
- Categorías.
- Fechas.
- Códigos de diagnóstico.
- Nombres de cantones.
- Valores sin información.

Posteriormente, se seleccionaron los registros correspondientes a residentes del cantón Guayaquil cuyos diagnósticos principales pertenecen al rango F00–F99 de la CIE-10.

## Archivos de datos

El repositorio contiene dos representaciones del conjunto de datos:

- `egresos_salud_mental_guayaquil_2017_2024.csv`: registros consolidados en formato CSV.
- `egresos_salud_mental_guayaquil_2017_2024.json`: registros preparados para su utilización en la aplicación web.

El conjunto consolidado contiene 12.860 registros.

Cada objeto del archivo JSON representa un egreso hospitalario.

```json
[
  {
    "id": "EH-2017-00001",
    "anio_egreso": 2017,
    "fecha_ingreso": "2016-12-19",
    "sexo": "Mujer",
    "fallecimiento": false
  }
]
```

Las variables numéricas se conservan como números, las variables categóricas como texto, las fechas utilizan el formato `AAAA-MM-DD` y la variable `fallecimiento` utiliza valores booleanos.

## Conversión de CSV a JSON

El script de conversión se encuentra en:

```text
scripts/convertir_csv_json.py
```

Para instalar las dependencias de Python:

```bash
python -m pip install -r requirements.txt
```

Para ejecutar la conversión:

```bash
python scripts/convertir_csv_json.py
```

El script realiza las siguientes acciones:

1. Lee el archivo CSV consolidado.
2. Comprueba las variables numéricas.
3. Valida las fechas.
4. Convierte los registros al formato JSON.
5. Verifica que el CSV y el JSON mantengan la misma cantidad de registros.

Los valores que no pudieron determinarse se representan como `null`.

## Fuente de los datos

Los archivos originales fueron obtenidos de las páginas oficiales del Instituto Nacional de Estadística y Censos:

- Fuente general: https://www.ecuadorencifras.gob.ec/camas-y-egresos-hospitalarios/
- Datos de 2017: https://www.ecuadorencifras.gob.ec/camas-y-egresos-hospitalarios-2017/
- Datos de 2018: https://www.ecuadorencifras.gob.ec/camas-y-egresos-hospitalarios-2018/
- Datos de 2019: https://www.ecuadorencifras.gob.ec/camas-y-egresos-hospitalarios-2019/
- Datos de 2020: https://www.ecuadorencifras.gob.ec/camas-y-egresos-hospitalarios-2020/
- Datos de 2021: https://www.ecuadorencifras.gob.ec/camas-y-egresos-hospitalarios-2021/
- Datos de 2022: https://www.ecuadorencifras.gob.ec/camas-y-egresos-hospitalarios-2022/
- Datos de 2023: https://www.ecuadorencifras.gob.ec/camas-y-egresos-hospitalarios-2023/
- Datos de 2024: https://www.datosabiertos.gob.ec/dataset/registro-estadistico-de-egresos-hospitalarios-2024
- Diccionario de variables 2024: https://anda.inec.gob.ec/anda5/index.php/catalog/1151/data-dictionary/F51

## Consideraciones

Los resultados del dashboard tienen un propósito descriptivo. La información permite identificar distribuciones, tendencias y cambios en los egresos hospitalarios, pero no establece relaciones de causalidad.