import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {

        title: string;

        colors: {

            black: string;
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