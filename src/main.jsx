import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Supports weights 300-900
import '@fontsource-variable/merriweather';
import MainContext from './context/MainContext.jsx';
import "./i18n";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <MainContext>
    <App />
    <Toaster/>
  </MainContext>,
)
