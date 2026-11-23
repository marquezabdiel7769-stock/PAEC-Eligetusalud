// datos.js — la información de la página

// Propiedades abreviadas: cada variable se convierte en propiedad
const nombre = "Alcohol";
const tipo = "legal";
const categoria = "Legal solo para mayores de 18 años";
const efectos = [
  "Reduce reflejos y juicio: más accidentes",
  "Afecta el cerebro en desarrollo",
  "Daña el hígado y puede causar dependencia"
];

const alcohol = {
  nombre,
  tipo,
  categoria,
  efectos,
  // Método abreviado: sin escribir "describir: function"
  describir() {
    return `${this.nombre}: ${this.categoria}`;
  }
};

// Propiedad compuesta: su nombre se calcula con [ ]
const anio = 2025;
const vapeadores = {
  nombre: "Vapeadores",
  tipo: "prohibida",
  categoria: "Venta prohibida en México",
  efectos: [
    "Contienen nicotina, que es muy adictiva",
    "El aerosol lleva sustancias tóxicas",
    "Pueden causar daño pulmonar"
  ],
  [`prohibidos_desde_${anio}`]: true
};

// Arreglo con todas las sustancias (objetos)
const sustancias = [
  alcohol,
  {
    nombre: "Tabaco",
    tipo: "legal",
    categoria: "Legal solo para mayores de 18 años",
    efectos: [
      "La nicotina es muy adictiva",
      "Causa cáncer y enfermedades del corazón",
      "Reduce la condición física"
    ]
  },
  vapeadores,
  {
    nombre: "Marihuana",
    tipo: "prohibida",
    categoria: "Su venta es ilegal en México",
    efectos: [
      "Afecta memoria, atención y aprendizaje",
      "Puede generar dependencia",
      "Aumenta el riesgo de ansiedad y psicosis en jóvenes"
    ]
  },
  {
    nombre: "Inhalables",
    tipo: "indebido",
    categoria: "Productos de uso doméstico o industrial",
    efectos: [
      "Dañan cerebro, hígado y riñones",
      "Pueden causar muerte súbita, incluso la primera vez",
      "Provocan pérdida de memoria"
    ]
  },
  {
    nombre: "Metanfetamina",
    tipo: "prohibida",
    categoria: "Droga ilegal (\"cristal\")",
    efectos: [
      "Es altamente adictiva",
      "Provoca paranoia y psicosis",
      "Daña el corazón, los dientes y el cerebro"
    ]
  },
  {
    nombre: "Fentanilo",
    tipo: "prohibida",
    categoria: "Medicamento controlado; su uso ilícito está prohibido",
    efectos: [
      "Una cantidad muy pequeña puede causar sobredosis",
      "Puede venir mezclado en otras drogas",
      "Detiene la respiración"
    ]
  },
  // Reto: nueva sustancia (no hubo que cambiar nada en app.js)
  {
    nombre: "Cocaína",
    tipo: "prohibida",
    categoria: "Droga ilegal",
    efectos: [
      "Acelera el corazón y eleva la presión: riesgo de infarto",
      "Es altamente adictiva",
      "Provoca ansiedad, insomnio y paranoia"
    ]
  }
];

// Mitos y realidades
const mitos = [
  { mito: "La marihuana es natural, así que no hace daño.",
    realidad: "Natural no significa inofensivo: afecta la memoria y la atención, sobre todo en adolescentes." },
  { mito: "Vapear es inofensivo, solo es vapor de agua.",
    realidad: "Es un aerosol con nicotina y sustancias tóxicas que dañan los pulmones." },
  { mito: "Un café o un baño frío quitan la borrachera.",
    realidad: "Solo el tiempo elimina el alcohol del cuerpo; el café no lo acelera." },
  { mito: "Probar una sola vez no tiene riesgo.",
    realidad: "Con inhalables o fentanilo, una sola vez puede ser mortal." },
  { mito: "Si quiero, lo dejo cuando sea.",
    realidad: "La dependencia cambia el cerebro; dejarlo suele requerir ayuda profesional." },
  { mito: "Si digo que no, perderé a mis amigos.",
    realidad: "Las amistades reales respetan tus decisiones." }
];

// Autoevaluación: situaciones de riesgo (alerta = requiere atención inmediata)
const preguntas = [
  { texto: "En el último mes alguien me ofreció alcohol, tabaco, vapeador u otra sustancia.", puntos: 1, alerta: false },
  { texto: "Tengo amigos que consumen alguna sustancia con frecuencia.", puntos: 1, alerta: false },
  { texto: "Siento presión de mi grupo para hacer cosas que no quiero.", puntos: 1, alerta: false },
  { texto: "Me cuesta hablar con un adulto de confianza cuando tengo un problema.", puntos: 1, alerta: false },
  { texto: "He faltado a clases o bajado mis calificaciones por salir de fiesta.", puntos: 1, alerta: false },
  { texto: "He usado alguna sustancia para olvidar problemas o calmar el estrés.", puntos: 2, alerta: true }
];

// Consejos de prevención y autocuidado
const consejos = [
  { titulo: "Aprende a decir \"no\"",
    texto: "Con firmeza y sin dar explicaciones. Tienes derecho a decidir sobre tu cuerpo." },
  { titulo: "Elige bien tus amistades",
    texto: "Rodéate de personas que respeten tus decisiones y te impulsen." },
  { titulo: "Habla con alguien de confianza",
    texto: "Familia, docentes u orientación educativa pueden escucharte y apoyarte." },
  { titulo: "Maneja el estrés sanamente",
    texto: "Deporte, música, arte o convivir con otros ayudan más que cualquier sustancia." },
  { titulo: "Infórmate en fuentes confiables",
    texto: "Consulta instituciones de salud, no rumores ni redes sociales." },
  { titulo: "Cuida a los demás",
    texto: "Si alguien está en peligro, no lo dejes solo y llama al 911." }
];

// Reto: fuentes consultadas
const fuentes = [
  "Línea de la Vida — Comisión Nacional de Salud Mental y Adicciones (CONASAMA), Secretaría de Salud: 800 911 2000.",
  "Diario Oficial de la Federación, 17 de enero de 2025: reforma a los artículos 4.º y 5.º constitucionales (prohibición de vapeadores).",
  "Centros de Integración Juvenil (CIJ): información sobre prevención del consumo de drogas.",
  "Organización Mundial de la Salud (OMS): notas descriptivas sobre tabaco, alcohol y consumo de drogas.",
  "Material de la Actividad 28, M.T.I. Félix Tolentino Cruz, CBTis No. 187."
];
