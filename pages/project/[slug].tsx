import React from "react";
import { GetStaticProps } from "next";
import { getProjectBySlug } from "../../app/lib/api/data/project";
import { getProjectSlugs } from "../../app/lib/api/data/slugs";
import { Projects } from "../../app/type/projects";

interface ProjectProps {
    project: Projects.Project;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    return <div>{project.title}</div>;
};

export const getStaticPaths = async () => {
    const slugs = await getProjectSlugs();

    const paths = slugs.map(item => ({
        params: { slug: item.slug },
    }));

    // Pre-render only fetched paths at build time.
    // Server-side render on demand if the path doesn't exist.
    return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug;

    if (!slug || "string" !== typeof slug) {
        return {
            notFound: true,
        };
    }

    const project = await getProjectBySlug(slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: { project },
        revalidate: 60 * 60 * 24,
    };
};

export default Project;
