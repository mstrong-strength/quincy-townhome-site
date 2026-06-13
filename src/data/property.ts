/**
 * Single source of truth for all property facts.
 * Edit THIS file to update the live site — every section reads from here.
 *
 * ⚠️  Fields marked `TBD: true` render a small placeholder badge on the page so
 *     nothing ships as a silent guess. Fill in the value and set TBD to false
 *     (or just replace the string) before go-live. Search this file for "TBD".
 */

export type Maybe = { value: string; TBD?: boolean };
const tbd = (value: string): Maybe => ({ value, TBD: true });
const ok = (value: string): Maybe => ({ value });

export const property = {
  name: 'Quincy Townhomes',
  tagline: 'Brand new. Move in tomorrow.',

  address: {
    street: '4372 S 900 E',
    cityStateZip: 'Millcreek, UT 84124',
    full: '4372 S 900 E, Millcreek, UT 84124',
  },

  // Quick facts strip
  beds: '3 Beds',
  baths: ok('2.5'),             // confirmed: 2.5 baths
  sqft: tbd('Sq Ft'),           // ⚠️ confirm square footage
  rent: '$2,625',
  rentSuffix: '/mo',
  rentNote: 'Starting at',

  // Footer only — "Property Managed by RIZE". Do not surface elsewhere.
  managedBy: 'Property Managed by RIZE',
  // Leasing / showing line — call or text to tour.
  phone: '(801) 810-4663',
  phoneHref: 'tel:+18018104663',
  smsHref: 'sms:+18018104663',
  email: tbd('leasing email'),  // ⚠️ confirm contact email

  yearBuilt: 'New construction (2025–2026)',

  // Lease & move-in
  moveInFees: {
    cleaning: 350,
    leaseInit: 275,
    get total() {
      return this.cleaning + this.leaseInit;
    },
  },
  securityDeposit: 1299, // refundable
  get dueAtMoveIn() {
    return this.moveInFees.total + this.securityDeposit;
  },
  leaseLength: tbd('lease term'),  // ⚠️ likely 12 months — confirm
  applicationFee: tbd('application fee'), // ⚠️ confirm
  availableDate: tbd('available date'),   // ⚠️ confirm move-in availability

  // Application criteria
  criteria: {
    income: '3× rent in gross monthly income',
    credit: '520+ credit score',
    pets: 'Pets welcome — up to 2 cats or dogs',
  },

  // What you'll pay
  ownerPays: ['Landscaping', 'Snow removal'],
  tenantPays: [
    { label: 'Electric', note: 'billed on usage' },
    { label: 'Water / Sewer / Trash', amount: '$110/mo' },
    { label: 'Common Area Maintenance', amount: '$30/mo' },
    { label: 'Utility billing fee', amount: '$11/mo' },
    { label: 'Resident Benefits Package', amount: '$27/mo', note: 'credit building, identity protection, rewards' },
    { label: "Renter's insurance", note: 'resident responsible' },
  ],

  features: [
    'Open floor plan — kitchen opens to living room',
    "Chef's kitchen with stainless steel appliances + breakfast bar",
    'High ceilings',
    'Three bedrooms upstairs',
    'In-unit washer & dryer — not shared, not coin-op',
    'Central air conditioning',
    'Attached private garage',
    'Private balcony / patio',
    'Dishwasher',
  ],

  links: {
    apply: 'https://rizehomesource.appfolio.com/apply/db09d67a-04c8-452b-9185-df6ef2176d4c/start',
    schedule: 'https://showmojo.com/bb74a770b1/l/p/59398?utm_medium=cpc&utm_source=zillow&zgRef=zillow',
    matterport: 'https://my.matterport.com/show/?m=jP6iviyneq9',
    maps: 'https://maps.google.com/?q=4372+S+900+E,+Millcreek,+UT+84124',
  },

  neighborhood: [
    'Foothills setting in Millcreek, just off 900 E',
    '~15 minutes to downtown Salt Lake City',
    'Quick access to I-215, I-80, and I-15',
    'Close to Big & Little Cottonwood Canyons — Brighton, Solitude, Alta, Snowbird',
    'Walkable to local restaurants, coffee, and Millcreek Common',
    'Granite School District',
  ],

  // Availability — site plan legend + units.
  // ⚠️ Mark each unit available/leased and confirm which are open before go-live.
  availability: {
    fullyLeased: true, // all units leased as of 06/11/2026 — shows waitlist
    legend: [
      { label: 'Leased', swatch: '#ef4444' },
      { label: 'Unit 1', swatch: '#f4c6d4' },
      { label: 'Unit 2 (3 bed)', swatch: '#bfe3ec' },
    ],
    note: 'Every home is currently leased. Colors indicate floorplan type (Unit 1 / Unit 2).',
    // Currently available units (green on the site plan). Update as units open up.
    units: [
      // 4380 S 900 E #102 — leased 06/09/2026
      // 4380 S 900 E #106 — leased 06/11/2026
      // 4380 S 900 E #105 — leased 06/11/2026
      // 4380 S 900 E #107 — leased 06/11/2026 (last unit; community fully leased)
    ],
    isPlaceholder: false,
  },

  disclaimers: [
    'Photos are of a similar home and not necessarily the exact home available for rent. Please inquire by scheduling a tour.',
    'All information contained in this advertisement is deemed reliable but is not guaranteed. Applicants are solely responsible for verifying the accuracy and completeness of all details provided.',
  ],
};

export { tbd, ok };
