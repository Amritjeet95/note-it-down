import { useMemo } from 'react';
import { useMedia } from 'react-use';

import { BREAKPOINT_CONSTANTS, BREAKPOINT_SIZES } from '@/utils/constants/ui';

export interface Breakpoints {
    isMobilePortrait: boolean;
    isMobileLandscape: boolean;
    isTabletPortrait: boolean;
    isTabletLandscape: boolean;
    isDesktop: boolean;
    isDesktopWide: boolean;
    isMobile: boolean;
    active:
        | BREAKPOINT_CONSTANTS.MOBILE_PORTRAIT
        | BREAKPOINT_CONSTANTS.MOBILE_LANDSCAPE
        | BREAKPOINT_CONSTANTS.TABLET_PORTRAIT
        | BREAKPOINT_CONSTANTS.TABLET_LANDSCAPE
        | BREAKPOINT_CONSTANTS.DESKTOP
        | BREAKPOINT_CONSTANTS.DESKTOP_WIDE;
}

const useBreakpoints = (): Breakpoints => {
    const isMobilePortrait = useMedia(
        `(max-width: ${BREAKPOINT_SIZES.MOBILE_PORTRAIT_MAX})`,
        false,
    );
    const isMobileLandscape = useMedia(
        `(min-width: ${BREAKPOINT_SIZES.MOBILE_LANDSCAPE_MIN}) and (max-width: ${BREAKPOINT_SIZES.MOBILE_LANDSCAPE_MAX})`,
        false,
    );
    const isTabletPortrait = useMedia(
        `(min-width: ${BREAKPOINT_SIZES.TABLET_PORTRAIT_MIN}) and (max-width: ${BREAKPOINT_SIZES.TABLET_PORTRAIT_MAX})`,
        false,
    );
    const isTabletLandscape = useMedia(
        `(min-width: ${BREAKPOINT_SIZES.TABLET_LANDSCAPE_MIN}) and (max-width: ${BREAKPOINT_SIZES.TABLET_LANDSCAPE_MAX})`,
        false,
    );
    const isDesktop = useMedia(
        `(min-width: ${BREAKPOINT_SIZES.DESKTOP_MIN}) and (max-width: ${BREAKPOINT_SIZES.DESKTOP_MAX})`,
        true,
    );
    const isDesktopWide = useMedia(`(min-width: ${BREAKPOINT_SIZES.DESKTOP_WIDE_MIN})`, false);

    const isMobile = useMemo(
        () => isMobileLandscape || isMobilePortrait || isTabletLandscape || isTabletPortrait,
        [isMobileLandscape, isMobilePortrait, isTabletLandscape, isTabletPortrait],
    );

    const active = useMemo(() => {
        if (isMobilePortrait) return BREAKPOINT_CONSTANTS.MOBILE_PORTRAIT;
        if (isMobileLandscape) return BREAKPOINT_CONSTANTS.MOBILE_LANDSCAPE;
        if (isTabletPortrait) return BREAKPOINT_CONSTANTS.TABLET_PORTRAIT;
        if (isTabletLandscape) return BREAKPOINT_CONSTANTS.TABLET_LANDSCAPE;
        if (isDesktop) return BREAKPOINT_CONSTANTS.DESKTOP;
        if (isDesktopWide) return BREAKPOINT_CONSTANTS.DESKTOP_WIDE;
        return BREAKPOINT_CONSTANTS.DESKTOP;
    }, [
        isMobilePortrait,
        isMobileLandscape,
        isTabletPortrait,
        isTabletLandscape,
        isDesktop,
        isDesktopWide,
    ]);

    return {
        isMobilePortrait,
        isMobileLandscape,
        isTabletPortrait,
        isTabletLandscape,
        isDesktop,
        isDesktopWide,
        isMobile,
        active,
    };
};

export default useBreakpoints;
