import '@reusable-ui/typos/effects'
import { defineTheme, colorValues, borderValues, borders, borderRadiuses, colors } from '@reusable-ui/core'

// other libs:
import Color                from 'color'                // color utilities
import { buttonValues } from '@reusable-ui/components';



// Themes:

const darkCol = Color('#0C0C0C');
defineTheme('dark', darkCol);
colorValues.darkBold = Color('#3185FF');

const lightCol = Color('#FFFFFF');
defineTheme('light', lightCol);



// Borders:

// borderValues.defaultWidth = '4px';
// borderValues.default = [[borders.style, borders.defaultWidth, borders.color]];

borderRadiuses.sm = '1.00rem' as any;
borderRadiuses.md = '1.25rem' as any;
borderRadiuses.lg = '2.50rem' as any;


// <Button>:
// buttonValues.color = colors.white;