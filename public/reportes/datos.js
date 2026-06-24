/* =================================================================
   ✏️ DATOS DEL MES — edita SOLO este archivo cada mes.
   Estructura basada en metodología de reportes de negocio:
   los números que importan son los del bolsillo del cliente.
   Números ILUSTRATIVOS de ejemplo.
   ================================================================= */
window.DATOS = {
  cliente: "Joyce",
  periodo: "Junio 2026",

  // Frase resumen del mes en lenguaje de negocio (no de marketing)
  resumen_ejecutivo: "Junio cerró con una <strong>ganancia neta estimada de $77,760</strong> — el mejor mes del año. Cada peso invertido en Meta regresó $4.20 en ventas.",

  // Nota debajo de los KPIs ejecutivos
  nota_ejecutiva: "Un ROAS de 4.2x con 168 pedidos deja más ganancia que un ROAS de 10x con 40 ventas. El foco es escalar volumen de forma rentable, no optimizar el ROAS como número aislado.",

  // ---- SECCIÓN 2: Resumen ejecutivo ----
  // KPIs principales en orden de lo que importa al cliente
  kpis: {
    facturacion:   { valor: 201600, delta: 15.2  }, // ingresos atribuidos (MXN)
    inversion:     { valor: 48000,  delta: 6.7   }, // inversión en pauta (MXN)
    ganancia_neta: { valor: 77760,  delta: 21.4  }, // ganancia neta estimada (MXN)
    cpa:           { valor: 286,    delta: -4.5  }, // costo por pedido — bajar es bueno
  },

  // Evolución últimos meses (gráfica de líneas)
  evolucion: {
    meses:     ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    ingresos:  [90000, 110000, 130000, 150000, 175000, 201600],
    inversion: [30000, 34000,  38000,  42000,  45000,  48000]
  },

  // Desglose por tipo de campaña (gráfica de dona)
  desglose: {
    labels:   ["Prospección", "Retargeting", "Similares"],
    ingresos: [80000, 90000, 31600]
  },

  // ---- SECCIÓN 3: Plan vs. Realidad ----
  plan: {
    objetivo: "Escalar la inversión un 10% manteniendo el CPA por debajo de $320 MXN y alcanzar 150 pedidos en el mes.",
    resultado: "Se escaló un 6.7% y el CPA se mantuvo en $286 MXN, 10.6% por debajo del límite. Se generaron 168 pedidos — 12% más de lo planeado.",
    logrado: true
  },

  // ---- SECCIÓN 4: Diagnóstico del embudo ----
  // Top of Funnel: frecuencia baja, CPM bajo, gasto alto — buscan gente nueva
  tof: [
    { nombre: "UGC · Testimonio en piel (frío)",   gasto: 18000, frecuencia: 1.3, cpm: 88,  cpa: 420 },
    { nombre: "Carrusel · Catálogo otoño",          gasto: 12000, frecuencia: 1.6, cpm: 94,  cpa: 465 },
    { nombre: "Video · Proceso de fabricación",     gasto: 9000,  frecuencia: 1.1, cpm: 76,  cpa: 510 },
  ],
  tof_interpretacion: "<strong>Lectura:</strong> frecuencia baja (1.1–1.6) y CPM bajo confirman que estos anuncios encuentran audiencia fresca. El CPA más alto es esperado — están haciendo el trabajo duro de prospección que alimenta el retargeting.",

  // Bottom of Funnel: frecuencia alta, CPM alto, CPA bajísimo — convierten carritos
  bof: [
    { nombre: "Video · Retargeting carrito 24h",   gasto: 4200,  frecuencia: 4.8, cpm: 220, cpa: 148 },
    { nombre: "Imagen · Oferta de tiempo limitado", gasto: 2800,  frecuencia: 3.9, cpm: 198, cpa: 175 },
  ],
  bof_interpretacion: "<strong>Lectura:</strong> frecuencia alta (3.9–4.8) y CPM alto confirman que estos anuncios persiguen a gente que ya conoce la marca. El CPA bajo ($148–$175) es resultado directo del esfuerzo de prospección del ToFu — sin él, estos anuncios no funcionarían.",

  // ---- SECCIÓN 5: Insights creativos ----
  creativos: [
    {
      nombre: "UGC · Testimonio en piel (frío)",
      hook_rate: "41%",
      por_que: "El gancho de tocar la tela en los primeros 2 segundos activó la curiosidad táctil. Demuestra el producto sin hablar de precio — conecta con el deseo de calidad de la clienta 40+.",
      roas: 5.1,
      gasto: 18000
    },
    {
      nombre: "Video · Retargeting carrito 24h",
      hook_rate: "58%",
      por_que: "La urgencia implícita combinada con una clienta real usando los zapatos convirtió carritos abandonados en ventas. La alta tasa de retención indica que el mensaje de 'te estamos esperando' resuena con quien ya consideró comprar.",
      roas: 9.4,
      gasto: 4200
    },
    {
      nombre: "Carrusel · Catálogo otoño",
      hook_rate: "33%",
      por_que: "El formato carrusel permitió mostrar 4 estilos distintos, atrayendo diferentes perfiles dentro del mismo público objetivo. Buena herramienta de descubrimiento aunque con menor conversión que el UGC.",
      roas: 3.8,
      gasto: 12000
    }
  ],

  // ---- SECCIÓN 6: Próximos pasos ----
  // tipo: "Presupuesto" | "Contenido" | "Prueba"
  proximos: [
    {
      tipo: "Presupuesto",
      accion: "Escalar la inversión un 15% en los próximos 3 días, priorizando el UGC de testimonio en piel.",
      plazo: "3 días",
      por_que: "El CPA ($286) está 10.6% por debajo del CAC máximo ($320). Hay margen para escalar sin sacrificar rentabilidad."
    },
    {
      tipo: "Contenido",
      accion: "Grabar 3 videos nuevos para tráfico frío: los anuncios de prospección superaron 1.5 de frecuencia promedio.",
      plazo: "7 días",
      por_que: "La fatiga creativa en ToFu es inminente. Sin material nuevo, el CPM subirá, el CPA se deteriorará y las ventas del mes siguiente bajarán."
    },
    {
      tipo: "Prueba",
      accion: "Lanzar prueba A/B: mensaje enfocado en 'eliminar la fatiga de decidir qué usar' vs. mensaje de calidad de la piel.",
      plazo: "Esta semana",
      por_que: "Los datos del mes sugieren que resolver la fricción de decisión puede resonar más que el mensaje de calidad — vale medirlo con datos reales."
    }
  ]
};
