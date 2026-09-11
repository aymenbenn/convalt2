export interface MediaItem {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  category: string;
  source?: string;
}

export const mediaItems: MediaItem[] = [
{
  id: 'african-data-center-deals',
  title:
  'US companies win billions in African data center deals in direct competition with China',
  excerpt:
  'A $6.2B hydropower and AI data center deal in Lesotho marks the largest transaction in that country’s history.',
  date: '08.02.2026',
  category: 'Power Generation News'
},
{
  id: 'maseru-celebration',
  title:
  'U.S. Embassy Maseru Celebrates Historic $6.2 Billion Kobong Project with Convalt',
  excerpt: 'Convalt Energy Maseru',
  date: '07.31.2026',
  category: 'Power Generation News'
},
{
  id: 'lesotho-article',
  title: 'Lesotho Article',
  date: '07.24.2026',
  category: 'News'
}];


export interface PressRelease {
  id: string;
  dateline: string;
  title: string;
  standfirst?: string;
  paragraphs: string[];
}

export const pressReleases: PressRelease[] = [
{
  id: 'maseru',
  dateline: 'Press Release — Maseru, July 31st, 2026',
  title:
  'U.S. Embassy Maseru Celebrates Historic $6.2 Billion Kobong Project with Convalt',
  standfirst:
  'First of its kind agreement will develop up to 1.2 GW of power generation and 4.6 GW of solar and a large-scale data center.',
  paragraphs: [
  'The U.S. Embassy in Maseru hosted a celebration yesterday for the approval of the Convalt Memorandum of Agreement, launching the Kobong project — a $6.2 billion (100 billion maloti) investment in hydropower and AI data center infrastructure. It is the largest foreign investment in Lesotho’s history. The event was attended by Minister of Energy and Mining Lejone Mpotjoane, Minister of Information, Communications, Science, Technology and Innovation Nthati Mootosi, and Ministry of Environment and Forestry Thabo Mofosi, as well as other government officials, heads of diplomatic missions, and business leaders.',
  '“This is trade over aid,” said CDA Thomas Hines. “This is a U.S. company choosing to back Lesotho — its people, its resources, and its potential. That is confidence.”',
  'Convalt CEO Hari Achuthan credited the administration’s approach to engaging African nations for helping advance the project. “The emphasis on trade and private-sector investment, rather than relying primarily on grant funding, is closely aligned with our approach in Africa,” Achuthan said. “The transaction would involve approximately $6.2 billion of capital investment in Lesotho, supporting major infrastructure development, local employment, skills development, and long-term stable job growth.”',
  'Once complete, the project will transform Lesotho from an electricity importer into a regional exporter, offering manufacturers access to affordable power and a skilled workforce. It would also position Lesotho as a hub for digital infrastructure, serving technology companies at the center of the global AI revolution.',
  'The U.S. Embassy facilitated introductions between Convalt and key decision-makers in the Government of Lesotho, reflecting its commitment to commercial diplomacy. The Kobong project is one of $7.3 billion in commercial partnerships the Embassy has advanced over the past 18 months.']

},
{
  id: 'gallup',
  dateline: 'Press Release — June 16th, 2026',
  title:
  'Convalt Energy Enters into Purchase and Sale Agreement with Gallup Land Partners for Advanced Manufacturing Campus in New Mexico',
  standfirst:
  'The planned campus includes solar cells, solar modules, and solar glass production with up to 1 GW of behind-the-meter power generation.',
  paragraphs: [
  'NEW YORK — Convalt Energy, Inc. (“Convalt”) has entered into a binding Purchase and Sale Agreement (“PSA”) with Gallup Land Partners (“GLP”) for the planned development of an advanced manufacturing campus for the production of solar cells, solar modules, and solar glass with up to 1 GW of behind-the-meter power generation.',
  'Hari “Harry” Achuthan, CEO of Convalt Energy, stated: “We are thrilled to announce this new partnership with Gallup Land Partners, further strengthening a relationship that leverages GLP’s deep roots within the Gallup community. We are also pleased to welcome GLP as a shareholder in Convalt.”',
  'Robert Roche, founder of Gallup Land Partners, stated: “For decades, we have believed in the tremendous potential of Gallup and northwestern New Mexico. This partnership represents a transformational investment in the community and a chance to create meaningful careers for generations of New Mexicans.”',
  'The project is expected to create approximately 900 permanent, well-paying jobs and more than 1,000 construction jobs over a construction period anticipated to extend through 2028. Total investment associated with the project is expected to reach up to $5 billion across all phases of development.',
  'Project advancement remains subject to the completion of customary development milestones, including obtaining all necessary planning commission, city, county, state, and other regulatory approvals and permits.']

},
{
  id: 'lesotho-mou',
  dateline: 'Press Release — June 8th, 2026',
  title:
  'Convalt Energy and Government of Lesotho Announce Partnership to Develop Renewable Energy and Digital Infrastructure Projects',
  standfirst:
  'First of its kind agreement will develop up to 1.2 GW of power generation and 4.6 GW of solar and a large-scale data center.',
  paragraphs: [
  'NEW YORK — Convalt Energy, Inc. (“Convalt US”) has entered into a binding Memorandum of Agreement with the Government of Lesotho for the opportunity to develop renewable energy and digital infrastructure projects in the nation. The agreement proposes to develop up to 1.2 GW of power generation capacity, approximately 4.6 GW of solar generation capacity including ground-mounted and floating solar facilities, up to 4 GWh of BESS, and the facilitation of a large-scale data center project.',
  'Hari “Harry” Achuthan, CEO of Convalt Energy, said: “Over the past year, Convalt has repositioned our operations toward providing integrated infrastructure solutions for AI-driven and energy-intensive industries. We are thrilled to be partnering with our Lesotho partners to bring clean energy, jobs and economic development to their nation.”',
  'Progression of this project remains subject to the ordinary course of development milestones, including feasibility studies, permitting, financing, regulatory approvals, and definitive project agreements.',
  'Subject to the successful development of the project and the execution of definitive supply agreements, Convalt US may have the opportunity to supply solar modules for this Lesotho project, with deliveries potentially commencing as early as the fourth quarter of 2028.']

}];