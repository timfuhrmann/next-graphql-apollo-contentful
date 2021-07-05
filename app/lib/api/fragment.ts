import { gql } from "@apollo/client";

export const FRAGMENT_PROJECT = gql`
    fragment ProjectFields on Project {
        sys {
            id
        }
        year
        title
        slug
        services
        description
        credits
        imagesCollection {
            items {
                url
            }
        }
    }
`;

export const FRAGMENT_PROJECT_OVERVIEW = gql`
    fragment ProjectOverviewFields on Project {
        sys {
            id
        }
        year
        title
        slug
        services
    }
`;
