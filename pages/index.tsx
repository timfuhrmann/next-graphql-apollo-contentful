import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getProjectsOverview } from "../app/lib/api/data/projects";
import { Projects } from "../app/type/projects";

interface HomeProps {
    projects: Projects.ProjectOverview[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
    return (
        <div>
            {projects.map(project => (
                <Link key={project.sys.id} href={"/project/" + project.slug}>
                    {project.title}
                </Link>
            ))}
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjectsOverview();

    return { props: { projects } };
};

export default Home;
