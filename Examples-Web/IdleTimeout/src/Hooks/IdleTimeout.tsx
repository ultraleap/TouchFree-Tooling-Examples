import React, { useEffect } from 'react';

import TouchFree, { EventHandle } from 'TouchFree/src/TouchFree';

export type AppState = 'Idle' | 'Active';

// Custom hook which will return app state based on hand presence.
// If no hands have been observed for specified timeout in milliseconds
// the state will be idle.
// TouchFree.Init() must be called before this hook.
const useIdleTimeout = (timeoutMs: number): AppState => {
    const [appState, setAppState] = React.useState<AppState>('Idle');

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const timeoutFunction = () => setAppState('Idle');
        const handFoundCallback = () => {
            clearTimeout(timeoutId);
            setAppState('Active'); // Improvement: pass in another function which determines the app state when not idle
        };
        const handLostCallback = () => {
            timeoutId = setTimeout(timeoutFunction, timeoutMs);
        };
        const handlers: EventHandle[] = [
            TouchFree.RegisterEventCallback('HandFound', handFoundCallback),
            TouchFree.RegisterEventCallback('HandsLost', handLostCallback),
        ];

        return () => {
            handlers.forEach((handler) => handler.UnregisterEventCallback());
        };
    }, [timeoutMs]);

    return appState;
};

export default useIdleTimeout;
