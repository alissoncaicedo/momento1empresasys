
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './components/Index';
import Control from './components/Control';
import Productos from './components/Productos';
import Proveedores from './components/Proveedores';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    
  },
  {
    path: '/Control',
    element: <Control />,
    
  },
  {
    path: '/Productos',
    element: <Productos />,
    
  },
  {
    path: '/Proveedores',
    element: <Proveedores />,
    
  },
 
])

function App() {
  
  return (
  
      <div className="App">
      
      
      <RouterProvider router={router} />
      
   
      </div>
     
  )
};

export default App;
