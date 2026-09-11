export interface Office {
  name: string;
  lines: string[];
}

export interface OfficeRegion {
  id: string;
  title: string;
  offices: Office[];
}

export const officeRegions: OfficeRegion[] = [
{
  id: 'united-states',
  title: 'United States',
  offices: [
  {
    name: 'Head Office — New York',
    lines: [
    '1185 Avenue of the Americas, 3rd Floor',
    'New York, NY 10036, USA',
    'info@convalt.com',
    '+1.212.683.0400']

  },
  {
    name: 'Convalt Energy, Inc.',
    lines: [
    'Hari Achuthan — Chairman & CEO',
    'hari.achuthan@convalt.com',
    '+1.917.453.9600 Mobile']

  },
  {
    name: 'Washington DC',
    lines: [
    '1025 Thomas Jefferson St, NW',
    'Suite 400 West, Washington, DC 20007',
    '+1.212.683.0400']

  },
  {
    name: 'Watertown',
    lines: ['800 Starbuck Avenue, A-15', 'Watertown, New York 13601', '+1.212.683.0400']
  },
  {
    name: 'Maine',
    lines: ['31 North Street', 'East Millinocket, Maine 04430', '+1.212.683.0400']
  },
  {
    name: 'Oregon',
    lines: [
    '12745 SW Millikan Way, Suite 300',
    'Beaverton, Oregon 97005',
    '+1.212.683.0400']

  }]

},
{
  id: 'europe',
  title: 'Europe',
  offices: [
  {
    name: 'Convalt Energy Germany',
    lines: [
    'Freisstrasse 20, Frankfurt 60388, Germany',
    'Mirko Kehr — Head of Operations',
    'mirko.kehr@convalt.com',
    '+49.152.5891.8869 Mobile']

  }]

},
{
  id: 'asia',
  title: 'Asia',
  offices: [
  {
    name: 'Convalt Energy Laos',
    lines: [
    'No. 588, Unit 27, Thongkang Village',
    'Sisattanak District, Vientiane',
    '+91.802.224.5154']

  },
  {
    name: 'Convalt Energy India',
    lines: [
    'Thirumoorthy Ramachandran — Managing Director',
    '39/19, Aspen Court, 3rd Floor, 6th Main Road',
    'R.A Puram, Chennai, Tamil Nadu 600 028',
    'thiru@acoinvestment.com',
    '+91.80.2224.5154 Office']

  },
  {
    name: 'Convalt Energy Asia Private Limited',
    lines: [
    'Ocean Financial Centre, Level 40',
    '10 Collyer Quay, Singapore 049315',
    '+65.6571.1604 Office']

  }]

},
{
  id: 'africa',
  title: 'Africa',
  offices: [
  {
    name: 'Convalt Energy Republic of Chad',
    lines: ['Quartier Klemat, Rue Général Daoud Soumaïne', 'N’Djamena']
  },
  {
    name: 'Convalt Energy Sierra Leone',
    lines: ['67 Sir Samuel Lewis Road', 'Aberdeen, Freetown']
  }]

}];