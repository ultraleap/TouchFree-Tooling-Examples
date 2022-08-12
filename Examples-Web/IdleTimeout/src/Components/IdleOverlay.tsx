import './IdleOverlay.scss';

import React from 'react';

interface IdleOverlayProps {
    state: 'Idle' | 'Inactive';
}

const IdleOverlay: React.FC<IdleOverlayProps> = ({ state }) => {
    const backgroundColor = `rgb(0, 0, 0, ${state === 'Idle' ? 0.95 : 0})`;
    return (
        <div className="overlay" style={{ backgroundColor: backgroundColor }}>
            <div className="overlay-content" style={{ display: state === 'Idle' ? 'flex' : 'none' }}>
                <h1 style={{ color: 'white' }}>Experience touchless interaction</h1>
            </div>
        </div>
    );
};

export default IdleOverlay;
