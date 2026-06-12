/**
 * Central business configuration & site content for RK Repairing.
 * Editing values here updates them everywhere across the site.
 */

export const BUSINESS = {
  name: 'RK Repairing',
  tagline: 'All Brands Repair Service',
  phoneDisplay: '82290 39946',
  phoneRaw: '+918229039946',
  whatsapp: '918229039946',
  email: 'sandeepkumaryadav263@gmail.com',
  addressLine: 'South Delhi, Delhi - 110025',
  area: 'South Delhi',
  city: 'Delhi',
  pincode: '110025',
  // Approx. South Delhi coordinates used for the embedded map.
  geo: { lat: 28.5421, lng: 77.2376 },
  hours: 'Mon - Sun: 8:00 AM - 9:00 PM',
} as const;

export const WHATSAPP_LINK = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  "Hi RK Repairing, I'd like to book an appliance repair service."
)}`;

export const CALL_LINK = `tel:${BUSINESS.phoneRaw}`;

/** Build a WhatsApp link that pre-fills a booking message to the business. */
export function bookingWhatsappLink(data: {
  name: string;
  phone: string;
  appliance: string;
  message?: string;
}): string {
  const lines = [
    '*New Booking — RK Repairing*',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Appliance: ${data.appliance}`,
  ];
  if (data.message?.trim()) {
    lines.push(`Message: ${data.message.trim()}`);
  }
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;          // Material icon name
  short: string;
  description: string;
  image: string;
  brands?: string[];
  problems?: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'washing-machine-repair',
    title: 'Washing Machine Repair',
    icon: 'local_laundry_service',
    short: 'Front-load, top-load & semi-automatic machines of every brand fixed at your doorstep.',
    description:
      'Expert repair for all washing machine types — front load, top load and semi-automatic. We resolve drum, motor, PCB and drainage faults using genuine spare parts.',
    image: 'assets/images/services/washing-machine.svg',
    brands: ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Bosch'],
    problems: ['Not Spinning', 'Water Leakage', 'Noise Issues', 'PCB Problems', 'Not Draining', 'Door Lock Fault'],
  },
  {
    id: 'refrigerator-repair',
    title: 'Refrigerator Repair',
    icon: 'kitchen',
    short: 'Cooling, compressor and gas issues solved fast so your food stays fresh.',
    description:
      'Single-door, double-door and side-by-side refrigerator repair. We fix cooling failures, compressor faults and refill gas with precision.',
    image: 'assets/images/services/refrigerator.svg',
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Godrej'],
    problems: ['Cooling Issues', 'Compressor Fault', 'Gas Refilling', 'Thermostat Issues', 'Water Leakage', 'Strange Noise'],
  },
  {
    id: 'microwave-oven-repair',
    title: 'Microwave Oven Repair',
    icon: 'microwave',
    short: 'Solo, grill & convection microwaves repaired with genuine components.',
    description:
      'Microwave not heating, display dead or door not closing? Our technicians repair magnetrons, PCBs and control panels for all brands.',
    image: 'assets/images/services/microwave.svg',
    brands: ['LG', 'Samsung', 'IFB', 'Panasonic', 'Bajaj'],
    problems: ['Not Heating', 'Display Problem', 'Door Issue', 'PCB Repair', 'Sparking', 'Turntable Fault'],
  },
  {
    id: 'deep-freezer-repair',
    title: 'Deep Freezer Repair',
    icon: 'ac_unit',
    short: 'Commercial & home deep freezers serviced to keep stock perfectly frozen.',
    description:
      'Deep freezer cooling failure, compressor trouble or gas leakage — we restore commercial and domestic freezers to full performance.',
    image: 'assets/images/services/deep-freezer.svg',
    brands: ['Blue Star', 'Voltas', 'Western', 'Haier', 'Godrej'],
    problems: ['Cooling Failure', 'Compressor Repair', 'Gas Filling', 'Ice Build-up', 'Thermostat Fault'],
  },
  {
    id: 'fridge-repair',
    title: 'Fridge Repair',
    icon: 'kitchen',
    short: 'Quick, affordable fridge diagnosis and on-the-spot repair.',
    description:
      'Same-day fridge repair covering cooling, defrost, fan and electrical faults. Transparent pricing with a service warranty.',
    image: 'assets/images/services/fridge.svg',
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Godrej'],
    problems: ['Not Cooling', 'Defrost Problem', 'Fan Motor Fault', 'Door Seal Damage'],
  },
  {
    id: 'appliance-maintenance',
    title: 'Home Appliance Maintenance',
    icon: 'home_repair_service',
    short: 'Preventive maintenance & AMC for all your home appliances.',
    description:
      'Scheduled maintenance and annual contracts that keep every appliance running longer with fewer breakdowns.',
    image: 'assets/images/services/maintenance.svg',
    brands: ['All Brands'],
    problems: ['Periodic Service', 'Deep Cleaning', 'Performance Check', 'Preventive Care'],
  },
];

export interface USP {
  icon: string;
  title: string;
  text: string;
}

export const WHY_CHOOSE: USP[] = [
  { icon: 'bolt', title: 'Same Day Service', text: 'Book before noon and most repairs are completed the very same day.' },
  { icon: 'engineering', title: 'Expert Technicians', text: 'Trained, background-verified professionals for every appliance brand.' },
  { icon: 'savings', title: 'Affordable Pricing', text: 'Transparent, upfront charges with no hidden fees — ever.' },
  { icon: 'verified', title: 'Genuine Spare Parts', text: 'Only authentic, warranty-backed components are fitted.' },
  { icon: 'home', title: 'Doorstep Repair', text: 'We come to you — repairs done at the comfort of your home.' },
  { icon: 'sentiment_very_satisfied', title: 'Customer Satisfaction', text: 'Thousands of 5-star reviews from happy South Delhi families.' },
];

export interface ProcessStep {
  step: number;
  icon: string;
  title: string;
  text: string;
}

export const PROCESS: ProcessStep[] = [
  { step: 1, icon: 'call', title: 'Call Us', text: 'Ring us or book online and tell us about your appliance issue.' },
  { step: 2, icon: 'directions_car', title: 'Technician Visit', text: 'A nearby expert reaches your doorstep at your chosen slot.' },
  { step: 3, icon: 'troubleshoot', title: 'Problem Diagnosis', text: 'We inspect, diagnose and share a transparent repair quote.' },
  { step: 4, icon: 'build_circle', title: 'Instant Repair', text: 'On-the-spot repair with genuine parts and a service warranty.' },
];

export interface Testimonial {
  name: string;
  area: string;
  rating: number;
  text: string;
  initial: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Anjali Mehra', area: 'Saket', rating: 5, initial: 'A', text: 'My washing machine stopped spinning and the technician fixed it within an hour. Polite, professional and very reasonably priced!' },
  { name: 'Rohit Sharma', area: 'Kalkaji', rating: 5, initial: 'R', text: 'Same-day fridge repair — they refilled the gas and it cools like new. Highly recommend RK Repairing.' },
  { name: 'Sunita Verma', area: 'Greater Kailash', rating: 5, initial: 'S', text: 'Booked a microwave repair online. Genuine parts, fair charges and a one-month warranty. Excellent service.' },
  { name: 'Imran Khan', area: 'Lajpat Nagar', rating: 5, initial: 'I', text: 'Their deep freezer service saved my restaurant. Quick response and very knowledgeable technicians.' },
  { name: 'Priya Nair', area: 'Hauz Khas', rating: 5, initial: 'P', text: 'Doorstep service was so convenient. The technician explained the issue clearly before repairing. 5 stars!' },
  { name: 'Vikram Singh', area: 'Malviya Nagar', rating: 5, initial: 'V', text: 'Affordable and honest. They could have charged me more but suggested a simple fix. Trustworthy people.' },
];

export interface ServiceArea {
  name: string;
  icon: string;
  note: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Saket', icon: 'place', note: 'Fast doorstep repairs across all Saket sectors.' },
  { name: 'Malviya Nagar', icon: 'place', note: 'Trusted appliance experts serving Malviya Nagar.' },
  { name: 'Kalkaji', icon: 'place', note: 'Same-day service in Kalkaji & nearby blocks.' },
  { name: 'Govindpuri', icon: 'place', note: 'Affordable repairs for Govindpuri homes.' },
  { name: 'Hauz Khas', icon: 'place', note: 'Premium appliance care in Hauz Khas.' },
  { name: 'Chhatarpur', icon: 'place', note: 'Reliable technicians covering Chhatarpur.' },
  { name: 'Greater Kailash', icon: 'place', note: 'Expert service across GK I & GK II.' },
  { name: 'Nehru Place', icon: 'place', note: 'Commercial & home repairs in Nehru Place.' },
  { name: 'Lajpat Nagar', icon: 'place', note: 'Quick response across Lajpat Nagar.' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  { question: 'Do you offer same-day appliance repair?', answer: 'Yes. For most bookings made before noon, our technician reaches you and completes the repair the same day across South Delhi.' },
  { question: 'Which brands do you repair?', answer: 'We repair all major brands including LG, Samsung, IFB, Whirlpool, Bosch, Haier, Godrej, Voltas, Blue Star and more.' },
  { question: 'Is there a visit or inspection charge?', answer: 'A nominal inspection charge applies, which is fully adjusted in your final repair bill once you approve the work.' },
  { question: 'Do you use genuine spare parts?', answer: 'Absolutely. We only fit authentic, warranty-backed spare parts to ensure long-lasting performance.' },
  { question: 'Do you provide a warranty on repairs?', answer: 'Yes, every repair carries a service warranty. The duration depends on the appliance and the parts replaced.' },
  { question: 'How do I book a service?', answer: 'Call us at 82290 39946, tap the WhatsApp button, or fill the booking form on this site. We confirm your slot instantly.' },
];

export interface CompanyStat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const STATS: CompanyStat[] = [
  { value: 5000, suffix: '+', label: 'Repairs Completed', icon: 'task_alt' },
  { value: 2000, suffix: '+', label: 'Happy Customers', icon: 'groups' },
  { value: 10, suffix: '+', label: 'Years Experience', icon: 'workspace_premium' },
  { value: 50, suffix: '+', label: 'Expert Technicians', icon: 'engineering' },
];

export const APPLIANCE_OPTIONS = [
  'Washing Machine',
  'Refrigerator',
  'Fridge',
  'Deep Freezer',
  'Microwave Oven',
  'Other Appliance',
];
