import './App.scss';

import { useEffect } from 'react';

import CursorManager from 'Components/CursorManager';
import IdleOverlay from 'Components/IdleOverlay';
import useIdleTimeout from 'Hooks/IdleTimeout';

import { ConnectionManager } from './TouchFree/Connection/ConnectionManager';
import { WebInputController } from './TouchFree/InputControllers/WebInputController';

const App = () => {
    useEffect(() => {
        ConnectionManager.init();
        const controller: WebInputController = new WebInputController();

        new CursorManager();

        return () => {
            controller.disconnect();
        };
    }, []);

    // Must be called after ConnectionManager.init()
    const appState = useIdleTimeout(3000);

    return (
        <div className="app">
            <IdleOverlay state={appState} />
            <h1>TouchFree Application</h1>
        </div>
    );
};

export default App;
