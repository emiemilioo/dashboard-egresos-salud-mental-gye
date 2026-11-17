# Egresos hospitalarios y salud mental

Este proyecto utiliza información del Registro Estadístico de Egresos Hospitalarios, elaborado y publicado por el Instituto Nacional de Estadística y Censos del Ecuador (INEC). Cada registro representa una hospitalización que terminó con el egreso del paciente y no necesariamente una persona única, ya que un mismo paciente puede haber sido hospitalizado más de una vez.

Para el proyecto se reunieron los datos correspondientes al periodo 2017–2024 y se seleccionaron los egresos relacionados con trastornos mentales y del comportamiento de personas cuya residencia habitual se encuentra en el cantón Guayaquil. Estos diagnósticos se identifican mediante los códigos F00–F99 de la Clasificación Internacional de Enfermedades CIE-10.

El objetivo del proyecto es analizar cómo han cambiado los egresos hospitalarios relacionados con la salud mental durante el periodo estudiado. El dashboard permite consultar y comprender esta información de una forma más sencilla.

## Fuentes de los datos

Los archivos originales fueron obtenidos de las páginas oficiales del INEC:

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

Antes de la conversión, la información de los ocho años fue revisada, filtrada y unificada en un solo CSV. Durante esta preparación se normalizaron las fechas, categorías y nombres de cantones para conservar una estructura común durante todo el periodo.

## Archivos del repositorio

```text
data/
├── egresos_salud_mental_guayaquil_2017_2024.csv
└── egresos_salud_mental_guayaquil_2017_2024.json

scripts/
└── convertir_csv_json.py

README.md
requirements.txt
```

- El archivo CSV contiene los datos consolidados y preparados.
- El archivo JSON contiene la misma información representada como un arreglo de registros.
- El script permite repetir la conversión y comprobar que no se pierdan registros.

## Requisitos

Para ejecutar el script se necesita:

- Python 3.10 o una versión posterior.
- La librería pandas.

La dependencia puede instalarse con el siguiente comando:

```bash
python -m pip install pandas
```

## Conversión de CSV a JSON

Desde la carpeta principal del proyecto se debe ejecutar:

```bash
python scripts/convertir_csv_json.py
```

En Windows, si Python está instalado mediante Anaconda y el comando anterior no se reconoce, también se puede ejecutar con:

```powershell
& "C:\Users\joelj\anaconda3\python.exe" scripts\convertir_csv_json.py
```

El script lee el CSV consolidado, comprueba las variables numéricas y las fechas, convierte los registros a JSON y verifica que ambos archivos contengan la misma cantidad de información. Los valores que no pudieron determinarse se representan como `null`.

## Validación

El CSV consolidado contiene 12.860 registros y, después de la conversión, el archivo JSON mantiene la misma cantidad. Su estructura principal es un arreglo en el que cada objeto representa un egreso hospitalario.

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

Las variables numéricas se conservan como números, las variables categóricas como texto, las fechas utilizan el formato `AAAA-MM-DD` y la variable `fallecimiento` se representa mediante los valores booleanos `true` y `false`.
