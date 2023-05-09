import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/style/style.css'
import  AOS  from "aos";
import 'aos/dist/aos.css'

  AOS.init({
    duration: 1000,
  }); 


React
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
