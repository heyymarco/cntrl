import '@reusable-ui/typos/effects'
import { defineTheme, colorValues, borderValues, borders, borderRadiuses, colors, headingValues, typoValues } from '@reusable-ui/core'

// other libs:
import Color                from 'color'                // color utilities
import { basicValues, buttonIconValues, buttonValues, iconConfig, navbarValues } from '@reusable-ui/components';



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


// <ButtonIcon>:
buttonIconValues.fontSizeXl = '1.125rem';
buttonIconValues.paddingBlockXl = '0.825rem',


// <Icon>:
iconConfig.image.files.push(
    { name: 'logo.svg', ratio: '62/62' },
    { name: 'bulb.svg', ratio: '22/32' },
    { name: 'picture.svg', ratio: '32/29' },
    { name: 'profile.svg', ratio: '34/34' },
    { name: 'settings.svg', ratio: '32/32' },
    { name: 'sliders.svg', ratio: '27/31' },
    { name: 'play.svg', ratio: '35/35' },
    { name: 'arrow_right.svg', ratio: '17/16' },
);


// typos:
typoValues.fontSizeLg = '1.125rem';

// <h1-h6>:
headingValues.fontSize1 = '6rem';
headingValues.fontWeight = 700;
headingValues.lineHeight = 0.85;


// <Navbar>:
navbarValues.boxSizing = 'border-box';
navbarValues.blockSize = '4rem';