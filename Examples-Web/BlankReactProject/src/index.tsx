import './index.css';

import { createRoot } from 'react-dom/client';

import App from './App';

const documentRoot = document.getElementById('root');
if (documentRoot) {
    createRoot(documentRoot).render(<App />);
}
