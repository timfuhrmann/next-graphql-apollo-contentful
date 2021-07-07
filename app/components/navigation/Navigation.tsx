import React from "react";
import styled from "styled-components";
import { Content, Columns } from "../../css/content";
import { NavigationLink } from "./NavigationLink";

const NavigationWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 3rem 0;
`;

const NavigationContent = styled(Content)``;

const NavigationInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const NavigationList = styled(Columns)`
    display: none;

    @media ${p => p.theme.bp.l} {
        display: flex;
    }
`;

const NavigationLinkWrapper = styled.div`
    margin-right: 7.5rem;

    &:last-child {
        margin: 0;
    }
`;

export const Navigation: React.FC = () => {
    return (
        <NavigationWrapper>
            <NavigationContent>
                <NavigationInner>
                    <NavigationLink action="/">Amos Cimpean</NavigationLink>
                    <NavigationList columns={8}>
                        <NavigationLinkWrapper>
                            <NavigationLink action="/">Home</NavigationLink>
                        </NavigationLinkWrapper>
                        <NavigationLinkWrapper>
                            <NavigationLink action="/">About Me</NavigationLink>
                        </NavigationLinkWrapper>
                        <NavigationLinkWrapper>
                            <NavigationLink action="/">Selected Work</NavigationLink>
                        </NavigationLinkWrapper>
                        <NavigationLinkWrapper>
                            <NavigationLink action="/">Contact</NavigationLink>
                        </NavigationLinkWrapper>
                    </NavigationList>
                </NavigationInner>
            </NavigationContent>
        </NavigationWrapper>
    );
};
