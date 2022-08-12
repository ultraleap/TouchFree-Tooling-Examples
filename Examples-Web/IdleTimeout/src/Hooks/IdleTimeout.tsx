import React, { useEffect } from 'react';

import { ConnectionManager } from 'TouchFree/Connection/ConnectionManager';

// Custom hook which will return true when no hands have been
// observed for specified timeout in milliseconds.
// ConnectionManager.init() must be called before this hook.
const useIdleTimeout = (timeoutMs: number): boolean => {
    const [isIdle, setIsIdle] = React.useState<boolean>(true);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const timeoutFunction = () => setIsIdle(true);
        const handFoundCallback = () => {
            clearTimeout(timeoutId);
            setIsIdle(false);
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

    return isIdle;
};

export default useIdleTimeout;
