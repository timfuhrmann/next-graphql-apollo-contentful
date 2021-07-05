import { gql } from "@apollo/client";
import { FRAGMENT_PROJECT, FRAGMENT_PROJECT_OVERVIEW } from "./fragment";

export const PROJECT_SLUGS = gql`
    query GetProjectSlugs {
        projectCollection {
            items {
                slug
            }
        }
    }
`;

export const PROJECT = gql`
    query GetProject($slug: String!) {
        projectCollection(where: { slug: $slug }) {
            items {
                ...ProjectFields
            }
        }
    }
    ${FRAGMENT_PROJECT}
`;

export const PROJECTS_OVERVIEW = gql`
    query GetProjectsOverview {
        projectCollection {
            items {
                ...ProjectOverviewFields
            }
        }
    }
    ${FRAGMENT_PROJECT_OVERVIEW}
`;
