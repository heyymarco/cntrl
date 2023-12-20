'use client'

// react:
import {
    // react:
    default as React,
}                           from 'react'

// heymarco components:
import {
    Main,
}                           from '@heymarco/section'

// private components:
import { SectionHero }      from './SectionHero'



// react components:
export function HomePageContent(): JSX.Element|null {
    // jsx:
    return (
        <Main
            // variants:
            nude={true}
        >
            <SectionHero />
        </Main>
    );
}
