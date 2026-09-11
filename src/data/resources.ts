export interface ResourceGroup {
  id: string;
  title: string;
  items: string[];
}

export const resourceGroups: ResourceGroup[] = [
{
  id: 'module-manufacturers',
  title: 'U.S. Module Manufacturers Resources',
  items: [
  'Solar Power World Online — U.S. Solar Panel Manufacturers',
  'Solar Reviews — Best American Solar Panel Manufacturers',
  'SolarFeeds — Top Panel Manufacturers in the U.S.']

},
{
  id: 'tax-credits',
  title: 'Energy Tax Credits Resource',
  items: [
  'Advanced Manufacturing Tax Credits',
  'Home Energy Tax Credits',
  'Clean Energy Tax Credit Qualifications for Consumers (DOE)']

},
{
  id: 'raw-materials',
  title: 'Raw Materials Price Data',
  items: ['PVinsights', 'Energy Trend', 'PV Time', 'BernReuter', 'Infolink Group']
},
{
  id: 'cbp',
  title: 'U.S. Customs and Border Protection',
  items: ['Trade Statistics', 'UFLPA Prevention Statistics']
}];