import '@reusable-ui/typos/effects'
import { defineTheme, colorValues, borderValues, borders, borderRadiuses, colors } from '@reusable-ui/core'

// other libs:
import Color                from 'color'                // color utilities
import { buttonValues } from '@reusable-ui/components';



// Themes:

const darkCol = Color('#0C0C0C');
defineTheme('dark', darkCol);
colorValues.darkBold = Color('#3185FF');

// const goldCol = Color('#D19B3E');
// defineTheme('gold', goldCol);
// // @ts-ignore
// colorValues.goldBold = goldCol.darken(1.2);



// Borders:

// borderValues.defaultWidth = '4px';
// borderValues.default = [[borders.style, borders.defaultWidth, borders.color]];

borderRadiuses.md = '1.00rem' as any;
borderRadiuses.md = '1.25rem' as any;
borderRadiuses.md = '1.50rem' as any;


// <Button>:
// buttonValues.color = colors.white;