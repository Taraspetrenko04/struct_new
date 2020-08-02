import React from "react";
import './style.scss';
import './components/Header/Header';
import {useRoutes} from './useRoutes';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

// const routes = useRoutes();


function App(){
    return (
        <div className="container">
          <Header />
          {useRoutes()}
          <Footer />
        </div>
      )}

export default App;
