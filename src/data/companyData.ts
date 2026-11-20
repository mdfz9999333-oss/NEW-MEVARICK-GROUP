export interface ServiceDivision {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  formOption: string;
}

export type GalleryCategory =
  | 'All'
  | 'Office Cabins'
  | 'Multi-Storey Cabins'
  | 'Mobile Containers'
  | 'Security Cabins'
  | 'Jack-Leg Cabins'
  | 'Portable Toilets'
  | 'Factory Gallery'
  | 'Trading Gallery'
  | 'Logistics Gallery';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  subtitle: string;
  image: string;
  alt: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  sector: string;
  logo: string;
}

export interface LeaderMessage {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const COMPANY_INFO = {
  name: 'New Maverick Group',
  tagline: 'Your Trusted Partner in Portable Cabins & Industrial Solutions',
  email: 'SALES@NEW-MAVERICK.SITE',
  phoneDisplay: '+966 059 880 0688',
  phoneHref: 'tel:+966598800688',
  addressLines: [
    '2807 King Abdullah Ibn Abdulaziz Rd, King Faisal Dist.',
    'Unit No 2012, Riyadh 13215 - 8610',
    'Kingdom of Saudi Arabia',
  ],
  overview:
    'New Maverick Group specializes in providing high-quality portable cabins tailored to your specific project requirements. Our commitment to excellence extends beyond modular structures, encompassing a comprehensive suite of factory fabrication, specialized logistics, trading supplies, and industrial safety services to streamline your operations across Saudi Arabia.',
  visionStatement:
    'Aligned with Saudi Arabia’s Vision 2030, New Maverick Group is dedicated to supporting the Kingdom’s infrastructure growth, private-sector partnerships, and industrial modernization. We invest in fabrication quality, workforce capability, and dependable project execution to deliver lasting value across every sector we serve.',
};

export const KEY_METRICS = [
  {
    value: '500+',
    label: 'Projects Completed',
    context: 'Delivered across commercial, construction, and institutional sites',
  },
  {
    value: '450+',
    label: 'Trusted Clients',
    context: 'Contractors, industrial operators, and public-sector entities',
  },
  {
    value: '4',
    label: 'Core Divisions',
    context: 'Porta cabins, factory fabrication, logistics, and safety',
  },
  {
    value: 'KSA',
    label: 'Riyadh, Dammam & Jubail',
    context: 'Riyadh HQ operations with major port transport clearance',
  },
];

export const LEADERSHIP_MESSAGES: LeaderMessage[] = [
  {
    id: 'ceo',
    name: 'Mohammed Alothri',
    role: 'Chief Executive Officer',
    image: '/images/leadership/ceo-mohammed-alothri.jpg',
    quote:
      'As CEO, I am proud of our team’s dedication and innovation, which have fueled our success as portable cabin builders and turnkey industrial partners. With gratitude for our achievements and optimism for the future, we remain committed to leading with excellence, integrity, and dependable execution across every project.',
  },
  {
    id: 'gm',
    name: 'Farhan Khalid',
    role: 'General Manager',
    image: '/images/leadership/gm-farhan-khalid.jpg',
    quote:
      'As General Manager, I am proud to lead our dynamic team of portable cabin specialists, engineers, and logistics coordinators. Together, we have built strong operational momentum and lasting client trust. By continuing to collaborate, innovate, and uphold strict quality standards, we deliver reliable solutions tailored to our clients’ evolving requirements.',
  },
];

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'porta-cabin',
    number: '01',
    title: 'Porta Cabin Services',
    shortTitle: 'Porta Cabins',
    tagline: 'Modular, customizable spaces engineered for immediate deployment',
    description:
      'Our modular and customizable portable cabins are built to serve a broad spectrum of site and operational demands, from executive site offices and multi-storey complexes to temporary accommodations and sanitary facilities.',
    image: '/images/hero/service-portacabin.jpg',
    imageAlt: 'New Maverick Group modular portable office cabin with windows and entry steps',
    capabilities: [
      'Modular portable cabins',
      'Customized office cabins',
      'Temporary accommodation units',
      'Multi-storey cabin complexes',
      'Security guard cabins',
      'Portable toilets & ablution units',
      'Mobile containers & site studios',
      'Jack-leg cabins & portable rental camps',
    ],
    formOption: 'Porta Cabin Services',
  },
  {
    id: 'factory',
    number: '02',
    title: 'Factory Services',
    shortTitle: 'Factory Services',
    tagline: 'Precision steel framing, panel fabrication, and turnkey cabin assembly',
    description:
      'Our fabrication yard manufactures and assembles structural steel frames, insulated wall systems, interior staircases, and customized modular units engineered for durability and crane-ready transport.',
    image: '/images/gallery/factory-chassis-assembly.jpg',
    imageAlt: 'Technicians fabricating and assembling modular cabin steel frame in factory yard',
    capabilities: [
      'Modular structure fabrication',
      'Cabin manufacturing and assembly',
      'Structural steel frame welding & chassis prep',
      'Interior staircases, mezzanines & fit-out',
      'Insulated wall and roof panel installation',
      'Crane rigging and transport loading preparation',
    ],
    formOption: 'Factory Services',
  },
  {
    id: 'logistics',
    number: '03',
    title: 'Logistics Solutions',
    shortTitle: 'Logistics Solutions',
    tagline: 'Aramco-compliant and port-cleared heavy transport across KSA',
    description:
      'We coordinate heavy fleet and material movement across industrial corridors and seaports, ensuring portable cabins, containers, and industrial cargo arrive safely and on schedule.',
    image: '/images/gallery/logistics-port-flatbed.jpg',
    imageAlt: 'Flatbed transport truck operating on highway corridor',
    capabilities: [
      'Flatbed trucks (Aramco & non-Aramco sticker options)',
      'Dammam Port & Dialog Jubail Port cleared transport',
      'Standard low-bed trucks for heavy equipment',
      'Hydraulic low-bed trucks for oversized modular loads',
      'Forklifts with and without certified operators',
      'End-to-end site delivery & freight coordination',
    ],
    formOption: 'Logistics Solutions',
  },
  {
    id: 'safety',
    number: '04',
    title: 'Safety Services',
    shortTitle: 'Safety Services',
    tagline: 'Workplace protection, compliance equipment, and third-party certification',
    description:
      'Your operational safety is central to our turnkey model. We supply certified personal protective equipment, traffic barriers, risk assessments, safety training, and third-party inspection services.',
    image: '/images/hero/service-safety.jpg',
    imageAlt: 'Industrial safety helmet, protective gloves, goggles, and engineering blueprints',
    capabilities: [
      'Certified PPE & industrial safety equipment supply',
      'Safety Jersey barriers & site perimeter control',
      'Comprehensive site risk assessments',
      'Workforce safety training programs',
      'Third-party inspection and certification services',
      'Tower lights, generators & site safety accessories',
    ],
    formOption: 'Safety Services',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'quality',
    title: 'Quality Assurance',
    description:
      'We adhere to strict fabrication, structural, and service quality standards across every portable cabin, logistics dispatch, and safety deliverable.',
  },
  {
    id: 'customization',
    title: 'Customization',
    description:
      'Every portable cabin and modular complex can be configured—from layout and glazing to electrical fit-out and cladding—to match your exact site requirements.',
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description:
      'Count on dependable scheduling, Aramco and major Saudi port clearance, and disciplined on-time delivery across projects of every scale.',
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Solutions',
    description:
      'Beyond portable cabins, New Maverick Group provides a coordinated single-partner model spanning factory fabrication, safety, equipment trading, and heavy logistics.',
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Office Cabins',
  'Multi-Storey Cabins',
  'Mobile Containers',
  'Security Cabins',
  'Jack-Leg Cabins',
  'Portable Toilets',
  'Factory Gallery',
  'Trading Gallery',
  'Logistics Gallery',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Porta Cabin Gallery
  {
    id: 'gal-office-1',
    title: 'Glazed Container Site Office',
    category: 'Office Cabins',
    subtitle: 'Full-height sliding glass partition with bright workspace interior',
    image: '/images/gallery/office-cabins.jpg',
    alt: 'Converted orange container office cabin with glass frontage and conference interior',
  },
  {
    id: 'gal-office-2',
    title: 'Open-Side Modular Office Pod',
    category: 'Office Cabins',
    subtitle: 'Compact executive workstation container with acoustic interior finish',
    image: '/images/hero/office-cutaway.jpg',
    alt: 'Charcoal container workstation office with desk and clean white interior',
  },
  {
    id: 'gal-multi-1',
    title: 'Two-Storey Modular Building',
    category: 'Multi-Storey Cabins',
    subtitle: 'Stacked steel modular complex with external staircase and terrace deck',
    image: '/images/gallery/multi-storey-cabins.jpg',
    alt: 'Black two-storey container complex with exterior staircase and upper terrace',
  },
  {
    id: 'gal-multi-2',
    title: 'Architectural Multi-Level Unit',
    category: 'Multi-Storey Cabins',
    subtitle: 'Dual-level glazed modular configuration for administrative hubs',
    image: '/images/hero/hero-multistorey.jpg',
    alt: 'Two-storey modular container office featuring panoramic corner windows and balcony',
  },
  {
    id: 'gal-mobile-1',
    title: 'Mobile Container Office',
    category: 'Mobile Containers',
    subtitle: 'Relocatable steel container converted with wide glazed access doors',
    image: '/images/gallery/mobile-containers.jpg',
    alt: 'Slate grey mobile container cabin with sliding glass doors and furnished interior',
  },
  {
    id: 'gal-mobile-2',
    title: 'Multi-Unit Modular Lounge',
    category: 'Mobile Containers',
    subtitle: 'Bright collaborative modular interior with panoramic glazing',
    image: '/images/hero/modular-lounge.jpg',
    alt: 'Yellow and multi-color modular container lounge with glass facade',
  },
  {
    id: 'gal-security-1',
    title: 'Site Security Guard Cabins',
    category: 'Security Cabins',
    subtitle: 'Multi-unit perimeter security booths with 360-degree visibility windows',
    image: '/images/gallery/security-cabins.jpg',
    alt: 'Row of manufactured security guard cabins with wrap-around visibility windows',
  },
  {
    id: 'gal-jackleg-1',
    title: 'Heavy-Duty Jack-Leg Cabin',
    category: 'Jack-Leg Cabins',
    subtitle: 'Elevated corner-post jack-leg cabin suited for uneven site terrain',
    image: '/images/gallery/jack-leg-cabins.jpg',
    alt: 'Grey modular jack-leg site cabin with reinforced corner posts and steel door',
  },
  {
    id: 'gal-toilet-1',
    title: 'Multi-Stall Portable Toilets',
    category: 'Portable Toilets',
    subtitle: 'Hygienic multi-cubicle mobile sanitary block for project workforces',
    image: '/images/gallery/portable-toilets.jpg',
    alt: 'Six-bay portable toilet container block with individual stall doors',
  },

  // Factory Gallery
  {
    id: 'gal-factory-1',
    title: 'Structural Steel Frame Fabrication',
    category: 'Factory Gallery',
    subtitle: 'Precision-welded heavy-gauge steel base and wall framing',
    image: '/images/gallery/factory-steel-frame.jpg',
    alt: 'Fabricator inspecting welded steel floor frame grid in factory yard',
  },
  {
    id: 'gal-factory-2',
    title: 'Modular Chassis & Frame Assembly',
    category: 'Factory Gallery',
    subtitle: 'Full-scale portal frame assembly with anti-corrosion base coating',
    image: '/images/gallery/factory-chassis-assembly.jpg',
    alt: 'Fabrication crew assembling steel frame and treated base deck of modular cabin',
  },
  {
    id: 'gal-factory-3',
    title: 'Interior Mezzanine & Staircase',
    category: 'Factory Gallery',
    subtitle: 'Custom-fabricated steel staircase and upper landing railings',
    image: '/images/gallery/factory-mezzanine-stairs.jpg',
    alt: 'White powder-coated steel staircase and handrail assembly inside modular structure',
  },
  {
    id: 'gal-factory-4',
    title: 'Crane Loading onto Flatbed',
    category: 'Factory Gallery',
    subtitle: 'Finished multi-window cabin rigged and loaded for site dispatch',
    image: '/images/gallery/factory-truck-loading.jpg',
    alt: 'Mobile crane lowering finished modular office cabin onto heavy transport truck',
  },
  {
    id: 'gal-factory-5',
    title: 'Heavy Hoist Rigging & Placement',
    category: 'Factory Gallery',
    subtitle: 'Balanced four-point lift of insulated modular accommodation unit',
    image: '/images/gallery/factory-crane-hoisting.jpg',
    alt: 'Crane hoisting white portable cabin with balanced spreader cables',
  },
  {
    id: 'gal-factory-6',
    title: 'Completed Insulated Site Units',
    category: 'Factory Gallery',
    subtitle: 'Finished sandwich-panel portable units staged for client handover',
    image: '/images/gallery/factory-finished-cabins.jpg',
    alt: 'Completed insulated white panel portable cabins staged outdoors',
  },

  // Trading Gallery
  {
    id: 'gal-trading-1',
    title: 'Industrial & Storage Containers',
    category: 'Trading Gallery',
    subtitle: 'ISO shipping and storage containers available for supply and modification',
    image: '/images/gallery/trading-containers.jpg',
    alt: 'Stacked industrial shipping containers in terminal yard',
  },
  {
    id: 'gal-trading-2',
    title: 'Safety Jersey Barriers',
    category: 'Trading Gallery',
    subtitle: 'High-visibility interlocking red and white traffic and site barriers',
    image: '/images/gallery/trading-jersey-barriers.jpg',
    alt: 'Row of interlocking red and white safety Jersey barriers on site',
  },
  {
    id: 'gal-trading-3',
    title: 'Industrial PPE & Safety Equipment',
    category: 'Trading Gallery',
    subtitle: 'Helmets, high-vis vests, respirators, footwear, coveralls, and signage',
    image: '/images/gallery/trading-safety-equipment.jpg',
    alt: 'Assortment of certified personal protective equipment including helmets, vests, gloves, and boots',
  },
  {
    id: 'gal-trading-4',
    title: 'Tower Lights, Generators & Accessories',
    category: 'Trading Gallery',
    subtitle: 'Mobile LED lighting towers and power generation units for night operations',
    image: '/images/gallery/trading-tower-lights.jpg',
    alt: 'Mobile diesel LED light tower unit for industrial site illumination',
  },
  {
    id: 'gal-trading-5',
    title: 'Portable Camps for Rental',
    category: 'Trading Gallery',
    subtitle: 'Turnkey climate-controlled modular camp rows ready for short- or long-term lease',
    image: '/images/gallery/rental-portable-camps.jpg',
    alt: 'Line of air-conditioned white portable rental camp cabins installed on site',
  },

  // Logistics Gallery
  {
    id: 'gal-logistics-1',
    title: 'Flatbed Trucks (Aramco & Non-Aramco)',
    category: 'Logistics Gallery',
    subtitle: 'Heavy tri-axle flatbed trailers available with Aramco and non-Aramco stickers',
    image: '/images/gallery/logistics-aramco-flatbed.jpg',
    alt: 'Heavy tri-axle flatbed semi-trailer ready for industrial transport',
  },
  {
    id: 'gal-logistics-2',
    title: 'Dammam & Jubail Port Flatbed Fleet',
    category: 'Logistics Gallery',
    subtitle: 'Port-stickered flatbed trucks cleared for Dammam Port and Dialog Jubail Port',
    image: '/images/gallery/logistics-port-flatbed.jpg',
    alt: 'Commercial flatbed semi-truck transporting freight along highway',
  },
  {
    id: 'gal-logistics-3',
    title: 'Standard & Hydraulic Low-Bed Trucks',
    category: 'Logistics Gallery',
    subtitle: 'Specialized heavy-haul low-bed trailers with hydraulic loading ramps',
    image: '/images/gallery/logistics-lowbed.jpg',
    alt: 'Multi-axle hydraulic low-bed trailer parked at industrial facility',
  },
  {
    id: 'gal-logistics-4',
    title: 'Forklifts (With & Without Operators)',
    category: 'Logistics Gallery',
    subtitle: 'Warehouse and yard material-handling forklifts for flexible deployment',
    image: '/images/gallery/logistics-forklift.jpg',
    alt: 'Industrial orange counterbalance forklift operating in warehouse',
  },
  {
    id: 'gal-logistics-5',
    title: 'Third-Party Inspection & Certification',
    category: 'Logistics Gallery',
    subtitle: 'Equipment inspection and compliance verification services for site fleets',
    image: '/images/gallery/safety-third-party-inspection.jpg',
    alt: 'Inspectors conducting equipment safety and certification checks on industrial machinery',
  },
];

export const RECENT_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    number: '01',
    title: 'Open-Plan Modular Office Interior',
    category: 'Commercial Workspace',
    description:
      'Large-span modular office complex engineered with column-grid structural bays, acoustic ceiling tiles, LED lighting, carpeting, and multi-desk administrative layouts.',
    image: '/images/projects/project-1-open-office.jpg',
    alt: 'Expansive open-plan modular office interior with workstations and LED ceiling panels',
  },
  {
    id: 'proj-2',
    number: '02',
    title: 'Cladded Single-Storey Site Facility',
    category: 'Site Administration',
    description:
      'Weather-resistant horizontal steel-clad portable building with dual entry doors, insulated wall panels, and aluminum sliding windows for immediate site deployment.',
    image: '/images/projects/project-2-modular-exterior.jpg',
    alt: 'White horizontal-clad portable building with dual access doors and sliding windows',
  },
  {
    id: 'proj-3',
    number: '03',
    title: 'Desert Terrain Modular Camp Building',
    category: 'Remote Site Infrastructure',
    description:
      'Heavy-duty desert-ready modular facility built to withstand harsh arid conditions, complete with multiple access points, fire-safety fixtures, and thermal insulation.',
    image: '/images/projects/project-3-desert-camp.jpg',
    alt: 'Sand-toned modular camp building installed against rugged desert mountain terrain',
  },
  {
    id: 'proj-4',
    number: '04',
    title: 'Two-Storey Modular Operations Complex',
    category: 'Multi-Storey Complex',
    description:
      'Stacked double-tier portable building complex featuring full-length steel external walkways, safety handrails, and dual access staircases for high-capacity operations.',
    image: '/images/projects/project-4-two-storey-complex.jpg',
    alt: 'Two-storey green-trimmed white modular complex with exterior steel staircase and balcony walkway',
  },
  {
    id: 'proj-5',
    number: '05',
    title: 'Glazed Security & Reception Pavilion',
    category: 'Access & Security',
    description:
      'Contemporary modular reception and security pavilion featuring wrap-around structural glazing, overhanging fascia canopy, and climate-controlled interior.',
    image: '/images/projects/project-5-glass-pavilion.jpg',
    alt: 'Modern glass-fronted modular security and reception booth with overhanging canopy',
  },
  {
    id: 'proj-6',
    number: '06',
    title: 'Timber-Accented Executive Cabin',
    category: 'Executive Site Office',
    description:
      'Custom-finished portable office blending durable white corrugated cladding with warm timber facade accents, covered entry porch, and multi-bay glazing.',
    image: '/images/projects/project-6-timber-cabin.jpg',
    alt: 'Custom modular cabin featuring timber cladding accent, covered porch, and triple windows',
  },
];

export const TRUSTED_PARTNERS: PartnerItem[] = [
  {
    id: 'jawdat',
    name: 'Jawdat Contracting Co. Ltd.',
    sector: 'Contracting & Construction',
    logo: '/images/partners/jawdat.png',
  },
  {
    id: 'delta-desert',
    name: 'Delta Desert Contracting',
    sector: 'Contracting & Infrastructure',
    logo: '/images/partners/delta-desert.png',
  },
  {
    id: 'katerra',
    name: 'KATERRA',
    sector: 'Modular Construction',
    logo: '/images/partners/katerra.png',
  },
  {
    id: 'alyamama',
    name: 'ALYAMAMA',
    sector: 'Industrial & Contracting',
    logo: '/images/partners/alyamama.png',
  },
  {
    id: 'northern-cement',
    name: 'Northern Region Cement Co.',
    sector: 'Industrial Manufacturing',
    logo: '/images/partners/northern-cement.png',
  },
  {
    id: 'ministry-of-housing',
    name: 'Ministry of Housing',
    sector: 'Government Sector',
    logo: '/images/partners/ministry-of-housing.png',
  },
  {
    id: 'ministry-of-defense',
    name: 'Ministry of Defense',
    sector: 'Government Sector',
    logo: '/images/partners/ministry-of-defense.png',
  },
  {
    id: 'ministry-of-education',
    name: 'Ministry of Education',
    sector: 'Government Sector',
    logo: '/images/partners/ministry-of-education.png',
  },
];

export const QUOTE_SERVICE_OPTIONS = [
  'Porta Cabin Services',
  'Factory Services & Modular Fabrication',
  'Logistics Solutions (Aramco / Port Transport)',
  'Safety Services & Third-Party Inspection',
  'Trading & Industrial Supplies',
  'Portable Camps for Rental',
];
