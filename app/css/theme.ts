export const theme = {
    //region Color
    black: "#000",
    white: "#fff",
    //endregion

    //region Breakpoints
    bp: {
        m: "screen and (min-width: 768px)",
        l: "screen and (min-width: 1024px)",
        xl: "screen and (min-width: 1340px)",
        xxl: "screen and (min-width: 2000px)",
    },
    //endregion

    //region Other
    ease: "cubic-bezier(0.85, 0, 0.15, 1)",
    delay: "0.5s",
    //endregion
};

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
