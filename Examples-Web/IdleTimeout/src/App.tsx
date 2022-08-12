import './App.scss';

import { useEffect } from 'react';

import CursorManager from 'Components/CursorManager';
import IdleOverlay from 'Components/IdleOverlay';
import UseIdleTimeout from 'Hooks/IdleTimeout';

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
    const isIdle = UseIdleTimeout(10000);

    return (
        <div className="app">
            <IdleOverlay state={isIdle ? 'Idle' : 'Inactive'} />
            <h1>
                Blank React App
                <br />
                featuring Touch Free Cursor
            </h1>
        </div>
    );
};

export default App;
