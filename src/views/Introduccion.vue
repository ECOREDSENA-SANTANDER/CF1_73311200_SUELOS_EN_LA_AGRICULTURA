<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3
        p La agricultura depende en gran medida de la calidad del suelo, un recurso natural esencial que no solo actúa como soporte para las plantas, sino que también aporta agua y nutrientes, contribuyendo al equilibrio de los sistemas productivos. Sin embargo, el uso intensivo y las prácticas inadecuadas han generado procesos de degradación, lo que hace necesario un manejo más técnico y responsable.
        p.bg01.p-4 El estudio de las propiedades físicas y químicas del suelo, junto con el análisis de variables como textura, estructura, pH y fertilidad, permite comprender su comportamiento y tomar decisiones adecuadas. El análisis de suelos, apoyado en el muestreo, laboratorio e interpretación de resultados, facilita el diseño de estrategias de manejo y el uso racional de fertilizantes y abonos, promoviendo una producción agrícola sostenible y la conservación de los recursos naturales.
      .col-lg-4.col-10.col-md-7
        img(src='@/assets/curso/portada/img01.png', alt='')
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
