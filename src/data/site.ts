// Single source of truth for facts shown across the site, the structured data
// and the build scripts. Store facts were read from the public Google Play
// listing on 13 November 2026 and should be refreshed from time to time.

export const site = {
  brand: "Illogan",
  company: "ILLOGAN ENTERPRISES LTD",
  domain: "illogan.app",
  url: "https://illogan.app",

  // Google Play
  packageId: "com.Ilugon.counting.learning.numbers.tracing",
  playUrl:
    "https://play.google.com/store/apps/details?id=com.Ilugon.counting.learning.numbers.tracing",

  // Store facts (Google Play, 13 Nov 2026)
  rating: 4.5,
  ratingValue: "4.47",
  ratingCount: 6592,
  downloads: "1M+",
  games: 17,
  words: 30,
  ageMin: 3,
  ageMax: 6,
  contentRating: "PEGI 3",

  // Intro video (YouTube)
  youtubeId: "Dsbk6q-oWMA",
  videoDuration: "PT1M52S",
  videoDurationLabel: "1:52",
  videoUploadDate: "2021-04-11",

  // Contact details
  email: "info@illogan.app",
  phoneDisplay: "+44 800 820 3601",
  phoneHref: "+448008203601",
  address: {
    street: "186 Evering Road",
    city: "London",
    region: "England",
    postcode: "E5 8AJ",
    country: "United Kingdom",
    countryCode: "GB",
  },

  // Legal documents
  legalUpdated: "2026-11-13",
  copyrightYear: 2026,
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region}, ${site.address.postcode}`;

/** External help pages referenced in the support and legal content. */
export const links = {
  teacherApproved: "https://support.google.com/googleplay/answer/6209531",
  playRefunds: "https://support.google.com/googleplay/answer/2479637",
  playParentalControls: "https://support.google.com/googleplay/answer/1075738",
  playPurchaseAuth: "https://support.google.com/googleplay/answer/1626831",
  playFamiliesPolicy: "https://support.google.com/googleplay/android-developer/answer/9893335",
  googlePrivacy: "https://policies.google.com/privacy",
  youtubeTerms: "https://www.youtube.com/t/terms",
  ico: "https://ico.org.uk/make-a-complaint/",
  aboutCookies: "https://ico.org.uk/for-the-public/online/cookies/",
} as const;
