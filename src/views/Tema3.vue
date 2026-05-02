<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Propiedades químicas del suelo
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/Tema3/img01.png', alt='')
    p Se analizan los componentes químicos del suelo que influyen en la fertilidad, disponibilidad de nutrientes y desarrollo de los cultivos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Coloides del suelo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p Son partículas muy finas (arcillas y materia orgánica) con alta capacidad de retención de nutrientes.
        h5 Sus funciones son:
        p •	Retener cationes (Ca, Mg, K). 
        p •	Regular fertilidad. 
        p •	Mejorar estructura del suelo.
      .col-lg-6
        img(src="@/assets/curso/Tema3/img02.svg")
        
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Capacidad de intercambio catiónico (CIC)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p Es la capacidad del suelo para retener e intercambiar nutrientes cargados positivamente.
        p •	Suelos con alta CIC, cuentan con mayor fertilidad. 
        p •	Suelos con baja CIC, requieren manejo frecuente. 

      .col-lg-6
        img(src="@/assets/curso/Tema3/img03.svg")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text pH del suelo

    p Indica acidez o alcalinidad del suelo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos='fade-right')
          h5 Figura 1. 
          span pH del suelo
        img.w-card-icon(src="@/assets/curso/Tema3/fig1.png", alt="Ilustración del pH del suelo que muestra una planta con sus raíces absorbiendo nutrientes (N, P, K) y una escala de pH de 0 a 14, desde ácido hasta alcalino, destacando el nivel neutro alrededor de 7.")





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
