export default {
  global: {
    Name: 'Fundamentos de evaluación física y química del suelo',
    Description:
      'El componente formativo Fundamentos de evaluación física y química del suelo desarrolla conocimientos y habilidades para evaluar las propiedades físicas y químicas del suelo, permitiendo diagnosticar su estado, interpretar análisis y tomar decisiones técnicas para el establecimiento de cultivos bajo criterios de agricultura ecológica, promoviendo prácticas sostenibles, el uso eficiente de recursos, la conservación de la fertilidad y la mejora de la productividad agrícola en distintos contextos, y el bienestar ambiental integral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del suelo en sistemas agrícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Relación suelo planta ambiente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Enfoque de agricultura ecológica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Generalidades del suelo',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Propiedades físicas del suelo y su evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia de las propiedades físicas en los cultivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Evaluación de las propiedades físicas del suelo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de limitantes físicas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Propiedades químicas del suelo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis de suelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Manejo bajo agricultura ecológica',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aplicación práctica en sistemas productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Determinación de requerimientos nutricionales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Formulación de planes de fertilización',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Toma de decisiones productivas',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Abono orgánico',
      significado:
        'Material de origen natural utilizado para mejorar la fertilidad del suelo y aportar nutrientes de forma gradual.',
    },
    {
      termino: 'Análisis de suelo',
      significado:
        'Estudio técnico de las propiedades físicas y químicas del suelo para determinar su estado y fertilidad.',
    },
    {
      termino: 'Capacidad de Intercambio Catiónico (CIC)',
      significado:
        'Capacidad del suelo para retener y liberar nutrientes cargados positivamente.',
    },
    {
      termino: 'Compactación',
      significado:
        'Aumento de la densidad del suelo que reduce la porosidad y dificulta el crecimiento de las raíces.',
    },
    {
      termino: 'Densidad del suelo',
      significado:
        'Relación entre la masa y el volumen del suelo, que influye en la penetración de raíces y el movimiento del agua.',
    },
    {
      termino: 'Estructura del suelo',
      significado:
        'Forma en que se agrupan las partículas del suelo formando agregados.',
    },
    {
      termino: 'Fertilidad del suelo',
      significado:
        'Capacidad del suelo para suministrar los nutrientes necesarios para el crecimiento de las plantas.',
    },
    {
      termino: 'Muestreo de suelo',
      significado:
        'Proceso de recolección de muestras representativas del suelo para su análisis.',
    },
    {
      termino: 'pH del suelo',
      significado:
        'Medida que indica el nivel de acidez o alcalinidad del suelo.',
    },
    {
      termino: 'Permeabilidad',
      significado:
        'Capacidad del suelo para permitir el paso del agua a través de sus poros.',
    },
    {
      termino: 'Porosidad',
      significado:
        'Proporción de espacios vacíos en el suelo que permiten la circulación de aire y agua.',
    },
    {
      termino: 'Retención de humedad',
      significado:
        'Capacidad del suelo para almacenar agua disponible para las plantas.',
    },
    {
      termino: 'Suelo',
      significado:
        'Recurso natural compuesto por minerales, materia orgánica, agua y aire, que sirve de soporte para las plantas.',
    },
    {
      termino: 'Textura del suelo',
      significado: 'Proporción relativa de arena, limo y arcilla en el suelo.',
    },
    {
      termino: 'Enmienda del suelo',
      significado:
        'Sustancia aplicada para mejorar las propiedades físicas o químicas del suelo.',
    },
  ],
  referencias: [
    {
      referencia: 'Agrónomos.org. (2022, mayo). ¿Qué es el pH del suelo?',
      link: '',
    },
    {
      referencia:
        'InfoAgrónomo. (2020, marzo). ¿Qué es la estructura del suelo?',
      link: '',
    },
    {
      referencia: 'Ingeniería Ambiental. (2020, julio). Muestreo de suelos.',
      link: '',
    },
    {
      referencia:
        'Labiser. (2018, abril). Metodología de toma de muestras de suelo.',
      link: '',
    },
    {
      referencia: 'Lifeder. (s.f.). Características del suelo.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s.f.). Propiedades físicas del suelo.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (s.f.). Documento sobre suelos (archivo PDF).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
