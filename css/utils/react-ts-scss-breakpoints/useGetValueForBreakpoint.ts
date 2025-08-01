/**
 * useGetValueForBreakpoint Hook
 * This returns a function that accepts a config object as parameter,
 * where thre keys are known BREAKPOINT_CONSTANTS values, 
 * and the values are what is returned when that breakpoint is active
 * 
 * For active breakpoints that are not provided, the value returned acts as
 * a min-width media query, and falls back to the next largest breakpoint
 * 
 * Example Use:
 * 
 * import useGetValueForBreakpoint from '@tn/foundation/hooks/utils/useGetValueForBreakpoint'
 * const getValueForBreakpoint = useGetValueForBreakpoint()
 * 
 * const gapSize = getValueForBreakpoint<StackProps['gap']>({
        [BREAKPOINT_CONSTANTS.DEFAULT]: 'spacing-2',
        [BREAKPOINT_CONSTANTS.DESKTOP]: 'spacing-3',
    })
 */
import { useCallback, useContext } from 'react';

import { AppContext } from './AppProvider';
import { BREAKPOINT_CONSTANTS } from './ui';

import { Breakpoints } from './useBreakpoints';

const DEFAULT = BREAKPOINT_CONSTANTS.DEFAULT;
const MOBILE_PORTRAIT = BREAKPOINT_CONSTANTS.MOBILE_PORTRAIT;
const MOBILE_LANDSCAPE = BREAKPOINT_CONSTANTS.MOBILE_LANDSCAPE;
const TABLET_PORTRAIT = BREAKPOINT_CONSTANTS.TABLET_PORTRAIT;
const TABLET_LANDSCAPE = BREAKPOINT_CONSTANTS.TABLET_LANDSCAPE;
const DESKTOP = BREAKPOINT_CONSTANTS.DESKTOP;
const DESKTOP_WIDE = BREAKPOINT_CONSTANTS.DESKTOP_WIDE;

const breakpointOrder = [
    DEFAULT,
    MOBILE_PORTRAIT,
    MOBILE_LANDSCAPE,
    TABLET_PORTRAIT,
    TABLET_LANDSCAPE,
    DESKTOP,
    DESKTOP_WIDE,
];

type BreakpointConfig<ValueType> = {
    [DEFAULT]: ValueType;
    [MOBILE_PORTRAIT]?: ValueType;
    [MOBILE_LANDSCAPE]?: ValueType;
    [TABLET_PORTRAIT]?: ValueType;
    [TABLET_LANDSCAPE]?: ValueType;
    [DESKTOP]?: ValueType;
    [DESKTOP_WIDE]?: ValueType;
};

type GetValueForBreakpoint = <ValueType>(
    breakpoint: Breakpoints['active'] | 'default',
    config: BreakpointConfig<ValueType>,
) => ValueType | undefined;

const useGetValueForBreakpoint: () => <ValueType>(
    config: BreakpointConfig<ValueType>,
) => ValueType | undefined = () => {
    const { breakpointInfo } = useContext(AppContext);
    const { active: activeBreakpoint } = breakpointInfo;

    const getValue: GetValueForBreakpoint = useCallback((breakpoint, config) => {
        if (config[breakpoint]) {
            return config[breakpoint];
        }
        const idx = breakpointOrder.indexOf(breakpoint as BREAKPOINT_CONSTANTS);
        return getValue(breakpointOrder[idx - 1], config);
    }, []);

    return <ValueType>(config: BreakpointConfig<ValueType>) => {
        return getValue<ValueType>(activeBreakpoint, config);
    };
};

export default useGetValueForBreakpoint;
