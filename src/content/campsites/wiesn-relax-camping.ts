import type { CampsiteConfig } from "../types";

const IMG = "/campsites/wiesn-relax-camping";

const wiesnRelaxCamping: CampsiteConfig = {
  name: "Wiesn-Relax-Camping Fam. Steiner",
  shortName: "Wiesn-Relax",
  slug: "wiesn-relax-camping",
  ort: "Ranten bei Murau",
  region: "Steiermark",
  brandKind: "Camping am Rantenbach",
  regionLong: "Ranten · Bezirk Murau · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Deine Auszeit am rauschenden Rantenbach",
  claimEmphasis: "am rauschenden Rantenbach",
  emailDetail: "euer ganzjährig geöffneter Wiesenplatz im Murautal",
  intro:
    "Eingebettet in eine weitläufige Wiese im ruhigen Ranten, direkt am rauschenden Rantenbach: hier findest du ebene, befestigte Stellplätze, einen neuen Sanitärbereich und das ganze Jahr über Platz zum Ankommen.",

  statement: {
    text: "Viel Raum, Ruhe und alles Wesentliche — mehr braucht es nicht, um sich wohlzufühlen.",
    emphasis: "Viel Raum, Ruhe",
  },

  pillars: [
    {
      title: "Freie Platzwahl auf der Wiese",
      text: "Großzügige, ebene und befestigte Stellflächen mit zusätzlicher Wiese von 60–80 m² — du wählst deinen Platz vor Ort frei nach Verfügbarkeit.",
      image: { src: `${IMG}/gallery-975766dc05.webp`, alt: "Befestigte Stellplätze mit Wiese und Bergblick beim Wiesn-Relax-Camping" },
    },
    {
      title: "Neuer Sanitärbereich",
      text: "Der neue Sanitärbereich bringt Dusche und WC, Strom- und Wasseranschlüsse an jedem Stellplatz und freies WLAN — gepflegt und gleich nebenan.",
      image: { src: `${IMG}/gallery-cbb5483451.webp`, alt: "Neuer Sanitärbereich in Holzoptik beim Wiesn-Relax-Camping" },
    },
    {
      title: "Am Bach, am Radweg",
      text: "Direkt am Platz rauscht der Rantenbach und führt ein Radweg vorbei — ein willkommener Halt an den Touren über Sölkpass und Obertauern.",
      image: { src: `${IMG}/gallery-bb2b291458.webp`, alt: "Radweg und Rantenbach direkt am Wiesn-Relax-Camping" },
    },
  ],

  usps: [
    "Ganzjährig geöffnet",
    "Befestigte Stellplätze",
    "Neuer Sanitärbereich",
    "Freies WLAN",
    "Glamping-Zelt zu mieten",
    "Direkt am Radweg",
  ],

  trust: {
    heading: "Hier gibt der Rantenbach den Takt vor",
    headingEmphasis: "der Rantenbach",
    intro:
      "Wiesn-Relax-Camping steht für eine naturnahe Auszeit mit offener, unkomplizierter Atmosphäre: viel Raum, Ruhe und alles Wesentliche für einen angenehmen Aufenthalt — persönlich geführt von Familie Steiner.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-dc544e0915.webp`, alt: "Wiesn-Relax-Camping: Stellplätze auf der Wiese mit Wohnmobil und Bergpanorama" },
  },

  breather: {
    image: { src: `${IMG}/gallery-ee9dd66369.webp`, alt: "Abendstimmung am Wiesn-Relax-Camping mit beleuchtetem Sanitärgebäude" },
    line: "Abends wird es still im Tal — Zeit, einfach anzukommen.",
  },

  camping: {
    heading: "Vielseitig campen in Ranten",
    intro:
      "Ob mit Wohnmobil, Caravan, Zelt oder auf zwei Rädern — bei uns ist jeder willkommen, der die Natur genießen und entspannen möchte. Für Zweiräder gibt es einen eigenen Zeltplatz auf der Wiese.",
    features: [
      {
        title: "Befestigte Stellplätze",
        text: "Ebene, befestigte Stellflächen mit zusätzlicher Wiese bieten Platz für Wohnmobil, Wohnwagen, Auto und Zelt — Anreise jederzeit, Platzwahl frei.",
        image: { src: `${IMG}/gallery-fa48a9cad3.webp`, alt: "Befestigte Stellplätze auf der Wiese beim Wiesn-Relax-Camping" },
      },
      {
        title: "Strom & Wasser am Platz",
        text: "An jedem Stellplatz findest du Strom- und Wasseranschluss; Grauwasser- und Toilettenentleerung sowie eine Abwaschmöglichkeit sind gleich vor Ort.",
        image: { src: `${IMG}/gallery-d574536612.webp`, alt: "Stellplatz mit Stromsäule am Wiesn-Relax-Camping" },
      },
      {
        title: "Glamping-Zelt zum Mieten",
        text: "Für mehr Komfort steht am Platz ein 10 m² großes Glamping-Zelt zur Miete bereit — einfach ankommen, schon steht dein Zuhause auf Zeit.",
        image: { src: `${IMG}/gallery-a5c7a39b71.webp`, alt: "Glamping-Bell-Zelt mit Liegestühlen auf der Wiese des Wiesn-Relax-Camping" },
      },
      {
        title: "Platz für jede Campingform",
        text: "Vom kurzen Zwischenstopp bis zum längeren Aufenthalt: großzügige Plätze für jede Campingform, auch saisonale Aufenthalte sind auf Anfrage möglich.",
        image: { src: `${IMG}/gallery-3d19eab549.webp`, alt: "Wohnmobile und Caravans auf den Stellplätzen beim Wiesn-Relax-Camping" },
      },
      {
        title: "Dein Platz im Grünen",
        text: "Stell dich mitten ins Grüne: Freies WLAN, Müllentsorgung und die Nutzung der gepflegten Sanitäranlagen sind bei jedem Stellplatz inklusive.",
        image: { src: `${IMG}/gallery-a5ac82adcb.webp`, alt: "Wohnmobil mit Campingstühlen im Grünen beim Wiesn-Relax-Camping" },
      },
      {
        title: "Wohnmobil, Caravan & Zelt",
        text: "Bei uns stehen Reisemobile, Caravans und Zelte einträchtig auf der Wiese — ein lebendiger, familiär geführter Platz mit Blick auf die bewaldeten Hänge.",
        image: { src: `${IMG}/gallery-c969cf59d7.webp`, alt: "Campingplatz mit Wohnmobilen und Caravans vor bewaldeten Hängen" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus ins Murautal",
    intro:
      "Direkt am Platz beginnt der Radweg, die Wanderregionen Krakau und Sölkpass liegen nah, und im Winter warten Pisten und Loipen — dein Basislager für jede Jahreszeit.",
    items: [
      {
        title: "Rad & Motorrad",
        text: "Ideal an den Strecken Sölkpass und Obertauern: ein willkommener Halt für Biker und Radler, mit Radtouren zum Rottenmanner Teich direkt vor der Tür.",
        image: { src: `${IMG}/gallery-90c44843b5.webp`, alt: "Zwei Gäste planen ihre Tour vor dem Caravan am Wiesn-Relax-Camping" },
      },
      {
        title: "Ankommen & durchatmen",
        text: "Liegestühle auf der Wiese, Bergblick und klare Luft — wer mag, erkundet von hier die Wanderwege rund um Krakau oder den Badeteich der Nachbargemeinde (8 km).",
        image: { src: `${IMG}/gallery-10eeb32920.webp`, alt: "Liegestuhl auf der Wiese mit Blick auf die bewaldeten Hänge beim Wiesn-Relax-Camping" },
      },
      {
        title: "Verleih & Nahversorgung",
        text: "Im Sommer leihst du Fahrräder, im Winter Skiausrüstung; nur 500 m entfernt sorgt der Gasthof Hammerschmied, dazu Lebensmittelgeschäft und Kaffeehaus im Ort.",
        image: { src: `${IMG}/gallery-44ea831757.webp`, alt: "Infopoint mit Prospekten am Sanitärgebäude des Wiesn-Relax-Camping" },
      },
    ],
  },

  anreise: {
    heading: "Über die Brücke zum Platz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Die Zufahrt führt über die Brücke zum Sportplatz — folge einfach der Beschilderung bis zum Campingbereich. Navi-Tipp: 8853 Ranten, Sporthausweg eingeben.",
      },
      {
        title: "Lage & Bahn",
        text: "Ranten liegt im Bezirk Murau in der Obersteiermark, über die Murtal Straße gut erreichbar; Bahnhof und Murtalbahn rund um Murau-Stolzalpe — die genaue Anfahrt stimmen wir gern mit dir ab.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus Ranten",
    headingEmphasis: "Ranten",
    intro: "Weite Wiese, Bergblick und die ruhige Atmosphäre am Rantenbach — ein paar Eindrücke von deinem Platz.",
    tag: "Ganzjährig geöffnet",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-a1f17b4a0c.webp`, alt: "Gäste entspannen in Liegestühlen am Sanitärgebäude des Wiesn-Relax-Camping" },
      { src: `${IMG}/gallery-456f4709f6.webp`, alt: "Abendlicht über dem Campingplatz und dem Murautal" },
      { src: `${IMG}/gallery-129da409be.webp`, alt: "Blick von einem Platz über die Wiese auf die Berge rund um Ranten" },
      { src: `${IMG}/gallery-33e1825ce2.webp`, alt: "Willkommen-Schild mit blühendem Oleander am Wiesn-Relax-Camping" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Wiesenplatz",
    headingEmphasis: "Wiesenplatz",
    intro:
      "Wähle Zeitraum und Personen — Familie Steiner meldet sich persönlich mit deiner Verfügbarkeit. Die Platzwahl triffst du frei vor Ort.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise pro Nacht für 2 Personen — Stellplatz € 14 plus € 8 je Erwachsene, Zeltplatz € 11 je Erwachsene; Kinder ermäßigt, zzgl. Tourismusabgabe € 2 ab 15 Jahren.",
    highlight: {
      title: "Ganzjährig geöffnet",
      text: "Das ganze Jahr für dich da — auch saisonale Aufenthalte sind auf Anfrage möglich.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 30, perExtraGuest: 8 },
      { id: "zeltplatz", label: "Zeltplatz", perNight: 22, perExtraGuest: 11 },
    ],
  },

  kontakt: {
    coords: { lat: 48.381025, lng: 15.69094 },
    tel: "+43 670 1894008",
    telHref: "tel:+436701894008",
    mail: "info@wiesn-relax-camping.at",
    adresse: "Sportplatzweg · 8853 Ranten · Steiermark",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Glamping-Zelt", href: "#camping" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default wiesnRelaxCamping;
