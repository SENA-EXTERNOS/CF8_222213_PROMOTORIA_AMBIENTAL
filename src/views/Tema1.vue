<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comunidades: tipos, formas y características socio-ecológicas

    p Suele asociarse el término comunidad a un grupo de personas que están reunidas en un territorio o lugar físico, pero una definición más apropiada sería la agrupación de individuos que tienen algo en común, un idioma, una ideología, un territorio o un objetivo, el cual puede ser desde un interés social, político o cultural, hasta un #[i hobbie] o característica física. Estos aspectos en común generan culturas, costumbres e identidades que diferencian a cada comunidad de las demás y hace que los individuos sean partícipes de ella.      
      
    .row.justify-content-center.mt-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            p Las comunidades requieren de líderes y actores que representen un objetivo colectivo y den significado al aspecto en común, fomentando la motivación de los demás individuos y de alguna u otra forma el crecimiento. 
            p Estas se nutren de los miembros que pertenecen a ella, de su dinamismo y de su compromiso. 

    .row.justify-content-center.mb-5
      .col-md-11.mt-5
        .cajon.color-acento-contenido.segundo-color-cajon.p-3
          .row.justify-content-center.p-3 
            p Existen diferentes tipos de comunidades, formas de organización y actores de interés. A continuación, veremos cómo se organizan y cómo es su correlación dentro de sus organizaciones, características, grupos de interés y roles de los actores a intervenir, abordados en el caso de promotoría ambiental:

    h3 Tipos y formas de organización en comunidades  

    p.mb-5 El tipo de comunidad se define por el objetivo colectivo que persiguen y, por tanto, es posible encontrar muchos tipos de comunidades, algunos ejemplos pueden ser:

    .bg-slider.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01").mt-5
              h4.ps-4 Formación de comunidades
              p.ps-4.mb-0 La formación de comunidades es una característica natural de todos los seres vivos que habitan el planeta, ningún individuo llega a estar completamente solo ni a suplir sus necesidades sin la ayuda de algún otro miembro. Por esto, además de la formación de la comunidad, la organización de esta juega un papel fundamental en el funcionamiento de sus dinámicas.
          .col-6.col-lg-5.mt-5
            figure
              img(src='@/assets/curso/temas/tema1/img2.png')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")
              h4.ps-4 Comunidad educativa
              p.ps-4.mb-0 Conjunto de personas cuyo objetivo es educar y ser educados a través de la transferencia constante de conocimiento.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img3.png')  
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")
              h4.ps-4 Comunidad científica
              p.ps-4.mb-0 Agrupación de personas e instituciones que se enfocan en la investigación, educación o desarrollo de temas de interés social, ambiental, económico o de salud.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img4.png')   

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="04")
              h4.ps-4 Comunidad biológica
              p.ps-4.mb-0 Conjunto de seres vivos que habitan un territorio y que se vinculan entre sí por relaciones alimentarias o reproductivas.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img5.png') 

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="05")
              h4.ps-4 Comunidad rural
              p.ps-4.mb-0 Agrupación de personas que habitan en el campo y, generalmente, sacan algún provecho de él. 
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img6.png')   

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-7.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="06")
              h4.ps-4 Organización de la comunidad
              p.ps-4.mb-0 La organización de la comunidad permite la identificación de objetivos o necesidades y facilita la delegación de tareas y el cumplimiento de los objetivos. Su forma de organización varía según el tipo, el objetivo y el tamaño de la comunidad. En las más pequeñas, existen grupos, convites y comités y, en las más grandes, hay organizaciones, juntas directivas, clubes, centros de ayuda, entre otros.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img7.png') 

    .row.justify-content-center.mb-5
      .col-md-11.mt-5
        .cajon.color-acento-contenido.segundo-color-cajon.p-3
          .row.justify-content-center.p-3 
            p Los actores sociales son individuos o grupos de individuos que se encuentran dentro de la comunidad y promueven iniciativas enfocadas en el cambio o la transformación. Estas iniciativas, generalmente, benefician a la comunidad o a una parte de ella. La naturaleza de los actores sociales es el llamado a la acción y al movimiento generalizado de la comunidad con el objetivo de cambiar algo que la afecta de una forma. 

    h3.mb-4 Actores sociales y grupos de interés
    p.mb-5(data-aos='fade-right') Se entiende por actores sociales, a todos aquellos individuos que tienen injerencia en los asuntos comunes y que son reconocidos como tales. Por su parte, los grupos de interés son aquellas conformaciones formales o informales de un conglomerado de individuos, quienes comparten un interés común y, en el cual, los individuos tienen oportunidad de aportar o de beneficiarse.
      br
      br
      |Las características de los actores sociales suelen ser:

    ImagenInfografica.color-primario
      template(v-slot:imagen)
        .row.justify-content-center
          .col-sm-11 
            figure 
              img(src='@/assets/curso/temas/tema1/img8.png', alt='alt') 

      .tarjeta.color-tarjeta-punto-caliente(x="18%" y="20%" numero="+" )  
        .row.justify-content-center.p-4
          p Promueven el cambio sobre situaciones que, históricamente, han resultado desfavorables para la comunidad o algunos miembros de ella.

      .tarjeta.color-tarjeta-punto-caliente(x="50%" y="20%" numero="+" )  
        .row.justify-content-center.p-4
          p Son la comunidad o hacen parte de ella. 

      .tarjeta.color-tarjeta-punto-caliente(x="82%" y="20%" numero="+" )  
        .row.justify-content-center.p-4
          p El motivo reúne y moviliza a la comunidad y provoca la existencia del actor social. 

      .tarjeta.color-tarjeta-punto-caliente(x="33%" y="51%" numero="+" )  
        .row.justify-content-center.p-4
          p El actor social debe contar con un proyecto que enfoque toda la motivación y delimite el camino a seguir.  

      .tarjeta.color-tarjeta-punto-caliente(x="66%" y="51%" numero="+" )  
        .row.justify-content-center.p-4
          p Generalmente, pueden controlar algún recurso económico, social o político, que les ayuda a ser visibles y fomenta su actuar.                           

    .row.justify-content-center.mt-5
      .col-md-11.mt-5
        .cajon.color-primario.segundo-color-cajon-verde.p-3
          .row.justify-content-center.p-3 
            p A continuación, se encuentran descritos los roles, así como las relaciones de los grupos poblacionales en entornos comunitarios, entre sectores de una sociedad, durante el ejercicio de la promotoría ambiental:

    h3.mt-5 Representación de las relaciones entre sectores de una sociedad
    p.mt-5.mb-5 En esta sección se presentan las relaciones que se establecen entre los diferentes sectores de la sociedad, se identifican los roles del sector gubernamental representado por el Estado y responsable del poder político; el sector privado actor que representa en gran parte el poder económico; y el sector social representante del poder de asociación, cooperación y solidaridad. Estas tres figuras no deben actuar como entes aislados, sino que deben promover la acción conjunta y participativa. Los actores sociales pueden encontrarse en cualquiera de las esferas, como se verá más adelante en algunos ejemplos.         
    .titulo-sexto.color-primario(data-aos='fade-right')
      h5 Figura 1
      br
      span.fst-italic Representación de las relaciones entre sectores de una sociedad
    .row.justify-content-center.mb-5
      .col-md-12
        figure 
          img(src='@/assets/curso/temas/tema1/img9.png', alt='alt') 
      .col-md-10
        a.anexo.color-anexo.mb-4.mb-lg-0.mt-5(href="https://ccong.org.co/files/766_at_LAS%20ONG%20COLOMBIANAS%20-%20Julian%20Salas.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/tema1/img10.png")
          .anexo__texto
            p #[span.text-bold Nota: tomado de Salas, J. (2017)]

    .row.justify-content-center.mt-5
      .col-md-4.mt-5
        figure 
          img(src='@/assets/curso/temas/tema1/img11.png', alt='alt') 
      .col-md-8.mt-5
        .bg-tarjeta.h-bg-tarjeta.px-5.py-2.mb-5 
          .row.justify-content-center.mt-5
            p.text-white En Colombia, la organización comunitaria se encuentra representada por diversos actores sociales que se encuentran organizados en colectivos. La forma prototípica de organización es la comunal, considerada una instancia de participación a través de la cual las comunidades deciden organizarse para liderar e impulsar procesos comunitarios en barrios y veredas, materializándose a través de espacios participativos, para mejorar el quehacer en la vida de las comunidades y los individuos que las integran.               
        .row.justify-content-center.mt-5          
          .col-md-10
            p A continuación, se presentarán algunos ejemplos de actores sociales, algunos de los representantes de mayor interés en Colombia y la normativa que, en muchos de los casos, rige su existencia:
    .bg-slider.px-5.py-3.mb-5.mt-5
      LineaTiempoC.color-acento-contenido(texto-pequeño)
        .row(titulo="Organizaciones colombianas no gubernamentales")
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-5 Se refiere a organizaciones que no hacen parte de ningún gobierno y, por ende, no reciben financiación directa. Los miembros son, en su mayoría, personas del común que comparten algún objetivo económico, social, político o medioambiental. Las ONG pueden pertenecer y representar a un país o a varios de ellos. 
          .col-md-6
            figura
              img(src='@/assets/curso/temas/tema1/img12.png', alt='')
        .row(titulo="Organizaciones no gubernamentales ONG")
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-5 En Colombia no existe jurídicamente la figura de ONG, por lo que este tipo de organizaciones suelen conocerse como ESAL “Entidades Sin Ánimo de Lucro”, pero tienen, en síntesis, los mismos roles. Ejemplos de este tipo de organización en Colombia son: Aldeas Infantiles, SOS Colombia, Alianza Educativa. Se invita al aprendiz a visitar los sitios web de estas organizaciones, disponibles en la web.
          .col-md-6
            figura
              img(src='@/assets/curso/temas/tema1/img13.png', alt='')
        .row(titulo="Actores sociales")
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-5 Este tipo de actor social, mucho más pequeño que las ONG, es un tipo de organización que representa a los miembros de un mismo territorio, generalmente, un barrio. Su interés principal es el de velar por el bien común de todos los miembros del barrio, así como la sana convivencia y la promoción de iniciativas locales (por ejemplo, la limpieza de un sector o la adecuación de un salón social). 
          .col-md-6
            figura
              img(src='@/assets/curso/temas/tema1/img14.png', alt='')         
        .row(titulo="Expresión de opiniones")
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-5 Los partidos políticos son actores sociales que pretenden establecer un vínculo entre la sociedad y el Estado, a través de la expresión de opiniones e intereses y la gestión de solicitudes ciudadanas. En Colombia, la Ley 130 de 1994 establece, entre otras, las disposiciones sobre la existencia de los partidos políticos y las normas de financiación del partido y las campañas electorales. Según la Registraduría Nacional, hay en Colombia 13 partidos políticos activos que pueden participar en las elecciones. 
          .col-md-6
            figura
              img(src='@/assets/curso/temas/tema1/img15.png', alt='')                      

        .row(titulo="Organizaciones constituidas")
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-5 Los sindicatos son organizaciones constituidas por trabajadores de manera que pueden existir sindicatos de taxistas, de educadores, de empresarios, entre otros; identificando las características de la profesión, en cuanto a honorarios, riesgos y oportunidades, con el fin de representar a la comunidad frente a autoridades u otros organismos de interés, promover las iniciativas de comunidad como las cooperativas, promover procesos educativos de interés de la comunidad, servir de intermediarios para la adquisición de productos o servicios y velar por los derechos de los trabajadores. 
          .col-md-6
            figura
              img(src='@/assets/curso/temas/tema1/img16.png', alt='')   

        .row(titulo="Sindicalismo colombiano")
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-5 En Colombia, la existencia y pertenencia a los sindicatos está estipulada como derecho en el Artículo 39 de la Constitución Política de Colombia (1991) y en el      Código Sustantivo del Trabajo  . Ejemplos de sindicatos en Colombia son: la Central Unitaria de Trabajadores CUT, Unión Nacional de Trabajadores del Estado y los Servicios Públicos de Colombia UTRADEC y Confederación de Trabajadores de Colombia CTC. Se invita al aprendiz a visitar los sitios web de estas organizaciones disponibles en el material complementario.
          .col-md-6
            figura
              img(src='@/assets/curso/temas/tema1/img17.png', alt='')  

        .row(titulo="Organismos internacionales")
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-5 A nivel internacional, es posible encontrar otros tipos de actores sociales como la Organización de las Naciones Unidas (ONU), la Organización Mundial de la Salud (OMS) o la Organización Mundial del Comercio (OMC). Estas organizaciones, generalmente, incluyen varios países que apoyan su financiación y pretenden generar espacios de discusión y comunicación entre los miembros para promover iniciativas y buscar soluciones de manera conjunta. 
          .col-md-6
            figura
              img(src='@/assets/curso/temas/tema1/img18.png', alt='')   
        
            

    .row.justify-content-center.mt-5
      .col-md-8.mt-5
        .bloque-texto-b.color-bloque-texto-verde
            .bloque-texto-b__texto
              p La razón de ser de las organizaciones sociales y las comunidades es la de contar con la mayor cantidad de miembros posibles; pues, como se mencionó un poco más arriba, la comunidad se nutre de sus miembros, de su dinamismo y compromiso. De acuerdo con lo anterior, ahora se abordarán dos conceptos que son primordiales para el desarrollo de las labores de una comunidad y de una organización: #[span.text-bold el enfoque pluralista y el diferencial.]

        .bloque-texto-b1.color-bloque-texto-amarillo.mt-5
            .bloque-texto-b__texto
              p Una característica crucial del trabajo en comunidad es la promoción de un enfoque pluralista y diferencial dentro de sus políticas, como se aprecia a continuación. Estos términos se refieren a la visión de una comunidad que permita el acceso de todo tipo de individuo a los beneficios que pueda ofrecer la comunidad, sin ejercer ningún tipo de discriminación o exclusión y teniendo en cuenta sus diferencias e igualdades, claramente, si este individuo decide hacer parte de ella y tiene al menos un aspecto en común que le permita ser participe.
               
      .col-md-4.mt-5
        figure 
          img(src='@/assets/curso/temas/tema1/img19.png', alt='alt') 


    h3.mb-5 Enfoque pluralista y diferencial  

    p.mb-5 El concepto de enfoque diferencial y pluralista, así como algunos otros conceptos y principios, las características y el marco normativo (derecho internacional, constitución colombiana, leyes y decretos), se encuentran descritos en el siguiente apartado:

    TabsC.color-primario.mb-5.bg2
      .py-3.py-md-4.bg-tabc(titulo="Enfoque diferencial")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img20.png', alt='').img400.m-auto
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0.mt-5
            p Puntualmente, el enfoque diferencial se refiere a la adopción de posturas que analizan el contexto desde las diferencias, es decir, desde las necesidades puntuales que puede tener algún miembro de la comunidad debido a los aspectos que le hacen diferente; por ejemplo, el sexo, la raza, el grupo étnico o alguna discapacidad. Todo esto se encuentra regulado por el Artículo 13 de la Ley 1448 de 2011, Ley de Víctimas (Gobierno de Colombia. Unidad para la Atención y Reparación Integral a las Víctimas, 2022).

      .py-3.py-md-4.bg-tabc(titulo="Enfoque pluralista")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img21.png', alt='').img400.m-auto
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0.mt-5
            p Por otro lado, el enfoque pluralista se enfoca en la inclusión de los diversos grupos sociales tomando las diferencias como una oportunidad de enriquecimiento, procurando dar voz a cada miembro tanto como sea posible. Este enfoque está contemplado desde el Artículo 1 de la Constitución Política de Colombia: “Colombia es un Estado social de derecho, organizado en forma de República unitaria, descentralizada, con autonomía de sus entidades territoriales, democrática, participativa y pluralista, fundada en el respeto de la dignidad humana, en el trabajo y la solidaridad de las personas que la integran y en la prevalencia del interés general” (Congreso de la República de Colombia, 1991).   
      
      .py-3.py-md-4.bg-tabc(titulo="Enfoque SENA")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img22.png', alt='').img400.m-auto
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0.mt-5
            p En el año 2016, el SENA firmó el Acuerdo 0010, “por medio del cual se adopta la política de Atención con enfoque pluralista y Diferencial en el SENA”. Este documento promueve, de manera progresiva y sostenible, el acceso y uso, en igualdad de oportunidades, a los servicios de la Entidad, permitiendo la inclusión de toda la población desde sus diferencias e igualdades (Consejo Directivo Nacional del SENA, 2016). Es muy importante que tanto la comunidad y su filosofía como los actores se encuentren comprometidos con este enfoque. 

    .row.justify-content-center.mb-5
      .col-md-10.mt-5
        .cajon.color-acento-contenido.segundo-color-cajon.p-3
          .row.justify-content-center.p-3 
            p Un sistema ecológico o ecosistema, es un método conformado por organismos vivos que pertenecen a varias especies, los cuales interaccionan entre sí y se organizan en un determinado ambiente; se le conoce como características socio-ecológicas, cuando confluyen en un territorio en donde los seres humanos y sus formas de relacionarse con el medio, determinan este relacionamiento, tal y como se describe a continuación:


    h3 Características socio-ecológicas

    p Cuando se describen las características socio-ecológicas en un espacio determinado, donde existen interacciones sociales, se enmarcan actividades económicas de las cuales sus habitantes derivan el sustento, formas y usos tradicionales del suelo, biodiversidad y, por supuesto, valores culturales.
      br
      br
      |Los rasgos socio-ecológicos permiten identificar a los seres humanos, desde sus procesos de organización entre sí y, también, desde sus relaciones con su entorno:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
      .row(titulo="Recursos accesibles").px-5.py-2
        .row
          .col-md-7.mt-4  
            p.text-justify Las actividades económicas de la comunidad suelen estar muy relacionadas con el uso de los recursos más accesibles. En este orden de ideas, la actividad económica de una comunidad cercana a un río suele estar relacionada con la pesca o los productos del río y las actividades económicas de una comunidad ubicada en el cruce de caminos entre varias ciudades suelen estar relacionadas con el comercio de productos y servicios, como hoteles, centros comerciales y restaurantes.           
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img23.png', alt='')
      div(titulo="Ubicación geográfica").px-5.py-3
        .row
          .col-md-7.mt-4  
            p.text-justify De manera consecuente, la ubicación geográfica y la naturaleza de la comunidad condicionan su actividad económica y, por esta misma línea, el desarrollo social de la comunidad. Las características socio-ecológicas como las relaciones que establecen los miembros de la comunidad con el entorno físico al cual están involucrados sus conocimientos y las formas como han habitado el territorio. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img24.png', alt='')      
      div(titulo="Acceso a los recursos naturales ").px-5.py-3
        .row
          .col-md-7.mt-4  
            p.text-justify A lo largo de la historia, el ser humano ha aprendido a aprovechar el recurso, a ubicarlo donde lo necesita y a sacar el mayor provecho de él; como ejemplos de lo anterior se encuentran la construcción de acueductos para el transporte y acumulación de agua, el arado de las tierras y los procesos de fertilización, abono y fumigado de tierras y cultivos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img25.png', alt='')

      div(titulo="Condiciones para el uso del recurso").px-5.py-3
        .row
          .col-md-7.mt-4  
            p.text-justify Los valores culturales de la comunidad condicionan el uso del recurso. Algunas comunidades basan su progreso en el cuidado y respeto por el recurso y sus características, mientras que otras lo basan en la explotación y destrucción.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img26.png', alt='')  

      div(titulo="Protección y conservación del recurso").px-5.py-3
        .row
          .col-md-7.mt-4  
            p.text-justify Existen múltiples organizaciones, entes de control e iniciativas sociales que procuran velar por el adecuado uso de los recursos. Estas figuras, por medio de la comunicación, deben lograr llegar a la comunidad para promover iniciativas y generar conciencia del trabajo comunitario, relaciones socio-ecológicas, protección y conservación del recurso.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img27.png', alt='')     

    .row.justify-content-center.mt-5
      .col-md-10.mt-5
        .cajon.color-secundario.segundo-color-cajon-cafe.p-3
          .row.justify-content-center.p-3 
            p Una vez abordado el entorno socio-ecológico y realizada una lectura del territorio desde el ejercicio de la promotoría ambiental, pasaremos a ver cómo las metodologías participativas para la dinamización de ejercicios con participación comunitaria son herramientas que tienen un enfoque lúdico-pedagógico que animan y fomentan en las personas la apropiación de un tema en particular, propiciando espacios donde los convocados puedan contribuir a la dinámica propuesta desde sus experiencias.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
