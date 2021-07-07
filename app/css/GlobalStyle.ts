import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { font } from "./font";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${font};
    
    body {
        font-family: SuisseIntl, Helvetica, Arial, sans-serif;
        background-color: ${p => p.theme.black};
        color: ${p => p.theme.white};
    }
`;
