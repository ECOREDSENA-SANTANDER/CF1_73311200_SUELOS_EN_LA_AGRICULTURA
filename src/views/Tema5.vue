<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Aplicación práctica en sistemas productivos
    
    .row.justify-content-center.align-items-center.mb-4.bg04(data-aos="zoom-in-left")
      .col-lg-5.d-none.d-lg-block
        img.izq(src='@/assets/curso/Tema5/img01.png', alt='')
      .col-lg-7.p-4
        .row
          .col-lg-2.mb-3.col-4.col-md-2
            img(src='@/assets/curso/Tema5/img02.svg', alt='')
          .col-lg-12
            p La aplicación práctica en sistemas productivos integra los conocimientos teóricos con su uso en condiciones reales de campo, fortaleciendo la capacidad para diagnosticar, planificar y ejecutar prácticas relacionadas con el manejo del suelo y la fertilización. A partir del análisis de suelos y la observación del cultivo, se favorece la toma de decisiones fundamentadas que contribuyen a mejorar la productividad y la calidad de los sistemas agrícolas. 

    .row.justify-content-center.align-items-center.mb-2.bg05.p-5(data-aos="zoom-in-left")
      .col-lg-6
        h3 Actividades clave:
        ul.lista-ul--color
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            p.mb-0 Interpretación de análisis de suelo.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            p.mb-0 Identificación de limitantes (acidez, baja fertilidad, compactación).
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            p.mb-0 Selección de prácticas de manejo.
          li.d-flex.align-items-start
            i.fas.fa-angle-right2
            p.mb-0 Evaluación de resultados en campo.
      .col-lg-5.col-md-9 
        img(src='@/assets/curso/Tema5/img03.svg', alt='')
      
    separador
    #t_5_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 5.1	Determinación de requerimientos nutricionales

    p Este proceso permite identificar las necesidades de nutrientes según el cultivo, su etapa de desarrollo y las condiciones del suelo. Se basa en análisis de laboratorio y criterios técnicos para ajustar la fertilización de manera precisa.
    .row.justify-content-center.align-items-center.mb-3.bg06.p-5(data-aos="zoom-in-left")
      .col-lg-6
        h3 Factores que influyen
        ul.lista-ul--color
          li.d-flex.align-items-start
            i.fas •
            p.mb-0  Tipo de cultivo y variedad.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Etapa fenológica (crecimiento, floración, fructificación).
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Condiciones del suelo (fertilidad, pH).
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Clima y disponibilidad de agua.
      .col-lg-5 
        img(src='@/assets/curso/Tema5/img04.svg', alt='')

    h3 Ejemplos:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg09.text-white.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/Tema5/1.png', alt='Texto que describa la imagen')          
        h3.text-center Tipo de cultivo: 
        h3.text-center Cultivos de hoja
        p #[b Nutriente predominante:] Nitrógeno. 
        p #[b Etapa clave:] Crecimiento.

      
      .col-md.tarjeta.bg13.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/Tema5/2.png', alt='Texto que describa la imagen')          
        h3.text-center Tipo de cultivo: 
        h3.text-center Cultivos de fruto
        p #[b Nutriente predominante:] Potasio.
        p #[b Etapa clave:] Fructificación.
      
      .col-md.tarjeta.bg10.text-white.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/Tema5/3.png', alt='Texto que describa la imagen')          
        h3.text-center Tipo de cultivo:
        h3.text-center Cereales (maíz)
        p #[b Nutriente predominante:] Nitrógeno y fósforo.
        p #[b Etapa clave:] Crecimiento inicial.
   

    separador
    #t_5_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 5.2	Formulación de planes de fertilización

    p Consiste en diseñar estrategias para suministrar nutrientes de forma adecuada durante el ciclo del cultivo, considerando análisis de suelo y requerimientos específicos.


    .row.justify-content-center.align-items-center.mb-4.bg05.p-5(data-aos="zoom-in-left")
      .col-lg-6
        h3 Elementos del plan:
        ul.lista-ul--color
          li.d-flex.align-items-start
            i.fas •
            p.mb-0  Selección de fertilizantes (orgánicos o químicos).
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Definición de dosis.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Método de aplicación (al suelo o foliar).
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Momento de aplicación.
      .col-lg-5.col-md-9 
        img(src='@/assets/curso/Tema5/img05.svg', alt='')


    h3 Ejemplos: 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg10.text-white.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/Tema5/4.png', alt='Texto que describa la imagen')          
        h3.text-center Etapa del cultivo: 
        h3.text-center Siembra
        p #[b Nutriente aplicado:] Fósforo.
        p #[b Objetivo:] Desarrollo radicular.

      .col-md.tarjeta.bg13.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/Tema5/5.png', alt='Texto que describa la imagen')          
        h3.text-center Etapa del cultivo: 
        h3.text-center Crecimiento
        p #[b Nutriente aplicado:] Nitrógeno.
        p #[b Objetivo:] Desarrollo vegetativo.
      
      .col-md.tarjeta.bg09.text-white.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/Tema5/6.png', alt='Texto que describa la imagen')          
        h3.text-center Etapa del cultivo:
        h3.text-center Producción
        p #[b Nutriente aplicado:] Potasio.
        p #[b Objetivo:] Calidad y rendimiento.

    separador
    #t_5_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 5.3	Toma de decisiones productivas

    p Se basa en el análisis de información técnica y el monitoreo constante del cultivo, permitiendo ajustar las prácticas de manejo de forma oportuna.

    .row.justify-content-center.align-items-center.mb-4.bg05.p-5(data-aos="zoom-in-left")
      .col-lg-5
        h3 Decisiones frecuentes:
        ul.lista-ul--color
          li.d-flex.align-items-start
            i.fas •
            p.mb-0  Corrección de deficiencias nutricionales.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Ajuste de dosis de fertilización.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Selección de insumos adecuados.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Implementación de prácticas de conservación del suelo.
      .col-lg-6.col-md-9
        img(src='@/assets/curso/Tema5/img06.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4.bg07.p-5(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-md-9
        img(src='@/assets/curso/Tema5/img07.svg', alt='')
      .col-lg-6
        h3 Beneficios:
        ul.lista-ul--color
          li.d-flex.align-items-start
            i.fas •
            p.mb-0  Mejora del rendimiento del cultivo.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Uso eficiente de recursos.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Reducción de impactos ambientales.
          li.d-flex.align-items-start
            i.fas •
            p.mb-0 Mayor sostenibilidad del sistema productivo.
      





















































</template>

<script>
export default {
  name: 'Tema5',
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
