import React from "react";
import styled from "styled-components";
import { Columns } from "../../css/content";
import { OpenerHeadline } from "./OpenerHeadline";

const OpenerWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const OpenerInner = styled.div`
    position: relative;
    padding-top: 2rem;
    width: 100%;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.2rem;
        transform: scaleX(0);
        transform-origin: left;
        background-color: ${p => p.theme.white};
        animation: line-reveal 1s ${p => p.theme.ease} forwards ${p => p.theme.delay};
    }

    @keyframes line-reveal {
        100% {
            transform: scaleX(1);
        }
    }
`;

export const Opener: React.FC = () => {
    return (
        <OpenerWrapper>
            <Columns columns={8}>
                <OpenerInner>
                    <OpenerHeadline>Amos Cimpean</OpenerHeadline>
                    <OpenerHeadline>↳ UI / UX Designer</OpenerHeadline>
                    <OpenerHeadline>and Petrolhead</OpenerHeadline>
                </OpenerInner>
            </Columns>
        </OpenerWrapper>
    );
};
