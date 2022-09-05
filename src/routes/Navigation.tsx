import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';


import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>

              {
                routes.map(({name, to})=>{
                  return ( 
                  <li key={name}>
                    <NavLink to={to}>{name}</NavLink>
                  </li>)
                })
              }
            
            </ul>
          </nav>

          <Routes>
      
            {
                routes.map(({name, path, Component})=>{
                  return ( 
                    <Route key={name} path={path} element={<Component/>}/>
                        
                   
                  )
                })
            }
              
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}