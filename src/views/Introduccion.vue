<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción

    .bg-introduccion.px-5.py-3.mb-5
      .row.justify-content-center.mt-5    
        .col-md-8
          p.mx-3.text-white Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán aspectos claves sobre la conservación de la biodiversidad y los ecosistemas, para la promotoría ambiental. Este componente busca brindar herramientas que le permitan planear, coordinar y realizar campañas ambientales, según estrategias y normativa vigente. Los ejercicios sociales o de divulgación comprenden características de ejecución, donde se describen los atributos socio-ecológicos del grupo de interés, según los criterios técnicos del componente ambiental que se pretende difundir.
            br
            br
            |Debido a lo anterior, organizar y alistar los recursos necesarios, conforme a las características del grupo de interés o el contexto donde se van a ejecutar, es fundamental para cumplir con el propósito social de un proyecto ambiental.
        .col-md-3
          figure(data-aos="fade-left")
            img(src='@/assets/curso/temas/img1.png', alt='')

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video                
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
