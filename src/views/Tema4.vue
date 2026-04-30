<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis de suelos

    .row.justify-content-center.align-items-center.mb-3.bg02(data-aos="zoom-in-left")
      .col-lg-5.d-none.d-lg-block
        img.izq(src='@/assets/curso/Tema4/img01.png', alt='')
      .col-lg-7.p-4
        .row
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/Tema4/img02.svg', alt='')
          .col-lg-12
            p El análisis de suelos es un proceso técnico fundamental que permite evaluar la fertilidad y las condiciones químicas del suelo mediante pruebas de laboratorio. Este proceso incluye etapas como la toma de muestras, los procedimientos de laboratorio, la interpretación de resultados y el diagnóstico de la fertilidad, así como el estudio de fertilizantes y abonos utilizados en el manejo del suelo. A través de este análisis se obtiene información clave sobre la disponibilidad de nutrientes y las características del suelo, lo que facilita la toma de decisiones en fertilización y manejo del cultivo. Por ejemplo: un productor de tomate puede utilizar el análisis de suelo para determinar si requiere mayor aporte de fósforo para mejorar la floración y el desarrollo de frutos.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Toma de muestras para análisis químico")
            .col-md-11.mb-4.mb-md-0
              p La toma de muestras debe realizarse de manera representativa, ya que de ello depende la precisión de los resultados. Se recomienda dividir el lote en áreas homogéneas (por ejemplo: zonas con igual pendiente o tipo de cultivo) y tomar varias submuestras que luego se mezclan. La profundidad suele ser de 0 a 20 cm en cultivos de ciclo corto como lechuga, y puede ser mayor en cultivos perennes. También es importante evitar muestrear inmediatamente después de aplicar fertilizantes o durante épocas de lluvia intensa, ya que esto puede alterar los resultados.
          .row.justify-content-center(titulo="Procedimientos de laboratorio")
            .col-md-11.mb-4.mb-md-0
              p En el laboratorio se analizan diferentes propiedades del suelo. El pH indica si el suelo es ácido, neutro o alcalino; por ejemplo, un pH bajo (ácido) puede limitar la disponibilidad de fósforo. La materia orgánica refleja la calidad del suelo y su capacidad para retener nutrientes y agua. El nitrógeno es esencial para el crecimiento vegetativo (hojas), el fósforo favorece el desarrollo radicular y la floración, y el potasio mejora la resistencia de la planta y la calidad del fruto. Por ejemplo: en cultivos de papa, el potasio es clave para obtener tubérculos de buen tamaño y calidad.
          .row.justify-content-center(titulo="Interpretación de resultados")
            .col-md-11.mb-4.mb-md-0
              p La interpretación consiste en analizar los resultados del laboratorio para tomar decisiones prácticas. Por ejemplo: si el análisis muestra bajos niveles de nitrógeno, se recomienda aplicar fertilizantes nitrogenados como la urea. Si existe exceso de fósforo, se debe evitar su aplicación para no generar desequilibrios nutricionales. Esta interpretación permite optimizar el uso de insumos y reducir costos, además de prevenir problemas ambientales.
          .row.justify-content-center(titulo="Diagnóstico de la fertilidad")
            .col-md-11.mb-4.mb-md-0
              p El diagnóstico de fertilidad integra los resultados del análisis de suelo con las necesidades del cultivo. Por ejemplo: un cultivo de maíz en etapa inicial requiere mayor nitrógeno para su desarrollo, mientras que en la etapa reproductiva necesita más fósforo y potasio. Este diagnóstico permite diseñar estrategias de fertilización ajustadas a cada etapa del cultivo, mejorando el rendimiento y la eficiencia del sistema productivo.
          .row.justify-content-center(titulo="Fertilizantes y abonos")
            .col-md-11.mb-4.mb-md-0
              p Los fertilizantes y abonos son insumos que se utilizan para aportar nutrientes al suelo. Su correcta selección y aplicación permiten mejorar la productividad agrícola. Por ejemplo: en un cultivo intensivo de hortalizas, se puede combinar fertilización química para suplir necesidades inmediatas y abonos orgánicos para mejorar la calidad del suelo a largo plazo.
          .row.justify-content-center(titulo="Tipos de fertilizantes")
            .col-md-11.mb-4.mb-md-0
              p Los fertilizantes químicos, como la urea o el fosfato diamónico (DAP), tienen una acción rápida y son útiles cuando el cultivo presenta deficiencias visibles. Por otro lado, los fertilizantes orgánicos, como el compost, liberan nutrientes lentamente y mejoran la estructura del suelo. Por ejemplo: en cultivos de lechuga se puede aplicar fertilizante químico para un crecimiento rápido, complementado con materia orgánica para mantener la fertilidad del suelo.
          .row.justify-content-center(titulo="Abonos orgánicos")
            .col-md-11.mb-4.mb-md-0
              p Los abonos orgánicos, como el compost, el lombricompostaje y el estiércol, aportan nutrientes y mejoran las propiedades físicas, químicas y biológicas del suelo. Por ejemplo: el lombricompostaje es ampliamente utilizado en cultivos de hortalizas por su alta calidad nutricional, mientras que el estiércol bovino se utiliza en cultivos extensivos. Estos abonos mejoran la retención de agua, favorecen la aireación del suelo y promueven la actividad de microorganismos benéficos.
          .row.justify-content-center(titulo="Enmiendas del suelo")
            .col-md-11.mb-4.mb-md-0
              p Las enmiendas se utilizan para corregir problemas específicos del suelo. Por ejemplo: en suelos ácidos se aplica cal agrícola para aumentar el pH y mejorar la disponibilidad de nutrientes. En suelos compactados o con problemas de sodicidad, el yeso ayuda a mejorar la estructura y facilitar la infiltración del agua. Estas prácticas son fundamentales para recuperar suelos degradados.
          .row.justify-content-center(titulo="Aplicación de fertilizantes")
            .col-md-11.mb-4.mb-md-0
              p La aplicación de fertilizantes debe planificarse cuidadosamente. La dosis depende del cultivo y del análisis de suelo; el momento puede variar según la etapa de crecimiento (por ejemplo: fertilización al momento de la siembra o durante el desarrollo vegetativo); y el método puede ser al voleo, en bandas o mediante fertirriego. Por ejemplo: en cultivos bajo invernadero, el fertirriego permite aplicar nutrientes disueltos en el agua de riego de manera precisa.
        

      separador
      #t_4_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 4.1  Manejo bajo agricultura ecológica

      .bloque-texto-g.bg03.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema4/img03.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p.mb-0 La agricultura ecológica promueve el uso de insumos naturales y prácticas sostenibles. Por ejemplo: se utilizan biofertilizantes, extractos vegetales y control biológico en lugar de productos químicos sintéticos. También se implementan prácticas como la rotación de cultivos y el uso de coberturas vegetales para conservar la fertilidad del suelo y reducir la aparición de plagas. 
            br
            br
        
    img(src='@/assets/curso/Tema4/podcast.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-left")
    .row.justify-content-center.g-0(data-aos="fade-right").mb-4
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
            texto="Pódcast: Para complementar toda esta información se invita al aprendiz a visitar el siguiente pódcast que será de gran utilidad:"
            :audio="require('@/assets/curso/Tema4/podcast.svg')"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")







</template>

<script>
export default {
  name: 'Tema4',
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
