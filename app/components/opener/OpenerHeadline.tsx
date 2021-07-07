import React from "react";
import styled from "styled-components";
import { Headline } from "../../css/typo";

const HeadlineWrapper = styled.div`
    overflow: hidden;
`;

const HeadlineInner = styled.div`
    transform: translate3d(0, 100%, 0);
    animation: headline-reveal 1s ${p => p.theme.ease} forwards ${p => p.theme.delay};
    will-change: transform;

    @keyframes headline-reveal {
        100% {
            transform: translate3d(0, 0, 0);
        }
    }
`;

export const OpenerHeadline: React.FC = ({ children }) => {
    return (
        <HeadlineWrapper>
            <Headline>
                <HeadlineInner>{children}</HeadlineInner>
            </Headline>
        </HeadlineWrapper>
    );
};
