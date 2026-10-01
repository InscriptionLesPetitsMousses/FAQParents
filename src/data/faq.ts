import type { FaqCategory } from '../types/content';

export const faqCategories: FaqCategory[] = [
{
  id: 'quotidien',
  label: 'Le quotidien',
  items: [
  {
    id: 'horaire',
    question: 'Quelles sont les heures d’ouverture ?',
    answer:
    'De 7 h à 18 h, du lundi au vendredi. Après 18 h, des frais de 5 $ par tranche de 15 minutes entamée s’appliquent.'
  },
  {
    id: 'absence',
    question: 'Comment signaler une absence ou un retard ?',
    answer:
    'Appelez votre installation avant 9 h ou écrivez à son courriel. Les frais de garde restent dus pendant les absences.'
  },
  {
    id: 'arrivee',
    question: 'Y a-t-il une heure limite pour arriver le matin ?',
    answer:
    'Nous demandons que les enfants soient arrivés avant 9 h 30, le temps de participer à la collation et à l’activité du matin. Un rendez-vous plus tard en avant-midi doit être annoncé la veille.'
  },
  {
    id: 'effets',
    question: 'Que doit apporter mon enfant chaque jour ?',
    answer:
    'Deux ensembles de rechange, des chaussures d’intérieur, une bouteille d’eau et une doudou pour la sieste. Tout doit être identifié à son nom.'
  },
  {
    id: 'sieste',
    question: 'Comment se déroule la sieste ?',
    answer:
    'La période de repos a lieu de 12 h 30 à 14 h 30. Les enfants qui ne dorment pas font des activités calmes sur leur matelas après une trentaine de minutes.'
  },
  {
    id: 'dehors',
    question: 'Sortez-vous dehors tous les jours ?',
    answer:
    'Oui, matin et après-midi, sauf en cas de pluie forte, d’alerte météo ou de température ressentie sous -27 °C. Habillez votre enfant en conséquence.'
  }]

},
{
  id: 'sante',
  label: 'Santé et sécurité',
  items: [
  {
    id: 'maladie',
    question: 'Quand dois-je garder mon enfant à la maison ?',
    answer:
    'Fièvre de 38,5 °C et plus, deux selles liquides, vomissements dans les 24 h ou éruption non diagnostiquée. Retour 24 h après la fin des symptômes, sans médication.'
  },
  {
    id: 'medicaments',
    question: 'Pouvez-vous donner un médicament ?',
    answer:
    'Oui, avec une autorisation écrite et le contenant original étiqueté par la pharmacie. La première dose doit avoir été donnée à la maison.'
  },
  {
    id: 'allergies',
    question: 'Comment gérez-vous les allergies alimentaires ?',
    answer:
    'Toute allergie doit être déclarée à la fiche santé avec un billet médical. Nos installations sont sans noix ni arachides et un plan de substitution est préparé avec la responsable de l’alimentation.'
  },
  {
    id: 'accident',
    question: 'Que se passe-t-il en cas d’accident ou de blessure ?',
    answer:
    'Nous appliquons les premiers soins (tout le personnel est certifié) et remplissons un rapport d’accident remis au départ. En cas de blessure importante, nous vous joignons immédiatement, puis les contacts d’urgence.'
  },
  {
    id: 'vaccins',
    question: 'Le carnet de vaccination est-il obligatoire ?',
    answer:
    'La vaccination n’est pas obligatoire, mais une copie à jour du carnet doit être au dossier afin de pouvoir réagir rapidement en cas d’éclosion.'
  },
  {
    id: 'depart',
    question: 'Qui peut venir chercher mon enfant ?',
    answer:
    'Uniquement les personnes inscrites à la fiche d’autorisation. Pour un changement ponctuel, écrivez-nous avant 15 h ; une pièce d’identité sera exigée.'
  }]

},
{
  id: 'inscription',
  label: 'Inscription et frais',
  items: [
  {
    id: 'inscrire',
    question: 'Comment inscrire un enfant ou un deuxième enfant ?',
    answer:
    'Toutes les demandes passent par le guichet unique La Place 0-5. Les fratries des enfants déjà inscrits sont priorisées, selon les places disponibles par groupe d’âge.'
  },
  {
    id: 'facturation',
    question: 'Comment fonctionne la facturation ?',
    answer:
    'Prélèvement automatique le 1er et le 15 du mois, avec l’état de compte envoyé par courriel deux jours avant.'
  },
  {
    id: 'releve',
    question: 'Quand est-ce que je reçois mon relevé fiscal ?',
    answer:
    'Le relevé 24S est transmis par courriel en février pour l’année d’imposition précédente. Vérifiez que votre adresse courriel au dossier est à jour.'
  },
  {
    id: 'vacances',
    question: 'Dois-je payer pendant mes vacances ?',
    answer:
    'Oui, la place est réservée toute l’année et les frais demeurent dus. Annoncez vos semaines de vacances au moins 30 jours à l’avance pour faciliter la planification des équipes.'
  },
  {
    id: 'transfert',
    question: 'Puis-je changer d’installation ou d’horaire ?',
    answer:
    'Oui, par demande écrite à la direction de votre installation. Les transferts sont traités selon les places disponibles, avec un préavis de 30 jours.'
  },
  {
    id: 'fin',
    question: 'Quel préavis dois-je donner si je quitte le CPE ?',
    answer:
    'Un préavis écrit de 30 jours est exigé. Sans préavis, les frais des deux semaines suivant le départ restent facturés.'
  }]

},
{
  id: 'vie-de-groupe',
  label: 'Vie de groupe',
  items: [
  {
    id: 'groupes',
    question: 'Comment les groupes sont-ils formés ?',
    answer:
    'Les Mousses (0-18 mois), les Moussaillons (18 mois-3 ans) et les Bateliers (3-5 ans). Le passage au groupe suivant se fait à la fin août, avec une période de transition.'
  },
  {
    id: 'integration',
    question: 'Comment se passe l’intégration d’un nouvel enfant ?',
    answer:
    'Une intégration progressive sur trois à cinq jours : une visite d’une heure avec le parent, puis des demi-journées avant la première journée complète.'
  },
  {
    id: 'programme',
    question: 'Quel est votre programme éducatif ?',
    answer:
    'Nous suivons « Accueillir la petite enfance » avec une approche par le jeu et une thématique maritime qui guide les projets, les coins d’exploration et les sorties.'
  },
  {
    id: 'communication',
    question: 'Comment suis-je informé de la journée de mon enfant ?',
    answer:
    'Rapport quotidien pour les Mousses, retour verbal à l’arrivée du parent pour les plus grands, et un bilan de développement deux fois par année.'
  },
  {
    id: 'comportement',
    question: 'Comment intervenez-vous lors des conflits entre enfants ?',
    answer:
    'Par une intervention démocratique : nommer l’émotion, accompagner la recherche de solution et assurer un suivi avec vous si la situation se répète.'
  },
  {
    id: 'sorties',
    question: 'Y a-t-il des sorties et des fêtes durant l’année ?',
    answer:
    'Quelques sorties de proximité par année, la fête des Mousses au printemps et l’épluchette de fin d’été. Une autorisation est demandée pour chaque sortie hors du CPE.'
  }]

}];