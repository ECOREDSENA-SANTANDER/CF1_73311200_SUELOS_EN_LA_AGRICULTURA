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

    .tabla-a.color-acento-botones.mb-5
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

    .tabla-a.color-acento-botones.mb-5
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
    
    TabsA.color-acento-botones.mb-4
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

    .fondo01.p-5.mb-4
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

    .row.justify-content-center.align-items-center.mb-5
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
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
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

<style scoped>
/* opcional: mejorar separación */
h4 {
  font-weight: 600;
}
</style>
