import './App.scss';

import { useEffect } from 'react';

import { init } from 'TouchFree/src/index';

import IdleOverlay from 'Components/IdleOverlay';
import useIdleTimeout from 'Hooks/IdleTimeout';

const App = () => {
    useEffect(() => {
        init();
    }, []);

    // Must be called after TouchFree.init()
    const isIdle = useIdleTimeout(3000);

    return (
        <div className="app">
            <IdleOverlay visible={isIdle} />
            <h1>TouchFree Application</h1>
        </div>
    );
};

export default App;
