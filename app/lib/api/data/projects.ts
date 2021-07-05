import client from "../util/apollo-client";
import { Projects } from "../../../type/projects";
import { PROJECTS_OVERVIEW } from "../query";

type ProjectOverviewCollection = Projects.ContentfulCollection<Projects.ProjectOverview>;

const extractProjectsOverviewCollection = (
    res: ProjectOverviewCollection
): Projects.ProjectOverview[] => {
    if (res.errors) {
        throw new Error("Error trying to fetch projects overview");
    }

    return res.projectCollection.items;
};

export const getProjectsOverview = async (): Promise<Projects.ProjectOverview[]> => {
    const { data } = await client.query<ProjectOverviewCollection>({ query: PROJECTS_OVERVIEW });
    return extractProjectsOverviewCollection(data);
};
