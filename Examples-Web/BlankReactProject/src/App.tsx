import './App.css';

import { useEffect } from 'react';

import CursorManager from 'Components/CursorManager';

import { ConnectionManager } from './TouchFree/Connection/ConnectionManager';
import { WebInputController } from './TouchFree/InputControllers/WebInputController';

function App() {
    useEffect(() => {
        ConnectionManager.init();
        const controller: WebInputController = new WebInputController();

        new CursorManager();

        return () => {
            controller.disconnect();
        };
    }, []);

    return (
        <div className="app">
            <h1>
                Blank React App
                <br />
                featuring Touch Free Cursor
            </h1>
        </div>
    );
}

export default App;
