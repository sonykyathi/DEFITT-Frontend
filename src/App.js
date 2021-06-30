import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Loader from './components/layouts/Loader';
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import TemplateInner from './components/TemplateInner';
import TemplateNotFound from './components/TemplateNotFound';
import useScript from './hooks/useScript';
import './App.css';
function App() {
  return (
    <Router>
      <Fragment>
        <Loader></Loader>
        <Navbar></Navbar>
        <Header></Header>
        <div className='content-wrapper'>
          <div className='content-body'>
            <Switch>
              <Route exact path='/'>
                <Main />
              </Route>
              <Route exact path='/template-inner'>
                <TemplateInner />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/register'>
                <Register />
              </Route>
              <Route exact path='*'>
                <TemplateNotFound />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer></Footer>
      </Fragment>
    </Router>
  );
}

export default App;
