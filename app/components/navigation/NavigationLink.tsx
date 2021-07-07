import React from "react";
import Link from "next/link";
import styled from "styled-components";

const LinkWrapper = styled.button`
    display: block;
    font-weight: 300;
    text-transform: uppercase;
    overflow: hidden;
`;

const LinkFrame = styled.div`
    position: relative;
    transition: transform 0.5s ease-in-out;
    will-change: transform;

    &::after {
        content: attr(data-text);
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
    }

    @media (hover: hover) {
        &:hover {
            transform: translate3d(0, -100%, 0);
        }
    }
`;

interface NavigationLinkProps {
    action: string | (() => void);
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ action, children }) => {
    return "string" === typeof action ? (
        <Link href={action} passHref>
            <LinkWrapper as="a">
                <LinkFrame data-text={children}>{children}</LinkFrame>
            </LinkWrapper>
        </Link>
    ) : (
        <LinkWrapper type="button" onClick={action}>
            <LinkFrame data-text={children}>{children}</LinkFrame>
        </LinkWrapper>
    );
};
