import { ReactNode } from 'react';

declare global {
    const AugmentationWorking: number

    namespace JSX {
        export interface Element extends ReactNode {}
    }
    namespace React {
        export interface Element extends ReactNode {}
        export interface ReactElement extends ReactNode {}
    }

}

declare namespace JSX {
    export interface Element extends ReactNode {}
}


declare namespace React {
    interface Element extends ReactNode {}
    interface ReactElement extends ReactNode {}

    namespace JSX {
        interface Element extends ReactNode {}
    }
}

declare module 'react' {
    namespace JSX {
        export interface Element extends ReactNode {}
    }


    namespace React {
        interface Element extends ReactNode {}
        interface ReactElement extends ReactNode {}

        namespace JSX {
            interface Element extends ReactNode {}
        }
    }

}

interface GlobalJSXElement extends ReactNode {}

export {};
