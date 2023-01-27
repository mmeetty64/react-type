import React from 'react';
import { Layout } from '../Components/HOCS/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from '../../Constants/Routes/Routes';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          {
            Routes.map((el, idx) =>(
              <Route path={el.path} key={idx} exact><el.page/></Route>
            ))
          }
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
