import './IdleOverlay.scss';

import React, { useEffect, useReducer } from 'react';

import { AppState } from 'Hooks/IdleTimeout';

interface IdleOverlayProps {
    state: AppState;
}

const reducer = (_current: JSX.Element, state: AppState) => {
    return (
        <div className={`overlay${state === 'Idle' ? ' overlay-idle' : ''}`}>
            <div className="overlay-content">
                <h1 style={{ color: 'white' }}>Experience touchless interaction</h1>
            </div>
        </div>
    );
};

const IdleOverlay: React.FC<IdleOverlayProps> = ({ state }) => {
    const [displayState, dispatch] = useReducer(reducer, <></>);

    useEffect(() => {
        dispatch(state);
    }, [state]);

    return displayState;
};

export default IdleOverlay;
