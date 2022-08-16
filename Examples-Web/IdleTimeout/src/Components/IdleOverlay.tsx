import './IdleOverlay.scss';

import React, { useEffect, useReducer } from 'react';

import { AppState } from 'Hooks/IdleTimeout';

interface IdleOverlayProps {
    state: AppState;
}

const reducer = (_current: JSX.Element, state: AppState) => {
    switch (state) {
        case 'Idle':
            return (
                <div className="overlay" style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}>
                    <div className="overlay-content" style={{ display: 'flex' }}>
                        <h1 style={{ color: 'white' }}>Experience touchless interaction</h1>
                    </div>
                </div>
            );
        case 'Active':
            return (
                <div className="overlay" style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                    <div className="overlay-content" style={{ display: 'none' }}>
                        <h1 style={{ color: 'white' }}>Experience touchless interaction</h1>
                    </div>
                </div>
            );
        default:
            throw new Error('Overlay state not handled');
    }
};

const IdleOverlay: React.FC<IdleOverlayProps> = ({ state }) => {
    const [displayState, dispatch] = useReducer(reducer, <></>);

    useEffect(() => {
        dispatch(state);
    }, [state]);

    return displayState;
};

export default IdleOverlay;
