<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Promotoría ambiental

    p Lo invitamos a observar el siguiente video sobre el ejercicio de la promotoría ambiental, sus definiciones, objetivos y técnicas para la conservación de la biodiversidad y los ecosistemas.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video  

    .row.justify-content-center.mt-5.mb-5
      .col-md-8.mt-5
        .bloque-texto-b.color-bloque-texto-verde
            .bloque-texto-b__texto
              p En este componente formativo se abordaron temas importantes como planeación, coordinación de campañas ambientales, según estrategias de promotoría acordes a la normatividad vigente. Se resalta la importancia de realizar una lectura apropiada del contexto a través del análisis y descripción de los atributos socio- ecológicos del grupo de interés según criterios técnicos, teniendo en cuenta los materiales para alistar los recursos para el programa de promotoría ambiental conforme a características particulares de la comunidad para realizar acciones que impacten al grupo.

        .bloque-texto-b2.color-bloque-texto-amarillo.mt-3
            .bloque-texto-b__texto
              p De esta manera, damos fin al componente e invitamos a los aprendices a leer la información complementaria y a realizar las actividades incluidas para evaluar sus conocimientos.
      .col-md-4.mt-5
        figure(data-aos="fade-left") 
          img(src='@/assets/curso/temas/tema4/img1.png', alt='alt') 

   


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
