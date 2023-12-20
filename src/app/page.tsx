// react:
import {
    // react:
    default as React,
}                           from 'react'

// next-js:
import type {
    Metadata,
}                           from 'next'

// private components:
import {
    HomePageContent,
}                           from './page-content'



// export const metadata: Metadata = {
//     title       : PAGE_HOME_TITLE,
//     description : PAGE_HOME_DESCRIPTION,
// }



// react components:
export default function HomePage(): JSX.Element|null {
    // jsx:
    return (
        <HomePageContent />
    );
}
