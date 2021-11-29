import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        font_family: string;
        gradient_text: string;
        gradient_bar: string;
        color_bg: string;
        color_footer: string;
        color_blog: string;
        color_text: string;
        color_subtext: string;
    }
}
