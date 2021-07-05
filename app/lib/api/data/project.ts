import client from "../util/apollo-client";
import { Projects } from "../../../type/projects";
import { PROJECT } from "../query";

type ProjectsCollection = Projects.ContentfulCollection<Projects.Project>;

const extractProjectsCollection = (res: ProjectsCollection): Projects.Project[] => {
    if (res.errors) {
        throw new Error("Error trying to fetch project slugs");
    }

    return res.projectCollection.items;
};

export const getProjectBySlug = async (slug: string): Promise<Projects.Project | null> => {
    const { data } = await client.query<ProjectsCollection>({
        query: PROJECT,
        variables: { slug },
    });

    const projects = extractProjectsCollection(data);

    return projects.length > 0 ? projects[0] : null;
};
