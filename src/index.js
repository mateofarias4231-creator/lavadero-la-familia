import React from 'react';
import { createRoot } from 'react-dom/client';
import LavaderoLaFamiliaWebsite from './LavaderoLaFamiliaWebsite';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<LavaderoLaFamiliaWebsite />);
