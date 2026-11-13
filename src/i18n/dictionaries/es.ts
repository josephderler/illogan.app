import type { Dict } from "@/i18n/dictionaries/en";
import type { FaqCategory, LegalDoc } from "@/i18n/types";

// Español

const faqCategories: FaqCategory[] = [
  {
    id: "start",
    title: "Primeros pasos",
    items: [
      {
        id: "download",
        q: "¿Cómo descargo la aplicación?",
        a: "Abre [Google Play]({playUrl}) en tu teléfono o tableta Android, o toca cualquier botón de Google Play de esta web, y pulsa **Instalar**. La descarga es gratuita.",
      },
      {
        id: "devices",
        q: "¿En qué dispositivos funciona?",
        a: "La aplicación está disponible para teléfonos y tabletas Android a través de Google Play. Con una tableta, las manos pequeñas tienen más espacio para jugar.",
      },
      {
        id: "ages",
        q: "¿Para qué edad es?",
        a: "Está pensada para niños de 3 a 6 años, desde preescolar hasta los primeros cursos de primaria. Google Play la incluye como aprobada por profesores para niños de hasta 5 años.",
      },
      {
        id: "reading",
        q: "¿Mi hijo necesita saber leer?",
        a: "No. Instrucciones de voz claras e imágenes guían cada actividad. Las palabras aparecen en mayúsculas junto a los dibujos, lo que también ayuda a los niños que empiezan a reconocer palabras.",
      },
    ],
  },
  {
    id: "learning",
    title: "Aprendizaje y juegos",
    items: [
      {
        id: "learn",
        q: "¿Qué aprenderá mi hijo?",
        a: "Los números del 1 al 10: reconocerlos, contarlos, escribirlos y ordenarlos, completar series numéricas y comparar cantidades (muchos, pocos y ninguno). Además, más de 30 palabras sobre el bosque y juegos de parejas, memoria y sombras que trabajan la atención y la percepción visual.",
      },
      {
        id: "games",
        q: "¿Cuántos juegos hay?",
        a: "Hay 17 actividades, entre ellas contar con los dedos, la recta numérica, unir puntos, encontrar la sombra, emparejar cartas, explotar nubes y encontrar los números que faltan.",
      },
      {
        id: "languages",
        q: "¿En qué idiomas está disponible?",
        a: "La aplicación está disponible en varios idiomas, entre ellos inglés, español y francés.",
      },
    ],
  },
  {
    id: "settings",
    title: "Ajustes y control parental",
    items: [
      {
        id: "settings",
        q: "¿Qué ajustes puedo cambiar?",
        a: "Puedes ajustar la dificultad del vocabulario, activar o desactivar la música y usar el bloqueo de botones, para adaptar el juego al nivel de tu hijo.",
      },
      {
        id: "screen-time",
        q: "¿Cuánto tiempo debería jugar mi hijo?",
        a: "Con los más pequeños funcionan mejor las sesiones cortas y frecuentes. Jugad juntos siempre que podáis, hablad de los números que veis a vuestro alrededor y usa herramientas como Google Family Link si quieres fijar límites de tiempo.",
      },
    ],
  },
  {
    id: "purchases",
    title: "Compras",
    items: [
      {
        id: "free",
        q: "¿La aplicación es gratuita?",
        a: "Sí, la descarga es gratuita. También ofrece compras opcionales dentro de la aplicación, que se pagan a través de Google Play.",
      },
      {
        id: "restore",
        q: "¿Cómo recupero mi compra en un dispositivo nuevo?",
        a: "Las compras están vinculadas a tu cuenta de Google. Instala la aplicación en el nuevo dispositivo con la misma cuenta. Si falta algo, envíanos por correo tu número de pedido de Google Play.",
      },
      {
        id: "refund",
        q: "¿Cómo solicito un reembolso?",
        a: "Los pagos los gestiona Google Play, así que los reembolsos los tramita Google. Sigue la [guía de reembolsos de Google Play]({playRefunds}). Si tienes algún problema con un contenido que hayas comprado, estaremos encantados de ayudarte.",
      },
      {
        id: "block-purchases",
        q: "¿Cómo evito que mi hijo haga compras?",
        a: "Activa la [verificación de compras]({playPurchaseAuth}) en Google Play para que se pida una contraseña, un PIN o la huella en cada compra, y configura el [control parental]({playParentalControls}) si compartes el dispositivo.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacidad y seguridad",
    items: [
      {
        id: "ads",
        q: "¿La aplicación tiene anuncios?",
        a: "No. La aplicación no tiene anuncios, así que los niños pueden jugar sin interrupciones.",
      },
      {
        id: "data",
        q: "¿Están seguros los datos de mi hijo?",
        a: "Reducimos los datos al mínimo. La aplicación no pide información personal a los niños y solo recoge registros de fallos e identificadores del dispositivo para funcionar bien y seguir mejorando. Estos datos se cifran en tránsito y no se comparten con terceros. Consulta nuestra [Política de privacidad](/privacy) para más detalles.",
      },
      {
        id: "delete",
        q: "¿Cómo puedo pediros que borréis datos?",
        a: "Escribe a [{email}](mailto:{email}) con el asunto “Solicitud de privacidad” e indícanos el modelo de tu dispositivo. Te responderemos en el plazo de un mes.",
      },
    ],
  },
  {
    id: "help",
    title: "Solución de problemas",
    items: [
      {
        id: "crash",
        q: "La aplicación se cierra o se bloquea. ¿Qué puedo hacer?",
        a: "Actualiza la aplicación desde Google Play, reinicia el dispositivo y comprueba que haya espacio libre. Si sigue ocurriendo, envíanos el modelo del dispositivo y la versión de Android y lo revisaremos.",
      },
      {
        id: "sound",
        q: "No hay sonido. ¿Qué debo comprobar?",
        a: "Comprueba que el volumen del dispositivo esté subido y que no esté en silencio, y después revisa el ajuste de música de la aplicación.",
      },
      {
        id: "contact",
        q: "¿Cómo puedo contactar con vosotros?",
        a: "Escribe a [{email}](mailto:{email}) o llama al [{phone}](tel:{phoneHref}). Intentamos responder en un plazo de dos días laborables.",
      },
    ],
  },
];

const privacy: LegalDoc = {
  title: "Política de privacidad",
  summary:
    "Esta política explica qué información recogemos a través de la aplicación {app} y del sitio web illogan.app, por qué la recogemos y qué opciones tienes. La aplicación está pensada para niños pequeños, por eso limitamos la recogida de datos al mínimo necesario para que funcione y mejore.",
  sections: [
    {
      id: "who-we-are",
      title: "Quiénes somos",
      blocks: [
        "{app} y este sitio web los ofrece **{company}** (“nosotros”), {address}, Reino Unido. Somos el responsable del tratamiento de la información descrita en esta política.",
        "Puedes contactar con nosotros en [{email}](mailto:{email}) o en el [{phone}](tel:{phoneHref}).",
      ],
    },
    {
      id: "at-a-glance",
      title: "La privacidad, en resumen",
      blocks: [
        {
          list: [
            "La aplicación no muestra anuncios.",
            "No pedimos a los niños su nombre, correo electrónico, fotos ni ubicación.",
            "No vendemos información personal ni la compartimos con terceros para sus propios fines.",
            "La aplicación solo recoge datos técnicos limitados (registros de fallos e identificadores del dispositivo) para seguir funcionando y entender, de forma agregada, cómo se usa.",
            "Las compras las gestiona Google Play. Nunca vemos los datos de tu tarjeta.",
            "Este sitio web no utiliza cookies de analítica ni de publicidad.",
          ],
        },
      ],
    },
    {
      id: "children",
      title: "Privacidad de los niños",
      blocks: [
        "{app} está pensada para niños de 3 a 6 años, que la usan con el apoyo de un padre, una madre, un cuidador o un docente. Cumplimos la [Política para Familias de Google Play]({playFamiliesPolicy}) y diseñamos la aplicación teniendo en cuenta el Código de Diseño Adecuado a la Edad del Reino Unido (Children’s Code).",
        "No pedimos a los niños que creen una cuenta ni que introduzcan información personal, y la aplicación no tiene chat, funciones sociales ni enlaces a redes sociales para niños.",
        "En Estados Unidos, no recogemos a sabiendas información personal de menores de 13 años, salvo los datos técnicos limitados que se describen a continuación, que usamos únicamente para el funcionamiento interno de la aplicación, de acuerdo con la ley COPPA (Children’s Online Privacy Protection Act).",
        "Los padres y tutores pueden preguntarnos en cualquier momento qué información está relacionada con el dispositivo de su hijo y pedirnos que la borremos. Consulta [Tus derechos](#rights).",
      ],
    },
    {
      id: "app-data",
      title: "Información que recoge la aplicación",
      blocks: [
        "Tal y como se declara en la sección de Seguridad de los datos de Google Play, la aplicación puede recoger:",
        {
          list: [
            "**Registros de fallos** (información y rendimiento de la aplicación): detalles técnicos sobre errores, como la versión de la aplicación, el modelo del dispositivo y el momento en que se produjo el problema.",
            "**Identificadores del dispositivo u otros identificadores**: un identificador de la instalación o del dispositivo, que se usa para que la aplicación funcione correctamente y para medir, de forma agregada, cómo se usan sus funciones.",
          ],
        },
        "Usamos esta información únicamente para ofrecer la aplicación, corregir errores, mantenerla estable y mejorar las actividades de aprendizaje. No la usamos para publicidad ni la combinamos con otra información para identificar a un niño.",
        "Estos datos se cifran en tránsito y no se comparten con otras empresas u organizaciones. Los ajustes del juego, como la música, la dificultad del vocabulario y el bloqueo de botones, solo sirven para adaptar el juego en ese dispositivo.",
      ],
    },
    {
      id: "purchases",
      title: "Compras dentro de la aplicación",
      blocks: [
        "La descarga de la aplicación es gratuita y ofrece compras opcionales dentro de la aplicación. Los pagos los procesa Google Play según sus propias condiciones y su [política de privacidad]({googlePrivacy}). Recibimos la confirmación de que se ha realizado una compra para poder desbloquear el contenido, pero nunca recibimos los datos de tu tarjeta.",
        "Para evitar compras no deseadas, puedes activar la [verificación de compras]({playPurchaseAuth}) y el [control parental]({playParentalControls}) en Google Play.",
      ],
    },
    {
      id: "website-data",
      title: "Información que se recoge en este sitio web",
      blocks: [
        {
          list: [
            "**Mensajes que nos envías.** Si nos escribes por correo o usas el formulario de contacto (que abre tu propia aplicación de correo), recibimos tu nombre, tu dirección de correo y tu mensaje. Solo los usamos para responderte y para guardar un registro de tu solicitud.",
            "**Registros del servidor.** Nuestro proveedor de alojamiento trata automáticamente datos técnicos como tu dirección IP, el tipo de navegador y las páginas solicitadas, para servir el sitio y protegerlo frente a usos indebidos.",
            "**Vídeo incrustado.** El vídeo de presentación está alojado en YouTube. No se carga nada de YouTube hasta que pulsas reproducir; a partir de ese momento, Google puede recoger información e instalar cookies según su propia [política de privacidad]({googlePrivacy}). Consulta nuestra [Política de cookies](/cookies).",
          ],
        },
        "El sitio web no utiliza cookies de analítica, de publicidad ni de seguimiento, y no necesitas una cuenta para usarlo.",
      ],
    },
    {
      id: "legal-bases",
      title: "Base legal para usar tu información",
      blocks: [
        "De acuerdo con el RGPD del Reino Unido, nos basamos en:",
        {
          list: [
            "**Interés legítimo**: para gestionar, proteger y mejorar la aplicación y el sitio web, y para entender y corregir fallos. Mantenemos este tratamiento al mínimo y tenemos especial cuidado porque la aplicación la usan niños.",
            "**Contrato**: para entregarte el contenido que has comprado.",
            "**Consentimiento**: para cargar el vídeo de YouTube cuando pulsas reproducir. Puedes retirar tu consentimiento simplemente no reproduciendo el vídeo.",
            "**Obligación legal**: cuando la ley nos obliga a conservar o comunicar información.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      title: "Con quién compartimos información",
      blocks: [
        "No vendemos información personal. Solo la compartimos con:",
        {
          list: [
            "proveedores de servicios que alojan nuestro sitio web, nuestro correo y los servicios de la aplicación, y que tratan los datos siguiendo nuestras instrucciones en virtud de un contrato;",
            "Google, como operador de Google Play, que gestiona las descargas y los pagos según sus propias condiciones;",
            "autoridades públicas, cuando la ley lo exige.",
          ],
        },
      ],
    },
    {
      id: "transfers",
      title: "Transferencias internacionales",
      blocks: [
        "Algunos de nuestros proveedores pueden tratar datos fuera del Reino Unido. En ese caso, nos basamos en las decisiones de adecuación del Reino Unido o en garantías adecuadas, como el Acuerdo Internacional de Transferencia de Datos del Reino Unido o el Anexo del Reino Unido a las Cláusulas Contractuales Tipo de la UE.",
      ],
    },
    {
      id: "retention",
      title: "Cuánto tiempo conservamos la información",
      blocks: [
        "Conservamos la información solo durante el tiempo necesario para los fines descritos. Los registros de fallos y los datos de diagnóstico se eliminan o se anonimizan cuando ya no son necesarios para que la aplicación funcione. Los correos de soporte se conservan hasta 24 meses después de nuestro último contacto, salvo que debamos guardarlos más tiempo por una obligación legal.",
      ],
    },
    {
      id: "security",
      title: "Seguridad",
      blocks: [
        "Protegemos la información con cifrado en tránsito, controles de acceso y proveedores cuidadosamente seleccionados. Ningún sistema es completamente seguro, así que avísanos de inmediato si crees que algo va mal.",
      ],
    },
    {
      id: "rights",
      title: "Tus derechos",
      blocks: [
        "Según dónde vivas, puedes pedirnos que:",
        {
          list: [
            "te demos acceso a la información personal que tenemos sobre ti o sobre tu hijo;",
            "la corrijamos si es inexacta;",
            "la borremos;",
            "limitemos su uso o dejemos de usarla si te opones;",
            "te enviemos una copia en un formato portable;",
            "dejemos de tratarla cuando se base en tu consentimiento, que puedes retirar en cualquier momento.",
          ],
        },
        "Para hacer una solicitud, escribe a [{email}](mailto:{email}) con el asunto “Solicitud de privacidad”. Si tu solicitud se refiere a datos de la aplicación, indica el modelo del dispositivo para que podamos encontrar los registros correctos. Podemos pedirte que confirmes tu identidad y te responderemos en el plazo de un mes.",
        "Si no estás satisfecho con nuestra respuesta, puedes presentar una reclamación ante la Oficina del Comisionado de Información del Reino Unido (ICO) en [ico.org.uk]({ico}) o ante la autoridad de protección de datos de tu país; en España, la Agencia Española de Protección de Datos (AEPD).",
      ],
    },
    {
      id: "changes",
      title: "Cambios en esta política",
      blocks: [
        "Podemos actualizar esta política cuando cambien la aplicación, nuestros servicios o la ley. Actualizaremos la fecha que aparece al principio de esta página y, si los cambios son importantes, te avisaremos en la aplicación o en este sitio web.",
      ],
    },
    {
      id: "contact",
      title: "Contacto",
      blocks: [
        "**{company}**, {address}, Reino Unido.",
        "Correo: [{email}](mailto:{email}). Teléfono: [{phone}](tel:{phoneHref}).",
      ],
    },
  ],
};

const terms: LegalDoc = {
  title: "Condiciones de uso",
  summary:
    "Estas condiciones se aplican a la aplicación {app} y al sitio web illogan.app. Léelas antes de descargar la aplicación. Al descargar o usar la aplicación o el sitio web, aceptas estas condiciones.",
  sections: [
    {
      id: "about",
      title: "Quiénes somos",
      blocks: [
        "La aplicación y el sitio web los ofrece **{company}**, {address}, Reino Unido. Puedes contactar con nosotros en [{email}](mailto:{email}).",
      ],
    },
    {
      id: "who-can-use",
      title: "Quién puede usar la aplicación",
      blocks: [
        "La aplicación está pensada para niños de 3 a 6 años. Debe descargarla y configurarla un padre, una madre, un tutor o un docente, que acepta estas condiciones en nombre del niño y es responsable del uso que se haga de la aplicación.",
        "Recomendamos que un adulto esté cerca, sobre todo con los más pequeños, y que les ayude a equilibrar el tiempo de pantalla con otras actividades.",
      ],
    },
    {
      id: "licence",
      title: "Tu licencia de uso",
      blocks: [
        "Te concedemos una licencia personal, no exclusiva, intransferible y revocable para instalar y usar la aplicación en dispositivos Android que sean tuyos o que controles, con fines privados, no comerciales y educativos, en casa o en clase.",
        "Las Condiciones de Servicio de Google Play también se aplican a tu descarga. En las cuestiones entre tú y Google, se aplican las condiciones de Google.",
      ],
    },
    {
      id: "purchases",
      title: "Compras y reembolsos",
      blocks: [
        "La descarga de la aplicación es gratuita. Algunos contenidos pueden ofrecerse como compras opcionales dentro de la aplicación. Los precios se muestran en Google Play antes de comprar, y los pagos los cobra Google.",
        "Los reembolsos se rigen por la [política de reembolsos de Google Play]({playRefunds}). Esto no afecta a tus derechos legales como consumidor.",
        "En los [ajustes de Google Play]({playPurchaseAuth}) puedes exigir una contraseña, un PIN o la huella para cada compra.",
      ],
    },
    {
      id: "acceptable-use",
      title: "Uso aceptable",
      blocks: [
        "Te comprometes a no:",
        {
          list: [
            "copiar, modificar, vender ni redistribuir la aplicación o su contenido, salvo en la medida en que la ley lo permita;",
            "aplicar ingeniería inversa, descompilar la aplicación ni intentar extraer su código fuente, salvo cuando la ley lo permita;",
            "usar la aplicación o el sitio web con fines ilícitos o de forma que pueda perjudicarlos a ellos o a otros usuarios;",
            "intentar eludir las medidas de seguridad o acceder a nuestros sistemas sin permiso.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Propiedad intelectual",
      blocks: [
        "La aplicación, sus juegos, ilustraciones, sonidos y textos, así como el nombre {company}, nos pertenecen a nosotros o a nuestros licenciantes y están protegidos por las leyes de propiedad intelectual. Estas condiciones no te otorgan ningún derecho sobre ellos aparte de la licencia anterior.",
        "Google Play y el logotipo de Google Play son marcas de Google LLC.",
      ],
    },
    {
      id: "education",
      title: "Contenido educativo",
      blocks: [
        "La aplicación está diseñada para apoyar el aprendizaje temprano a través del juego. No sustituye a la enseñanza, al asesoramiento profesional ni a la implicación de padres y cuidadores, y no podemos garantizar resultados de aprendizaje concretos.",
      ],
    },
    {
      id: "availability",
      title: "Actualizaciones y disponibilidad",
      blocks: [
        "Podemos actualizar la aplicación para añadir o mejorar contenidos, corregir problemas o cumplir requisitos legales, y algunas actualizaciones pueden ser necesarias para seguir usándola. También podemos modificar, suspender o retirar la aplicación o el sitio web. Si esto afecta a contenidos que hayas pagado, tus derechos legales no se verán afectados.",
      ],
    },
    {
      id: "third-parties",
      title: "Servicios de terceros",
      blocks: [
        "El sitio web enlaza a Google Play e incluye un vídeo de YouTube. Estos servicios los gestiona Google según sus propias condiciones y su política de privacidad, y no somos responsables de ellos.",
      ],
    },
    {
      id: "liability",
      title: "Nuestra responsabilidad",
      blocks: [
        "Ofrecemos la aplicación y el sitio web con un cuidado y una competencia razonables. Si incumplimos estas condiciones, somos responsables de las pérdidas o daños que sufras y que sean una consecuencia previsible de nuestro incumplimiento. No somos responsables de pérdidas que no fueran previsibles, de pérdidas empresariales ni de problemas causados por usar la aplicación en un dispositivo que no cumpla sus requisitos.",
        "Si un contenido digital que te suministramos daña un dispositivo u otro contenido digital tuyo porque no actuamos con un cuidado y una competencia razonables, repararemos el daño o te indemnizaremos.",
        "Nada de lo dispuesto en estas condiciones limita nuestra responsabilidad por muerte o lesiones personales causadas por nuestra negligencia, por fraude ni por cualquier otra cuestión que la ley no permita limitar. Tus derechos legales como consumidor no se ven afectados.",
      ],
    },
    {
      id: "ending",
      title: "Terminación",
      blocks: [
        "Puedes dejar de usar la aplicación en cualquier momento desinstalándola. Podemos suspender o cancelar tu licencia si incumples gravemente estas condiciones. Los apartados que por su naturaleza deban seguir vigentes, como los de propiedad intelectual y nuestra responsabilidad, seguirán aplicándose.",
      ],
    },
    {
      id: "law",
      title: "Legislación y conflictos",
      blocks: [
        "Estas condiciones se rigen por la legislación de Inglaterra y Gales. Puedes acudir a los tribunales de Inglaterra y Gales; si vives en Escocia o Irlanda del Norte, también a los de tu jurisdicción. Si vives en la Unión Europea, también te amparan las normas imperativas de protección de los consumidores de tu país de residencia.",
        "Te pedimos que contactes primero con nosotros para intentar resolver cualquier problema de manera amistosa.",
      ],
    },
    {
      id: "changes",
      title: "Cambios en estas condiciones",
      blocks: [
        "Podemos actualizar estas condiciones de vez en cuando. La versión vigente estará siempre en esta página, con la fecha de su última actualización. Si un cambio te afecta de forma importante, te avisaremos en la aplicación o en el sitio web.",
      ],
    },
    {
      id: "contact",
      title: "Contacto",
      blocks: [
        "**{company}**, {address}, Reino Unido.",
        "Correo: [{email}](mailto:{email}). Teléfono: [{phone}](tel:{phoneHref}).",
      ],
    },
  ],
};

const cookies: LegalDoc = {
  title: "Política de cookies",
  summary:
    "Esta política explica cómo utiliza illogan.app las cookies y tecnologías similares. En resumen: nuestro sitio web no utiliza cookies de analítica, de publicidad ni de seguimiento.",
  sections: [
    {
      id: "what-are-cookies",
      title: "Qué son las cookies",
      blocks: [
        "Las cookies son pequeños archivos de texto que un sitio web guarda en tu dispositivo. Otras tecnologías similares, como el almacenamiento local o los píxeles de seguimiento, funcionan de forma parecida. Pueden ser imprescindibles para que un sitio funcione o servir para recordar preferencias, medir visitas o mostrar publicidad.",
      ],
    },
    {
      id: "our-cookies",
      title: "Las cookies que usamos",
      blocks: [
        "No instalamos ninguna cookie cuando navegas por illogan.app y no usamos analítica, publicidad ni seguimiento de redes sociales.",
        "Nuestro proveedor de alojamiento trata información técnica, como tu dirección IP, en los registros del servidor para servir el sitio de forma segura. Esto no implica guardar cookies en tu dispositivo.",
      ],
    },
    {
      id: "youtube",
      title: "El vídeo de YouTube incrustado",
      blocks: [
        "Nuestro vídeo de presentación está alojado en YouTube, un servicio de Google. Usamos el modo de privacidad mejorada de YouTube y no se carga nada de YouTube hasta que pulsas el botón de reproducir.",
        "Cuando pulsas reproducir, YouTube puede guardar cookies o usar tecnologías similares en tu dispositivo, por ejemplo para recordar los ajustes de reproducción, contar las visualizaciones y prevenir el fraude. La [política de privacidad de Google]({googlePrivacy}) explica cómo funciona. Si lo prefieres, puedes ver el vídeo directamente en YouTube o no reproducirlo.",
      ],
    },
    {
      id: "app",
      title: "Cookies en la aplicación",
      blocks: [
        "La aplicación no usa cookies de navegador. Los datos técnicos limitados que recoge se describen en nuestra [Política de privacidad](/privacy).",
      ],
    },
    {
      id: "control",
      title: "Cómo controlar las cookies",
      blocks: [
        "La mayoría de los navegadores permiten ver, bloquear y eliminar cookies desde sus ajustes. Bloquear las cookies no impedirá que nuestro sitio web funcione. Encontrarás más información en el [sitio web de la ICO]({aboutCookies}).",
      ],
    },
    {
      id: "changes",
      title: "Cambios en esta política",
      blocks: [
        "Si algún día empezamos a usar cookies nuevas, por ejemplo de analítica, actualizaremos primero esta página y pediremos tu consentimiento cuando la ley lo exija.",
      ],
    },
    {
      id: "contact",
      title: "Contacto",
      blocks: ["¿Tienes preguntas sobre las cookies? Escríbenos a [{email}](mailto:{email})."],
    },
  ],
};

const es: Dict = {
  meta: {
    home: {
      title: "Juegos de números para niños – Aprende a contar | Illogan",
      description:
        "Juegos para contar aprobados por profesores, para niños de 3 a 6 años. 17 actividades para contar, trazar y comparar los números del 1 al 10. Sin anuncios.",
    },
    support: {
      title: "Centro de ayuda | Illogan",
      description:
        "Respuestas sobre Juegos de números para niños: primeros pasos, aprendizaje, ajustes, compras, privacidad y solución de problemas.",
    },
    contact: {
      title: "Contacto | Illogan",
      description:
        "Ponte en contacto con el equipo de Illogan por correo, teléfono o correo postal. Preguntas, comentarios y propuestas de colaboración.",
    },
    privacy: {
      title: "Política de privacidad | Illogan",
      description:
        "Cómo trata Illogan la información en Juegos de números para niños y en illogan.app, incluida la privacidad de los niños.",
    },
    terms: {
      title: "Condiciones de uso | Illogan",
      description:
        "Las condiciones que se aplican al descargar Juegos de números para niños o usar el sitio web illogan.app.",
    },
    cookies: {
      title: "Política de cookies | Illogan",
      description:
        "Qué cookies y tecnologías similares utiliza illogan.app, cómo funciona el vídeo de YouTube y cómo controlar las cookies.",
    },
    notFound: {
      title: "Página no encontrada | Illogan",
      description: "No hemos encontrado la página que buscabas.",
    },
  },
  app: {
    name: "Juegos de números para niños",
    tagline: "Aprende a contar 123",
  },
  common: {
    skipToContent: "Saltar al contenido",
    getItOnGooglePlay: "Disponible en Google Play",
    downloadFree: "Descargar gratis",
    watchVideo: "Ver el vídeo",
    backHome: "Volver al inicio",
    learnMore: "Más información",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Navegación principal",
    language: "Idioma",
    chooseLanguage: "Elegir idioma",
    lastUpdated: "Última actualización",
    onThisPage: "En esta página",
    previous: "Anterior",
    next: "Siguiente",
    goToSlide: "Ir a la diapositiva {n}",
    slideStatus: "Diapositiva {current} de {total}: {caption}",
    newTab: "se abre en una pestaña nueva",
    backToTop: "Volver arriba",
    teacherApproved: "Aprobada por profesores",
    ratingAria: "Valoración de {rating} sobre 5 en Google Play",
    breadcrumbHome: "Inicio",
    breadcrumb: "Ruta de navegación",
  },
  nav: {
    features: "Funciones",
    video: "Vídeo",
    screenshots: "Capturas",
    parents: "Familias",
    faq: "Preguntas",
    support: "Ayuda",
    contact: "Contacto",
    getApp: "Descargar",
  },
  hero: {
    badge: "Aprobada por profesores en Google Play",
    title: "Aprende a contar del 1 al 10",
    titleHighlight: "jugando",
    subtitle:
      "{games} minijuegos alegres ayudan a niños de 3 a 6 años a contar, trazar, ordenar y comparar números. Instrucciones de voz claras, controles sencillos y sin anuncios.",
    rating: "{rating} en Google Play",
    ratings: "{count} valoraciones",
    downloads: "{downloads} descargas",
    ages: "De 3 a 6 años",
    chipGames: "{games} juegos",
    chipNoAds: "Sin anuncios",
    chipVoice: "Guiado por voz",
    deviceAlt: "{app}, partida: {caption}",
  },
  stats: {
    label: "La aplicación en cifras",
    downloads: "Descargas en Google Play",
    rating: "Valoración media de {count} reseñas",
    games: "Juegos educativos en una sola app",
    words: "Palabras del bosque por descubrir",
  },
  video: {
    eyebrow: "Mira el vídeo",
    title: "Descubre cómo aprenden a contar los peques",
    subtitle:
      "Un breve recorrido por la aplicación y sus juegos de contar, trazar y emparejar, para que sepas exactamente a qué jugará tu hijo.",
    play: "Reproducir el vídeo",
    duration: "{duration}",
    consent:
      "El vídeo se reproduce desde YouTube en modo de privacidad mejorada. YouTube puede instalar cookies cuando pulses reproducir. [Política de cookies](/cookies)",
    iframeTitle: "{app}: vídeo de presentación",
    posterAlt: "Tarjetas con números de la aplicación sobre fondo rojo",
    watchOnYoutube: "Ver en YouTube",
  },
  features: {
    eyebrow: "Dentro de la aplicación",
    title: "17 juegos para que los números tengan sentido",
    subtitle:
      "Cada actividad practica una habilidad matemática temprana, con personajes simpáticos, colores vivos y muchos ánimos.",
    items: [
      {
        title: "Contar de todo",
        body: "¿Cuántas abejas hay? ¿Cuántos dedos? Los niños cuentan objetos simpáticos y tocan el número correcto.",
      },
      {
        title: "Trazar y escribir",
        body: "Flechas y puntos indican por dónde empezar, para que los dedos pequeños aprendan a escribir los números del 1 al 10.",
      },
      {
        title: "Ordenar y completar",
        body: "Ordena los números, colócalos en la recta numérica y encuentra los que faltan.",
      },
      {
        title: "Comparar cantidades",
        body: "¿Muchos, pocos o ninguno? Los niños comparan grupos y descubren dónde hay más o menos.",
      },
      {
        title: "Primeras palabras",
        body: "Más de 30 palabras del bosque, escritas en mayúsculas y leídas en voz alta, para ampliar el vocabulario.",
      },
      {
        title: "Memoria y atención",
        body: "Emparejar cartas, unir puntos, encontrar la sombra y explotar nubes hacen que practicar sea siempre divertido.",
      },
    ],
    settingsTitle: "Se adapta a tu hijo",
    settingsBody:
      "Elige la dificultad del vocabulario, activa o desactiva la música y usa el bloqueo de botones para los más pequeños.",
    settingsChips: ["Dificultad del vocabulario", "Música sí o no", "Bloqueo de botones"],
  },
  gallery: {
    eyebrow: "Capturas de pantalla",
    title: "Echa un vistazo por dentro",
    subtitle:
      "Pantallas luminosas y despejadas, pensadas para manos pequeñas. Desliza o usa las flechas para explorarlas.",
    label: "Capturas de la aplicación",
    slides: {
      bees: "¿Cuántas abejas hay?",
      fingers: "¿Cuántos dedos ves?",
      write: "Traza y escribe los números",
      missing: "Encuentra los números que faltan",
      order: "Ordena los números",
      fewer: "¿Dónde hay menos estrellas?",
      numbers: "Aprende los números del 1 al 10",
      vocab: "Aprende palabras nuevas",
    },
    alt: "Captura de {app}: {caption}",
  },
  teacher: {
    eyebrow: "Aprobada por profesores",
    title: "Muy bien valorada por profesores en Google Play",
    body: "{app} tiene la insignia Aprobada por profesores de Google Play. Las aplicaciones de este programa las revisan profesores y especialistas en desarrollo infantil, que valoran que sean adecuadas para la edad, la calidad de la experiencia, su valor educativo y lo mucho que divierten.",
    criteria: ["Adecuada para la edad", "Experiencia de calidad", "Enriquecedora", "Divertida"],
    note: "Google Play incluye la aplicación como aprobada por profesores para niños de hasta 5 años.",
    link: "Cómo funciona Aprobada por profesores",
    badgeAlt: "Insignia Aprobada por profesores",
  },
  parents: {
    eyebrow: "Para familias y docentes",
    title: "Tiempo de pantalla con tranquilidad",
    subtitle:
      "Hemos creado la aplicación para los más pequeños, por eso la seguridad y la sencillez son lo primero.",
    items: [
      {
        title: "Sin anuncios",
        body: "Ningún anuncio interrumpe los juegos, así que los niños se concentran en aprender.",
      },
      {
        title: "La privacidad, primero",
        body: "Sin cuentas ni datos personales de los niños, y sin compartir datos con terceros.",
      },
      {
        title: "Para manos pequeñas",
        body: "Botones grandes, pantallas sencillas e instrucciones de voz claras para que jueguen solos.",
      },
      {
        title: "Ajustes para adultos",
        body: "Ajusta la dificultad del vocabulario, la música y el bloqueo de botones según cada niño.",
      },
      {
        title: "Política para Familias",
        body: "Cumplimos la Política para Familias de Google Play para aplicaciones dirigidas a niños.",
      },
      {
        title: "Ideal para el aula",
        body: "Las actividades cortas encajan fácilmente en clases de números, rincones y trabajo en grupos pequeños.",
      },
    ],
    cta: "Lee nuestra Política de privacidad",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas de las familias",
    subtitle:
      "Respuestas rápidas a las dudas más habituales. En el Centro de ayuda encontrarás también ajustes, compras y solución de problemas.",
    more: "Ir al Centro de ayuda",
    home: ["free", "ages", "ads", "data", "learn", "devices"],
    categories: faqCategories,
  },
  cta: {
    title: "¿Listos para contar hasta 10?",
    subtitle: "Descarga {app} gratis en Google Play y empezad a jugar en unos minutos.",
    note: "Descarga gratuita · Compras en la aplicación · De 3 a 6 años",
  },
  footer: {
    tagline: "Juegos de números divertidos que ayudan a niños de 3 a 6 años a aprender a contar.",
    app: "Aplicación",
    help: "Ayuda",
    legal: "Legal",
    contact: "Contacto",
    teacherApproved: "Aprobada por profesores",
    helpCentre: "Centro de ayuda",
    contactUs: "Contacto",
    childrensPrivacy: "Privacidad de los niños",
    rights: "© {year} {company}. Todos los derechos reservados.",
  },
  support: {
    eyebrow: "Centro de ayuda",
    title: "¿Cómo podemos ayudarte?",
    intro:
      "Respuestas sobre la aplicación, el aprendizaje, los ajustes, las compras y la privacidad. Si no encuentras lo que buscas, estamos a un correo de distancia.",
    topics: "Temas",
    stillNeedHelp: "¿Necesitas más ayuda?",
    stillNeedHelpBody:
      "Envíanos un mensaje con el modelo de tu dispositivo y la versión de Android, y te responderemos.",
    emailUs: "Escríbenos",
    callUs: "Llámanos",
    contactPage: "Página de contacto",
    searchLabel: "Buscar en el Centro de ayuda",
    searchPh: "Prueba con “reembolso” o “ajustes”",
    noResults: "Ninguna respuesta coincide con tu búsqueda. Prueba con otra palabra o escríbenos.",
    results: "Respuestas encontradas: {n}",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Nos encantará saber de ti",
    intro:
      "Preguntas sobre {app}, comentarios, ideas de colaboración o consultas de prensa: envíanos un mensaje y te responderemos lo antes posible.",
    emailLabel: "Correo electrónico",
    emailNote: "Lo mejor para soporte y comentarios",
    phoneLabel: "Teléfono",
    phoneNote: "Gratuito desde fijos y móviles del Reino Unido",
    addressLabel: "Dirección",
    addressNote: "Dirección postal",
    formTitle: "Envíanos un mensaje",
    formIntro:
      "Rellena el formulario y se abrirá tu aplicación de correo con el mensaje listo para enviar.",
    name: "Tu nombre",
    namePh: "Lucía García",
    email: "Tu correo electrónico",
    emailPh: "lucia@ejemplo.com",
    topic: "Tema",
    topics: [
      "Soporte de la aplicación",
      "Comentarios",
      "Compras",
      "Solicitud de privacidad",
      "Colaboraciones",
      "Prensa",
    ],
    message: "Mensaje",
    messagePh: "¿En qué podemos ayudarte?",
    send: "Abrir el correo",
    privacyNote:
      "Solo usamos tus datos para responderte. Consulta nuestra [Política de privacidad](/privacy).",
    responseTitle: "Tiempo de respuesta",
    responseBody: "Intentamos responder en un plazo de dos días laborables.",
    mailSubject: "Mensaje desde illogan.app",
  },
  legal: {
    privacy,
    terms,
    cookies,
    contactTitle: "¿Tienes preguntas sobre esta página?",
    contactBody: "Escríbenos a [{email}](mailto:{email}) y te ayudaremos encantados.",
    related: "Páginas relacionadas",
  },
  notFound: {
    code: "404",
    title: "¡Vaya! Esta página no está",
    body: "Puede que la página que buscas se haya movido o que nunca haya existido. Contemos juntos el camino de vuelta al inicio.",
    home: "Volver al inicio",
    support: "Centro de ayuda",
  },
};

export default es;
