export type Language = 'en' | 'fil' | 'zh' | 'ja' | 'ko' | 'ar' | 'es';

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fil', label: 'Filipino', flag: '🇵🇭' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export interface Translations {
  nav: { home: string; about: string; services: string; portfolio: string; contact: string; quote: string };
  hero: { heading1: string; heading2: string; sub: string; cta1: string; cta2: string; labels: [string, string, string] };
  about: { tag: string; heading1: string; heading2: string; p1: string; cta: string };
  footer: { tagline: string; desc: string };
}

export const t: Record<Language, Translations> = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', portfolio: 'Portfolio', contact: 'Contact', quote: 'Get a Quote' },
    hero: {
      heading1: 'Designing Spaces.',
      heading2: 'Building Futures.',
      sub: 'FPA Design Consultancy delivers premium architectural design, interior design, and construction management services worldwide.',
      cta1: 'View Our Work',
      cta2: 'Get a Consultation',
      labels: ['Commercial Architecture', 'Residential Design', 'Modern Living'],
    },
    about: {
      tag: 'About the Firm',
      heading1: 'Architecture Rooted in',
      heading2: 'Purpose and Craft',
      p1: 'FPA Design Consultancy is a licensed architectural practice based in Baguio City, founded and led by Arch. Friendzel B. Pengi, UAP. We serve residential and commercial clients across the Philippines and internationally.',
      cta: 'Meet the Architect',
    },
    footer: {
      tagline: 'Designing Spaces. Building Futures.',
      desc: 'Licensed architectural firm based in Baguio City, serving clients in the Philippines and worldwide.',
    },
  },
  fil: {
    nav: { home: 'Tahanan', about: 'Tungkol Sa Amin', services: 'Mga Serbisyo', portfolio: 'Portfolio', contact: 'Makipag-ugnayan', quote: 'Kumuha ng Quote' },
    hero: {
      heading1: 'Nagdisenyo ng Espasyo.',
      heading2: 'Nagtatayo ng Kinabukasan.',
      sub: 'Ang FPA Design Consultancy ay nagbibigay ng premium na serbisyong arkitektura, interior design, at pamamahala ng konstruksiyon sa buong mundo.',
      cta1: 'Tingnan ang Aming Gawa',
      cta2: 'Kumuha ng Konsultasyon',
      labels: ['Komersyal na Arkitektura', 'Residentyal na Disenyo', 'Modernong Pamumuhay'],
    },
    about: {
      tag: 'Tungkol sa Kumpanya',
      heading1: 'Arkitektura na Nakatuon sa',
      heading2: 'Layunin at Kahusayan',
      p1: 'Ang FPA Design Consultancy ay isang lisensyadong arkitektura na kumpanya sa Baguio City, pinamumunuan ni Arch. Friendzel B. Pengi, UAP. Naglilingkod kami sa mga kliyenteng residentyal at komersyal sa Pilipinas at sa buong mundo.',
      cta: 'Makilala ang Arkitekto',
    },
    footer: {
      tagline: 'Nagdisenyo ng Espasyo. Nagtatayo ng Kinabukasan.',
      desc: 'Lisensyadong arkitektura na kumpanya sa Baguio City, naglilingkod sa mga kliyente sa Pilipinas at sa buong mundo.',
    },
  },
  zh: {
    nav: { home: '首页', about: '关于我们', services: '服务', portfolio: '作品集', contact: '联系我们', quote: '获取报价' },
    hero: {
      heading1: '设计空间。',
      heading2: '建造未来。',
      sub: 'FPA Design Consultancy 在全球提供优质的建筑设计、室内设计和施工管理服务。',
      cta1: '查看作品集',
      cta2: '预约咨询',
      labels: ['商业建筑', '住宅设计', '现代生活'],
    },
    about: {
      tag: '关于公司',
      heading1: '建筑设计源于',
      heading2: '目标与匠心',
      p1: 'FPA Design Consultancy 是一家位于菲律宾碧瑶市的持牌建筑事务所，由 Arch. Friendzel B. Pengi, UAP 创立并领导。我们服务于菲律宾及全球各地的住宅和商业客户。',
      cta: '了解建筑师',
    },
    footer: {
      tagline: '设计空间。建造未来。',
      desc: '总部位于碧瑶市的持牌建筑事务所，服务菲律宾及全球客户。',
    },
  },
  ja: {
    nav: { home: 'ホーム', about: '会社情報', services: 'サービス', portfolio: '実績', contact: 'お問い合わせ', quote: '見積もり依頼' },
    hero: {
      heading1: '空間をデザインする。',
      heading2: '未来を築く。',
      sub: 'FPA Design Consultancyは、建築設計・インテリアデザイン・施工管理のプレミアムサービスをグローバルに提供しています。',
      cta1: '実績を見る',
      cta2: '無料相談を予約',
      labels: ['商業建築', '住宅デザイン', 'モダンリビング'],
    },
    about: {
      tag: '事務所について',
      heading1: '目的と職人技に根ざした',
      heading2: '建築設計',
      p1: 'FPA Design Consultancyはフィリピン・バギオ市を拠点とする公認建築事務所で、Arch. Friendzel B. Pengi, UAPが設立・主宰しています。フィリピン国内外の住宅・商業クライアントにサービスを提供しています。',
      cta: '建築士について',
    },
    footer: {
      tagline: '空間をデザインする。未来を築く。',
      desc: 'バギオ市を拠点とする公認建築事務所。フィリピン国内外のお客様にサービスを提供しています。',
    },
  },
  ko: {
    nav: { home: '홈', about: '회사 소개', services: '서비스', portfolio: '포트폴리오', contact: '문의하기', quote: '견적 문의' },
    hero: {
      heading1: '공간을 디자인하다.',
      heading2: '미래를 짓다.',
      sub: 'FPA Design Consultancy는 건축 설계, 인테리어 디자인, 시공 관리 분야에서 전 세계 고객에게 프리미엄 서비스를 제공합니다.',
      cta1: '포트폴리오 보기',
      cta2: '상담 예약',
      labels: ['상업용 건축', '주거용 설계', '현대적 생활'],
    },
    about: {
      tag: '회사 소개',
      heading1: '목적과 장인정신에 뿌리를 둔',
      heading2: '건축 설계',
      p1: 'FPA Design Consultancy는 필리핀 바기오시에 위치한 공인 건축 사무소로, Arch. Friendzel B. Pengi, UAP가 창립하여 이끌고 있습니다. 필리핀 및 전 세계의 주거·상업 고객을 대상으로 서비스를 제공합니다.',
      cta: '건축가 소개',
    },
    footer: {
      tagline: '공간을 디자인하다. 미래를 짓다.',
      desc: '바기오시에 위치한 공인 건축 사무소로 필리핀과 전 세계 고객에게 서비스를 제공합니다.',
    },
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', portfolio: 'أعمالنا', contact: 'اتصل بنا', quote: 'احصل على عرض سعر' },
    hero: {
      heading1: 'نصمم الفضاء.',
      heading2: 'نبني المستقبل.',
      sub: 'تقدم FPA Design Consultancy خدمات التصميم المعماري وتصميم الديكور الداخلي وإدارة البناء على مستوى عالمي.',
      cta1: 'استعرض أعمالنا',
      cta2: 'احصل على استشارة',
      labels: ['العمارة التجارية', 'التصميم السكني', 'المعيشة العصرية'],
    },
    about: {
      tag: 'عن الشركة',
      heading1: 'عمارة متجذرة في',
      heading2: 'الهدف والإتقان',
      p1: 'FPA Design Consultancy هي شركة معمارية مرخصة ومقرها في مدينة باغيو بالفلبين، تأسست وتقودها Arch. Friendzel B. Pengi, UAP. نقدم خدماتنا للعملاء السكنيين والتجاريين في الفلبين وعلى الصعيد الدولي.',
      cta: 'تعرف على المعماري',
    },
    footer: {
      tagline: 'نصمم الفضاء. نبني المستقبل.',
      desc: 'شركة معمارية مرخصة في مدينة باغيو، تخدم عملاء في الفلبين وحول العالم.',
    },
  },
  es: {
    nav: { home: 'Inicio', about: 'Acerca de', services: 'Servicios', portfolio: 'Portafolio', contact: 'Contacto', quote: 'Solicitar Cotización' },
    hero: {
      heading1: 'Diseñando Espacios.',
      heading2: 'Construyendo Futuros.',
      sub: 'FPA Design Consultancy ofrece servicios premium de diseño arquitectónico, diseño de interiores y gestión de construcción a nivel mundial.',
      cta1: 'Ver Nuestro Trabajo',
      cta2: 'Obtener Consulta',
      labels: ['Arquitectura Comercial', 'Diseño Residencial', 'Vida Moderna'],
    },
    about: {
      tag: 'Sobre la Empresa',
      heading1: 'Arquitectura con Raíces en',
      heading2: 'Propósito y Artesanía',
      p1: 'FPA Design Consultancy es una firma de arquitectura licenciada con sede en Baguio City, Filipinas, fundada y dirigida por Arch. Friendzel B. Pengi, UAP. Atendemos clientes residenciales y comerciales en Filipinas e internacionalmente.',
      cta: 'Conoce al Arquitecto',
    },
    footer: {
      tagline: 'Diseñando Espacios. Construyendo Futuros.',
      desc: 'Firma de arquitectura licenciada en Baguio City, atendiendo clientes en Filipinas y en todo el mundo.',
    },
  },
};
