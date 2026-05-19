<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos del suelo en sistemas agrícolas 
      .row.justify-content-center.align-items-center.mb-4.bg03(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src='@/assets/curso/Tema1/img01.png', alt='')
        .col-lg-7.p-4
          .row
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/Tema1/img02.svg', alt='')
            .col-lg-12
              p En los fundamentos del suelo en sistemas agrícolas se prioriza la importancia del suelo como base de la producción agrícola, analizando su relación con las plantas y el ambiente, así como los principios de sostenibilidad en la agricultura ecológica. El suelo es uno de los recursos naturales más importantes para la producción de alimentos, fibras y materias primas. Su función va más allá de ser un simple soporte para las plantas, ya que constituye un sistema dinámico en el que interactúan componentes físicos, químicos y biológicos. 

      .row.mb-4(data-aos="zoom-in-left")
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

        .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-left")
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

      TabsC.color-primario.mb-3(data-aos="zoom-in-left")
        .py-3.py-md-4(titulo="a) Suelo")
          .row.justify-content-center
            .col-lg-4.col-8.mb-3
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
            .col-lg-4.col-8.mb-3
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
            .col-lg-4.col-8.mb-3
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
            .col-lg-4.col-8.mb-3
              img(src='@/assets/curso/Tema1/img05.png', alt='Texto que describa la imagen')
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

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
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
        .col-lg-5.col-10.col-md-8
          img(src="@/assets/curso/Tema1/img06.png")


      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2  Enfoque de agricultura ecológica
      
      .bloque-texto-g.bg12.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
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

      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
        .col-lg-7
          p Este enfoque busca mantener la salud del suelo a largo plazo, reducir impactos ambientales y garantizar alimentos más saludables. Entre las prácticas más utilizadas están:
          ul.lista-ul--color
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Rotación de cultivos.
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Uso de coberturas vegetales.  
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Aplicación de #[em compost].
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Manejo integrado de nutrientes.      
        .col-lg-5.col-md-8
          img(src="@/assets/curso/Tema1/img08.png")


      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3  Generalidades del suelo

      p Se abordan los conceptos básicos del suelo, su origen, formación, composición y funciones, permitiendo comprender su importancia como recurso natural en la producción agrícola.
      
      .cajon.color-acento-botones.p-4.mb-4(data-aos="zoom-in-left")
        p #[b Concepto de suelo:] es un cuerpo natural tridimensional, dinámico y vivo que se forma a partir de la descomposición de rocas (material parental) y la acción de factores ambientales a lo largo del tiempo. Constituye la capa superficial de la corteza terrestre donde se desarrollan las plantas y se llevan a cabo múltiples procesos físicos, químicos y biológicos esenciales para la vida.

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
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
      
      SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
        .tarjeta.bgslyder.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/01.svg' alt='')
          h4.text-center Material parental
          p.text-center Roca o sedimento original del cual se forma el suelo. 

        .tarjeta.bgslyder.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/02.svg' alt='')
          h4.text-center Clima
          p.text-center Temperatura y precipitación que influyen en la velocidad de meteorización. 

        .tarjeta.bgslyder.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/03.svg' alt='')
          h4.text-center Organismos vivos
          p.text-center Plantas, animales y microorganismos. 

        .tarjeta.bgslyder.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/04.svg' alt='')
          h4.text-center Relieve
          p.text-center Pendiente del terreno, que afecta la erosión y acumulación de materiales. 

        .tarjeta.bgslyder.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/05.svg' alt='')
          h4.text-center Tiempo
          p.text-center Período durante el cual actúan los factores anteriores. 

      
      h3 b)	Procesos principales de formación del suelo
      p Durante la pedogénesis ocurren diversos procesos que transforman el material original en un suelo fértil y estructurado:

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="a)	Meteorización física (fragmentación de rocas):")
              .col-md-11.mb-4.mb-md-0
                p Consiste en la desintegración mecánica de las rocas en partículas más pequeñas sin alterar su composición química.
                .titulo-sexto.color-acento-botones(data-aos='fade-right')
                  h5 Tabla 1.
                  span Factores e importancia de la meteorización física del suelo

                .tabla-a.color-primario.mb-5.bgblanco(data-aos="zoom-in-left")
                  table
                    thead
                      tr
                        th.bg10.text-white Causas principales
                        th.bg10.text-white Importancia

                    tbody
                      tr
                        td
                          ul.lista-ul--color
                            li.d-flex •
                              p.mb-0 Cambios de temperatura (expansión y contracción).
                            li.d-flex •
                              p.mb-0 Acción del agua (congelación y deshielo).
                            li.d-flex •
                              p.mb-0 Viento.
                            li.d-flex •
                              p Presión de raíces que penetran las grietas.

                        td
                          ul.lista-ul--color
                            li.d-flex •
                              p.mb-0 Aumenta la superficie de las rocas, facilitando otros procesos.
                            li.d-flex •
                              p.mb-0 Da origen a partículas como arena y limo.
            
            .row.justify-content-center(titulo="b)	Meteorización química (alteración de minerales): ")
              .col-md-11.mb-4.mb-md-0
                p Es la transformación de los minerales presentes en las rocas mediante reacciones químicas que cambian su composición.
                p Procesos comunes
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Hidratación:] incorporación de agua en los minerales. 
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Oxidación:] reacción con el oxígeno (ejemplo: hierro que se oxida). 
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Disolución:] minerales que se disuelven en agua. 
                  li.d-flex
                    i.fas •
                    p.mb-0 #[b Carbonatación:] reacción con dióxido de carbono. 
                p #[b NOTA:] la importancia de la meteorización química es que forma nuevos minerales, especialmente arcillas, y libera nutrientes esenciales para las plantas. 
            .row.justify-content-center(titulo="c)	Actividad biológica (raíces y microorganismos): ")
              .col-md-11.mb-4.mb-md-0
                p Los seres vivos desempeñan un papel fundamental en la formación del suelo.
                .titulo-sexto.color-acento-botones(data-aos='fade-right').mb-3
                  h5 Tabla 2.
                  span Rol de la actividad biológica en la formación y fertilidad del suelo

                .tabla-a.color-primario.mb-3.bgblanco(data-aos="zoom-in-left")
                  table
                    thead
                      tr
                        th.bg10.text-white Acciones principales
                        th.bg10.text-white Importancia

                    tbody
                      tr
                        td
                          ul.lista-ul--color
                            li.d-flex
                              i.fas •
                              p.mb-0 Las raíces rompen rocas y contribuyen a la meteorización física.

                            li.d-flex
                              i.fas •
                              p.mb-0 Los microorganismos descomponen materia orgánica.

                            li.d-flex
                              i.fas •
                              p.mb-0 Los organismos del suelo (lombrices, insectos) mezclan y airean el suelo.

                        td
                          ul.lista-ul--color
                            li.d-flex
                              i.fas •
                              p.mb-0 Formación de humus (materia orgánica estabilizada).

                            li.d-flex
                              i.fas •
                              p.mb-0 Mejora de la estructura del suelo.

                            li.d-flex
                              i.fas •
                              p.mb-0 Incremento de la fertilidad.
                p #[b NOTA:] este proceso puede tardar décadas en condiciones favorables y hasta miles de años en ambientes extremos. 
            .row.justify-content-center(titulo="Diagnóstico de la fertilidad")
              .col-md-11.mb-4.mb-md-0
                p El diagnóstico de fertilidad integra los resultados del análisis


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg08.py-2.w-card-text Factores formadores del suelo
      p Los factores formadores del suelo actúan de manera conjunta durante la pedogénesis, determinando sus características, fertilidad y capacidad productiva. Su interacción influye directamente en la formación, evolución y comportamiento del suelo.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          img(src="@/assets/curso/Tema1/img03.svg")
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg08.py-2.w-card-text Principales factores formados del suelo

      SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
        .tarjeta.bgslyder.p-4
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/001.svg' alt='')
          h4.text-center a)	Clima
          p Regula la humedad y la temperatura, influyendo en los procesos físicos, químicos y biológicos.
          ul.lista-ul--color
            li.d-flex
              i.fas •
              p.mb-0 La precipitación determina la disponibilidad de agua y el lavado de nutrientes.
            li.d-flex
              i.fas •
              p.mb-0 La temperatura controla la actividad biológica y la descomposición de la materia orgánica.

            li.d-flex
              i.fas •
              p.mb-0 En climas húmedos se presenta mayor lixiviación; en climas secos, acumulación de sales.


        .tarjeta.bgslyder.p-4(data-aos="zoom-in-left")
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/002.svg' alt='')

          h4.text-center b) Organismos

          p Incluyen plantas, microorganismos y fauna del suelo.

          ul.lista-ul--color
            li.d-flex
              i.fas •
              p.mb-0 Aportan materia orgánica mediante residuos vegetales y animales.

            li.d-flex
              i.fas •
              p.mb-0 Forman humus y mejoran la estructura del suelo.

            li.d-flex
              i.fas •
              p.mb-0 Favorecen el reciclaje de nutrientes y la fertilidad.


        .tarjeta.bgslyder.p-4(data-aos="zoom-in-left")
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/003.svg' alt='')

          h4.text-center c) Relieve

          p Influye en el drenaje, la erosión y la profundidad del suelo.

          ul.lista-ul--color
            li.d-flex
              i.fas •
              p.mb-0 Pendientes fuertes generan mayor erosión y suelos poco desarrollados.

            li.d-flex
              i.fas •
              p.mb-0 Superficies planas favorecen la acumulación de materiales y suelos más profundos.


        .tarjeta.bgslyder.p-4(data-aos="zoom-in-left")
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/004.svg' alt='')

          h4.text-center d) Material parental

          p corresponde al material de origen del suelo.

          ul.lista-ul--color(data-aos="zoom-in-left")
            li.d-flex
              i.fas •
              p.mb-0 Define la textura, el pH y la composición mineral.

            li.d-flex
              i.fas •
              p.mb-0 Aporta nutrientes según el tipo de roca de origen.

        .tarjeta.bgslyder.p-4(data-aos="zoom-in-left")
          .row.justify-content-center.mb-3
            .col-7.col-md-5
              img(src='@/assets/curso/Tema1/005.svg' alt='')

          h4.text-center e) Tiempo

          p Permite la evolución del suelo.

          ul.lista-ul--color
            li.d-flex
              i.fas •
              p.mb-0 Suelos jóvenes presentan poco desarrollo.

            li.d-flex
              i.fas •
              p.mb-0 Suelos maduros tienen horizontes bien definidos.

            li.d-flex
              i.fas •
              p.mb-0 Suelos antiguos muestran mayor meteorización y posibles pérdidas de nutrientes.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg08.py-2.w-card-text Perfil del suelo
      p El suelo se organiza en capas denominadas horizontes, que se diferencian por sus características físicas, químicas y biológicas. Estas capas, en conjunto, forman el perfil del suelo, el cual permite comprender su grado de desarrollo, fertilidad y aptitud para la producción agrícola.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          img(src="@/assets/curso/Tema1/img07.svg")

      h3 a)	Horizonte O
      p Materia orgánica en descomposición. Es la capa más superficial del suelo, compuesta principalmente por residuos orgánicos.

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        h5 Tabla 3.
        span Horizonte O del suelo: características, funciones e importancia agrícola

      .tabla-a.color-primario.mb-5.bgblanco(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg10.text-white Características
              th.bg10.text-white Funciones
              th.bg10.text-white Importancia agrícola

          tbody.bg_gris
            tr
              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Formado por hojas, ramas, restos de plantas y animales en diferentes estados de descomposición.

                  li.d-flex
                    i.fas •
                    p.mb-0 Alto contenido de materia orgánica.

                  li.d-flex
                    i.fas •
                    p.mb-0 Color oscuro debido al humus.

                  li.d-flex
                    i.fas •
                    p.mb-0 Presencia abundante de microorganismos (hongos, bacterias).

              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Aporta nutrientes al suelo mediante la descomposición.

                  li.d-flex
                    i.fas •
                    p.mb-0 Mejora la estructura y retención de humedad.

                  li.d-flex
                    i.fas •
                    p.mb-0 Protege el suelo contra la erosión.

              td
                p Es fundamental para mantener la fertilidad del suelo, especialmente en sistemas agroecológicos y sostenibles.

      h3 b)	Horizonte A
      p Capa fértil, también conocido como capa arable, es la zona más importante para la producción agrícola.

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        h5 Tabla 4.
        span Horizonte A: características, procesos e importancia agrícola de la capa arable del suelo

      .tabla-a.color-primario.mb-5.bgblanco(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg10.text-white Características
              th.bg10.text-white Procesos que ocurren
              th.bg10.text-white Importancia agrícola

          tbody.bg_gris
            tr
              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Mezcla de minerales (arena, limo, arcilla) y materia orgánica.

                  li.d-flex
                    i.fas •
                    p.mb-0 Color oscuro o pardo.

                  li.d-flex
                    i.fas •
                    p.mb-0 Alta actividad biológica.

                  li.d-flex
                    i.fas •
                    p.mb-0 Buena estructura que facilita el crecimiento de raíces.

              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Mineralización de nutrientes.

                  li.d-flex
                    i.fas •
                    p.mb-0 Actividad microbiana intensa.

                  li.d-flex
                    i.fas •
                    p.mb-0 Absorción de agua y nutrientes por las plantas.

              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Es donde se desarrollan la mayoría de las raíces.

                  li.d-flex
                    i.fas •
                    p.mb-0 Determina en gran medida la productividad del cultivo.

                  li.d-flex
                    i.fas •
                    p.mb-0 Requiere manejo adecuado (fertilización, conservación, labranza).


      h3 c)	Horizonte B
      p Acumulación de minerales, se encuentra debajo del horizonte A y es una zona de acumulación.

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        h5 Tabla 5.
        span Horizonte B del suelo: características, procesos e importancia agrícola

      .tabla-a.color-primario.mb-5.bgblanco(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg10.text-white Características
              th.bg10.text-white Procesos que ocurren
              th.bg10.text-white Importancia agrícola

          tbody.bg_gris
            tr
              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Menor contenido de materia orgánica.

                  li.d-flex
                    i.fas •
                    p.mb-0 Mayor concentración de minerales como arcillas, hierro, aluminio y sales.

                  li.d-flex
                    i.fas •
                    p.mb-0 Color más claro o rojizo.

                  li.d-flex
                    i.fas •
                    p.mb-0 Estructura más compacta.

              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Lixiviación: lavado de materiales desde el horizonte A.

                  li.d-flex
                    i.fas •
                    p.mb-0 Eluviación: acumulación de esos materiales en este horizonte.

              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Actúa como reserva de nutrientes.

                  li.d-flex
                    i.fas •
                    p.mb-0 Influye en el drenaje y retención de agua.

                  li.d-flex
                    i.fas •
                    p.mb-0 Puede limitar el crecimiento radicular si es muy compacto.


      h3 d)	Horizonte C
      p Roca fragmentada; es la capa más profunda del suelo, formada por material parental poco alterado.

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        h5 Tabla 6.
        span Horizonte C del suelo: características, funciones e importancia agrícola

      .tabla-a.color-primario.mb-5.bgblanco(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg10.text-white Características
              th.bg10.text-white Funciones
              th.bg10.text-white Importancia agrícola

          tbody.bg_gris
            tr
              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Compuesto por fragmentos de roca.

                  li.d-flex
                    i.fas •
                    p.mb-0 Escasa o nula materia orgánica.

                  li.d-flex
                    i.fas •
                    p.mb-0 Baja actividad biológica.

                  li.d-flex
                    i.fas •
                    p.mb-0 Estructura poco desarrollada.

              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Fuente de minerales a largo plazo.

                  li.d-flex
                    i.fas •
                    p.mb-0 Base para la formación del suelo.

              td
                ul.lista-ul--color
                  li.d-flex
                    i.fas •
                    p.mb-0 Influye en la profundidad efectiva del suelo.

                  li.d-flex
                    i.fas •
                    p.mb-0 Condiciona el drenaje y la disponibilidad de agua.



      h3 e)	Relación entre los horizontes
      p Los horizontes del suelo no funcionan de manera aislada, sino que están interconectados.
      ul.lista-ul--color
        li.d-flex
          i.fas •
          p.mb-0 El horizonte O aporta materia orgánica al horizonte A. 
        li.d-flex
          i.fas •
          p.mb-0 El horizonte A pierde nutrientes que se acumulan en el horizonte B. 
        li.d-flex
          i.fas •
          p.mb-0 El horizonte C provee minerales que, con el tiempo, enriquecen las capas superiores.

      p.bg05.p-4 #[b NOTA:] es importante realizar el análisis del perfil porque permite identificar la fertilidad, determinar el uso del suelo y detectar problemas.
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-12
          img(src="@/assets/curso/Tema1/img12.png")
      p El suelo cumple funciones esenciales en la producción agrícola, ya que actúa como soporte para las plantas, permitiendo el desarrollo de sus raíces y su estabilidad; regula el agua al almacenarla y distribuirla según las necesidades del cultivo; facilita el reciclaje de nutrientes mediante procesos biológicos y químicos; y sirve como hábitat para diversos organismos que favorecen su fertilidad. Además, contribuye a la regulación del clima y a la captura de carbono, desempeñando un papel clave en la sostenibilidad de los sistemas productivos.
          































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
