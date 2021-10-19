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
import AboutPage from './components/pages/AboutPage';
import GalleryPage from './components/pages/GalleryPage';
import './App.css';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {

  let data = window?.location?.pathname?.includes('/gallery')
  return (
    <Router>
      <Fragment>
        <ReactNotification />

        {data ? null : <Loader></Loader>}
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
              <Route exact path='/aboutus'>
                <AboutPage />
              </Route>
              <Route exact path='/gallery'>
                <GalleryPage />
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
