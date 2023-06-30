import './IdleOverlay.scss';

const IdleOverlay = ({ visible }: { visible?: boolean }) => (
    <div className="overlay" style={{ opacity: visible ? '1' : '0' }}>
        <h1>Experience touchless interaction</h1>
    </div>
);
export default IdleOverlay;
