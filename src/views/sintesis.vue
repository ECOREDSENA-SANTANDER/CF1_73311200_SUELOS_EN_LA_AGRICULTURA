<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La evaluación física y química del suelo es fundamental para el desarrollo de sistemas agrícolas sostenibles y productivos, ya que permite identificar sus características, potencialidades y limitantes. La integración de propiedades físicas (textura, estructura y retención de humedad) y químicas (pH y fertilidad) influye directamente en la disponibilidad de nutrientes, el desarrollo de los cultivos y la productividad.
    p El uso de técnicas adecuadas de muestreo, análisis e interpretación del suelo, junto con un manejo correcto de fertilizantes y enmiendas, contribuye a mejorar su calidad y prevenir su degradación. El fortalecimiento del diagnóstico y la toma de decisiones permite un uso eficiente del suelo, garantizando la sostenibilidad agrícola.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de “Fundamentos de evaluación física y química del suelo”: integra propiedades físicas y químicas (coloides, CIC y pH), análisis de suelos y su aplicación agrícola para determinar nutrientes y tomar decisiones productivas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
