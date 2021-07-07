import styled from "styled-components";

export const Content = styled.div<{ breakMobile?: boolean; breakDesktop?: boolean }>`
    margin: 0 2rem;
    width: calc(100% - 4rem);

    @media ${p => p.theme.bp.l} {
        max-width: 160rem;
        width: calc(100% - 20rem);
        margin: 0 auto;
    }
`;

export const aspectRatio = (value: number) => `
    &::after {
        content: "";
        display: block;
        padding-bottom: ${100 * value}%;
    }
`;

type ColumnsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const Columns = styled.div<{ columns: ColumnsRange }>`
    width: ${p => (100 / 12) * p.columns}%;
`;
