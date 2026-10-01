import type { DocumentGroup } from '../types/content';

export const documentGroups: DocumentGroup[] = [
{
  id: 'a-remettre',
  label: 'À remplir et à remettre',
  items: [
  {
    id: 'entente',
    title: 'Entente de services 2026-2027',
    description: 'À signer avant le premier jour de fréquentation.',
    fileType: 'PDF',
    size: '420 Ko',
    updated: '1 sept. 2026',
    url: '#'
  },
  {
    id: 'fiche-sante',
    title: 'Fiche santé et autorisations',
    description: 'Allergies, médication et personnes autorisées.',
    fileType: 'PDF',
    size: '310 Ko',
    updated: '1 sept. 2026',
    url: '#'
  },
  {
    id: 'coordonnees',
    title: 'Changement de coordonnées',
    description: 'Adresse, téléphone, courriel, contacts d’urgence.',
    fileType: 'PDF',
    size: '180 Ko',
    updated: '12 juin 2026',
    url: '#'
  }]

},
{
  id: 'a-consulter',
  label: 'À consulter',
  items: [
  {
    id: 'menu',
    title: 'Menu de 5 semaines — automne',
    description: 'Sans noix ni arachides.',
    fileType: 'PDF',
    size: '640 Ko',
    updated: '15 août 2026',
    url: '#'
  },
  {
    id: 'calendrier',
    title: 'Calendrier des fermetures',
    description: 'Fériés, perfectionnement et vacances.',
    fileType: 'PDF',
    size: '210 Ko',
    updated: '8 sept. 2026',
    url: '#'
  },
  {
    id: 'regie',
    title: 'Régie interne et politique de maladie',
    description: 'Horaires, retards, exclusions et retour.',
    fileType: 'PDF',
    size: '890 Ko',
    updated: '1 juill. 2026',
    url: '#'
  }]

}];