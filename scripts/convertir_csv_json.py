import json
from pathlib import Path

import pandas as pd


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data" / "processed"
CSV_PATH = DATA_DIR / "egresos_salud_mental_guayaquil_2017_2024.csv"
JSON_PATH = DATA_DIR / "egresos_salud_mental_guayaquil_2017_2024.json"
VALIDATION_PATH = DATA_DIR / "resumen_validacion.json"


def main():
    datos = pd.read_csv(CSV_PATH, encoding="utf-8-sig")

    # Se comprueban los tipos que necesita el dashboard.
    numericas = ["anio_egreso", "edad_original", "edad_anios", "dias_estancia"]
    for columna in numericas:
        datos[columna] = pd.to_numeric(datos[columna], errors="raise")

    for columna in ["fecha_ingreso", "fecha_egreso"]:
        pd.to_datetime(datos[columna], format="%Y-%m-%d", errors="raise")

    datos["fallecimiento"] = datos["fallecimiento"].map(
        {True: True, False: False, "True": True, "False": False}
    )

    # to_json transforma los NaN de pandas en null y conserva números y booleanos.
    registros = json.loads(datos.to_json(orient="records", force_ascii=False))
    with JSON_PATH.open("w", encoding="utf-8") as archivo:
        json.dump(registros, archivo, ensure_ascii=False, indent=2)

    # Se abre nuevamente el JSON para comprobar que se generó correctamente.
    with JSON_PATH.open("r", encoding="utf-8") as archivo:
        json_validado = json.load(archivo)

    if len(datos) != len(json_validado):
        raise ValueError("El CSV y el JSON no tienen la misma cantidad de registros.")

    validacion = {
        "estado": "correcto",
        "registros_csv": len(datos),
        "registros_json": len(json_validado),
        "cantidades_coinciden": len(datos) == len(json_validado),
        "valores_nulos_por_variable": {
            columna: int(cantidad)
            for columna, cantidad in datos.isna().sum().items()
        },
    }
    with VALIDATION_PATH.open("w", encoding="utf-8") as archivo:
        json.dump(validacion, archivo, ensure_ascii=False, indent=2)

    print("Conversión terminada correctamente.")
    print(f"Registros del CSV: {len(datos)}")
    print(f"Registros del JSON: {len(json_validado)}")
    print(f"Archivo generado: {JSON_PATH}")


if __name__ == "__main__":
    main()
