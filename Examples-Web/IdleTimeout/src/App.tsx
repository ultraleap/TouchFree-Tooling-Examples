import './App.scss';

import { useEffect } from 'react';

import { init } from 'touchfree/src';

import IdleOverlay from 'Components/IdleOverlay';
import useIdleTimeout from 'Hooks/IdleTimeout';

const App = () => {
    useEffect(() => {
        init();
    }, []);

    // Must be called after touchfree.init()
    const isIdle = useIdleTimeout(3000);

    return (
        <div className="app">
            <IdleOverlay visible={isIdle} />
            <h1>TouchFree Application</h1>
        </div>
    );
};

export default App;
