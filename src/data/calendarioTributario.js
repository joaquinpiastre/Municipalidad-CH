const currentYear = new Date().getFullYear()

export const tiposTributo = [
  { id: 'patentes', name: 'Patentes', description: 'Impuesto sobre actividades económicas' },
  { id: 'servicio-retributivo', name: 'Servicio retributivo', description: 'Servicios municipales retributivos' },
  { id: 'tasa-comercio', name: 'Tasa de comercio', description: 'Tasa por habilitación y ejercicio comercial' },
]

export const vencimientos = [
  { tipo: 'patentes', mes: 1, dia: 16, descripcion: 'Patentes - 1er vencimiento' },
  { tipo: 'patentes', mes: 2, dia: 16, descripcion: 'Patentes - 2do vencimiento' },
  { tipo: 'patentes', mes: 3, dia: 16, descripcion: 'Patentes - 3er vencimiento' },
  { tipo: 'patentes', mes: 4, dia: 16, descripcion: 'Patentes - 4to vencimiento' },
  { tipo: 'patentes', mes: 5, dia: 16, descripcion: 'Patentes - 5to vencimiento' },
  { tipo: 'patentes', mes: 6, dia: 16, descripcion: 'Patentes - 6to vencimiento' },
  { tipo: 'patentes', mes: 7, dia: 16, descripcion: 'Patentes - 7mo vencimiento' },
  { tipo: 'patentes', mes: 8, dia: 16, descripcion: 'Patentes - 8vo vencimiento' },
  { tipo: 'patentes', mes: 9, dia: 16, descripcion: 'Patentes - 9no vencimiento' },
  { tipo: 'patentes', mes: 10, dia: 16, descripcion: 'Patentes - 10mo vencimiento' },
  { tipo: 'patentes', mes: 11, dia: 16, descripcion: 'Patentes - 11er vencimiento' },
  { tipo: 'patentes', mes: 12, dia: 16, descripcion: 'Patentes - 12do vencimiento' },
  { tipo: 'servicio-retributivo', mes: 1, dia: 10, descripcion: 'Servicio retributivo - Enero' },
  { tipo: 'servicio-retributivo', mes: 2, dia: 10, descripcion: 'Servicio retributivo - Febrero' },
  { tipo: 'servicio-retributivo', mes: 3, dia: 10, descripcion: 'Servicio retributivo - Marzo' },
  { tipo: 'servicio-retributivo', mes: 4, dia: 10, descripcion: 'Servicio retributivo - Abril' },
  { tipo: 'servicio-retributivo', mes: 5, dia: 10, descripcion: 'Servicio retributivo - Mayo' },
  { tipo: 'servicio-retributivo', mes: 6, dia: 10, descripcion: 'Servicio retributivo - Junio' },
  { tipo: 'servicio-retributivo', mes: 7, dia: 10, descripcion: 'Servicio retributivo - Julio' },
  { tipo: 'servicio-retributivo', mes: 8, dia: 10, descripcion: 'Servicio retributivo - Agosto' },
  { tipo: 'servicio-retributivo', mes: 9, dia: 10, descripcion: 'Servicio retributivo - Septiembre' },
  { tipo: 'servicio-retributivo', mes: 10, dia: 10, descripcion: 'Servicio retributivo - Octubre' },
  { tipo: 'servicio-retributivo', mes: 11, dia: 10, descripcion: 'Servicio retributivo - Noviembre' },
  { tipo: 'servicio-retributivo', mes: 12, dia: 10, descripcion: 'Servicio retributivo - Diciembre' },
  { tipo: 'tasa-comercio', mes: 1, dia: 20, descripcion: 'Tasa de comercio - 1er vencimiento' },
  { tipo: 'tasa-comercio', mes: 2, dia: 20, descripcion: 'Tasa de comercio - 2do vencimiento' },
  { tipo: 'tasa-comercio', mes: 3, dia: 20, descripcion: 'Tasa de comercio - 3er vencimiento' },
  { tipo: 'tasa-comercio', mes: 4, dia: 20, descripcion: 'Tasa de comercio - 4to vencimiento' },
  { tipo: 'tasa-comercio', mes: 5, dia: 20, descripcion: 'Tasa de comercio - 5to vencimiento' },
  { tipo: 'tasa-comercio', mes: 6, dia: 20, descripcion: 'Tasa de comercio - 6to vencimiento' },
  { tipo: 'tasa-comercio', mes: 7, dia: 20, descripcion: 'Tasa de comercio - 7mo vencimiento' },
  { tipo: 'tasa-comercio', mes: 8, dia: 20, descripcion: 'Tasa de comercio - 8vo vencimiento' },
  { tipo: 'tasa-comercio', mes: 9, dia: 20, descripcion: 'Tasa de comercio - 9no vencimiento' },
  { tipo: 'tasa-comercio', mes: 10, dia: 20, descripcion: 'Tasa de comercio - 10mo vencimiento' },
  { tipo: 'tasa-comercio', mes: 11, dia: 20, descripcion: 'Tasa de comercio - 11er vencimiento' },
  { tipo: 'tasa-comercio', mes: 12, dia: 20, descripcion: 'Tasa de comercio - 12do vencimiento' },
]

export const yearCalendario = currentYear
