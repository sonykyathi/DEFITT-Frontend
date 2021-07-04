import React, { Fragment } from 'react';
import HeadArea from './pages/HeadArea';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Wallets from './pages/WhitePaper';
import TokenSale from './pages/TokenSale';
import RoadMap from './pages/RoadMap';
import Team from './pages/Team';
import Advisors from './pages/Advisors';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import ExchangeListArea from './pages/ExchangeListArea';
import Modals from './pages/Modals';
import PropTypes from 'prop-types';

const main = (props) => {
  return (
    <Fragment>
      <HeadArea></HeadArea>
      <About></About>
      <Solutions></Solutions>
      <Wallets></Wallets>
      <TokenSale></TokenSale>
      <RoadMap></RoadMap>
      {/* <Team></Team> */}
      <Advisors></Advisors>
      <Faq></Faq>
      <Contact></Contact>
      <Modals></Modals>
    </Fragment>
  );
};

main.propTypes = {};

export default main;
