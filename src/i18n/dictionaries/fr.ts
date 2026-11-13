import type { Dict } from "@/i18n/dictionaries/en";
import type { FaqCategory, LegalDoc } from "@/i18n/types";

// Français

const faqCategories: FaqCategory[] = [
  {
    id: "start",
    title: "Premiers pas",
    items: [
      {
        id: "download",
        q: "Comment télécharger l’application ?",
        a: "Ouvrez [Google Play]({playUrl}) sur votre téléphone ou votre tablette Android, ou touchez l’un des boutons Google Play de ce site, puis appuyez sur **Installer**. Le téléchargement est gratuit.",
      },
      {
        id: "devices",
        q: "Sur quels appareils fonctionne-t-elle ?",
        a: "L’application est disponible pour les téléphones et tablettes Android sur Google Play. Sur une tablette, les petites mains ont plus de place pour jouer.",
      },
      {
        id: "ages",
        q: "Pour quel âge est-elle conçue ?",
        a: "Elle est conçue pour les enfants de 3 à 6 ans, de la maternelle aux premières années d’école. Google Play la classe parmi les applications approuvées par les enseignants pour les enfants jusqu’à 5 ans.",
      },
      {
        id: "reading",
        q: "Mon enfant doit-il savoir lire ?",
        a: "Non. Des consignes vocales claires et des images guident chaque activité. Les mots s’affichent en majuscules à côté des dessins, ce qui aide aussi les enfants qui commencent à reconnaître les mots.",
      },
    ],
  },
  {
    id: "learning",
    title: "Apprentissage et jeux",
    items: [
      {
        id: "learn",
        q: "Qu’est-ce que mon enfant va apprendre ?",
        a: "Les nombres de 1 à 10 : les reconnaître, les compter, les écrire et les ranger, compléter des suites et comparer des quantités (beaucoup, peu et aucun). S’y ajoutent plus de 30 mots sur la forêt, ainsi que des jeux d’association, de mémoire et d’ombres qui développent l’attention et la perception visuelle.",
      },
      {
        id: "games",
        q: "Combien y a-t-il de jeux ?",
        a: "Il y a 17 activités, dont compter sur ses doigts, la droite numérique, relier les points, trouver l’ombre, associer des cartes, éclater des nuages et retrouver les nombres manquants.",
      },
      {
        id: "languages",
        q: "Dans quelles langues est-elle disponible ?",
        a: "L’application est disponible en plusieurs langues, dont l’anglais, l’espagnol et le français.",
      },
    ],
  },
  {
    id: "settings",
    title: "Réglages et contrôle parental",
    items: [
      {
        id: "settings",
        q: "Quels réglages puis-je modifier ?",
        a: "Vous pouvez régler la difficulté du vocabulaire, activer ou couper la musique et utiliser le verrouillage des boutons, pour adapter le jeu au niveau de votre enfant.",
      },
      {
        id: "screen-time",
        q: "Combien de temps mon enfant devrait-il jouer ?",
        a: "Avec les tout-petits, des séances courtes et régulières fonctionnent le mieux. Jouez ensemble quand vous le pouvez, parlez des nombres que vous voyez autour de vous et utilisez des outils comme Google Family Link si vous souhaitez fixer des limites de temps.",
      },
    ],
  },
  {
    id: "purchases",
    title: "Achats",
    items: [
      {
        id: "free",
        q: "L’application est-elle gratuite ?",
        a: "Oui, le téléchargement est gratuit. L’application propose aussi des achats intégrés facultatifs, réglés via Google Play.",
      },
      {
        id: "restore",
        q: "Comment retrouver mon achat sur un nouvel appareil ?",
        a: "Les achats sont liés à votre compte Google. Installez l’application sur le nouvel appareil avec le même compte Google. S’il manque quelque chose, envoyez-nous votre numéro de commande Google Play.",
      },
      {
        id: "refund",
        q: "Comment demander un remboursement ?",
        a: "Les paiements sont encaissés par Google Play, c’est donc Google qui traite les remboursements. Suivez le [guide de remboursement de Google Play]({playRefunds}). Nous restons à votre disposition en cas de problème avec un contenu acheté.",
      },
      {
        id: "block-purchases",
        q: "Comment empêcher mon enfant de faire des achats ?",
        a: "Activez la [validation des achats]({playPurchaseAuth}) dans Google Play pour qu’un mot de passe, un code ou une empreinte soit demandé à chaque achat, et configurez le [contrôle parental]({playParentalControls}) si vous partagez l’appareil.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Confidentialité et sécurité",
    items: [
      {
        id: "ads",
        q: "L’application contient-elle des publicités ?",
        a: "Non. L’application est sans publicité, les enfants peuvent donc jouer sans interruption.",
      },
      {
        id: "data",
        q: "Les données de mon enfant sont-elles protégées ?",
        a: "Nous limitons les données au strict minimum. L’application ne demande aucune information personnelle aux enfants et ne collecte que des journaux de plantage et des identifiants d’appareil pour bien fonctionner et continuer à s’améliorer. Ces données sont chiffrées pendant leur transfert et ne sont pas partagées avec des tiers. Consultez notre [Politique de confidentialité](/privacy) pour en savoir plus.",
      },
      {
        id: "delete",
        q: "Comment vous demander de supprimer des données ?",
        a: "Écrivez à [{email}](mailto:{email}) avec l’objet « Demande de confidentialité » en précisant le modèle de votre appareil. Nous vous répondrons dans un délai d’un mois.",
      },
    ],
  },
  {
    id: "help",
    title: "Dépannage",
    items: [
      {
        id: "crash",
        q: "L’application se ferme ou se bloque. Que faire ?",
        a: "Mettez l’application à jour depuis Google Play, redémarrez l’appareil et vérifiez qu’il reste de l’espace de stockage. Si le problème persiste, envoyez-nous le modèle de l’appareil et la version d’Android, et nous l’examinerons.",
      },
      {
        id: "sound",
        q: "Il n’y a pas de son. Que vérifier ?",
        a: "Vérifiez que le volume de l’appareil est monté et que le mode silencieux est désactivé, puis contrôlez le réglage de la musique dans l’application.",
      },
      {
        id: "contact",
        q: "Comment vous contacter ?",
        a: "Écrivez à [{email}](mailto:{email}) ou appelez le [{phone}](tel:{phoneHref}). Nous nous efforçons de répondre sous deux jours ouvrés.",
      },
    ],
  },
];

const privacy: LegalDoc = {
  title: "Politique de confidentialité",
  summary:
    "Cette politique explique quelles informations nous collectons via l’application {app} et le site illogan.app, pourquoi nous les collectons et quels choix s’offrent à vous. L’application est destinée aux jeunes enfants : nous limitons donc la collecte de données au minimum nécessaire pour la faire fonctionner et l’améliorer.",
  sections: [
    {
      id: "who-we-are",
      title: "Qui sommes-nous ?",
      blocks: [
        "{app} et ce site sont proposés par **{company}** (« nous »), {address}, Royaume-Uni. Nous sommes le responsable du traitement des informations décrites dans cette politique.",
        "Vous pouvez nous contacter à [{email}](mailto:{email}) ou au [{phone}](tel:{phoneHref}).",
      ],
    },
    {
      id: "at-a-glance",
      title: "La confidentialité en bref",
      blocks: [
        {
          list: [
            "L’application n’affiche pas de publicité.",
            "Nous ne demandons aux enfants ni leur nom, ni leur adresse e-mail, ni leurs photos, ni leur localisation.",
            "Nous ne vendons pas d’informations personnelles et ne les partageons pas avec des tiers à leurs propres fins.",
            "L’application ne collecte que des données techniques limitées (journaux de plantage et identifiants d’appareil) pour fonctionner et comprendre, de façon agrégée, comment elle est utilisée.",
            "Les achats sont gérés par Google Play. Nous ne voyons jamais les données de votre carte bancaire.",
            "Ce site n’utilise pas de cookies de mesure d’audience ni de publicité.",
          ],
        },
      ],
    },
    {
      id: "children",
      title: "Confidentialité des enfants",
      blocks: [
        "{app} est conçue pour les enfants de 3 à 6 ans, accompagnés d’un parent, d’un proche ou d’un enseignant. Nous respectons le [Règlement Familles de Google Play]({playFamiliesPolicy}) et concevons l’application en tenant compte du code britannique de conception adaptée à l’âge (Children’s Code).",
        "Nous ne demandons pas aux enfants de créer un compte ni de saisir des informations personnelles, et l’application ne propose ni messagerie, ni fonctions sociales, ni liens vers des réseaux sociaux pour les enfants.",
        "Aux États-Unis, nous ne collectons pas sciemment d’informations personnelles auprès d’enfants de moins de 13 ans, en dehors des données techniques limitées décrites ci-dessous, que nous utilisons uniquement pour le fonctionnement interne de l’application, conformément à la loi COPPA (Children’s Online Privacy Protection Act).",
        "Les parents et tuteurs peuvent nous demander à tout moment quelles informations concernent l’appareil de leur enfant et nous demander de les supprimer. Voir [Vos droits](#rights).",
      ],
    },
    {
      id: "app-data",
      title: "Informations collectées par l’application",
      blocks: [
        "Comme indiqué dans la section Sécurité des données de Google Play, l’application peut collecter :",
        {
          list: [
            "**Journaux de plantage** (informations et performances de l’application) : des détails techniques sur les erreurs, comme la version de l’application, le modèle de l’appareil et le moment où le problème s’est produit.",
            "**Identifiants de l’appareil ou autres** : un identifiant de l’installation ou de l’appareil, utilisé pour que l’application fonctionne correctement et pour mesurer, de façon agrégée, l’utilisation de ses fonctionnalités.",
          ],
        },
        "Nous utilisons ces informations uniquement pour fournir l’application, corriger les bugs, assurer sa stabilité et améliorer les activités d’apprentissage. Nous ne les utilisons pas à des fins publicitaires et ne les combinons pas avec d’autres informations pour identifier un enfant.",
        "Ces données sont chiffrées pendant leur transfert et ne sont pas partagées avec d’autres entreprises ou organisations. Les réglages du jeu, comme la musique, la difficulté du vocabulaire et le verrouillage des boutons, servent uniquement à adapter le jeu sur l’appareil concerné.",
      ],
    },
    {
      id: "purchases",
      title: "Achats intégrés",
      blocks: [
        "Le téléchargement de l’application est gratuit et elle propose des achats intégrés facultatifs. Les paiements sont traités par Google Play selon ses propres conditions et sa [politique de confidentialité]({googlePrivacy}). Nous recevons la confirmation qu’un achat a eu lieu afin de débloquer le contenu, mais nous ne recevons jamais les données de votre carte bancaire.",
        "Pour éviter les achats non souhaités, vous pouvez activer la [validation des achats]({playPurchaseAuth}) et le [contrôle parental]({playParentalControls}) dans Google Play.",
      ],
    },
    {
      id: "website-data",
      title: "Informations collectées sur ce site",
      blocks: [
        {
          list: [
            "**Messages que vous nous envoyez.** Si vous nous écrivez par e-mail ou utilisez le formulaire de contact (qui ouvre votre propre messagerie), nous recevons votre nom, votre adresse e-mail et votre message. Nous les utilisons uniquement pour vous répondre et garder une trace de votre demande.",
            "**Journaux du serveur.** Notre hébergeur traite automatiquement des données techniques, comme votre adresse IP, le type de navigateur et les pages demandées, pour diffuser le site et le protéger contre les abus.",
            "**Vidéo intégrée.** La vidéo de présentation est hébergée sur YouTube. Rien n’est chargé depuis YouTube tant que vous n’appuyez pas sur lecture ; ensuite, Google peut collecter des informations et déposer des cookies selon sa propre [politique de confidentialité]({googlePrivacy}). Consultez notre [Politique relative aux cookies](/cookies).",
          ],
        },
        "Le site n’utilise ni cookies de mesure d’audience, ni cookies publicitaires, ni traceurs, et aucun compte n’est nécessaire pour l’utiliser.",
      ],
    },
    {
      id: "legal-bases",
      title: "Sur quelles bases utilisons-nous vos informations ?",
      blocks: [
        "Conformément au RGPD britannique, nous nous appuyons sur les bases légales suivantes :",
        {
          list: [
            "**Intérêt légitime** : faire fonctionner, sécuriser et améliorer l’application et le site, et comprendre et corriger les plantages. Nous limitons ce traitement au minimum et redoublons de vigilance, car l’application est utilisée par des enfants.",
            "**Contrat** : vous fournir le contenu que vous avez acheté.",
            "**Consentement** : charger la vidéo YouTube lorsque vous appuyez sur lecture. Vous pouvez retirer votre consentement simplement en ne lançant pas la vidéo.",
            "**Obligation légale** : lorsque la loi nous impose de conserver ou de communiquer des informations.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      title: "Avec qui partageons-nous les informations ?",
      blocks: [
        "Nous ne vendons pas d’informations personnelles. Nous les partageons uniquement avec :",
        {
          list: [
            "des prestataires qui hébergent notre site, notre messagerie et les services de l’application, et qui traitent les données selon nos instructions dans le cadre d’un contrat ;",
            "Google, en tant qu’exploitant de Google Play, qui gère les téléchargements et les paiements selon ses propres conditions ;",
            "les autorités publiques, lorsque la loi l’exige.",
          ],
        },
      ],
    },
    {
      id: "transfers",
      title: "Transferts internationaux",
      blocks: [
        "Certains de nos prestataires peuvent traiter des données hors du Royaume-Uni. Dans ce cas, nous nous appuyons sur les décisions d’adéquation britanniques ou sur des garanties appropriées, comme l’accord britannique de transfert international de données (IDTA) ou l’avenant britannique aux clauses contractuelles types de l’UE.",
      ],
    },
    {
      id: "retention",
      title: "Durée de conservation",
      blocks: [
        "Nous ne conservons les informations que le temps nécessaire aux finalités décrites ci-dessus. Les journaux de plantage et les données de diagnostic sont supprimés ou anonymisés dès qu’ils ne sont plus utiles au bon fonctionnement de l’application. Les e-mails d’assistance sont conservés jusqu’à 24 mois après notre dernier échange, sauf si une obligation légale nous impose de les garder plus longtemps.",
      ],
    },
    {
      id: "security",
      title: "Sécurité",
      blocks: [
        "Nous protégeons les informations grâce au chiffrement pendant les transferts, à des contrôles d’accès et à des prestataires soigneusement choisis. Aucun système n’est totalement sûr : contactez-nous immédiatement si vous pensez qu’un problème est survenu.",
      ],
    },
    {
      id: "rights",
      title: "Vos droits",
      blocks: [
        "Selon votre lieu de résidence, vous pouvez nous demander :",
        {
          list: [
            "d’accéder aux informations personnelles que nous détenons sur vous ou sur votre enfant ;",
            "de les rectifier si elles sont inexactes ;",
            "de les supprimer ;",
            "de limiter leur utilisation ou de vous y opposer ;",
            "de vous en remettre une copie dans un format portable ;",
            "de cesser tout traitement fondé sur votre consentement, que vous pouvez retirer à tout moment.",
          ],
        },
        "Pour faire une demande, écrivez à [{email}](mailto:{email}) avec l’objet « Demande de confidentialité ». Si votre demande concerne les données de l’application, indiquez le modèle de l’appareil afin que nous retrouvions les bons enregistrements. Nous pourrons vous demander de confirmer votre identité et vous répondrons dans un délai d’un mois.",
        "Si notre réponse ne vous satisfait pas, vous pouvez déposer une réclamation auprès de l’autorité britannique de protection des données (ICO) sur [ico.org.uk]({ico}) ou auprès de l’autorité de votre pays ; en France, la Commission nationale de l’informatique et des libertés (CNIL).",
      ],
    },
    {
      id: "changes",
      title: "Modifications de cette politique",
      blocks: [
        "Nous pouvons mettre à jour cette politique lorsque l’application, nos services ou la loi évoluent. Nous modifierons la date indiquée en haut de cette page et, en cas de changement important, nous vous en informerons dans l’application ou sur ce site.",
      ],
    },
    {
      id: "contact",
      title: "Nous contacter",
      blocks: [
        "**{company}**, {address}, Royaume-Uni.",
        "E-mail : [{email}](mailto:{email}). Téléphone : [{phone}](tel:{phoneHref}).",
      ],
    },
  ],
};

const terms: LegalDoc = {
  title: "Conditions d’utilisation",
  summary:
    "Ces conditions s’appliquent à l’application {app} et au site illogan.app. Merci de les lire avant de télécharger l’application. En téléchargeant ou en utilisant l’application ou le site, vous acceptez ces conditions.",
  sections: [
    {
      id: "about",
      title: "Qui sommes-nous ?",
      blocks: [
        "L’application et le site sont proposés par **{company}**, {address}, Royaume-Uni. Vous pouvez nous contacter à [{email}](mailto:{email}).",
      ],
    },
    {
      id: "who-can-use",
      title: "Qui peut utiliser l’application ?",
      blocks: [
        "L’application est conçue pour les enfants de 3 à 6 ans. Elle doit être téléchargée et configurée par un parent, un tuteur ou un enseignant, qui accepte ces conditions au nom de l’enfant et reste responsable de l’utilisation de l’application.",
        "Nous recommandons qu’un adulte reste à proximité, surtout avec les plus petits, et l’aide à équilibrer le temps d’écran avec d’autres activités.",
      ],
    },
    {
      id: "licence",
      title: "Votre licence d’utilisation",
      blocks: [
        "Nous vous accordons une licence personnelle, non exclusive, non transférable et révocable pour installer et utiliser l’application sur des appareils Android que vous possédez ou contrôlez, à des fins privées, non commerciales et éducatives, à la maison ou en classe.",
        "Les Conditions d’utilisation de Google Play s’appliquent également à votre téléchargement. Pour les questions qui vous concernent, vous et Google, ce sont les conditions de Google qui s’appliquent.",
      ],
    },
    {
      id: "purchases",
      title: "Achats et remboursements",
      blocks: [
        "Le téléchargement de l’application est gratuit. Certains contenus peuvent être proposés sous forme d’achats intégrés facultatifs. Les prix sont affichés dans Google Play avant l’achat et les paiements sont encaissés par Google.",
        "Les remboursements relèvent de la [politique de remboursement de Google Play]({playRefunds}). Cela ne porte pas atteinte à vos droits légaux de consommateur.",
        "Dans les [paramètres de Google Play]({playPurchaseAuth}), vous pouvez exiger un mot de passe, un code ou une empreinte pour chaque achat.",
      ],
    },
    {
      id: "acceptable-use",
      title: "Utilisation acceptable",
      blocks: [
        "Vous vous engagez à ne pas :",
        {
          list: [
            "copier, modifier, vendre ou redistribuer l’application ou son contenu, sauf dans la mesure permise par la loi ;",
            "désassembler ou décompiler l’application, ni tenter d’en extraire le code source, sauf lorsque la loi l’autorise ;",
            "utiliser l’application ou le site à des fins illicites ou d’une manière qui pourrait leur nuire ou nuire à d’autres utilisateurs ;",
            "tenter de contourner les mesures de sécurité ou d’accéder à nos systèmes sans autorisation.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Propriété intellectuelle",
      blocks: [
        "L’application, ses jeux, illustrations, sons et textes, ainsi que le nom {company}, nous appartiennent ou appartiennent à nos concédants et sont protégés par le droit de la propriété intellectuelle. Ces conditions ne vous accordent aucun droit sur eux en dehors de la licence ci-dessus.",
        "Google Play et le logo Google Play sont des marques de Google LLC.",
      ],
    },
    {
      id: "education",
      title: "Contenu éducatif",
      blocks: [
        "L’application est conçue pour accompagner les premiers apprentissages par le jeu. Elle ne remplace ni l’enseignement, ni les conseils de professionnels, ni l’implication des parents et des proches, et nous ne pouvons pas garantir de résultats d’apprentissage précis.",
      ],
    },
    {
      id: "availability",
      title: "Mises à jour et disponibilité",
      blocks: [
        "Nous pouvons mettre à jour l’application pour ajouter ou améliorer des contenus, corriger des problèmes ou respecter des obligations légales, et certaines mises à jour peuvent être nécessaires pour continuer à l’utiliser. Nous pouvons aussi modifier, suspendre ou retirer l’application ou le site. Si cela concerne un contenu que vous avez payé, vos droits légaux ne sont pas affectés.",
      ],
    },
    {
      id: "third-parties",
      title: "Services tiers",
      blocks: [
        "Le site renvoie vers Google Play et intègre une vidéo YouTube. Ces services sont exploités par Google selon ses propres conditions et sa politique de confidentialité, et nous n’en sommes pas responsables.",
      ],
    },
    {
      id: "liability",
      title: "Notre responsabilité",
      blocks: [
        "Nous fournissons l’application et le site avec un soin et une compétence raisonnables. Si nous ne respectons pas ces conditions, nous sommes responsables des pertes ou dommages que vous subissez et qui sont une conséquence prévisible de ce manquement. Nous ne sommes pas responsables des pertes imprévisibles, des pertes commerciales, ni des problèmes causés par l’utilisation de l’application sur un appareil qui ne répond pas à ses exigences.",
        "Si un contenu numérique que nous fournissons endommage un appareil ou un autre contenu numérique vous appartenant parce que nous n’avons pas fait preuve d’un soin et d’une compétence raisonnables, nous réparerons le dommage ou vous indemniserons.",
        "Rien dans ces conditions ne limite notre responsabilité en cas de décès ou de dommage corporel causé par notre négligence, en cas de fraude, ou pour toute autre question que la loi ne permet pas de limiter. Vos droits légaux de consommateur ne sont pas affectés.",
      ],
    },
    {
      id: "ending",
      title: "Fin des présentes conditions",
      blocks: [
        "Vous pouvez cesser d’utiliser l’application à tout moment en la désinstallant. Nous pouvons suspendre ou résilier votre licence en cas de manquement grave à ces conditions. Les clauses qui, par nature, doivent perdurer, comme la propriété intellectuelle et notre responsabilité, continueront de s’appliquer.",
      ],
    },
    {
      id: "law",
      title: "Droit applicable et litiges",
      blocks: [
        "Ces conditions sont régies par le droit de l’Angleterre et du pays de Galles. Vous pouvez saisir les tribunaux d’Angleterre et du pays de Galles ; si vous résidez en Écosse ou en Irlande du Nord, vous pouvez aussi saisir les tribunaux de votre région. Si vous résidez dans l’Union européenne, vous bénéficiez également des règles impératives de protection des consommateurs de votre pays de résidence.",
        "Merci de nous contacter d’abord afin que nous puissions essayer de régler tout problème à l’amiable.",
      ],
    },
    {
      id: "changes",
      title: "Modifications de ces conditions",
      blocks: [
        "Nous pouvons mettre à jour ces conditions de temps à autre. La version en vigueur figure toujours sur cette page, avec sa date de dernière mise à jour. Si une modification vous concerne de manière importante, nous vous en informerons dans l’application ou sur le site.",
      ],
    },
    {
      id: "contact",
      title: "Nous contacter",
      blocks: [
        "**{company}**, {address}, Royaume-Uni.",
        "E-mail : [{email}](mailto:{email}). Téléphone : [{phone}](tel:{phoneHref}).",
      ],
    },
  ],
};

const cookies: LegalDoc = {
  title: "Politique relative aux cookies",
  summary:
    "Cette politique explique comment illogan.app utilise les cookies et technologies similaires. En bref : notre site n’utilise ni cookies de mesure d’audience, ni cookies publicitaires, ni traceurs.",
  sections: [
    {
      id: "what-are-cookies",
      title: "Qu’est-ce qu’un cookie ?",
      blocks: [
        "Un cookie est un petit fichier texte qu’un site enregistre sur votre appareil. D’autres technologies, comme le stockage local ou les pixels de suivi, fonctionnent de manière comparable. Ils peuvent être indispensables au fonctionnement d’un site ou servir à mémoriser des préférences, mesurer l’audience ou afficher de la publicité.",
      ],
    },
    {
      id: "our-cookies",
      title: "Les cookies que nous utilisons",
      blocks: [
        "Nous ne déposons aucun cookie lorsque vous naviguez sur illogan.app et nous n’utilisons ni mesure d’audience, ni publicité, ni suivi des réseaux sociaux.",
        "Notre hébergeur traite des informations techniques, comme votre adresse IP, dans les journaux du serveur afin de diffuser le site en toute sécurité. Cela n’implique aucun dépôt de cookie sur votre appareil.",
      ],
    },
    {
      id: "youtube",
      title: "La vidéo YouTube intégrée",
      blocks: [
        "Notre vidéo de présentation est hébergée par YouTube, un service de Google. Nous utilisons le mode de confidentialité avancé de YouTube, et rien n’est chargé depuis YouTube tant que vous n’appuyez pas sur le bouton de lecture.",
        "Lorsque vous lancez la vidéo, YouTube peut déposer des cookies ou utiliser des technologies similaires sur votre appareil, par exemple pour mémoriser vos réglages de lecture, compter les vues et prévenir la fraude. La [politique de confidentialité de Google]({googlePrivacy}) explique leur fonctionnement. Si vous préférez, vous pouvez regarder la vidéo directement sur YouTube ou ne pas la lancer.",
      ],
    },
    {
      id: "app",
      title: "Les cookies dans l’application",
      blocks: [
        "L’application n’utilise pas de cookies de navigateur. Les données techniques limitées qu’elle collecte sont décrites dans notre [Politique de confidentialité](/privacy).",
      ],
    },
    {
      id: "control",
      title: "Comment contrôler les cookies",
      blocks: [
        "La plupart des navigateurs vous permettent de consulter, bloquer et supprimer les cookies dans leurs paramètres. Bloquer les cookies n’empêchera pas notre site de fonctionner. Vous trouverez plus de conseils sur le [site de l’ICO]({aboutCookies}) et sur celui de la CNIL.",
      ],
    },
    {
      id: "changes",
      title: "Modifications de cette politique",
      blocks: [
        "Si nous commençons un jour à utiliser de nouveaux cookies, par exemple pour la mesure d’audience, nous mettrons d’abord cette page à jour et demanderons votre consentement lorsque la loi l’exige.",
      ],
    },
    {
      id: "contact",
      title: "Nous contacter",
      blocks: ["Des questions sur les cookies ? Écrivez-nous à [{email}](mailto:{email})."],
    },
  ],
};

const fr: Dict = {
  meta: {
    home: {
      title: "Jeux éducatifs les nombres 123 – Apprendre à compter | Illogan",
      description:
        "Jeux pour apprendre à compter, approuvés par les enseignants, pour les 3-6 ans. 17 activités pour compter, tracer et comparer les nombres de 1 à 10. Sans publicité.",
    },
    support: {
      title: "Centre d’aide | Illogan",
      description:
        "Réponses sur Jeux éducatifs les nombres 123 : premiers pas, apprentissage, réglages, achats, confidentialité et dépannage.",
    },
    contact: {
      title: "Contact | Illogan",
      description:
        "Contactez l’équipe Illogan par e-mail, téléphone ou courrier. Questions, avis et propositions de partenariat bienvenus.",
    },
    privacy: {
      title: "Politique de confidentialité | Illogan",
      description:
        "Comment Illogan traite les informations dans Jeux éducatifs les nombres 123 et sur illogan.app, y compris la confidentialité des enfants.",
    },
    terms: {
      title: "Conditions d’utilisation | Illogan",
      description:
        "Les conditions qui s’appliquent lorsque vous téléchargez Jeux éducatifs les nombres 123 ou utilisez le site illogan.app.",
    },
    cookies: {
      title: "Politique relative aux cookies | Illogan",
      description:
        "Les cookies et technologies similaires utilisés par illogan.app, le fonctionnement de la vidéo YouTube et comment contrôler les cookies.",
    },
    notFound: {
      title: "Page introuvable | Illogan",
      description: "La page que vous cherchez est introuvable.",
    },
  },
  app: {
    name: "Jeux éducatifs les nombres 123",
    tagline: "Apprendre à compter",
  },
  common: {
    skipToContent: "Aller au contenu",
    getItOnGooglePlay: "Disponible sur Google Play",
    downloadFree: "Télécharger gratuitement",
    watchVideo: "Voir la vidéo",
    backHome: "Retour à l’accueil",
    learnMore: "En savoir plus",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mainNav: "Navigation principale",
    language: "Langue",
    chooseLanguage: "Choisir la langue",
    lastUpdated: "Dernière mise à jour",
    onThisPage: "Sur cette page",
    previous: "Précédent",
    next: "Suivant",
    goToSlide: "Aller à la diapositive {n}",
    slideStatus: "Diapositive {current} sur {total} : {caption}",
    newTab: "s’ouvre dans un nouvel onglet",
    backToTop: "Retour en haut",
    teacherApproved: "Approuvé par les enseignants",
    ratingAria: "Note de {rating} sur 5 sur Google Play",
    breadcrumbHome: "Accueil",
    breadcrumb: "Fil d’Ariane",
  },
  nav: {
    features: "Fonctionnalités",
    video: "Vidéo",
    screenshots: "Captures",
    parents: "Parents",
    faq: "FAQ",
    support: "Aide",
    contact: "Contact",
    getApp: "Télécharger",
  },
  hero: {
    badge: "Approuvé par les enseignants sur Google Play",
    title: "Apprendre à compter de 1 à 10",
    titleHighlight: "en s’amusant",
    subtitle:
      "{games} mini-jeux joyeux aident les enfants de 3 à 6 ans à compter, tracer, ranger et comparer les nombres. Consignes vocales claires, commandes simples et aucune publicité.",
    rating: "{rating} sur Google Play",
    ratings: "{count} notes",
    downloads: "{downloads} téléchargements",
    ages: "De 3 à 6 ans",
    chipGames: "{games} jeux",
    chipNoAds: "Sans publicité",
    chipVoice: "Guidé par la voix",
    deviceAlt: "{app}, en jeu : {caption}",
  },
  stats: {
    label: "L’application en chiffres",
    downloads: "Téléchargements sur Google Play",
    rating: "Note moyenne sur {count} avis",
    games: "Jeux éducatifs dans une seule appli",
    words: "Mots de la forêt à découvrir",
  },
  video: {
    eyebrow: "Regardez la vidéo",
    title: "Découvrez comment les petits apprennent à compter",
    subtitle:
      "Un rapide tour de l’application et de ses jeux pour compter, tracer et associer, pour savoir exactement à quoi jouera votre enfant.",
    play: "Lancer la vidéo",
    duration: "{duration}",
    consent:
      "La vidéo est lue depuis YouTube en mode de confidentialité avancé. YouTube peut déposer des cookies lorsque vous lancez la lecture. [Politique relative aux cookies](/cookies)",
    iframeTitle: "{app} : vidéo de présentation",
    posterAlt: "Cartes de nombres de l’application sur fond rouge",
    watchOnYoutube: "Regarder sur YouTube",
  },
  features: {
    eyebrow: "Dans l’application",
    title: "17 jeux pour donner du sens aux nombres",
    subtitle:
      "Chaque activité fait travailler une compétence mathématique de base, avec des personnages sympathiques, des couleurs vives et beaucoup d’encouragements.",
    items: [
      {
        title: "Tout compter",
        body: "Combien d’abeilles ? Combien de doigts ? Les enfants comptent des objets rigolos et touchent le bon nombre.",
      },
      {
        title: "Tracer et écrire",
        body: "Des flèches et des points indiquent où commencer, pour que les petits doigts apprennent à écrire chaque nombre de 1 à 10.",
      },
      {
        title: "Ranger et compléter",
        body: "Rangez les nombres dans l’ordre, placez-les sur la droite numérique et retrouvez ceux qui manquent.",
      },
      {
        title: "Comparer les quantités",
        body: "Beaucoup, peu ou aucun ? Les enfants comparent des groupes et repèrent où il y en a plus ou moins.",
      },
      {
        title: "Premiers mots",
        body: "Plus de 30 mots de la forêt, écrits en majuscules et lus à voix haute, pour enrichir le vocabulaire.",
      },
      {
        title: "Mémoire et attention",
        body: "Cartes à associer, points à relier, ombres à trouver et nuages à éclater : on s’entraîne sans se lasser.",
      },
    ],
    settingsTitle: "S’adapte à votre enfant",
    settingsBody:
      "Choisissez la difficulté du vocabulaire, activez ou coupez la musique et utilisez le verrouillage des boutons pour les plus petits.",
    settingsChips: ["Difficulté du vocabulaire", "Musique oui ou non", "Verrouillage des boutons"],
  },
  gallery: {
    eyebrow: "Captures d’écran",
    title: "Un coup d’œil à l’intérieur",
    subtitle:
      "Des écrans lumineux et épurés, pensés pour les petites mains. Faites glisser ou utilisez les flèches pour les découvrir.",
    label: "Captures de l’application",
    slides: {
      bees: "Combien d’abeilles y a-t-il ?",
      fingers: "Combien de doigts vois-tu ?",
      write: "Trace et écris les nombres",
      missing: "Trouve les nombres manquants",
      order: "Range les nombres dans l’ordre",
      fewer: "Où y a-t-il moins d’étoiles ?",
      numbers: "Apprends les nombres de 1 à 10",
      vocab: "Apprends de nouveaux mots",
    },
    alt: "Capture de {app} : {caption}",
  },
  teacher: {
    eyebrow: "Approuvé par les enseignants",
    title: "Très bien noté par les enseignants sur Google Play",
    body: "{app} porte le badge Approuvé par les enseignants de Google Play. Les applications de ce programme sont évaluées par des enseignants et des spécialistes du développement de l’enfant, qui examinent l’adaptation à l’âge, la qualité de l’expérience, l’apport éducatif et le plaisir de jeu.",
    criteria: ["Adapté à l’âge", "Expérience de qualité", "Enrichissant", "Amusant"],
    note: "Google Play classe l’application parmi les applications approuvées par les enseignants pour les enfants jusqu’à 5 ans.",
    link: "Comment fonctionne le programme",
    badgeAlt: "Badge Approuvé par les enseignants",
  },
  parents: {
    eyebrow: "Pour les parents et les enseignants",
    title: "Du temps d’écran en toute sérénité",
    subtitle:
      "Nous avons conçu l’application pour les plus jeunes : la sécurité et la simplicité passent avant tout.",
    items: [
      {
        title: "Sans publicité",
        body: "Aucune publicité n’interrompt les jeux : les enfants restent concentrés sur leurs apprentissages.",
      },
      {
        title: "La confidentialité d’abord",
        body: "Aucun compte ni donnée personnelle pour les enfants, et aucune donnée partagée avec des tiers.",
      },
      {
        title: "Pensée pour les petites mains",
        body: "De grands boutons, des écrans simples et des consignes vocales claires pour jouer en autonomie.",
      },
      {
        title: "Des réglages pour les adultes",
        body: "Réglez la difficulté du vocabulaire, la musique et le verrouillage des boutons selon chaque enfant.",
      },
      {
        title: "Règlement Familles",
        body: "Engagés à respecter le Règlement Familles de Google Play pour les applications destinées aux enfants.",
      },
      {
        title: "Idéale en classe",
        body: "Les activités courtes s’intègrent facilement aux séances sur les nombres, aux ateliers et au travail en petits groupes.",
      },
    ],
    cta: "Lire notre Politique de confidentialité",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Les questions des parents",
    subtitle:
      "Des réponses rapides aux questions les plus fréquentes. Le Centre d’aide couvre aussi les réglages, les achats et le dépannage.",
    more: "Accéder au Centre d’aide",
    home: ["free", "ages", "ads", "data", "learn", "devices"],
    categories: faqCategories,
  },
  cta: {
    title: "Prêts à compter jusqu’à 10 ?",
    subtitle: "Téléchargez {app} gratuitement sur Google Play et commencez à jouer en quelques minutes.",
    note: "Téléchargement gratuit · Achats intégrés · De 3 à 6 ans",
  },
  footer: {
    tagline: "Des jeux de nombres ludiques qui aident les enfants de 3 à 6 ans à apprendre à compter.",
    app: "Application",
    help: "Aide",
    legal: "Informations légales",
    contact: "Contact",
    teacherApproved: "Approuvé par les enseignants",
    helpCentre: "Centre d’aide",
    contactUs: "Nous contacter",
    childrensPrivacy: "Confidentialité des enfants",
    rights: "© {year} {company}. Tous droits réservés.",
  },
  support: {
    eyebrow: "Centre d’aide",
    title: "Comment pouvons-nous vous aider ?",
    intro:
      "Des réponses sur l’application, l’apprentissage, les réglages, les achats et la confidentialité. Si vous ne trouvez pas ce que vous cherchez, nous sommes à un e-mail de vous.",
    topics: "Thèmes",
    stillNeedHelp: "Besoin d’aide supplémentaire ?",
    stillNeedHelpBody:
      "Envoyez-nous un message en précisant le modèle de votre appareil et la version d’Android, et nous vous répondrons.",
    emailUs: "Nous écrire",
    callUs: "Nous appeler",
    contactPage: "Page de contact",
    searchLabel: "Rechercher dans le Centre d’aide",
    searchPh: "Essayez « remboursement » ou « réglages »",
    noResults: "Aucune réponse ne correspond à votre recherche. Essayez un autre mot ou contactez-nous.",
    results: "Réponses trouvées : {n}",
  },
  contact: {
    eyebrow: "Contact",
    title: "Nous serions ravis d’avoir de vos nouvelles",
    intro:
      "Questions sur {app}, avis, idées de partenariat ou demandes de la presse : envoyez-nous un message et nous vous répondrons dès que possible.",
    emailLabel: "E-mail",
    emailNote: "Idéal pour l’assistance et vos avis",
    phoneLabel: "Téléphone",
    phoneNote: "Appel gratuit depuis les fixes et mobiles du Royaume-Uni",
    addressLabel: "Adresse",
    addressNote: "Adresse postale",
    formTitle: "Envoyez-nous un message",
    formIntro:
      "Remplissez le formulaire : votre messagerie s’ouvrira avec le message prêt à être envoyé.",
    name: "Votre nom",
    namePh: "Camille Martin",
    email: "Votre e-mail",
    emailPh: "camille@exemple.fr",
    topic: "Sujet",
    topics: [
      "Assistance de l’application",
      "Avis",
      "Achats",
      "Demande de confidentialité",
      "Partenariats",
      "Presse",
    ],
    message: "Message",
    messagePh: "Comment pouvons-nous vous aider ?",
    send: "Ouvrir la messagerie",
    privacyNote:
      "Nous utilisons vos coordonnées uniquement pour vous répondre. Consultez notre [Politique de confidentialité](/privacy).",
    responseTitle: "Délai de réponse",
    responseBody: "Nous nous efforçons de répondre sous deux jours ouvrés.",
    mailSubject: "Message depuis illogan.app",
  },
  legal: {
    privacy,
    terms,
    cookies,
    contactTitle: "Des questions sur cette page ?",
    contactBody: "Écrivez-nous à [{email}](mailto:{email}), nous serons ravis de vous aider.",
    related: "Pages associées",
  },
  notFound: {
    code: "404",
    title: "Oups ! Cette page a disparu",
    body: "La page que vous cherchez a peut-être été déplacée, ou n’a jamais existé. Comptons ensemble le chemin du retour.",
    home: "Retour à l’accueil",
    support: "Centre d’aide",
  },
};

export default fr;
