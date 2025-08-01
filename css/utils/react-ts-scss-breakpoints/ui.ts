import breakpoints from './breakpoints.module.scss';

const enum BREAKPOINT_CONSTANTS {
    DEFAULT = 'default',
    MOBILE_PORTRAIT = 'mobilePortrait',
    MOBILE_LANDSCAPE = 'mobileLandscape',
    TABLET_PORTRAIT = 'tabletPortrait',
    TABLET_LANDSCAPE = 'tabletLandscape',
    DESKTOP = 'desktop',
    DESKTOP_WIDE = 'desktopWide',
}

const BREAKPOINT_SIZES = {
    MOBILE_PORTRAIT_MIN: breakpoints['mobile-portrait-min'],
    MOBILE_PORTRAIT_MAX: breakpoints['mobile-portrait-max'],

    MOBILE_LANDSCAPE_MIN: breakpoints['mobile-landscape-min'],
    MOBILE_LANDSCAPE_MAX: breakpoints['mobile-landscape-max'],

    TABLET_PORTRAIT_MIN: breakpoints['tablet-portrait-min'],
    TABLET_PORTRAIT_MAX: breakpoints['tablet-portrait-max'],

    TABLET_LANDSCAPE_MIN: breakpoints['tablet-landscape-min'],
    TABLET_LANDSCAPE_MAX: breakpoints['tablet-landscape-max'],

    DESKTOP_MIN: breakpoints['desktop-min'],
    DESKTOP_MAX: breakpoints['desktop-max'],

    DESKTOP_WIDE_MIN: breakpoints['desktop-wide-min'],
    DESKTOP_WIDE_MAX: breakpoints['desktop-wide-max'],
};

const enum SIZES {
    XXXXS = '4xs',
    XXXS = '3xs',
    XXS = '2xs',
    XS = 'xs',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export { BREAKPOINT_CONSTANTS, BREAKPOINT_SIZES, SIZES };
