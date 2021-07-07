import React from "react";
import styled from "styled-components";
import { Content, Columns } from "../../css/content";
import { NavigationLink } from "./NavigationLink";

const NavigationWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 3rem 0;
`;

const NavigationContent = styled(Content)`
    width: 100%;
`;

const NavigationInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const NavigationList = styled.div`
    display: flex;
    width: 100%;
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
                    <Columns columns={8}>
                        <NavigationList>
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
                    </Columns>
                </NavigationInner>
            </NavigationContent>
        </NavigationWrapper>
    );
};
