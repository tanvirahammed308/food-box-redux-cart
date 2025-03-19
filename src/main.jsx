import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Router from './routes/router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Toaster } from 'react-hot-toast'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}>
    <BrowserRouter >
    <Router/>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
   
    
  </BrowserRouter>
      
    </Provider>
    
   
  </StrictMode>
)
