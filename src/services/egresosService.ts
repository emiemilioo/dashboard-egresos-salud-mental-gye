import { get, ref } from 'firebase/database';
import { database } from '../firebase/firebase';
import type { EgresoHospitalario } from '../types/dashboard';

export async function obtenerEgresos(): Promise<EgresoHospitalario[]> {
  const referencia = ref(database, '/');
  const snapshot = await get(referencia);

  if (!snapshot.exists()) {
    return [];
  }

  const datos = snapshot.val();

  // Firebase puede devolver un arreglo o un objeto indexado.
  return Object.values(datos).filter(
    (registro): registro is EgresoHospitalario => registro !== null
  );
}