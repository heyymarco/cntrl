// cssfn:
import {
    descendants,
    children,
    scope,
    rule,
    style,
}                           from '@cssfn/core'                  // writes css in javascript
import { usesIcon } from '@reusable-ui/components';

// reusable-ui core:
import {
    borders,
    colors,
    spacers, typos,
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
const logoLayout = () => {
    const {iconVars} = usesIcon();
    return style({
        [iconVars.size] : '3.875rem',
    });
}



// styles:
export default () => [
    scope('hero', {
        display: 'grid',
        gridTemplate: [[
            '"intro     intro" auto',
            '"features signUp" auto',
            '/',
            '1fr 1fr'
        ]],
        columnGap : '1.75rem',
    }),
    
    
    scope('emphasis', {
        ...emphasisLayout(),
    }),
    scope('intro', {
        gridArea: 'intro',
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
        paddingBlockEnd: '8.75rem',
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
        fontSize: typos.fontSizeLg,
    }),
    scope('actions', {
        gridArea: 'actions',
        display: 'grid',
        gridTemplate: [[
            '"watch try" auto',
            '/',
            'minmax(15rem, 1fr) minmax(15rem, 1fr)',
        ]],
        gap: spacers.default,
    }),
    
    scope('features', {
        gridArea: 'features',
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
                    fontSize: typos.fontSizeLg,
                }),
                ...children('.content', {
                    gridArea: 'content',
                    fontSize: typos.fontSizeMd,
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
            borderColor: colors.primaryThin,
        }),
    }),
    
    scope('signUp', {
        gridArea: 'signUp',
        alignSelf: 'start',
        display: 'grid',
        gridTemplate: [[
            '"header" auto',
            `"......" ${spacers.lg}`,
            '"fields" auto',
            `"......" ${spacers.md}`,
            '"action" auto',
        ]],
        padding: spacers.xl,
    }),
    scope('signUpHeader', {
        gridArea: 'header',
        justifySelf: 'center',
        display: 'grid',
        gridTemplate: [[
            '"logo title" auto',
            '"logo motto" auto',
            '/',
            'min-content 1fr',
        ]],
        alignItems: 'center',
        columnGap: spacers.default,
        ...children('.logo', {
            gridArea: 'logo',
            ...logoLayout(),
        }),
        ...children('.title', {
            gridArea: 'title',
            margin: 0,
        }),
        ...children('.motto', {
            gridArea: 'motto',
            margin: 0,
            fontWeight: typos.fontWeightLight,
        }),
    }),
    scope('signUpForm', {
        gridArea: 'fields',
        display: 'grid',
        gridTemplate: [[
            '"firstname lastname" auto',
            '"email        email" auto',
            '"password  password" auto',
        ]],
        gap: spacers.default,
        ...children('*', {
            borderColor: 'transparent',
            borderRadius: '3rem',
            ...descendants('.label', {
                fontSize: `calc((${typos.fontSizeXs} + ${typos.fontSizeSm}) / 2)`,
                fontWeight: typos.fontWeightSemibold,
                justifyContent: 'start',
                color: colors.primary,
            }),
            ...descendants('input', {
                fontSize: typos.fontSizeMd,
                padding: spacers.sm,
            }),
            ...descendants(['.label', 'input'], {
                padding: 0,
                paddingInlineStart: spacers.lg,
            }),
        }),
        ...children('.firstname', { gridArea: 'firstname' }),
        ...children('.lastname', { gridArea: 'lastname' }),
        ...children('.email', { gridArea: 'email' }),
        ...children('.password', { gridArea: 'password' }),
    }),
    scope('signUpAction', {
        gridArea: 'action',
        borderColor: colors.white,
        borderWidth: borders.thin,
    }),
];