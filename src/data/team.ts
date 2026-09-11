export interface Person {
  name: string;
  role: string;
}

export interface TeamGroup {
  id: string;
  title: string;
  people: Person[];
}

export const teamGroups: TeamGroup[] = [
{
  id: 'directors',
  title: 'Directors',
  people: [
  { name: 'Hari Achuthan', role: 'Founder, President & CEO' },
  { name: 'Richard A. Gephardt', role: 'Director and Shareholder' },
  { name: 'Bill Nelson', role: 'Director and Shareholder' },
  { name: 'Jeffrey LeSage', role: 'Director and Shareholder' },
  { name: 'Mark Berti', role: 'Director and Shareholder' }]

},
{
  id: 'management',
  title: 'Management Team',
  people: [
  { name: 'Under Selection', role: 'Chief Financial Officer' },
  { name: 'Matthew Morris', role: 'Group Chief Operations Officer' },
  { name: 'Stephen Shea', role: 'CTO & Chief Scientist' },
  { name: 'Mirko Kehr', role: 'Head of Innovation and Engineering' },
  { name: 'Anne Nürnberger', role: 'Innovation & Development Engineering' },
  { name: 'Theo Bache', role: 'Capital Formation' }]

},
{
  id: 'development',
  title: 'Development Team',
  people: [{ name: 'Tord E. Corfitz Thott', role: 'Strategy & Business Development' }]
},
{
  id: 'operations',
  title: 'Operations Team',
  people: [
  { name: 'Richard Angotti', role: 'Operations Manager — Maine' },
  { name: 'Lin Khant Oo', role: 'Project Manager — Strategy Planning' },
  { name: 'John Phelan', role: 'Corporate Finance — Contract Management' },
  { name: 'Jessie Walters', role: 'Operations Manager — Maintenance' },
  { name: 'Darren Bishop', role: 'Project Manager — Sales Lead' },
  { name: 'Maik Felber', role: 'Project Management' },
  { name: 'Thiru Ramachandran', role: 'Country Director — India' },
  { name: 'D. Srikanth', role: 'Head of Operations — India' },
  { name: 'J. Manohar Mummaneni', role: 'Chief Administrative Officer — India' },
  { name: 'CS Asha Krishnaraju', role: 'Associate Company Secretary' }]

},
{
  id: 'advisors',
  title: 'Senior Advisors',
  people: [
  { name: 'Chris Brooks', role: 'Senior Advisor' },
  { name: 'Thomas Eriksson', role: 'Senior Advisor' },
  { name: 'Karen Gephardt', role: 'Senior Advisor' },
  { name: 'Victoria L. Harmon', role: 'Senior Advisor' },
  { name: 'Manish Jotwani', role: 'Senior Advisor' },
  { name: 'Harri Koponen', role: 'Senior Advisor' },
  { name: 'Don Pollard', role: 'Senior Advisor' },
  { name: 'Todd Sandoz', role: 'Senior Advisor' },
  { name: 'Ed Strobel', role: 'Senior Advisor' },
  { name: 'Frank van den Bosch', role: 'Senior Advisor' }]

},
{
  id: 'government-affairs',
  title: 'Government Affairs',
  people: [{ name: 'Machut Shishak', role: 'Governmental Affairs' }]
}];