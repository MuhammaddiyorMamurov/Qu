import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Supports weights 300-900
import '@fontsource-variable/merriweather';
import "./i18n";
import { Toaster } from 'react-hot-toast';
import MainProvider from './context/MainContext.jsx';

createRoot(document.getElementById('root')).render(
  <MainProvider>
    <App />
    <Toaster/>
  </MainProvider>,
)
