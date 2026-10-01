import type { Notice } from '../types/content';

export const notices: Notice[] = [
{
  id: 'fermeture',
  tone: 'alert',
  title: 'Relâche des équipages : fermeture le vendredi 25 septembre',
  date: '8 septembre',
  body: "Journée de perfectionnement du personnel. Les quatre installations sont fermées, sans service de dépannage.",
  featured: true
},
{
  id: 'photos',
  tone: 'info',
  title: 'Photos annuelles du 6 au 9 octobre',
  date: '2 septembre',
  body: 'L’horaire par groupe est affiché à l’entrée de votre local.'
},
{
  id: 'habits',
  tone: 'rappel',
  title: 'Vêtements chauds au casier',
  date: '28 août',
  body: 'Deux ensembles de rechange, un imperméable et des bottes : on sort par tous les temps.'
}];