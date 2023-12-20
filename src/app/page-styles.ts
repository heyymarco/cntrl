// cssfn:
import {
    // writes css in javascript:
    fallback,
    descendants,
    children,
    scope,
    rule,
    style,
}                           from '@cssfn/core'                  // writes css in javascript
import { basics } from '@reusable-ui/components';

// reusable-ui core:
import {
    colors,
    // a responsive management system:
    ifScreenWidthAtLeast, spacers, typos, usesBackground, usesForeground,
}                           from '@reusable-ui/core'            // a set of reusable-ui packages which are responsible for building any component



const emphasisLayout = () => {
    return style({
        // layouts:
        color          : colors.primary,
        ...rule(['&::selection', '& ::selection'], { // ::selection on self and descendants
            background : colors.primary,
            color      : colors.primaryBold,
        }),
    })
}
// styles:
export default () => [
    scope('hero', {
    }),
    
    
    scope('emphasis', {
        ...emphasisLayout(),
    }),scope('intro', {
        display : 'grid',
        justifyItems: 'center',
        gridTemplate: [[
            '"  pre  " auto',
            `"......." ${spacers.xs}`,
            '" title " auto',
            `"......." ${spacers.default}`,
            '" motto " auto',
            `"......." ${spacers.default}`,
            '"actions" auto',
        ]],
        textAlign: 'center',
    }),
    scope('pre', {
        gridArea: 'pre',
    }),
    scope('title', {
        gridArea: 'title',
        margin: 0,
    }),
    scope('motto', {
        gridArea: 'motto',
        margin: 0,
    }),
    scope('actions', {
        gridArea: 'actions',
        display: 'grid',
        gridTemplate: [[
            '"watch try" auto',
            '/',
            '1fr 1fr',
        ]],
        gap: spacers.default,
    }),
    
    scope('features', {
        ...children('li', {
            ...children('div', {
                display: 'grid',
                alignItems: 'center',
                gridTemplate: [[
                    '"icon   title" auto',
                    '".... content" auto',
                    '/',
                    'min-content 1fr',
                ]],
                columnGap: spacers.default,
                rowGap: spacers.xs,
                ...children('.icon', {
                    gridArea: 'icon',
                }),
                ...children('.title', {
                    gridArea: 'title',
                    margin: 0,
                }),
                ...children('.content', {
                    gridArea: 'content',
                }),
            }),
            ...rule(':not(:first-child)', {
                ...children('div', {
                    paddingBlockStart: spacers.default,
                }),
            }),
            ...rule(':not(:last-child)', {
                ...children('div', {
                    paddingBlockEnd: spacers.default,
                }),
            }),
        }),
    }),
    
    scope('signUp', {
        padding: spacers.lg,
    }),
];
