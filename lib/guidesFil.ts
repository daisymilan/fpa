import type { Guide } from "@/lib/guides";

// Filipino versions of selected guides, served at /fil/guides/<slug>. Same slugs as the English
// guides in lib/guides.ts; keep the facts in step with the English text when either changes.
export const filipinoGuides: Guide[] = [
  {
    slug: "building-permit-requirements-baguio-city",
    title: "Mga Requirement sa Building Permit sa Baguio City",
    metaTitle: "Building Permit sa Baguio City | FPA Design Consultancy",
    metaDescription:
      "Ano ang kailangan para sa building permit sa Baguio City: mga dokumento, signed and sealed na plano, clearances, ang proseso at kung gaano ito katagal.",
    excerpt:
      "Ang mga dokumento, plano at clearance na kailangan bago magpatayo sa Baguio City, at ang proseso mula locational clearance hanggang occupancy permit.",
    published: "2026-10-22",
    updated: "2026-10-22",
    readingMinutes: 7,
    intro:
      "Kailangan ng building permit ang bawat bagong bahay, extension o malaking renovation sa Baguio City bago magsimula ang trabaho. Itinatakda ito ng National Building Code of the Philippines (PD 1096), at sa Baguio, ang City Buildings and Architecture Office (CBAO) ang naglalabas ng permit. May sarili itong opisina na hiwalay sa City Hall. Inililista ng gabay na ito ang karaniwang kailangan sa aplikasyon at kung paano tumatakbo ang proseso. Nagbabago paminsan-minsan ang mga requirement, kaya laging alamin muna sa CBAO ang kasalukuyang checklist bago mag-file.",
    sections: [
      {
        heading: "Sino ang kailangang kumuha ng building permit?",
        paragraphs: [
          "Ayon sa Section 301 ng National Building Code, walang sinuman ang puwedeng magpatayo, magbago, mag-convert, maglipat o maggiba ng gusali nang walang building permit mula sa Building Official ng lokal na pamahalaan. Kasama rito ang mga bagong bahay, mga dagdag na bahagi, mga structural na pagbabago, at karamihan ng renovation na nagbabago sa pader, sahig o bubong.",
          "Ang pagpapatayo nang walang permit ay puwedeng mauwi sa multa, stop-work order, at problema sa hinaharap, halimbawa kapag kumukuha na ng occupancy permit, nagpapakabit ng kuryente at tubig, o nagbebenta ng property.",
        ],
      },
      {
        heading: "Mga dokumentong karaniwang kailangan",
        list: [
          "Ang building permit application form, pirmado ng may-ari at ng mga lisensyadong propesyonal na responsable sa bawat bahagi ng disenyo.",
          "Patunay na pag-aari ninyo ang lote o may karapatan kayong magpatayo rito: certified true copy ng titulo (TCT) at ang pinakabagong tax declaration at resibo ng real property tax. Kung hindi kayo ang may-ari, notarized na lease o deed of sale at nakasulat na pahintulot ng may-ari.",
          "Locational (zoning) clearance mula sa City Planning office, na nagpapatunay na pinapayagan ang gusali sa zone na iyon.",
          "Mga plano at dokumentong signed and sealed ng mga lisensyadong propesyonal: architectural, structural (civil), electrical, sanitary at plumbing, at mechanical kung kailangan, kasama ang specifications, bill of materials at cost estimate.",
          "Fire Safety Evaluation Clearance (FSEC) mula sa Bureau of Fire Protection.",
          "Kung hindi kayo makapipirma mismo, Special Power of Attorney (SPA) para sa inyong representative.",
          "Kopya ng PRC ID at professional tax receipt ng mga propesyonal.",
        ],
        note:
          "Nakalista rin sa checklist ng CBAO ng Baguio ang mga item tulad ng zoning compliance certificate, waste disposal certificate mula sa City Environment and Parks Management Office (CEPMO), construction logbook at tarpaulin, at construction safety and health program. Humingi po sa CBAO ng pinakabagong bersyon bago mag-file.",
      },
      {
        heading: "Bakit kailangang signed and sealed ang mga plano",
        paragraphs: [
          "Mga lisensyadong propesyonal lang ang puwedeng pumirma at mag-seal ng mga planong isusumite para sa permit: isang PRC-licensed na arkitekto para sa architectural documents (Republic Act 9266), at mga lisensyadong civil, electrical, sanitary at mechanical engineer para sa kani-kanilang bahagi. Hindi ito puwedeng pirmahan ng draftsman o contractor bilang kapalit ng arkitekto, at tatanggihan ng Building Official ang set na hindi maayos na signed and sealed.",
        ],
      },
      {
        heading: "Mga dapat suriin sa lote sa Baguio",
        paragraphs: [
          "Dahil sa terrain at klima ng Baguio, may ilang pagsusuri na lalong mahalaga bago magsimula ang disenyo:",
        ],
        list: [
          "Slope at lupa: maraming lote sa Baguio ang matarik. Kailangang idisenyo ang mga retaining wall, pundasyon at drainage para sa slope, at kadalasang sulit magpa-soil investigation.",
          "Mga puno: kung may puno sa lote, lalo na ang Benguet pine, kailangan ng pahintulot ng gobyerno para putulin o ilipat ito. Kadalasang mas madaling idisenyo ang bahay sa paligid ng mga puno.",
          "Daan at setback: alamin ang road right-of-way, mga easement, at ang kailangang setback sa inyong zone bago i-final ang puwesto ng bahay sa lote.",
          "Ulan at halumigmig: dahil sa mahabang tag-ulan sa Baguio, kailangan ng maingat na waterproofing, drainage ng bubong at bentilasyon.",
        ],
      },
      {
        heading: "Ang proseso, hakbang-hakbang",
        ordered: true,
        list: [
          "Disenyo: ihahanda ng inyong arkitekto ang mga plano at ico-coordinate ang mga drawing ng mga engineer.",
          "Locational clearance: mag-apply sa City Planning office.",
          "Fire safety: kumuha ng Fire Safety Evaluation Clearance mula sa Bureau of Fire Protection.",
          "Pagsusumite: i-file ang kumpletong set sa CBAO at bayaran ang na-assess na fees.",
          "Ebalwasyon: susuriin ng opisina ang architectural, structural, electrical, sanitary at iba pang dokumento, at puwedeng humingi ng mga pagwawasto.",
          "Paglabas ng permit: kapag naaprubahan, ilalabas ang building permit. Ipaskil ito sa site habang nagpapatayo.",
          "Pagkatapos: kapag tapos na ang konstruksiyon, mag-apply ng Certificate of Occupancy bago tumira sa bahay.",
        ],
      },
      {
        heading: "Gaano ito katagal",
        paragraphs: [
          "Karaniwang tumatagal nang mga 4–12 linggo ang proseso, depende sa kung gaano kakumpleto ang mga dokumento at kung gaano kaabala ang opisina. Ang kulang o hindi pirmadong dokumento ang pinakakaraniwang dahilan ng pagkaantala, kaya sulit na magsumite ng kumpleto at nasuring set sa unang pagkakataon.",
          "Kapag nailabas na, mawawalan ng bisa ang permit kung hindi nasimulan ang trabaho sa loob ng isang taon, o kung natigil o naiwan ang trabaho nang 120 araw.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kailangan ba ng building permit para sa renovation sa Baguio?",
        answer:
          "Kadalasan, oo. Kailangan ng permit ang mga renovation na nagbabago sa istruktura, pader, bubong, tubo o wiring. Karaniwang hindi na kailangan para sa maliliit na repair tulad ng pagpipintura o pagpapalit ng fixtures, pero magtanong po sa CBAO kung hindi sigurado.",
      },
      {
        question: "Puwede bang mag-apply ng building permit habang nasa abroad?",
        answer:
          "Opo. Puwedeng ihanda at i-coordinate ng inyong arkitekto ang mga dokumento, at puwedeng pumirma at mag-file para sa inyo ang isang representative na may Special Power of Attorney. Ang SPA na pinirmahan sa ibang bansa ay karaniwang kailangang ma-apostille o ma-acknowledge sa Philippine embassy o consulate.",
      },
      {
        question: "Magkano ang building permit fee?",
        answer:
          "Ina-assess ng Building Official ang fee batay sa floor area, uri ng konstruksiyon at gamit ng gusali, kaya iba-iba ito sa bawat proyekto. Humingi ng assessment kapag nagsumite, at maglaan ng hiwalay na badyet para sa professional fees ng mga plano.",
      },
    ],
    relatedServiceSlugs: ["building-permit-documentation", "architectural-design"],
    relatedLinks: [
      { href: "/fil/guides/house-construction-cost-baguio", label: "Magkano magpagawa ng bahay sa Baguio?" },
      { href: "/guides/building-on-sloping-lot-baguio", label: "Building on a sloping lot in Baguio (Ingles)" },
      { href: "/locations/baguio-city-architect", label: "Arkitekto sa Baguio City (Ingles)" },
    ],
  },
  {
    slug: "house-construction-cost-baguio",
    title: "Magkano Magpagawa ng Bahay sa Baguio?",
    metaTitle: "Magkano Magpagawa ng Bahay sa Baguio | FPA Design Consultancy",
    metaDescription:
      "Gastos sa pagpapagawa ng bahay sa Baguio ngayong 2026: presyo kada square meter, professional fee ng arkitekto, permit at mga nakapagpapataas ng gastos.",
    excerpt:
      "Presyo kada square meter ayon sa finish, magkano ang arkitekto, mga gastusing madalas makalimutan, at halimbawang budget para sa bahay ng pamilya.",
    published: "2026-10-22",
    updated: "2026-10-22",
    readingMinutes: 6,
    intro:
      "Ang tapat na sagot: depende ito sa laki ng bahay, sa finish at sa lote. Ibinibigay ng gabay na ito ang mga range na ginagamit sa pagpaplano ngayong 2026, ipinaliliwanag kung ano ang kakaiba sa Baguio, at may halimbawang computation para makapagtakda kayo ng makatotohanang budget bago makipag-usap sa contractor.",
    sections: [
      {
        heading: "Gastos sa konstruksiyon kada square meter (2026)",
        paragraphs: [
          "Ayon sa mga nailathalang estimate ngayong 2026 para sa mga bahay sa Pilipinas, ganito ang tantiyang range para sa konstruksiyon lang, kada square meter ng floor area:",
        ],
        list: [
          "Basic finish: mga ₱28,000–₱35,000 kada m²",
          "Standard / mid-range finish: mga ₱35,000–₱50,000 kada m²",
          "High-end finish: mga ₱50,000–₱75,000 kada m²",
          "Luxury: ₱75,000 kada m² pataas",
        ],
        note:
          "Pang-planning ang mga figure na ito, hindi quotation. Nagbabago ang presyo ng materyales, at puwedeng magkaiba nang malaki ang gastos ng iisang bahay sa dalawang magkaibang lote.",
      },
      {
        heading: "Bakit iba ang pagpapatayo sa Baguio",
        list: [
          "Lote na may slope: puwedeng madagdagan nang malaki ang structural cost dahil sa retaining wall, mas malalim na pundasyon, paghuhukay at drainage.",
          "Klima: dahil malamig at basa sa highlands, kailangan ng mas mahusay na waterproofing, bubong at pagkontrol sa halumigmig.",
          "Daan: dahil makipot ang mga kalsada at matarik ang mga site, puwedeng mas mabagal at mas mahal ang paghahakot ng materyales.",
          "Istruktura: kailangang sumunod ang disenyo sa structural code para sa lindol at malakas na hangin ng bagyo, na nakaaapekto sa frame at bubong.",
        ],
      },
      {
        heading: "Professional fee ng arkitekto",
        paragraphs: [
          "Ginagabayan ang mga bayad ng arkitekto sa Pilipinas ng 2010 Standards of Professional Practice para sa mga arkitekto (SPP Document 201 para sa pre-design services at SPP Document 202 para sa regular design services). Para sa kumpletong serbisyo sa disenyo at superbiyon, karaniwang nasa 8–12% ito ng kabuuang gastos sa konstruksiyon, depende sa uri, laki at pagiging kumplikado ng proyekto. Nag-aalok ang FPA Design Consultancy ng libreng unang konsultasyon at nagbibigay ng quotation na naka-itemize para sa inyong proyekto.",
        ],
      },
      {
        heading: "Mga gastusing madalas makalimutan",
        list: [
          "Mga permit at clearance (building permit, locational clearance, fire safety evaluation, occupancy permit)",
          "Mga engineering design: structural, electrical, sanitary at plumbing",
          "Soil investigation at paghahanda ng site, lalo na kung may slope",
          "Pagpapakabit ng tubig at kuryente",
          "Bakod, gate, driveway, landscaping at drainage sa labas ng bahay",
          "Contingency na mga 10–15% para sa pagbabago ng presyo at mga hindi inaasahan habang nagpapatayo",
        ],
      },
      {
        heading: "Halimbawang computation",
        paragraphs: [
          "Halimbawa, nagpaplano kayo ng dalawang-palapag na bahay ng pamilya na may 120 m² na floor area at standard finish na ₱40,000 kada m²:",
        ],
        list: [
          "Konstruksiyon: 120 m² × ₱40,000 = ₱4,800,000",
          "Disenyo at superbiyon ng arkitekto sa 8–12%: mga ₱384,000–₱576,000",
          "Contingency na 10%: mga ₱480,000",
          "Idagdag pa ang mga permit, engineering, pagpapakabit ng utilities at anumang site work, na depende sa lote",
        ],
        note:
          "Ipinapakita ng halimbawa kung paano binubuo ang budget. Hindi ito quotation. Mabibigyan kayo ng inyong arkitekto ng mas malapit na estimate kapag alam na ang lote at ang inyong mga pangangailangan.",
      },
      {
        heading: "Paano makokontrol ang gastos",
        list: [
          "Itakda ang budget at mga priyoridad bago magsimula ang disenyo, at ibahagi ito sa inyong arkitekto.",
          "Panatilihing compact ang floor plan. Bawat dagdag na square meter ay may gastos sa pagpapatayo at sa maintenance.",
          "Idisenyo ayon sa slope, hindi laban dito, para mabawasan ang paghuhukay at retaining wall.",
          "Kumuha ng bid mula sa mga lisensyadong contractor gamit ang parehong plano at bill of materials, para patas ang paghahambing.",
          "Iwasang baguhin ang disenyo kapag nagsimula na ang konstruksiyon. Ang mga pagbabago sa site ang pinakamahal.",
        ],
      },
    ],
    faqs: [
      {
        question: "Magkano ang 2-storey na bahay sa Baguio?",
        answer:
          "Depende ito sa floor area at finish. Bilang planning figure, mga ₱35,000–₱50,000 kada square meter ang standard-finish na bahay, kaya ang 120 m² na dalawang-palapag na bahay ay mga ₱4.2–₱6 milyon para sa konstruksiyon lang, hindi pa kasama ang design fees, permit at site work.",
      },
      {
        question: "Mas mura ba ang bumili ng house plan online?",
        answer:
          "Mas mura ang stock plan sa umpisa, pero hindi ito dinisenyo para sa inyong lote, slope o mga lokal na requirement, at kailangan pa rin itong i-adapt at ipa-sign and seal sa lisensyadong arkitekto at mga engineer bago makakuha ng permit. Kadalasang nakatitipid sa konstruksiyon ang disenyong ginawa para sa inyong lote.",
      },
      {
        question: "Libre ba ang estimate ninyo?",
        answer:
          "Nag-aalok ang FPA Design Consultancy ng libreng unang konsultasyon. Pagkatapos nito, makatatanggap kayo ng quotation na naka-itemize para sa disenyo ng inyong proyekto.",
      },
    ],
    relatedServiceSlugs: ["architectural-design", "construction-project-management"],
    relatedLinks: [
      { href: "/fil/guides/building-permit-requirements-baguio-city", label: "Mga requirement sa building permit sa Baguio City" },
      { href: "/guides/architect-fees-philippines", label: "How much does an architect cost in the Philippines? (Ingles)" },
      { href: "/fil/portfolio", label: "Tingnan ang mga bahay na dinisenyo namin" },
    ],
  },
];

export function getFilipinoGuideBySlug(slug: string) {
  return filipinoGuides.find((g) => g.slug === slug);
}
