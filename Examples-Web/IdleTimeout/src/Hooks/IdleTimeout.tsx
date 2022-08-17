import React, { useEffect } from 'react';

import { ConnectionManager } from 'TouchFree/Connection/ConnectionManager';

export type AppState = 'Idle' | 'Active';

// Custom hook which will return app state based on hand presence.
// If no hands have been observed for specified timeout in milliseconds
// the state will be idle.
// ConnectionManager.init() must be called before this hook.
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
        ConnectionManager.instance.addEventListener('HandFound', handFoundCallback);
        ConnectionManager.instance.addEventListener('HandsLost', handLostCallback);

        return () => {
            ConnectionManager.instance.removeEventListener('HandFound', handFoundCallback);
            ConnectionManager.instance.removeEventListener('HandLost', handLostCallback);
        };
    }, [timeoutMs]);

    return appState;
};

export default useIdleTimeout;
