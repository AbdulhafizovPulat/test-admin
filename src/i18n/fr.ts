import frenchMessages from "ra-language-french";

export const fr = {
  ...frenchMessages,
  resources: {
    posts: {
      name: "Poste |||| Des postes",
      fields: {
        title: "Titre",
        body: "Corps",
        userId: "Utilisateur(Utilisatrice)",
        id: "Identifiant",
      },
    },
    comments: {
      name: "Commentaire |||| Commentaires",
      fields: {
        email: "E-mail",
        id: "Identifiant",
        name: "Nom",
        body: "Corps",
        postId: "Identifiant de poste",
      },
    },
    photos: {
      name: "Photo |||| Photos",
      fields: {
        albumId: "IDalbum",
        id: "Identifiant",
        title: "Titre",
        url: "URL",
        thumbnailUrl: "ThumbnailUrl",
      },
    },
    users: {
      name: "Utilisateur (Utilisatrice) |||| Utilisateurs (Utilisatrices)",
      fields: {
        id: "Identifiant",
        name: "Nom",
        username: "Nom d'utilisateur",
        email: "E-mail",
        address: {
          street: "Adresse Rue",
          suite: "Adresse Suite",
          city: "Adresse Ville",
          zipcode: "Code postal",
          geo: {
            lat: "lat",
            lng: "lng",
          },
        },
        phone: "Téléphone",
        website: "Site Internet",
        company: {
          name: "Entreprise nom",
          catchPhrase: "Slogan",
          bs: "Bs",
        },
      },
    },
  },
  saved_queries:{
    subscribed_to_newsletter: 'Inscrit à la newsletter',
    yes: 'oui',
    no: 'non',
    category: 'CATÉGORIE',
    tests: 'Essais',
    news: 'Nouvelles',
    deals: 'Offres',
    tutorials: 'Tutoriels',
  }
};
