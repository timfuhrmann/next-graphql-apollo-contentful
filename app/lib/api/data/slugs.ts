import client from "../util/apollo-client";
import { Projects } from "../../../type/projects";
import { PROJECT_SLUGS } from "../query";

type ProjectSlugsCollection = Projects.ContentfulCollection<Projects.ProjectSlug>;

const extractProjectsSlugsCollection = (res: ProjectSlugsCollection): Projects.ProjectSlug[] => {
    if (res.errors) {
        throw new Error("Error trying to fetch project slugs");
    }

    return res.projectCollection.items;
};

export const getProjectSlugs = async (): Promise<Projects.ProjectSlug[]> => {
    const { data } = await client.query<ProjectSlugsCollection>({ query: PROJECT_SLUGS });
    return extractProjectsSlugsCollection(data);
};
