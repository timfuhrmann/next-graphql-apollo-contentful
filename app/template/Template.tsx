import React from "react";
import styled from "styled-components";
import { Navigation } from "../components/navigation/Navigation";

const Site = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const SiteStage = styled.div`
    overflow-y: auto;
`;

const SiteNavigation = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
`;

export const Template: React.FC = ({ children }) => {
    return (
        <Site>
            <SiteNavigation>
                <Navigation />
            </SiteNavigation>
            <SiteStage>{children}</SiteStage>
        </Site>
    );
};
