export interface Project {
  id: string;
  name: string;
  location: string;
  status: string;
  category: 'Manufacturing' | 'Power Generation' | 'Data Centers' | 'Recycling';
  region: 'United States' | 'India' | 'Southeast Asia' | 'Africa';
  capacity?: string;
  summary: string;
  facts: {label: string;value: string;}[];
  featured?: boolean;
}

export const projects: Project[] = [
{
  id: 'project-solis',
  name: 'Project Solis',
  location: 'New Mexico, U.S.A.',
  status: 'Under Financing',
  category: 'Manufacturing',
  region: 'United States',
  capacity: '3.6 GW',
  summary:
  'Project Solis will be a 3.6 GW solar cell and module manufacturing facility utilizing advanced heterojunction (HJT) technology to deliver high-efficiency, next-generation solar products. Located in New Mexico, the project leverages over $275 million in state and federal incentives under the IRA to strengthen domestic supply chains and reduce reliance on foreign manufacturing.',
  facts: [
  { label: 'Nameplate Capacity', value: '3.6 GW' },
  { label: 'Location', value: 'New Mexico, U.S.A.' },
  { label: 'Surface Area', value: 'Approximately 2,500,000 sq ft' },
  { label: 'Value', value: '$5B' }],

  featured: true
},
{
  id: 'watertown',
  name: 'Convalt Watertown Factory',
  location: 'Watertown, New York, U.S.A.',
  status: 'On Hold',
  category: 'Manufacturing',
  region: 'United States',
  capacity: '2 GW',
  summary:
  'A state-of-the-art solar cell manufacturing facility featuring advanced heterojunction technology with a rated capacity of 2 GW of solar cell production annually, designed to support growing demand for domestically manufactured high-efficiency solar cells.',
  facts: [
  { label: 'Nameplate Capacity', value: '2 GW of Modules' },
  { label: 'Location', value: 'New York, U.S.A.' },
  { label: 'Surface Area', value: '2,200,000 sq ft' },
  { label: 'Value', value: '$400 million of preferred equity' }]

},
{
  id: 'river-drivers',
  name: 'River Drivers Solar Projects',
  location: 'East Millinocket, Maine, U.S.A.',
  status: 'Under Development',
  category: 'Power Generation',
  region: 'United States',
  capacity: '12 MW',
  summary:
  'Convalt is developing a 12 MW community solar project in East Millinocket, beginning with an initial 2 MW phase. The project will supply clean, affordable electricity to local residents and businesses while creating new employment opportunities.',
  facts: [
  { label: 'Nameplate Capacity', value: '12 MW' },
  { label: 'Power Off-taker', value: 'Community Solar & Direct to Consumers' },
  { label: 'Location', value: 'East Millinocket, Maine' },
  { label: 'Surface Area', value: '21.5+ Acres' },
  { label: 'Total Investment', value: '$6 million' }],

  featured: true
},
{
  id: 'nm-recycling',
  name: 'New Mexico Panel Recycling Project',
  location: 'New Mexico, U.S.A.',
  status: 'Under Development',
  category: 'Recycling',
  region: 'United States',
  capacity: '1 GW',
  summary:
  'Our first recycling facility will be located in New Mexico, co-located with Convalt’s solar cell and module manufacturing operations. The project is progressing through permitting and approval with local, state, and federal agencies.',
  facts: [
  { label: 'Nameplate Capacity', value: '1 GW' },
  { label: 'Location', value: 'New Mexico' },
  { label: 'Surface Area', value: '10+ Acres' },
  { label: 'Total Investment', value: '$5 million' }],

  featured: true
},
{
  id: 'maine-data-center',
  name: 'Northern Maine Data Center',
  location: 'Maine, U.S.A.',
  status: 'Under Development',
  category: 'Data Centers',
  region: 'United States',
  summary:
  'Convalt Data Center is developing a major site in northern Maine spanning approximately 10,000 acres. The project will offer a fully turnkey data center campus with dedicated water access and behind-the-meter power available before 2030.',
  facts: [
  { label: 'Nameplate Power Capacity', value: 'Phase 1 — 500 MW; Phase 2 — up to 2 GW' },
  { label: 'Power Off-taker', value: 'Data center customers' },
  { label: 'Location', value: 'Northern Maine' },
  { label: 'Surface Area', value: '10,000 Acres' },
  { label: 'Total Investment', value: '$1 billion+' }],

  featured: true
},
{
  id: 'redan',
  name: 'Redan Waste-to-Energy Project',
  location: 'Andhra Pradesh, India',
  status: 'Operating',
  category: 'Power Generation',
  region: 'India',
  capacity: '7.5 MW',
  summary:
  'Redan Infrastructure Private Limited developed and constructed this 7.5 MW AC waste-to-power plant running on industrial waste feedstock. The plant reached commercial operation on March 31, 2015.',
  facts: [
  { label: 'Nameplate Capacity', value: '7.5 MW' },
  { label: 'Power Off-taker', value: 'Andhra Pradesh Southern Power Distribution Corporation' },
  { label: 'Location', value: 'Palamaner, Chittoor District, Andhra Pradesh' },
  { label: 'Surface Area', value: '14 Acres' },
  { label: 'Total Investment', value: '$8.3 million' }]

},
{
  id: 'vizhag',
  name: 'Vizhag Waste-to-Energy Project',
  location: 'Andhra Pradesh, India',
  status: 'Under Development',
  category: 'Power Generation',
  region: 'India',
  capacity: '7.5 MW',
  summary:
  'Convalt is negotiating with lenders for financing RIPL-GP’s 7.5 MW waste-to-power project at Kothavalasa Village, Vizianagaram district of Andhra Pradesh, India.',
  facts: [
  { label: 'Nameplate Capacity', value: '7.5 MW' },
  { label: 'Power Off-taker', value: 'Andhra Pradesh Southern Power Distribution Corporation' },
  { label: 'Location', value: 'Kothavalasa Village, Vizianagaram district' },
  { label: 'Surface Area', value: '14 Acres' },
  { label: 'Total Investment', value: '$8.3 million' }]

},
{
  id: 'mandalay',
  name: 'Mandalay Solar',
  location: 'Mandalay Region, Myanmar',
  status: 'Sold',
  category: 'Power Generation',
  region: 'Southeast Asia',
  capacity: '300 MW',
  summary:
  'A fully permitted 300 MW AC solar power project across two sites, Nabuaing and Wundwin, each with a capacity of 150 MW divided into three 50 MW solar PV array blocks utilizing First Solar Series 4 thin-film modules.',
  facts: [
  { label: 'Nameplate Capacity', value: '300 MW' },
  { label: 'Power Off-taker', value: 'Electric Power Generation Enterprise (EPGE)' },
  { label: 'Location', value: 'Central Mandalay Region, Myanmar' },
  { label: 'Surface Area', value: '1,000 + 850 Acres' },
  { label: 'Total Investment', value: '$250 million' }]

},
{
  id: 'lao-solar',
  name: 'Lao Solar Project',
  location: 'Attapeu Province, Lao P.D.R.',
  status: 'Under Development',
  category: 'Power Generation',
  region: 'Southeast Asia',
  capacity: '1,200 MW',
  summary:
  'Initiated in 2016, the project has received approvals for up to 1,200 MW of solar capacity and is now in the final stages of development. The initial site survey confirmed favorable conditions and formed the basis for the full feasibility study.',
  facts: [
  { label: 'Nameplate Capacity', value: '1,200 MW' },
  { label: 'Power Off-taker', value: 'Vietnam Electricity (EVN)' },
  { label: 'Location', value: 'Attapeu Province, Lao P.D.R.' },
  { label: 'Surface Area', value: '4,400 Acres' },
  { label: 'Total Investment', value: '$1.3 billion' }]

},
{
  id: 'chad-solar',
  name: 'Chad Solar Project',
  location: 'N’Djamena, Republic of Chad',
  status: 'Under Development',
  category: 'Power Generation',
  region: 'Africa',
  capacity: '120 MW',
  summary:
  'Convalt is developing a 120 MW solar project to service the capital region of Chad, with battery storage planned for 20% of the installed solar capacity.',
  facts: [
  { label: 'Nameplate Capacity', value: '120 MW' },
  { label: 'Power Off-taker', value: 'Direct to Consumer' },
  { label: 'Location', value: 'N’Djamena, Republic of Chad' },
  { label: 'Surface Area', value: '300 Acres' },
  { label: 'Total Investment', value: '$250 million' }]

},
{
  id: 'rural-electrification',
  name: 'Rural Electrification Project',
  location: 'Multiple Locations, Republic of Chad',
  status: 'Under Development',
  category: 'Power Generation',
  region: 'Africa',
  capacity: '30 MW',
  summary:
  'Convalt Energy will invest up to US $30 million for the development of a 30 MW AC solar power solution for multiple locations in the Republic of Chad.',
  facts: [
  { label: 'Nameplate Capacity', value: '30 MW' },
  { label: 'Power Off-taker', value: 'Direct to Consumer' },
  { label: 'Location', value: 'Multiple Locations, Republic of Chad' },
  { label: 'Surface Area', value: '150 Acres' },
  { label: 'Total Investment', value: '$30 million' }]

},
{
  id: 'sierra-leone',
  name: 'Sierra Leone Solar Project',
  location: 'Seven Cities Across Sierra Leone',
  status: 'Under Development',
  category: 'Power Generation',
  region: 'Africa',
  capacity: '60 MW',
  summary:
  'A series of rural electrification projects across Sierra Leone for an aggregate of 60 MW of solar, with diesel or batteries added to provide baseload power to these communities.',
  facts: [
  { label: 'Nameplate Capacity', value: '60 MW' },
  { label: 'Power Off-taker', value: 'Direct to Consumer' },
  { label: 'Location', value: 'Multiple Locations, Sierra Leone' },
  { label: 'Surface Area', value: '300 Acres in aggregate' },
  { label: 'Total Investment', value: '$100 million' }]

},
{
  id: 'kobong',
  name: 'Project Kobong Hybrid Infrastructure',
  location: 'Katse Dam Region, Kingdom of Lesotho',
  status: 'Under Development',
  category: 'Power Generation',
  region: 'Africa',
  capacity: '$6.2B',
  summary:
  'Project Kobong is a US$6.2 billion integrated energy and digital infrastructure platform designed to transform Lesotho into a regional clean energy exporter and digital infrastructure hub, combining utility-scale renewable generation, transmission, ultra-high-speed fiber, and AI data center development.',
  facts: [
  {
    label: 'Nameplate Capacity',
    value:
    '1,200 MW Pumped Storage Hydro, 4,300 MW Solar, 400 MWh BESS, 122 MW Hydropower, up to 1.2 GW AI Data Center Platform'
  },
  {
    label: 'Power Off-taker',
    value: 'Lesotho Domestic Grid, South African Power Pool, AI Data Centers & Industrial Customers'
  },
  { label: 'Location', value: 'Katse Dam Region, Kingdom of Lesotho' },
  { label: 'Total Investment', value: '$6.2 billion estimated' }]

}];


export const projectCategories = [
'Power Generation',
'Manufacturing',
'Data Centers',
'Recycling'] as
const;

export const projectRegions = [
'United States',
'India',
'Southeast Asia',
'Africa'] as
const;