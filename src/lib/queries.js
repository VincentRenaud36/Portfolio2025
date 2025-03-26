import { gql } from '@apollo/client';

export const GET_DATA = gql`
  query MyQuery {
    projets {
      id
      nomProjet
      titrePageProjet
      categorieProjet
      descriptionProjet
      contexteProjet
      outilProjet
      productionProjet
      colorProjet
      imageProjet {
        url
      }
      urlProjet
    }
  }
`;

export const GET_PROJET_BY_ID = gql`
  query GetProjetById($id: ID!) {
    projets(where: { id: $id }) {
      id
      nomProjet
      titrePageProjet
      categorieProjet
      descriptionProjet
      contexteProjet
      outilProjet
      productionProjet
      colorProjet
      imageProjet {
        url
      }
      urlProjet
    }
  }
`; 