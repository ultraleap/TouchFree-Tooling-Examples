import { useEffect, useState } from 'react';

import { TouchFreeEventHandle, registerEventCallback } from 'touchfree/src';

// Custom hook which will return whether the application is idle or not
// based on hand presence.
// If no hands have been observed for specified timeout in milliseconds
// the state will be idle.
// touchfree.init() must be called before this hook.
const useIdleTimeout = (timeoutMs: number): boolean => {
    const [isIdle, setIsIdle] = useState(true);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const handFoundCallback = () => {
            clearTimeout(timeoutId);
            setIsIdle(false);
        };
        const handLostCallback = () => {
            timeoutId = setTimeout(() => setIsIdle(true), timeoutMs);
        };
        const handlers: TouchFreeEventHandle[] = [
            registerEventCallback('handFound', handFoundCallback),
            registerEventCallback('handsLost', handLostCallback),
        ];

        return () => {
            handlers.forEach((handler) => handler.unregisterEventCallback());
        };
    }, [timeoutMs]);

    return isIdle;
};

export default useIdleTimeout;
