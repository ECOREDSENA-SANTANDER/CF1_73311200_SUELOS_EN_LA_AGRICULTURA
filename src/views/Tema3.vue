<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Propiedades químicas del suelo
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/Tema3/img01.png', alt='')
    p Se analizan los componentes químicos del suelo que influyen en la fertilidad, disponibilidad de nutrientes y desarrollo de los cultivos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Coloides del suelo

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-6
        p Son partículas muy finas (arcillas y materia orgánica) con alta capacidad de retención de nutrientes.
        h5 Sus funciones son:
        p •	Retener cationes (Ca, Mg, K). 
        p •	Regular fertilidad. 
        p •	Mejorar estructura del suelo.
      .col-lg-6.col-md-10
        img(src="@/assets/curso/Tema3/img02.svg")
        
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Capacidad de Intercambio Catiónico (CIC)

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-6
        p Es la capacidad del suelo para retener e intercambiar nutrientes cargados positivamente.
        p •	Suelos con alta CIC, cuentan con mayor fertilidad. 
        p •	Suelos con baja CIC, requieren manejo frecuente. 

      .col-lg-6.col-md-10
        img(src="@/assets/curso/Tema3/img03.svg")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text pH del suelo

    p Indica acidez o alcalinidad del suelo.
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos='fade-right')
          h5 Figura 1. 
          span pH del suelo
        img.mb-3(src="@/assets/curso/Tema3/fig1.png", alt="Ilustración del pH del suelo que muestra una planta con sus raíces absorbiendo nutrientes (N, P, K) y una escala de pH de 0 a 14, desde ácido hasta alcalino, destacando el nivel neutro alrededor de 7.")
        .row.justify-content-center.align-items-center.bg004.p-4
          .col-lg-4.mb-3
            h3 a)	Rangos
            p.mb-0 •	Ácido (<6)
            p.mb-0 •	Neutro (6–7)
            p.mb-0 •	Alcalino (>7)
          .col-lg-4
            h3 b)	Efectos
            p.mb-0 •	Influye en disponibilidad de nutrientes. 
            p.mb-0 •	Afecta actividad microbiana. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Fertilidad del suelo

    .bloque-texto-g.bloque-texto-g--inverso.bg09.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fertilidad del suelo es la capacidad que tiene un suelo para suministrar nutrientes esenciales en cantidad, forma y equilibrios adecuados para el crecimiento y desarrollo de las plantas, garantizando buenos rendimientos agrícolas.
          br
          br
          | Un suelo fértil no solo contiene nutrientes, sino que también presenta condiciones físicas y biológicas que permiten su disponibilidad y aprovechamiento por las plantas.

    .titulo-sexto.color-acento-boton(data-aos='fade-right')
      h5 Tabla 7.
      span Clasificación de nutrientes del suelo y su función en las plantas
    .tabla-a.color-primario.mb-5
      table
        thead
          tr
            th.bg10.text-white.text-izq Tipo de nutriente
            th.bg10.text-white.text-izq Nutrientes
            th.bg10.text-white.text-izq Características
            th.bg10.text-white.text-izq Función principal en la planta
        tbody
          tr.bg_gris
            td #[b Macronutrientes]
            td 
              | Nitrógeno (N).
              br
              | Fósforo (P).
              br
              | Potasio (K).
            td Requeridos en grandes cantidades.
            td 
              | - N: crecimiento vegetativo y formación de hojas.
              br
              | - P: desarrollo de raíces y floración.
              br
              | - K: regulación hídrica y resistencia a enfermedades.
          tr
            td #[b Secundarios]
            td 
              | Calcio (Ca).
              br
              | Magnesio (Mg).
              br
              | Azufre (S).
            td Necesarios en cantidades medias.
            td 
              | - Ca: formación de paredes celulares.
              br
              | - Mg: componente de la clorofila.
              br
              | - S: formación de proteínas.
          tr.bg_gris
            td #[b  Micronutrientes]
            td 
              | Hierro (Fe).
              br
              | Zinc (Zn).
              br
              | Cobre (Cu).
              br
              | Manganeso (Mn).
              br
              | Boro (B), entre otros.
            td Requeridos en pequeñas cantidades.
            td Participan en procesos metabólicos, enzimáticos y fisiológicos esenciales.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Factores que afectan
    
    p #[b •	Contenido de nutrientes:] es la cantidad de elementos nutritivos disponibles en el suelo.
    p #[b •	Materia orgánica:] es uno de los componentes más importantes para la fertilidad, un suelo con buen contenido de materia orgánica es más fértil, productivo y sostenible.
    p #[b •	pH adecuado:] el pH del suelo indica su nivel de acidez o alcalinidad y afecta directamente la disponibilidad de nutrientes, la mayoría de los cultivos crecen mejor en un pH entre 5.5 y 7.5. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Relación entre propiedades químicas y nutrientes


    .row.justify-content-center.align-items-center.mb-4.bg004.p-5(data-aos="zoom-in-left")
      .col-lg-4
        p Las propiedades químicas determinan:
        ul.lista-ul--color
          li.d-flex.align-items-start
            i.fas •
            p.mb-0  Disponibilidad.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Movilidad
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Absorción de nutrientes. 
      .col-lg-6.col-md-9 
        img(src='@/assets/curso/Tema3/img05.svg', alt='')






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
