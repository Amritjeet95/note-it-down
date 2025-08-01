import { createContext, PropsWithChildren } from 'react';

import useBreakpoints, { Breakpoints } from './useBreakpoints';
import { BREAKPOINT_CONSTANTS } from './ui';

export type AppContextType = {
    breakpointInfo: Breakpoints;

};

export type AppProviderProps = PropsWithChildren;

export const defaultValues: AppContextType = {
    breakpointInfo: {
        isMobilePortrait: false,
        isMobileLandscape: false,
        isTabletPortrait: false,
        isTabletLandscape: false,
        isDesktop: true,
        isDesktopWide: false,
        isMobile: false,
        active: BREAKPOINT_CONSTANTS.DESKTOP,
    },
};

export const AppContext = createContext<AppContextType>(defaultValues);

export default function AppProvider({ children = '' }: AppProviderProps) {

    const breakpointInfo = useBreakpoints();

    return (
        <AppContext.Provider value={{ breakpointInfo }}>
            {children}
        </AppContext.Provider>
    );
}
