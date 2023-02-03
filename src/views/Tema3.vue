<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Problemáticas ambientales y promotorías ambientales

    p Algunas problemáticas ambientales, como la contaminación, son derivadas de las actividades humanas debido al uso indiscriminado y acceso de los recursos naturales que generan conflictos ambientales:

    .row.justify-content-center.mt-5.mb-5
      .col-md-8
        LineaTiempoD.color-acento-contenido.mt-5
          row(numero="1" titulo="Abundancia de recursos") 
            .row.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p Debido a la abundancia de estos recursos, la relación que se ha establecido entre ellos y las comunidades ha sido de naturaleza derrochadora, es decir, el uso desmedido, desordenado y descontrolado que no considera el hecho de que el recurso es finito y delicado.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema3/img2.png', alt='')

          row(numero="2" titulo="Conciencia ambiental") 
            .row.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p A razón de esto, aunque la mayoría de las comunidades indígenas lo han manifestado, hace apenas algunos años se ha tomado consciencia de que la contaminación y malgasto de los recursos puede traer consecuencias nefastas para todos los seres que habitan el planeta.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema3/img3.png', alt='')         

          row(numero="3" titulo="Equilibrio natural") 
            .row.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p La naturaleza del ambiente es mantenerse en equilibrio y esto se consigue por medio de ciclos naturales; por ejemplo, del agua, del carbono o del nitrógeno. En estos procesos, el agua y la mayoría de los minerales que se encuentran en el suelo son reciclados y reutilizados.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema3/img4.png', alt='')         

          row(numero="4" titulo="Ciclos de la naturaleza") 
            .row.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p El problema con estos ciclos es su delicadeza, pues son muy fácilmente afectados por cambios en la composición del agua o la temperatura. La contaminación y degradación del suelo son evidentes con la reducción de la fertilidad y, por ende, con la reducción del alimento disponible.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema3/img5.png', alt='')          
      .col-md-4.mar-top-linea-tiempo
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='') 

    .row.justify-content-center.mt-5.mb-5
      .col-md-4.mar-top-linea-tiempo
        figure
          img(src='@/assets/curso/temas/tema3/img9.png', alt='')      
      .col-md-8
        LineaTiempoD.color-acento-contenido.mt-5
          row(numero="5" titulo="Contaminación") 
            .row.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p La contaminación del agua se evidencia por la alteración de características fisicoquímicas, como transparencia, turbidez o viscosidad. Además de esto, las interacciones entre el suelo y el agua son intrínsecas, por lo que alteraciones en el ciclo del agua afectan directamente las características del suelo, causando, por ejemplo, sequías o inundaciones. 
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema3/img6.png', alt='')

          row(numero="6" titulo="Gestión de los Recursos naturales") 
            .row.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p A nivel mundial existen múltiples organizaciones que velan por la gestión de los recursos, como UNESCO, Naciones Unidas, la Organización Mundial de la Salud, las cuales promueven iniciativas de protección y cuidado del medio ambiente, por ejemplo, los Objetivos del Desarrollo Sostenible, propuestos en el año 2015 por las Naciones Unidas.  
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema3/img7.png', alt='')         

          row(numero="7" titulo="Desarrollo Sostenible") 
            .row.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p Las organizaciones establecen objetivos relacionados con el cuidado del agua, la generación de energía no contaminante y el llamado a las alianzas para el cumplimiento de los objetivos. Anualmente, emiten informes acerca del cumplimiento de estos. Se invita al aprendiz a conocer el informe del año 2022, relacionado en el material complementario. 
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema3/img8.png', alt='')         

    .row.justify-content-center
      .col-md-10.mt-5
        .cajon.color-primario.segundo-color-cajon-verde.p-3
          .row.justify-content-center.p-3 
            p Hasta este punto de la temática estudiada, se ha visto cómo los problemas ambientales requieren atención especial. Así mismo, los informes son fundamentales a la hora de dar cuenta de los ejercicios de promotoría ambiental. Si bien los informes no tienen un formato específico, aunque se acondicionan a las necesidades de cada contexto o comunidad, deben poseer unas características mínimas que se conocerán a continuación:
        
    h3.mt-5.mb-5  Informes
    p Los informes ambientales son herramientas que permiten consignar la información correspondiente a alguna situación, problemática, iniciativa, o actividad, en este caso de carácter ambiental. Ayudan, entre otras cosas, a llevar un control de las variables que afectan la situación, a identificar avances o retrocesos, a transmitir la información de manera clara y ordenada a diferentes personas o entes que puedan estar interesados en el tema. También permiten actualizar la información y mantener una cadena de observaciones que posibilite identificar oportunidades y dificultades en la aplicación de procesos similares en lugares o tiempos futuros. 
    p Un informe ambiental debe contener:

    ImagenInfografica.color-primario.mt-5
      template(v-slot:imagen)
        .row.justify-content-center
          .col-sm-11 
            figure 
              img(src='@/assets/curso/temas/tema3/img10.png', alt='alt') 

      .tarjeta.color-tarjeta-punto-caliente(x="9%" y="50%" numero="1" )  
        .row.justify-content-center.p-4
          h4 Resumen 
          p Donde fácilmente se identifique el tema que se abordará, los objetivos, la metodología y las conclusiones del tema.

      .tarjeta.color-tarjeta-punto-caliente(x="70%" y="12%" numero="2" )  
        .row.justify-content-center.p-4
          h4 Objetivos
          p Donde se establezca la razón de ser del informe. 

      .tarjeta.color-tarjeta-punto-caliente(x="26%" y="40%" numero="3" )  
        .row.justify-content-center.p-4
          h4 Introducción
          p En la que se explique la situación, problemática o iniciativa y se describa el área influenciada.

      .tarjeta.color-tarjeta-punto-caliente(x="78%" y="80%" numero="4" )  
        .row.justify-content-center.p-4
          h4 Antecedentes
          p Aquí se debe presentar un seguimiento de la situación, problemática o iniciativa, así como algunos datos que permitan contextualizar a la persona que lea el informe. Si se trata de un informe periódico, puede hacerse referencia a informes o progresos previos.

      .tarjeta.color-tarjeta-punto-caliente(x="90%" y="50%" numero="5" )  
        .row.justify-content-center.p-4
          h4 Metodología
          p Donde se explique la forma en la que se recolectaron los datos, se organizaron y analizaron.

      .tarjeta.color-tarjeta-punto-caliente(x="24%" y="83%" numero="6" )  
        .row.justify-content-center.p-4
          h4 Análisis de los datos
          p Este análisis siempre dependerá del tipo de los datos, bien sean cualitativos o cuantitativos. 

      .tarjeta.color-tarjeta-punto-caliente(x="45%" y="75%" numero="7" )  
        .row.justify-content-center.p-4
          h4 Conclusiones y perspectivas futuras
          p Observaciones que pudieron obtenerse en la elaboración del informe y propuestas obtenidas del análisis de los datos.

    .row.justify-content-center.mt-5
      .col-md-11.mt-5
        .cajon.color-acento-contenido.segundo-color-cajon.p-3
          .row.justify-content-center.p-3 
            p En Colombia, la metodología o las actividades que se deben emprender para la construcción de un informe ambiental, acordes con la normatividad vigente, deben practicar una serie de actividades que pasarán a describirse a continuación:


    h3.mt-5.mb-5 Metodología para la elaboración de informes
    p.mb-5 La metodología de elaboración del informe debe contemplar una serie de actividades que serán descritas a continuación:

    SlyderF(columnas="col-sm-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img11.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Conformación del equipo de trabajo y tareas de cada uno. 
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img12.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Elección de los temas que serán tratados en el informe.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img13.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Elaboración del plan de trabajo, donde se estipulan actividades y tiempos de ejecución y entrega.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img14.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Recolección de datos que sean pertinentes.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img15.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Verificación y depuración de los datos.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img16.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Aceptación y análisis de los datos, o solicitud de datos adicionales.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img17.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-5
          p.text-center.mt-5 Elaboración del informe.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img18.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Revisión del informe por parte del equipo de trabajo, ajustes y correcciones. 
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img19.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Atención a ajustes y correcciones y aprobación del informe.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img20.png', alt='').img120
        .tarjeta.he-tarjetas.color-tarjeta-avatar.p-3
          p.text-center.mt-5 Entrega y publicación del informe.

    .row.justify-content-center.mt-5
      .bg-tarjeta-2.px-5.py-2.mb-5       
        .col-md-10.mt-5    
          p.text-white La promotoría ambiental se considera un ejercicio de intervención social y comunitaria, que permite conocer las necesidades de una población, con el fin de participar en las decisiones que le afectan, con respecto a la conservación del entorno natural.
    h3 Promotoría ambiental
    .row.justify-content-center.mb-5
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema3/c1.png', alt='')
      .col-lg-8
        p Las promotorías ambientales, en tanto procesos sistemáticos, se convierten en mecanismos cruciales para la formación y generación de consciencia ambiental en las comunidades y colectivos. Las promotorías potencian las capacidades y posibilidades de los actores sociales, fundamentalmente, líderes comunitarios. De la misma manera, facilitan el desarrollo de proyectos y programas en las comunidades, con los cuales se aporta a la sostenibilidad, tanto ambiental como social.
          br
          br
          |Observe, en el siguiente video sobre el ejercicio de la promotoría ambiental, sus definiciones, objetivos y técnicas, para la conservación de la biodiversidad y los ecosistemas:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4(style="background-color: #e8f4f4")
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
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
