import type { FaqCategory, LegalDoc, PageMeta } from "@/i18n/types";

// English (British spelling). This file defines the dictionary shape; the
// Spanish and French files must provide exactly the same keys.

const meta: Record<
  "home" | "support" | "contact" | "privacy" | "terms" | "cookies" | "notFound",
  PageMeta
> = {
  home: {
    title: "Learning Numbers Kids Games – Learn 123 Counting | Illogan",
    description:
      "Teacher Approved counting games for kids aged 3–6. 17 playful activities to count, trace and compare numbers 1 to 10. Ad-free. Free on Google Play.",
  },
  support: {
    title: "Help Centre | Illogan",
    description:
      "Answers about Learning Numbers Kids Games: getting started, learning, settings, purchases, privacy and troubleshooting.",
  },
  contact: {
    title: "Contact us | Illogan",
    description:
      "Get in touch with the Illogan team by email, phone or post. Questions, feedback and partnership enquiries are welcome.",
  },
  privacy: {
    title: "Privacy Policy | Illogan",
    description:
      "How Illogan handles information in Learning Numbers Kids Games and on illogan.app, including our approach to children’s privacy.",
  },
  terms: {
    title: "Terms of Use | Illogan",
    description:
      "The terms that apply when you download Learning Numbers Kids Games or use the illogan.app website.",
  },
  cookies: {
    title: "Cookie Policy | Illogan",
    description:
      "Which cookies and similar technologies illogan.app uses, how the embedded YouTube video works and how to control cookies.",
  },
  notFound: {
    title: "Page not found | Illogan",
    description: "The page you were looking for could not be found.",
  },
};

const faqCategories: FaqCategory[] = [
  {
    id: "start",
    title: "Getting started",
    items: [
      {
        id: "download",
        q: "How do I download the app?",
        a: "Open [Google Play]({playUrl}) on your Android phone or tablet, or tap any Google Play button on this site, then tap **Install**. The app is free to download.",
      },
      {
        id: "devices",
        q: "Which devices does it work on?",
        a: "The app is available for Android phones and tablets through Google Play. A tablet gives little hands the most room to play.",
      },
      {
        id: "ages",
        q: "What age is it for?",
        a: "It is designed for children aged 3 to 6, from preschool to the first years of school. Google Play lists it as Teacher Approved for children up to 5.",
      },
      {
        id: "reading",
        q: "Does my child need to read?",
        a: "No. Clear voice instructions and pictures guide every activity. Words appear in capital letters next to the pictures, which also helps children who are starting to recognise words.",
      },
    ],
  },
  {
    id: "learning",
    title: "Learning and games",
    items: [
      {
        id: "learn",
        q: "What will my child learn?",
        a: "Numbers from 1 to 10: recognising, counting, writing and ordering them, completing number series and comparing quantities (many, few and none). There are also more than 30 words about the forest, plus matching, memory and shadow games that build attention and visual skills.",
      },
      {
        id: "games",
        q: "How many games are there?",
        a: "There are 17 activities, including counting with fingers, the number line, dot-to-dot, find the shadow, card matching, popping clouds and finding the missing numbers.",
      },
      {
        id: "languages",
        q: "Which languages are available?",
        a: "The app is available in several languages, including English, Spanish and French.",
      },
    ],
  },
  {
    id: "settings",
    title: "Settings and parental controls",
    items: [
      {
        id: "settings",
        q: "Which settings can I change?",
        a: "You can adjust the vocabulary difficulty, switch the music on or off and use the button lock, so the game suits your child’s level.",
      },
      {
        id: "screen-time",
        q: "How long should my child play?",
        a: "Short, regular sessions work best for young children. Play together when you can, talk about the numbers you see around you, and use tools such as Google Family Link if you want to set time limits.",
      },
    ],
  },
  {
    id: "purchases",
    title: "Purchases",
    items: [
      {
        id: "free",
        q: "Is the app free?",
        a: "Yes, the app is free to download. It also offers optional in-app purchases, which are paid through Google Play.",
      },
      {
        id: "restore",
        q: "How do I get my purchase on a new device?",
        a: "Purchases are linked to your Google account. Install the app on the new device using the same Google account. If something is missing, email us your Google Play order number.",
      },
      {
        id: "refund",
        q: "How do I request a refund?",
        a: "Payments are taken by Google Play, so refunds are handled by Google. Follow [Google Play’s refund guide]({playRefunds}). We’re happy to help if there is a problem with content you bought.",
      },
      {
        id: "block-purchases",
        q: "How do I stop my child from buying things?",
        a: "Turn on [purchase verification]({playPurchaseAuth}) in Google Play so a password, PIN or fingerprint is needed for every purchase, and set up [parental controls]({playParentalControls}) if you share the device.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and safety",
    items: [
      {
        id: "ads",
        q: "Does the app have ads?",
        a: "No. The app is ad-free, so children can play without interruptions.",
      },
      {
        id: "data",
        q: "Is my child’s data safe?",
        a: "We keep data to a minimum. The app does not ask children for personal information and only collects crash logs and device identifiers so that it works properly and keeps improving. This data is encrypted in transit and is not shared with third parties. Read our [Privacy Policy](/privacy) for details.",
      },
      {
        id: "delete",
        q: "How can I ask you to delete data?",
        a: "Email [{email}](mailto:{email}) with the subject “Privacy request” and tell us your device model. We will reply within one month.",
      },
    ],
  },
  {
    id: "help",
    title: "Troubleshooting",
    items: [
      {
        id: "crash",
        q: "The app closes or freezes. What can I do?",
        a: "Update the app from Google Play, restart the device and make sure there is some free storage space. If it keeps happening, email us your device model and Android version and we’ll look into it.",
      },
      {
        id: "sound",
        q: "There is no sound. What should I check?",
        a: "Make sure the device volume is turned up and the device is not on silent, then check the music setting in the app.",
      },
      {
        id: "contact",
        q: "How do I contact you?",
        a: "Email [{email}](mailto:{email}) or call [{phone}](tel:{phoneHref}). We aim to reply within two working days.",
      },
    ],
  },
];

const privacy: LegalDoc = {
  title: "Privacy Policy",
  summary:
    "This policy explains what information we collect through the {app} app and the illogan.app website, why we collect it and the choices you have. The app is made for young children, so we keep data collection to the minimum needed to run and improve it.",
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        "{app} and this website are provided by **{company}** (“we”, “us”), {address}, United Kingdom. We are the data controller for the information described in this policy.",
        "You can contact us at [{email}](mailto:{email}) or on [{phone}](tel:{phoneHref}).",
      ],
    },
    {
      id: "at-a-glance",
      title: "Privacy at a glance",
      blocks: [
        {
          list: [
            "The app does not show ads.",
            "Children are not asked for their name, email address, photos or location.",
            "We do not sell personal information or share it with third parties for their own purposes.",
            "The app collects only limited technical data (crash logs and device identifiers) to keep it working and to understand, in aggregate, how it is used.",
            "Purchases are handled by Google Play. We never see your payment card details.",
            "This website does not use analytics or advertising cookies.",
          ],
        },
      ],
    },
    {
      id: "children",
      title: "Children’s privacy",
      blocks: [
        "{app} is designed for children aged 3 to 6, used with the support of a parent, carer or teacher. We follow the [Google Play Families Policy]({playFamiliesPolicy}) and design the app with the UK Age Appropriate Design Code (the Children’s Code) in mind.",
        "We do not ask children to create an account or to enter personal information, and the app has no chat, social features or links to social networks for children.",
        "In the United States, we do not knowingly collect personal information from children under 13 other than the limited technical data described below, which we use only to support the internal operation of the app, in line with the Children’s Online Privacy Protection Act (COPPA).",
        "Parents and guardians can ask us at any time which information relates to their child’s device and ask us to delete it. See [Your rights](#rights).",
      ],
    },
    {
      id: "app-data",
      title: "Information the app collects",
      blocks: [
        "As declared in the app’s Data safety section on Google Play, the app may collect:",
        {
          list: [
            "**Crash logs** (app information and performance): technical details about errors, such as the app version, the device model and when the problem happened.",
            "**Device or other identifiers**: an identifier for the app installation or the device, used to make the app work properly and to measure, in aggregate, how its features are used.",
          ],
        },
        "We use this information only to provide the app, fix bugs, keep it stable and improve the learning activities. We do not use it for advertising, and we do not combine it with other information to identify a child.",
        "This data is encrypted in transit and is not shared with other companies or organisations. Game settings, such as music, vocabulary difficulty and the button lock, are used only to adapt the game on that device.",
      ],
    },
    {
      id: "purchases",
      title: "In-app purchases",
      blocks: [
        "The app is free to download and offers optional in-app purchases. Payments are processed by Google Play under Google’s own terms and [privacy policy]({googlePrivacy}). We receive confirmation that a purchase was made so that we can unlock the content, but we never receive your payment card details.",
        "To prevent unplanned purchases, you can turn on [purchase verification]({playPurchaseAuth}) and [parental controls]({playParentalControls}) in Google Play.",
      ],
    },
    {
      id: "website-data",
      title: "Information collected on this website",
      blocks: [
        {
          list: [
            "**Messages you send us.** If you email us or use the contact form (which opens your own email app), we receive your name, email address and message. We use them only to reply and to keep a record of your request.",
            "**Server logs.** Our hosting provider automatically processes technical data such as your IP address, browser type and the pages requested, to deliver the site and protect it against misuse.",
            "**Embedded video.** The intro video is hosted on YouTube. Nothing is loaded from YouTube until you press play; after that, Google may collect information and set cookies under its own [privacy policy]({googlePrivacy}). See our [Cookie Policy](/cookies).",
          ],
        },
        "The website does not use analytics, advertising or tracking cookies, and you do not need an account to use it.",
      ],
    },
    {
      id: "legal-bases",
      title: "Why we can use your information",
      blocks: [
        "Under the UK GDPR, we rely on the following legal bases:",
        {
          list: [
            "**Legitimate interests**: to run, secure and improve the app and the website, and to understand and fix crashes. We keep this processing minimal and take extra care because the app is used by children.",
            "**Contract**: to deliver content you have bought.",
            "**Consent**: to load the YouTube video when you press play. You can withdraw consent simply by not playing the video.",
            "**Legal obligation**: where we must keep or disclose information by law.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      title: "Who we share information with",
      blocks: [
        "We do not sell personal information. We share it only with:",
        {
          list: [
            "service providers that host our website, email and app services and process data on our instructions under a contract;",
            "Google, as the operator of Google Play, which handles app downloads and payments under its own terms;",
            "public authorities, where the law requires it.",
          ],
        },
      ],
    },
    {
      id: "transfers",
      title: "International transfers",
      blocks: [
        "Some of our service providers may process data outside the United Kingdom. When that happens, we rely on UK adequacy regulations or on appropriate safeguards, such as the UK International Data Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep information",
      blocks: [
        "We keep information only for as long as we need it for the purposes described above. Crash logs and diagnostic data are deleted or anonymised once they are no longer needed to keep the app working. Support emails are kept for up to 24 months after our last contact, unless we need them for longer to meet a legal obligation.",
      ],
    },
    {
      id: "security",
      title: "Security",
      blocks: [
        "We protect information with encryption in transit, access controls and carefully chosen providers. No system is completely secure, so please contact us straight away if you think something is wrong.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      blocks: [
        "Depending on where you live, you can ask us to:",
        {
          list: [
            "give you access to the personal information we hold about you or your child;",
            "correct it if it is inaccurate;",
            "delete it;",
            "restrict or object to how we use it;",
            "send you a copy in a portable format;",
            "stop processing based on consent, which you can withdraw at any time.",
          ],
        },
        "To make a request, email [{email}](mailto:{email}) with the subject “Privacy request”. If your request is about app data, please include the device model so we can find the right records. We may ask you to confirm your identity, and we will reply within one month.",
        "If you are not happy with our answer, you can complain to the UK Information Commissioner’s Office (ICO) at [ico.org.uk]({ico}) or on 0303 123 1113, or to the data protection authority in your country.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        "We may update this policy when the app, our services or the law change. We will update the date at the top of this page and, for significant changes, let you know in the app or on this website.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: [
        "**{company}**, {address}, United Kingdom.",
        "Email: [{email}](mailto:{email}). Phone: [{phone}](tel:{phoneHref}).",
      ],
    },
  ],
};

const terms: LegalDoc = {
  title: "Terms of Use",
  summary:
    "These terms apply to the {app} app and to the illogan.app website. Please read them before you download the app. By downloading or using the app or the website, you agree to these terms.",
  sections: [
    {
      id: "about",
      title: "About us",
      blocks: [
        "The app and the website are provided by **{company}**, {address}, United Kingdom. You can contact us at [{email}](mailto:{email}).",
      ],
    },
    {
      id: "who-can-use",
      title: "Who can use the app",
      blocks: [
        "The app is designed for children aged 3 to 6. It must be downloaded and set up by a parent, guardian or teacher, who accepts these terms on the child’s behalf and is responsible for how the app is used.",
        "We recommend that an adult stays close by, especially with the youngest children, and helps them balance screen time with other activities.",
      ],
    },
    {
      id: "licence",
      title: "Your licence to use the app",
      blocks: [
        "We give you a personal, non-exclusive, non-transferable and revocable licence to install and use the app on Android devices that you own or control, for private, non-commercial and educational use at home or in class.",
        "Google Play’s Terms of Service also apply to your download. Where they deal with matters between you and Google, Google’s terms apply to those matters.",
      ],
    },
    {
      id: "purchases",
      title: "Purchases and refunds",
      blocks: [
        "The app is free to download. Some content may be offered as optional in-app purchases. Prices are shown in Google Play before you buy, and payments are taken by Google.",
        "Refunds are handled under [Google Play’s refund policy]({playRefunds}). This does not affect your statutory rights as a consumer.",
        "You can require a password, PIN or fingerprint for every purchase in your [Google Play settings]({playPurchaseAuth}).",
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      blocks: [
        "You agree not to:",
        {
          list: [
            "copy, modify, sell or redistribute the app or its content, except as permitted by law;",
            "reverse engineer or decompile the app, or try to extract its source code, except where the law allows it;",
            "use the app or the website for any unlawful purpose or in a way that could harm them or other users;",
            "try to get around security features or access our systems without permission.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      blocks: [
        "The app, its games, illustrations, sounds and texts, and the {company} name belong to us or to our licensors and are protected by intellectual property laws. These terms do not give you any rights in them other than the licence above.",
        "Google Play and the Google Play logo are trademarks of Google LLC.",
      ],
    },
    {
      id: "education",
      title: "Educational content",
      blocks: [
        "The app is designed to support early learning through play. It does not replace teaching, professional advice or the involvement of parents and carers, and we cannot guarantee particular learning results.",
      ],
    },
    {
      id: "availability",
      title: "Updates and availability",
      blocks: [
        "We may update the app to add or improve content, fix problems or meet legal requirements, and some updates may be needed to keep using it. We may also change, suspend or withdraw the app or the website. If this affects content you have paid for, your statutory rights are not affected.",
      ],
    },
    {
      id: "third-parties",
      title: "Third-party services",
      blocks: [
        "The website links to Google Play and embeds a video from YouTube. These services are run by Google under its own terms and privacy policy, and we are not responsible for them.",
      ],
    },
    {
      id: "liability",
      title: "Our responsibility to you",
      blocks: [
        "We provide the app and the website with reasonable care and skill. If we break these terms, we are responsible for loss or damage you suffer that is a foreseeable result of our breach. We are not responsible for loss that was not foreseeable, for business losses, or for problems caused by using the app on a device that does not meet its requirements.",
        "If digital content we supply damages a device or other digital content belonging to you because we did not use reasonable care and skill, we will either repair the damage or pay you compensation.",
        "Nothing in these terms limits our liability for death or personal injury caused by our negligence, for fraud, or for anything else that cannot be limited by law. Your statutory rights as a consumer are not affected.",
      ],
    },
    {
      id: "ending",
      title: "Ending these terms",
      blocks: [
        "You can stop using the app at any time by uninstalling it. We may suspend or end your licence if you seriously break these terms. Sections that by their nature should continue, such as intellectual property and our responsibility to you, will continue to apply.",
      ],
    },
    {
      id: "law",
      title: "Law and disputes",
      blocks: [
        "These terms are governed by the law of England and Wales. You can bring proceedings in the courts of England and Wales; if you live in Scotland or Northern Ireland, you can also bring them in your local courts. If you live in the European Union, you also benefit from the mandatory consumer protection rules of your country of residence.",
        "Please contact us first so that we can try to resolve any problem informally.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      blocks: [
        "We may update these terms from time to time. The current version is always on this page with the date it was last updated. If a change materially affects you, we will let you know in the app or on the website.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: [
        "**{company}**, {address}, United Kingdom.",
        "Email: [{email}](mailto:{email}). Phone: [{phone}](tel:{phoneHref}).",
      ],
    },
  ],
};

const cookies: LegalDoc = {
  title: "Cookie Policy",
  summary:
    "This policy explains how illogan.app uses cookies and similar technologies. In short: our website does not use analytics, advertising or tracking cookies.",
  sections: [
    {
      id: "what-are-cookies",
      title: "What cookies are",
      blocks: [
        "Cookies are small text files that a website stores on your device. Similar technologies, such as local storage and tracking pixels, work in a comparable way. They can be essential for a site to work, or used to remember preferences, measure visits or show advertising.",
      ],
    },
    {
      id: "our-cookies",
      title: "Cookies we use",
      blocks: [
        "We do not set any cookies when you browse illogan.app, and we do not use analytics, advertising or social media tracking.",
        "Our hosting provider processes technical information, such as your IP address, in server logs so that it can deliver the site securely. This does not involve storing cookies on your device.",
      ],
    },
    {
      id: "youtube",
      title: "The embedded YouTube video",
      blocks: [
        "Our intro video is hosted by YouTube, a Google service. We use YouTube’s privacy-enhanced mode, and nothing is loaded from YouTube until you press the play button.",
        "When you press play, YouTube may store cookies or use similar technologies on your device, for example to remember playback settings, count views and prevent fraud. Google’s [privacy policy]({googlePrivacy}) explains how this works. If you prefer, you can watch the video on YouTube directly or skip it.",
      ],
    },
    {
      id: "app",
      title: "Cookies in the app",
      blocks: [
        "The app does not use browser cookies. The limited technical data it collects is described in our [Privacy Policy](/privacy).",
      ],
    },
    {
      id: "control",
      title: "How to control cookies",
      blocks: [
        "Most browsers let you view, block and delete cookies in their settings. Blocking cookies will not stop our website from working. You can find more guidance on the [ICO website]({aboutCookies}).",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        "If we ever start using new cookies, for example for analytics, we will update this page first and ask for your consent where the law requires it.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: ["Questions about cookies? Email [{email}](mailto:{email})."],
    },
  ],
};

const en = {
  meta,
  app: {
    name: "Learning Numbers Kids Games",
    tagline: "Learn 123 Counting",
  },
  common: {
    skipToContent: "Skip to content",
    getItOnGooglePlay: "Get it on Google Play",
    downloadFree: "Download free",
    watchVideo: "Watch the video",
    backHome: "Back to home",
    learnMore: "Learn more",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    language: "Language",
    chooseLanguage: "Choose language",
    lastUpdated: "Last updated",
    onThisPage: "On this page",
    previous: "Previous",
    next: "Next",
    goToSlide: "Go to slide {n}",
    slideStatus: "Slide {current} of {total}: {caption}",
    newTab: "opens in a new tab",
    backToTop: "Back to top",
    teacherApproved: "Teacher Approved",
    ratingAria: "Rated {rating} out of 5 on Google Play",
    breadcrumbHome: "Home",
    breadcrumb: "Breadcrumb",
  },
  nav: {
    features: "Features",
    video: "Video",
    screenshots: "Screenshots",
    parents: "Parents",
    faq: "FAQ",
    support: "Help",
    contact: "Contact",
    getApp: "Get the app",
  },
  hero: {
    badge: "Teacher Approved on Google Play",
    title: "Learn to count from 1 to 10,",
    titleHighlight: "the playful way",
    subtitle:
      "{games} cheerful mini-games help children aged 3 to 6 count, trace, order and compare numbers. Clear voice instructions, simple controls and no ads.",
    rating: "{rating} on Google Play",
    ratings: "{count} ratings",
    downloads: "{downloads} downloads",
    ages: "Ages 3–6",
    chipGames: "{games} games",
    chipNoAds: "No ads",
    chipVoice: "Voice guided",
    deviceAlt: "{app} gameplay: {caption}",
  },
  stats: {
    label: "The app in numbers",
    downloads: "Downloads on Google Play",
    rating: "Average rating from {count} reviews",
    games: "Learning games in one app",
    words: "Forest words to discover",
  },
  video: {
    eyebrow: "Watch the video",
    title: "See how little ones learn to count",
    subtitle:
      "A short tour of the app and its counting, tracing and matching games, so you know exactly what your child will play.",
    play: "Play the video",
    duration: "{duration}",
    consent:
      "The video plays from YouTube in privacy-enhanced mode. YouTube may set cookies once you press play. [Cookie Policy](/cookies)",
    iframeTitle: "{app}: intro video",
    posterAlt: "Number cards from the app on a red background",
    watchOnYoutube: "Watch on YouTube",
  },
  features: {
    eyebrow: "Inside the app",
    title: "17 games that make numbers make sense",
    subtitle:
      "Every activity practises one early maths skill, with friendly characters, bright colours and lots of encouragement.",
    items: [
      {
        title: "Count everything",
        body: "How many bees? How many fingers? Children count friendly objects and tap the matching number.",
      },
      {
        title: "Trace and write",
        body: "Arrows and dots show where to start, so little fingers learn to write every number from 1 to 10.",
      },
      {
        title: "Order and complete",
        body: "Put the numbers in order, place them on the number line and find the ones that are missing.",
      },
      {
        title: "Compare quantities",
        body: "Many, few or none? Children compare groups and spot where there are more or fewer.",
      },
      {
        title: "First words",
        body: "More than 30 forest words, shown in capital letters and read aloud, to help vocabulary grow.",
      },
      {
        title: "Memory and attention",
        body: "Card matching, dot-to-dot, find the shadow and popping clouds keep practice fresh and fun.",
      },
    ],
    settingsTitle: "Adapts to your child",
    settingsBody:
      "Choose the vocabulary difficulty, switch the music on or off and use the button lock for the youngest players.",
    settingsChips: ["Vocabulary difficulty", "Music on or off", "Button lock"],
  },
  gallery: {
    eyebrow: "Screenshots",
    title: "Take a peek inside",
    subtitle:
      "Bright, uncluttered screens designed for small hands. Swipe or use the arrows to explore.",
    label: "App screenshots",
    slides: {
      bees: "How many bees are there?",
      fingers: "How many fingers can you see?",
      write: "Trace and write the numbers",
      missing: "Find the missing numbers",
      order: "Put the numbers in order",
      fewer: "Where are there fewer stars?",
      numbers: "Learn the numbers from 1 to 10",
      vocab: "Learn new words",
    },
    alt: "Screenshot of {app}: {caption}",
  },
  teacher: {
    eyebrow: "Teacher Approved",
    title: "Rated highly by teachers on Google Play",
    body: "{app} carries Google Play’s Teacher Approved badge. Apps in the programme are reviewed by teachers and child-development specialists, who look at age-appropriateness, quality of experience, enrichment and delight.",
    criteria: ["Age-appropriate", "Quality experience", "Enriching", "Delightful"],
    note: "Google Play lists the app as Teacher Approved for children up to 5.",
    link: "How Teacher Approved works",
    badgeAlt: "Teacher Approved badge",
  },
  parents: {
    eyebrow: "For parents and teachers",
    title: "Screen time you can feel good about",
    subtitle:
      "We built the app for the youngest learners, so safety and simplicity come first.",
    items: [
      {
        title: "Ad-free play",
        body: "No adverts interrupt the games, so children stay focused on learning.",
      },
      {
        title: "Privacy first",
        body: "No accounts or personal details for children, and no data shared with third parties.",
      },
      {
        title: "Made for small hands",
        body: "Big buttons, simple screens and clear voice guidance let children play on their own.",
      },
      {
        title: "Settings for grown-ups",
        body: "Adjust the vocabulary difficulty, the music and the button lock to suit each child.",
      },
      {
        title: "Families Policy",
        body: "Committed to Google Play’s Families Policy for apps designed for children.",
      },
      {
        title: "Classroom friendly",
        body: "Short activities fit easily into number lessons, learning centres and small-group work.",
      },
    ],
    cta: "Read our Privacy Policy",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions from parents",
    subtitle:
      "Quick answers to the most common questions. Our Help Centre covers settings, purchases and troubleshooting too.",
    more: "Visit the Help Centre",
    home: ["free", "ages", "ads", "data", "learn", "devices"],
    categories: faqCategories,
  },
  cta: {
    title: "Ready to count to 10?",
    subtitle: "Download {app} free on Google Play and start playing in minutes.",
    note: "Free to download · In-app purchases · Ages 3–6",
  },
  footer: {
    tagline: "Playful number games that help children aged 3 to 6 learn to count.",
    app: "App",
    help: "Help",
    legal: "Legal",
    contact: "Contact",
    teacherApproved: "Teacher Approved",
    helpCentre: "Help Centre",
    contactUs: "Contact us",
    childrensPrivacy: "Children’s privacy",
    rights: "© {year} {company}. All rights reserved.",
  },
  support: {
    eyebrow: "Help Centre",
    title: "How can we help?",
    intro:
      "Answers about the app, learning, settings, purchases and privacy. If you can’t find what you need, we’re one email away.",
    topics: "Topics",
    stillNeedHelp: "Still need help?",
    stillNeedHelpBody:
      "Send us a message with your device model and Android version, and we’ll get back to you.",
    emailUs: "Email us",
    callUs: "Call us",
    contactPage: "Contact page",
    searchLabel: "Search the Help Centre",
    searchPh: "Try “refund” or “settings”",
    noResults: "No answers match your search. Try another word or get in touch with us.",
    results: "Answers found: {n}",
  },
  contact: {
    eyebrow: "Contact",
    title: "We’d love to hear from you",
    intro:
      "Questions about {app}, feedback, partnership ideas or press enquiries: send us a message and we’ll reply as soon as we can.",
    emailLabel: "Email",
    emailNote: "Best for support and feedback",
    phoneLabel: "Phone",
    phoneNote: "Free to call from UK landlines and mobiles",
    addressLabel: "Address",
    addressNote: "Postal address",
    formTitle: "Send us a message",
    formIntro: "Fill in the form and your email app will open with the message ready to send.",
    name: "Your name",
    namePh: "Jane Smith",
    email: "Your email",
    emailPh: "jane@example.com",
    topic: "Topic",
    topics: ["App support", "Feedback", "Purchases", "Privacy request", "Partnerships", "Press"],
    message: "Message",
    messagePh: "How can we help?",
    send: "Open email app",
    privacyNote: "We use your details only to reply. See our [Privacy Policy](/privacy).",
    responseTitle: "Response time",
    responseBody: "We aim to reply within two working days.",
    mailSubject: "Message from illogan.app",
  },
  legal: {
    privacy,
    terms,
    cookies,
    contactTitle: "Questions about this page?",
    contactBody: "Email us at [{email}](mailto:{email}) and we’ll be happy to help.",
    related: "Related pages",
  },
  notFound: {
    code: "404",
    title: "Oops! This page is missing",
    body: "The page you’re looking for may have moved or never existed. Let’s count our way back home.",
    home: "Back to home",
    support: "Help Centre",
  },
};

export type Dict = typeof en;
export default en;
