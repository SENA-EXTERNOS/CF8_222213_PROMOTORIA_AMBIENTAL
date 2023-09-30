export default {
  global: {
    componenteFormativo: 'Promotoría ambiental',
    descripcionCurso:
      'La naturaleza en la que habita una comunidad es, además de su entorno, el beneficio para todos sus miembros y la evolución de la misma. La promotoría ambiental propone, desde los espacios de diálogo y reflexión, el llamado a la planeación y ejecución de proyectos enfocados en la protección del ambiente y el aprovechamiento adecuado de los recursos naturales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comunidades: tipos, formas y características socio-ecológicas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías participativas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Problemáticas ambientales y promotorías ambientales',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
      tema: 'Comunidades: tipos, formas y características socio-ecológicas ',
      referencia:
        'Centro para la Salud y Desarrollo Comunitario de la Universidad de Kansas. (2022). <em>Evaluar las necesidades y recursos de la comunidad.</em>',
      tipo: 'Página Web',
      link:
        'https://ctb.ku.edu/es/tabla-de-contenidos/valoracion/valorar-las-necesidades-y-recursos-comunitarios/descripcion-comunitaria/principal ',
    },
    {
      tema: 'Metodologías participativas ',
      referencia:
        'Departamento de Participación Social y Gestión Integral del Usuario. (2017). <em>Guía de metodologías participativas para facilitadores de grupos.</em> Ministerio de Salud de Chile.',
      tipo: 'Guía',
      link:
        'https://redsalud.ssmso.cl/wp-content/uploads/2019/03/Gu%C3%ADa-de-metodolog%C3%ADas-participativas-para-Facilitadores-de-grupos.pdf',
    },
    {
      tema: 'Metodologías participativas ',
      referencia:
        'Soliz, F. y Maldonado, A. (2012). <em>Guía de metodologías comunitarias participativas.</em> Universidad Andina Simón Bolívar.',
      tipo: 'Guía',
      link:
        'https://repositorio.uasb.edu.ec/bitstream/10644/3997/1/Soliz,%20F-CON008-Guia5.pdf ',
    },
    {
      tema: 'Metodologías participativas',
      referencia: 'Aldeas Infantiles SOS Colombia. (2022). ',
      tipo: 'Página Web',
      link: 'https://www.aldeasinfantiles.org.co/',
    },
    {
      tema: 'Problemáticas ambientales y promotorías ambientales',
      referencia:
        'Organización de las Naciones Unidas. (2022). <em>Informe de los Objetivos del Desarrollo Sostenible.</em> ONU.',
      tipo: 'Informe ',
      link:
        'https://unstats.un.org/sdgs/report/2022/The-Sustainable-Development-Goals-Report-2022_Spanish.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Antecedente',
      significado:
        'situación o circunstancia que se encuentra antes de la cosa a la que se está haciendo referencia.',
    },
    {
      termino: 'Convite',
      significado:
        'en Colombia, es un grupo de personas que se reúne para hacer un trabajo colaborativo de manera voluntaria, para realizar alguna acción que es de interés para la comunidad.     ',
    },
    {
      termino: 'Cultura',
      significado:
        'conjunto de conocimientos, ideas, tradiciones y costumbres que caracterizan a un pueblo, a una clase social, a una época, etc.',
    },
    {
      termino: 'Depuración',
      significado:
        'eliminación de cosas que no son importantes para el proceso que se está realizando.',
    },
    {
      termino: 'Didáctica',
      significado:
        'parte de la pedagogía que estudia las técnicas y métodos de enseñanza.',
    },
    {
      termino: 'Dinamismo',
      significado:
        'cualidad de las cosas, empresas o actividades que tienen actividad, movimiento e innovación y que están en constante transformación o la hacen posible.',
    },
    {
      termino: 'Iniciativa',
      significado: 'capacidad e intención de proponer o comenzar cosas nuevas.',
    },
    {
      termino: 'Recurso',
      significado:
        'material, persona o cosa que sirve para conseguir un fin o satisfacer una necesidad.',
    },
    {
      termino: 'Sociedad',
      significado: 'conjunto de personas relacionadas entre sí.',
    },
    {
      termino: 'Víctima',
      significado:
        'persona o animal, que sufre un daño o perjuicio a causa de una acción o suceso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Consejo Directivo Nacional del SENA. (2016, diciembre 20). Acuerdo N°10 de 2016. "Por medio del cual se adopta la política de atención con Enfoque Pluralista y Diferencial en el SENA". SENA. ',
      link: 'https://normograma.sena.edu.co/docs/acuerdo_sena_0010_2016.htm',
    },
    {
      referencia:
        'Constitución Política de Colombia 1991. De los derechos Ciudadanos ',
      link: 'http://www.secretariasenado.gov.co/constitucion-politica',
    },
    {
      referencia:
        'Departamento de Participación Social y Gestión Integral del Usuario. (2017). <i>Servicio de Salud Metropolitano Sur Oriente. Región Metropolitana</i>. Ministerio de Salud Chile',
      link:
        'https://redsalud.ssmso.cl/wp-content/uploads/2019/03/Gu%C3%ADa-de-metodolog%C3%ADas-participativas-para-Facilitadores-de-grupos.pdf',
    },
    {
      referencia:
        'FAO. Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2022). <i>Organización de las Naciones Unidas para la Alimentación y la Agricultura</i>. Obtenido de Evaluación mundial de la contaminación del suelo. Resumen para los formuladores de políticas. ',
      link: 'https://www.fao.org/3/cb4827es/cb4827es.pdf',
    },
    {
      referencia:
        'Gobierno de Colombia. Unidad para la Atención y Reparación Integral a las Víctimas (2022). Enfoques diferenciales. ',
      link:
        'https://www.unidadvictimas.gov.co/es/atencion-asistencia-y-reparacion-integral/enfoques-diferenciales/473#:~:text=La%20ley%20establece%20que%3A,sexual%20y%20situaci%C3%B3n%20de%20discapacidad',
    },
    {
      referencia:
        'ICBF Instituto Colombiano de Bienestar Familiar. (2021). <i>Guía de Metodologías Participativas.</i>',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g10.mo4_.pp_guia_metodologias_participativas_teb_v2.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente de Colombia. (2022). <i>Red Nacional de Promotores Ambientales Comunitarios.</i>',
      link:
        'https://archivo.minambiente.gov.co/index.php/ordenamiento-ambiental-territorial-y-coordinacion-del-sina/educacion-y-participacion/red-nacional-de-promotores-ambientales-comunitarios',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible Colombia. (2022). <em>Aprobado Acuerdo de Escazú a 63 días de iniciar Gobierno del presidente Petro.</em> ',
      link:
        'https://www.minambiente.gov.co/acuerdo-de-escazu/aprobado-acuerdo-de-escazu-a-63-dias-de-iniciar-gobierno-del-presidente-petro/#:~:text=El%20Acuerdo%20de%20Escaz%C3%BA%20entr%C3%B3,los%20defensores%20del%20medio%20ambiente.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social de Colombia. 1.950 <em>Decreto 2663 de 1950.</em> Código Sustantivo del Trabajo  ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IGUB/Decreto-2663-de-1950.pdf',
    },
    {
      referencia:
        'Naciones Unidas. (2019). <i>Informe de los Objetivos del Desarrollo Sostenible</i>. Lois Jensen. ',
      link:
        'https://unstats.un.org/sdgs/report/2019/The-Sustainable-Development-Goals-Report-2019_Spanish.pdf',
    },
    {
      referencia:
        'Universidad Nacional de Colombia (2017). <i>Taller Internacional de Creación Cartográfica para la Participación, Autogestión y Empoderamiento de los Territorios Locales</i>. Obtenido de ',
      link:
        'https://www.humanas.unal.edu.co/estepa/files/2215/0259/2092/CARTILLA.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
