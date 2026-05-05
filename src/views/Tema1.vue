<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos del suelo en sistemas agrícolas 
      .row.justify-content-center.align-items-center.mb-5.bg03(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src='@/assets/curso/Tema1/img01.png', alt='')
        .col-lg-7.p-4
          .row
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/Tema1/img02.svg', alt='')
            .col-lg-12
              p En los fundamentos del suelo en sistemas agrícolas se prioriza la importancia del suelo como base de la producción agrícola, analizando su relación con las plantas y el ambiente, así como los principios de sostenibilidad en la agricultura ecológica. El suelo es uno de los recursos naturales más importantes para la producción de alimentos, fibras y materias primas. Su función va más allá de ser un simple soporte para las plantas, ya que constituye un sistema dinámico en el que interactúan componentes físicos, químicos y biológicos. 

      .row.mb-4
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/Tema1/1.svg', alt='Texto que describa la imagen')
            h5.text-center a)	Desde el punto de vista productivo, el suelo:
            ul.lista-ul
              li.d-flex
                i.fas •
                | Proporciona soporte mecánico para el desarrollo radicular.

              li.d-flex
                i.fas •
                | Actúa como reservorio de agua, indispensable para los procesos fisiológicos de las plantas
              li.d-flex
                i.fas •
                | Es fuente de nutrientes esenciales como Nitrógeno (N), Fósforo (P) y Potasio (K).

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/Tema1/2.svg', alt='Texto que describa la imagen')
            h5.text-center b)	Un suelo en buenas condiciones permite:
            ul.lista-ul
              li.d-flex
                i.fas •
                | Mayor eficiencia en el uso de insumos.
              li.d-flex
                i.fas •
                | Mejor desarrollo de los cultivos.
              li.d-flex
                i.fas •
                | Reducción de los costos de producción.

        
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/Tema1/3.svg', alt='Texto que describa la imagen')
            h5.text-center c)	Por el contrario, los suelos degradados presentan:
            ul.lista-ul
              li.d-flex
                i.fas •
                | Baja fertilidad.
              li.d-flex
                i.fas •
                | Problemas de compactación.
              li.d-flex
                i.fas •
                | Menor productividad.


      p Por lo anterior, el manejo adecuado del suelo es fundamental para garantizar la seguridad alimentaria y la sostenibilidad agrícola.

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1  Relación suelo planta ambiente

      p La producción agrícola es el resultado de la interacción dinámica y permanente entre tres componentes esenciales: el suelo, la planta y el ambiente. Este sistema funciona de manera integrada, donde cualquier cambio en uno de sus elementos repercute directa o indirectamente en los demás, afectando la productividad, sostenibilidad y calidad de los cultivos.

      TabsC.color-primario.mb-3
        .py-3.py-md-4(titulo="a) Suelo")
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/Tema1/img02.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              p Es un recurso natural fundamental que actúa como medio de crecimiento para las plantas. Cumple múltiples funciones dentro del sistema productivo:
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Soporte físico:] permite el anclaje de las raíces, brindando estabilidad a la planta. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Suministro de agua:] almacena y regula la disponibilidad de agua para los cultivos. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Fuente de nutrientes:] contiene elementos esenciales como nitrógeno, fósforo, potasio, calcio, entre otros. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Actividad biológica:] alberga microorganismos (bacterias, hongos, lombrices) que participan en la descomposición de materia orgánica y en el reciclaje de nutrientes. 
            p Propiedades del suelo que influyen en la producción:
            ul.lista-ul
              li.d-flex
                i.fas •
                p.mb-0 #[b  Físicas:] textura, estructura, porosidad, densidad aparente. 
              li.d-flex
                i.fas •
                p.mb-0  #[b Químicas:] pH, capacidad de intercambio catiónico, contenido de nutrientes. 
              li.d-flex
                i.fas •
                p.mb-0  #[b  Biológicas:] biodiversidad microbiana, actividad enzimática. 
            p Un suelo bien manejado favorece el crecimiento radicular, la retención de humedad y la disponibilidad de nutrientes.
        
        .py-3.py-md-4(titulo="b) Planta")
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/Tema1/img03.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              p Es el componente vivo del sistema, encargado de transformar los recursos disponibles en biomasa mediante procesos fisiológicos como la fotosíntesis.
              p Funciones principales de la planta:
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Fotosíntesis:] convierte la energía solar en energía química, produciendo alimento. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Absorción de nutrientes:] a través de las raíces toma agua y minerales del suelo. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Transpiración:] regula el flujo de agua y la temperatura interna. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Interacción con el suelo:] libera exudados radiculares que favorecen la actividad microbiana. 

            p Factores propios de la planta que influyen en el sistema:
            ul.lista-ul
              li.d-flex
                i.fas •
                p.mb-0 Especie y variedad. 
              li.d-flex
                i.fas •
                p.mb-0  Estado fenológico (germinación, crecimiento, floración, fructificación). 
              li.d-flex
                i.fas •
                p.mb-0  Sistema radicular. 
              li.d-flex
                i.fas •
                p.mb-0  Adaptación a condiciones ambientales. 
            p Además, las plantas contribuyen al mejoramiento del suelo mediante la incorporación de residuos orgánicos (hojas, raíces, tallos), lo que incrementa la materia orgánica y la fertilidad.

    
        
        .py-3.py-md-4(titulo="c) Ambiente")
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/Tema1/img04.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0 
              p Comprende el conjunto de factores externos que influyen en el desarrollo de las plantas y en las condiciones del suelo. Estos factores pueden ser climáticos y edáficos.
              p Principales factores ambientales:
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Temperatura:] afecta la germinación, el crecimiento y la actividad microbiana del suelo. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Radiación solar:] es la fuente de energía para la fotosíntesis.
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Precipitación:] determina la disponibilidad de agua en el suelo. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Viento:] influye en la evapotranspiración, polinización y dispersión de semillas. 
                li.d-flex
                  i.fas •
                  p.mb-0  #[b Humedad relativa:] afecta la transpiración y la incidencia de enfermedades. 

        .py-3.py-md-4(titulo="d) Interacción entre suelo, planta y ambiente")
          .row.justify-content-center
            .col-lg-4
              img(src='@/assets/curso/Tema1/img04.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0 
              p La relación entre estos tres componentes es sistémica e interdependiente:
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 El suelo aporta agua y nutrientes que la planta necesita. 
                li.d-flex
                  i.fas •
                  p.mb-0  La planta mejora el suelo mediante la adición de materia orgánica. 
                li.d-flex
                  i.fas •
                  p.mb-0  El ambiente regula tanto la disponibilidad de recursos en el suelo como los procesos fisiológicos de la planta. 
              p #[b Ejemplo de interacción:] una baja precipitación (ambiente) reduce la humedad del suelo, lo que limita la absorción de nutrientes por la planta, afectando su crecimiento y rendimiento.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg08.py-2.w-card-text Importancia del equilibrio en el sistema

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p El equilibrio entre suelo, planta y ambiente es clave para lograr sistemas agrícolas sostenibles. Un desequilibrio puede generar:
          ul.lista-ul
            li.d-flex
              i.fas •
              p.mb-0 Disminución de la productividad. 
            li.d-flex
              i.fas •
              p.mb-0 Degradación del suelo (erosión, pérdida de fertilidad). 
            li.d-flex
              i.fas •
              p.mb-0 Mayor incidencia de plagas y enfermedades. 
            li.d-flex
              i.fas •
              p.mb-0  Uso ineficiente de recursos. 
          p.bg05.p-4 La relación suelo, planta y ambiente constituye la base de toda producción agrícola. Comprender esta interacción permite implementar prácticas de manejo adecuadas, como la conservación del suelo, el uso eficiente del agua y la selección de cultivos adaptados, garantizando así una producción sostenible y rentable.
        .col-lg-5
          img(src="@/assets/curso/Tema1/img06.png")


      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2  Enfoque de agricultura ecológica
      
      .bloque-texto-g.bg12.p-3.p-sm-4.p-md-5.mb-3
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img07.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La agricultura ecológica promueve un manejo sostenible del suelo basado en principios como:
            br
            br
            ul.lista-ul--color
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 Conservación de la fertilidad natural.
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 Uso de abonos orgánicos. 
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 Reducción de insumos químicos. 
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 Protección de la biodiversidad.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p Este enfoque busca mantener la salud del suelo a largo plazo, reducir impactos ambientales y garantizar alimentos más saludables. Entre las prácticas más utilizadas están:
          ul.lista-ul--color
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Rotación de cultivos 
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Uso de coberturas vegetales  
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Aplicación de #[em compost]
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Manejo integrado de nutrientes      
        .col-lg-5
          img(src="@/assets/curso/Tema1/img08.png")


      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1  Generalidades del suelo

      p Se abordan los conceptos básicos del suelo, su origen, formación, composición y funciones, permitiendo comprender su importancia como recurso natural en la producción agrícola.
      
      .cajon.color-acento-botones.p-4.mb-4
        p #[b Concepto de suelo:] es un cuerpo natural tridimensional, dinámico y vivo que se forma a partir de la descomposición de rocas (material parental) y la acción de factores ambientales a lo largo del tiempo. Constituye la capa superficial de la corteza terrestre donde se desarrollan las plantas y se llevan a cabo múltiples procesos físicos, químicos y biológicos esenciales para la vida.

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          img(src="@/assets/curso/Tema1/img09.png")
      p El suelo es un sistema dinámico que funciona como un ecosistema donde interactúan componentes minerales, orgánicos y biológicos, fundamentales para la producción agrícola.
      p Está formado por cinco elementos principales: los minerales (arena, limo y arcilla), que determinan la textura y el comportamiento del suelo; la materia orgánica, que mejora la fertilidad, la estructura y la actividad biológica; el agua, que permite el transporte y disponibilidad de nutrientes; el aire, que aporta oxígeno para raíces y microorganismos; y los organismos vivos, que descomponen la materia orgánica y contribuyen al reciclaje de nutrientes y la formación del suelo.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg08.py-2.w-card-text Formación del suelo
      p La formación del suelo, conocida como pedogénesis, es un proceso natural, continuo y dinámico mediante el cual las rocas y materiales orgánicos se transforman en suelo a lo largo del tiempo. Este proceso puede tardar desde cientos hasta miles de años, dependiendo de las condiciones ambientales. La pedogénesis resulta de la interacción de diversos factores formadores del suelo, los cuales determinan sus características físicas, químicas y biológicas.
      h3 a)	Factores de formación del suelo
      
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center FIRST
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 2
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 3
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 4
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 5
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='')
          h2.text-center 6
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.




















































































  </template>

<script>
export default {
  name: 'Tema1',
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
