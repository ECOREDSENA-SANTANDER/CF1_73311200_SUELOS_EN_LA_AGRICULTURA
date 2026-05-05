<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Propiedades físicas del suelo y su evaluación

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/Tema2/img01.png', alt='')
    p Se analizan las características físicas del suelo que influyen directamente en el crecimiento de los cultivos y la disponibilidad de agua.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Textura del suelo
    p La textura del suelo se refiere a la proporción relativa de partículas minerales de diferente tamaño presentes en el suelo. Estas partículas son: arena, limo y arcilla, y su combinación determina el comportamiento físico del suelo, especialmente en relación con el agua, el aire y los nutrientes.

    .tabla-a.color-acento-botones.mb-5(data-aos="zoom-in-left")
      table
        thead
          tr
            th.text-izq Componente
            th.text-izq Características
            th.text-izq Ventajas
            th.text-izq Desventajas
        tbody
          tr
            td.text-center
              | #[b Arena]
              br
              .contenedor-img
                img.img1(src='@/assets/curso/Tema2/Arena.png', alt='Arena')
            td
              | - Tamaño: 0.05 a 2 mm
              br
              | - Sensación áspera al tacto.
              br
              | - Alta permeabilidad (el agua pasa rápidamente)
              br
              | - Baja retención de agua y nutrientes.
            td
              | - Buena aireación.
              br
              | - Fácil manejo (labranza)
            td
              | - Baja fertilidad.
              br
              | - Requiere riego frecuente.
          tr
            td.text-center
              | #[b Limo]
              br
              .contenedor-img
                img.img1(src='@/assets/curso/Tema2/Limo.png', alt='Limo')
            td
              | - Tamaño: 0.002 a 0.05 mm.
              br
              | - Sensación suave o sedosa.
              br
              | - Retención moderada de agua.
              br
              | - Fertilidad media.
            td
              | - Buena capacidad para retener nutrientes.
              br
              | - Favorece el crecimiento de las plantas.
            td
              | - Puede compactarse fácilmente.
              br
              | - Susceptible a la erosión.
          tr
            td.text-center
              | #[b Arcilla]
              br
              .contenedor-img
                img.img1(src='@/assets/curso/Tema2/Arcilla.png', alt='Arcilla')
            td
              | - Tamaño: menor a 0.002 mm.
              br
              | - Sensación pegajosa cuando está húmeda.
              br
              | - Alta retención de agua y nutrientes.
              br
              | - Baja permeabilidad.
            td
              | - Alta fertilidad potencial
              br
              | - Retiene nutrientes por más tiempo.
            td
              | - Drenaje deficiente.
              br
              | - Puede dificultar el crecimiento de raíces.
              br
              | - Se compacta con facilidad.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Textura del suelo

    p La estructura del suelo se refiere a la forma en que las partículas (arena, limo y arcilla) se agrupan o agregan entre sí formando unidades llamadas agregados. Esta organización influye directamente en la aireación, infiltración de agua, retención de humedad y crecimiento de las raíces. Una buena estructura favorece la productividad agrícola, mientras que una mala estructura puede limitar el desarrollo de los cultivos.

    .tabla-a.color-acento-botones.mb-5(data-aos="zoom-in-left")
      table
        thead
          tr
            th.text-izq Tipo de estructura
            th.text-izq Características
            th.text-izq Dónde se encuentra
            th.text-izq Causas
            th.text-izq Importancia agrícola
        tbody
          tr
            td.text-center
              | #[b Granular]
              br
              .contenedor-img
                img.img1(src='@/assets/curso/Tema2/Granular.png', alt='Granular')
            td
              | - Agregados pequeños, redondeados y sueltos.
              br
              | - Alta porosidad.
              br
              | - Buena infiltración y retención de agua.
              br
              | - Excelente aireación.
            td Principalmente en el horizonte A (capa superficial).
            td Formación natural por actividad biológica y materia orgánica.
            td
              | - Facilita el crecimiento de raíces.
              br
              | - Favorece la actividad biológica.
              br
              | - Permite un buen manejo del suelo.
          tr
            td.text-center
              | #[b Laminar]
              br
              .contenedor-img
                img.img1(src='@/assets/curso/Tema2/Laminar.png', alt='Laminar')
            td
              | - Forma de láminas o placas.
              br
              | - Baja permeabilidad.
              br
              | - Dificulta la circulación de agua y aire.
            td Puede presentarse en diferentes horizontes, especialmente superficiales compactados.
            td
              | - Compactación del suelo.
              br
              | - Tránsito de maquinaria pesada.
              br
              | - Procesos naturales.
            td
              | - Limita el desarrollo radicular.
              br
              | - Favorece el encharcamiento.
              br
              | - Requiere manejo (labranza o subsolado).
          tr
            td.text-center
              | #[b Prismática]
              br
              .contenedor-img
                img.img1(src='@/assets/curso/Tema2/Prismatica.png', alt='Prismática')
            td
              | - Forma alargada vertical.
              br
              | - Presencia de grietas entre agregados.
              br
              | - Moderada permeabilidad.
            td Generalmente en el horizonte B.
            td Formación natural por procesos de acumulación y contracción del suelo.
            td
              | - Permite cierto movimiento de agua y aire.
              br
              | - Puede dificultar raíces si está compacta.



    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Densidad del suelo

    p Estas propiedades determinan la capacidad del suelo para almacenar agua, permitir el crecimiento de las raíces y mantener condiciones adecuadas para la producción agrícola.
    
    TabsA.color-acento-botones.mb-4(data-aos="zoom-in-left")
      .tarjeta.color-acento-botones--borde.p-4(titulo="a)	Densidad del suelo")
        p Relación entre la masa y el volumen del suelo, indica el nivel de compactación.
        p #[b • Densidad alta:] suelo compactado, menos aireación, menor infiltración de agua y dificultad para el crecimiento de raíces.
        p #[b • Densidad baja:] mayor porosidad, mejor aireación y desarrollo radicular.
        p #[b • Causas de compactación:] uso de maquinaria pesada, labranza inadecuada y sobrepastoreo.
      .tarjeta.color-acento-botones--borde.p-4(titulo="b)	Porosidad")
        p Cantidad de espacios vacíos en el suelo.
        p #[b • Macroporos:] permiten el paso del aire y el drenaje del agua.
        p #[b • Microporos:] retienen agua disponible para las plantas.
        p • Un equilibrio entre ambos es necesario para un suelo saludable.
      .tarjeta.color-acento-botones--borde.p-4(titulo="c)	Permeabilidad")
        p Capacidad del suelo para permitir el paso del agua.
        p #[b • Alta:] suelos arenosos, el agua se infiltra rápidamente.
        p #[b • Baja:] suelos arcillosos, el agua se retiene por más tiempo.
        p • Depende de la textura, estructura y compactación, e influye en el riego y el riesgo de sequía o encharcamiento.
      .tarjeta.color-acento-botones--borde.p-4(titulo="d)	Retención de humedad")
        p Capacidad del suelo para almacenar agua disponible para las plantas.
        p #[b • Capacidad de campo:] agua que el suelo retiene después del drenaje.
        p #[b • Punto de marchitez:] nivel mínimo de agua que la planta puede aprovechar.
        p • Factores como la textura, la materia orgánica y la estructura influyen en esta propiedad.

    p Estas características son fundamentales para garantizar un adecuado suministro de agua, favorecer el desarrollo del cultivo y mejorar la productividad agrícola.

    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1  Importancia de las propiedades físicas

    p Las propiedades físicas del suelo son fundamentales para el desarrollo de los cultivos, ya que condicionan el ambiente donde crecen las raíces.

    .fondo01.p-5.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center
        .col-lg-10
          SlyderB.mb-5(:datos="datosSlyder")

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2	Evaluación de las propiedades físicas del suelo

    p Se presentan los métodos y técnicas utilizadas para evaluar en campo y laboratorio las propiedades físicas del suelo, permitiendo diagnosticar su estado y determinar su aptitud para el establecimiento de cultivos.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Técnicas de observación en campo

    p La observación directa es una herramienta fundamental en el diagnóstico del suelo. Permite obtener información rápida y preliminar sin necesidad de equipos sofisticados.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-6
        h3 Aspectos a evaluar:
        p.mb-0 #[b •	Color del suelo:] indica contenido de materia orgánica y drenaje. 
        p.mb-0 #[b •	Textura al tacto:] permite identificar proporciones de arena, limo y arcilla. 
        p.mb-0 #[b •	Estructura:] se observa la forma de los agregados. 
        p.mb-0 #[b •	Presencia de raíces:] indica profundidad efectiva y condiciones de crecimiento. 
        p #[b •	Humedad:] determina disponibilidad hídrica. 
        h3 Importancia:
        p.mb-0  •	Diagnóstico inicial rápido.
        p.mb-0  •	Identificación de problemas visibles. 
        p •	Apoyo para toma de muestras. 
      .col-lg-6
        img(src="@/assets/curso/Tema2/img04.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
          h3.bg08.py-2.w-card-text Métodos de muestreo de suelo

    p El muestreo de suelo es una etapa fundamental para obtener resultados confiables en los análisis, ya que permite representar adecuadamente las condiciones del terreno.


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azull")
          .row(titulo="a)	Tipos de muestreo:")
            .col-md-12.mb-4.mb-md-0
              p • Muestreo simple: se toma una sola muestra representativa del área.
              p • Muestreo compuesto: se combinan varias submuestras tomadas en diferentes puntos del terreno para obtener una muestra más representativa.    

          .row(titulo="b)	Procedimiento de muestreo:")
            .col-md-12.mb-4.mb-md-0
              p • Delimitar el área de estudio según características homogéneas del terreno.
              p • Eliminar residuos superficiales (hojas, piedras, malezas).
              p • Tomar muestras a una profundidad aproximada de 20 a 30 cm, dependiendo del cultivo.
              p.mb-4 • Mezclar y homogenizar las submuestras en caso de muestreo compuesto.
              img(src="@/assets/curso/Tema2/collage.svg")
          .row(titulo="c)	Recomendaciones técnicas:")
            .col-md-12.mb-4.mb-md-0
              p • Evitar zonas atípicas como bordes, caminos, charcos o áreas alteradas.
              p • Utilizar herramientas limpias para evitar contaminación de la muestra.
              p • Rotular correctamente cada muestra para su identificación.
      .col-lg-4.col-8.col-md-6
        img(src="@/assets/curso/Tema2/img05.png")

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-5.col-10.mb-4.col-md-8
        img(src="@/assets/curso/Tema2/img06.png")
      .col-lg-7
        p El análisis físico del suelo se realiza en laboratorio o mediante pruebas de campo con el fin de determinar sus propiedades principales:
        p •	Textura del suelo (arena, limo, arcilla).
        p •	Densidad aparente mediante cilindro volumétrico.
        p •	Capacidad de retención de agua.
        p •	Porosidad del suelo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Este análisis permite cuantificar las propiedades físicas y complementar la observación realizada en campo. La interpretación de resultados consiste en analizar la información obtenida para definir el estado del suelo y su manejo adecuado:
        p •	Determinar la aptitud del suelo para diferentes cultivos.
        p •	Identificar necesidades de intervención o mejora.
        p •	Definir prácticas de manejo apropiadas. 
      .col-lg-5.col-10.col-md-8
        img(src="@/assets/curso/Tema2/img07.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10.bg11.p-4
        h3 Ejemplos de interpretación:
        .row.justify-content-center.align-items-center
          .col-lg-6
            p #[b •	Alta densidad:] presencia de compactación del suelo.
          .col-lg-6
            p #[b •	Baja retención de agua:] necesidad de aumentar materia orgánica. 
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-6.mb-3
        h3 Identificación de limitantes físicas del suelo:
        p Las principales limitantes que afectan el desarrollo de los cultivos son:
        p #[b •	Compactación:] reduce el crecimiento de raíces y la infiltración de agua.
        p #[b •	Baja porosidad:] disminuye la aireación del suelo.
        p #[b •	Mal drenaje:] genera encharcamientos y condiciones de estrés en las plantas.
        p #[b •	Erosión:] provoca pérdida de la capa fértil del suelo.
      .col-lg-6.mb-3
        h3 Medidas de manejo recomendadas:
        p •	Implementación de labranza adecuada según el tipo de suelo.
        p •	Incorporación de materia orgánica para mejorar estructura y fertilidad.
        p •	Uso de coberturas vegetales para proteger el suelo y reducir la erosión.
        p •	El muestreo es una etapa crítica para garantizar resultados confiables en los análisis.
    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3	Identificación de limitantes físicas

    p Las limitantes físicas del suelo son condiciones que afectan su estructura y funcionamiento, reduciendo el desarrollo adecuado de las plantas y la productividad agrícola.

    .row.justify-content-center.cursor-pointer.mb-5(data-aos="zoom-in-left")
      .col-xl-3.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema2/1.png", alt="")
          .crd_hover_txt--body.bg10.text-white
            h5.mb-3 Compactación:
            p.mb-0 Ocurre cuando el suelo se comprime, lo que dificulta el crecimiento de las raíces y la infiltración de agua.
      .col-xl-3.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema2/2.png", alt="")
          .crd_hover_txt--body.bg10.text-white
            h4.mb-3 Baja porosidad: 
            p.mb-0 Disminuye la cantidad de espacios de aire en el suelo, reduciendo la aireación y el intercambio de gases.
      .col-xl-3.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema2/3.png", alt="")
          .crd_hover_txt--body.bg10.text-white
            h4.mb-3 Mal drenaje:
            p.mb-0 Provoca acumulación excesiva de agua, generando encharcamientos que afectan el desarrollo radicular.

      .col-xl-3.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema2/4.png", alt="")
          .crd_hover_txt--body.bg10.text-white
            h4.mb-3 Erosión: 
            p.mb-0 Ocasiona la pérdida de la capa superficial del suelo, que es la más fértil y rica en nutrientes.

    h3.mb-4 Estrategias de manejo para corregir las limitantes:

    .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/01.svg' alt='')
            .tarjeta.bg08
              .p-4
                h5.text-center Labranza adecuada
                p.mb-0.text-center Mejora la estructura del suelo y reduce la compactación.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/02.svg' alt='')
            .tarjeta.bg08
              .p-5
                h5.text-center Labranza adecuada
                p.mb-0.text-center Mejora la estructura del suelo y reduce la compactación.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/03.svg' alt='')
            .tarjeta.bg08
              .p-5
                h5.text-center Labranza adecuada
                p.mb-0.text-center Mejora la estructura del suelo y reduce la compactación.









































</template>

<script>
export default {
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'a) Influyen directamente en:',
        texto:
          '• Germinación: disponibilidad de agua y oxígeno.<br>• Crecimiento radicular: facilidad de penetración en el suelo.<br>• Disponibilidad de nutrientes: movilidad y absorción.<br>• Rendimiento de los cultivos: productividad final.',
        imagen: require('@/assets/curso/Tema2/img02.png'),
      },
      {
        titulo: 'b)	Impactos de un mal manejo:',
        texto:
          '• Compactación del suelo.<br> • Erosión.<br> • Pérdida de humedad.<br> • Disminución de la fertilidad.',
        imagen: require('@/assets/curso/Tema2/img002.png'),
      },
    ],
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

<style lang="sass">
.cursor-pointer.crd_hover_txt
  cursor: pointer
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  &:hover
    .crd_hover_txt--body
      transition: all 0.5s cubic-bezier(0.92, 0, 0.58, 1)
      transform: translateY(0)

  .crd_hover_txt--body
    position: absolute
    padding: 1.5rem
    bottom: 0
    transition: all 0.5s cubic-bezier(0.2, 0, 0.58, 1)
    transform: translateY(100%)
    background-color: rgba(255, 247, 230, 1)

  @media (min-width:1200px) and (max-width:1400px)
    .crd_hover_txt--body
      p
        font-size: 0.85em
</style>
