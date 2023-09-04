import { useEffect, useState } from 'react';

import TouchFree, { EventHandle } from 'TouchFree/src/TouchFree';

// Custom hook which will return whether the application is idle or not
// based on hand presence.
// If no hands have been observed for specified timeout in milliseconds
// the state will be idle.
// TouchFree.init() must be called before this hook.
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
        const handlers: EventHandle[] = [
            TouchFree.registerEventCallback('handFound', handFoundCallback),
            TouchFree.registerEventCallback('handsLost', handLostCallback),
        ];

        return () => {
            handlers.forEach((handler) => handler.UnregisterEventCallback());
        };
    }, [timeoutMs]);

    return isIdle;
};

export default useIdleTimeout;
