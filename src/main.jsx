// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import Stairs from './components/common/Stairs.jsx'
// import NavProvider from './context/navContext.jsx' 

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Stairs>
//         <NavProvider>
//           <App/>
//         </NavProvider>
//       </Stairs>
//     </BrowserRouter>
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/Stairs.jsx";
import NavContext  from './context/navContext.jsx' 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <NavContext>
          <App />
        </NavContext>
      </Stairs>
    </BrowserRouter>
  </StrictMode>
);
