<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    
    p.mt-5.mb-5 Apreciado aprendiz, los seres humanos pudimos evolucionar gracias a la interacción como sociedad, la resolución de problemas y la unión de fuerzas como miembros de una misma comunidad. Se espera que una persona que desarrolle procesos de promotoría ambiental pueda reconocer tanto la comunidad en la que se encuentra, como los problemas que la aquejan, establezca soluciones o espacios de diálogo que permitan establecerlas y proponga alternativas novedosas, basadas en la propia experiencia o en la imaginación, finalmente, que identifique las formas en las que puede llegar a su comunidad y cumplir con éxito las metas propuestas. Aquí, se presentan los tipos de comunidades que pueden encontrarse en la sociedad, sus formas de organización, los actores sociales que pueden ayudar en el desarrollo de este rol como promotor ambiental, algunas metodologías que promueven la participación de la comunidad y una guía para la elaboración de informes ambientales según lo estipulado por el gobierno de Colombia. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
