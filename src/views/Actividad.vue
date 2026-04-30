<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de evaluación física y química del suelo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de comprensión del tema propiedades físicas y químicas del suelo mediante la aplicación de técnicas de muestreo, análisis e interpretación de resultados, con el fin de diagnosticar su estado, identificar limitantes y proponer estrategias de manejo',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'El suelo es considerado un recurso natural porque:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo sirve para construir viviendas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es renovable a corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite el desarrollo de los cultivos y ecosistemas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No requiere manejo técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 2,
          texto: 'La relación suelo, planta y ambiente hace referencia a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ubicación geográfica del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La interacción entre factores que influyen en el crecimiento vegetal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El uso exclusivo de fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El clima únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 3,
          texto: 'La textura del suelo se refiere a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La forma de los agregados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La proporción de arena, limo y arcilla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La cantidad de nutrientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 4,
          texto: 'Un suelo con alta proporción de arcilla se caracteriza por:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Baja retención de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta retención de humedad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Baja fertilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alta aireación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 5,
          texto: 'La estructura del suelo corresponde a:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La composición química.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La organización de las partículas en agregados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El pH del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 6,
          texto: 'La densidad del suelo influye directamente en:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El crecimiento de raíces.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tipo de cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El clima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 7,
          texto: 'La porosidad del suelo permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La circulación de aire y agua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la compactación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar el pH.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 8,
          texto: 'El muestreo de suelo se realiza para:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar la textura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obtener información representativa del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aplicar fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regar el cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 9,
          texto: 'El muestreo compuesto consiste en:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomar una sola muestra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar solo el pH.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tomar muestras al azar sin criterio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mezclar varias submuestras del terreno.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
        {
          id: 10,
          texto: 'Una limitante física del suelo es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alto contenido de nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Buena aireación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compactación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Alta fertilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 11,
          texto: 'Los coloides del suelo se caracterizan por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser partículas grandes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No retener nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tener alta capacidad de retención.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No influir en la fertilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 12,
          texto: 'La capacidad de intercambio catiónico (CIC) indica:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad del suelo para retener e intercambiar nutrientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La temperatura del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El color del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 13,
          texto: 'Un pH menor a 6 indica que el suelo es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Neutro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alcalino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ácido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fértil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 14,
          texto: 'La fertilidad del suelo depende de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el clima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disponibilidad de nutrientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tamaño del terreno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 15,
          texto: 'El análisis de suelos permite:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar la estructura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar deficiencias nutricionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el tamaño del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el riego.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 16,
          texto: 'Los fertilizantes orgánicos se caracterizan por:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Liberar nutrientes lentamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No mejorar el suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser de acción inmediata.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 17,
          texto: 'Un ejemplo de abono orgánico es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Urea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compost.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nitrato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 18,
          texto: 'Las enmiendas del suelo se utilizan para:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar el clima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar plagas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Corregir condiciones del suelo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 19,
          texto: 'La formulación de planes de fertilización permite:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar fertilizantes sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir dosis y tiempos adecuados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir cultivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar nutrientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },

        {
          id: 20,
          texto: 'La toma de decisiones productivas se basa en:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suposiciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Experiencia únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Análisis técnico del suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Opiniones externas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos de evaluación física y química del suelo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los Fundamentos de evaluación física y química del suelo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
