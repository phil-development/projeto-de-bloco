import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {

        title: string;

        colors: {

            white: string;
            yellow: string;

            primary: string;
            secondary: string;
            background: string;
            component: string;
            items: string;
            text: string;

        }

    }

}