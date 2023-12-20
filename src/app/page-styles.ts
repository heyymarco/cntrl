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
    ifScreenWidthAtLeast, spacers, usesBackground, usesForeground,
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
            '" title " auto',
            '" motto " auto',
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
        display: 'flex',
        gap: spacers.default,
    }),
];
