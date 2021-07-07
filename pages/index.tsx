import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { GetStaticProps } from "next";
import { getProjectsOverview } from "../app/lib/api/data/projects";
import { Projects } from "../app/type/projects";
import { Content } from "../app/css/content";
import { Opener } from "../app/components/opener/Opener";

const HomeWrapper = styled.div`
    padding-top: 25rem;
`;

interface HomeProps {
    projects: Projects.ProjectOverview[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
    return (
        <HomeWrapper>
            <Content>
                <Opener />
                {/*{projects.map(project => (*/}
                {/*    <Link key={project.sys.id} href={"/project/" + project.slug}>*/}
                {/*        {project.title}*/}
                {/*    </Link>*/}
                {/*))}*/}
            </Content>
        </HomeWrapper>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjectsOverview();

    return { props: { projects } };
};

export default Home;
