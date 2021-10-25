import './App.css';
import React, {useEffect} from 'react';
import Home from './Components/Home';
import { Switch, Route, useLocation } from 'react-router-dom';
import Add from './Components/Edit/Add';
import { AnimatePresence } from 'framer-motion';
import Layout from './Components/Layout';
import styled from 'styled-components';
import { withWidth, Container } from '@material-ui/core';
import Comments from './Components/Comments/Comments';
import Roadmap from './Components/Roadmap/Roadmap';
const Wrapper = styled(Container)`
  padding: ${(props) => props.padding};
  scroll-behavior: smooth;

`;
function App({ width }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0,behavior:'smooth'});
    window.history.scrollRestoration = 'manual';
  }, [location.pathname])
  return (
    <Layout>
      <Wrapper padding={width === 'lg' || width === 'md' ? '5rem 0' : 0} fixed>
     
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/feedback/:id" component={Comments} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/feedback/edit/:id" component={Add} />
            <Route exact path="/roadmap" component={Roadmap} />
          </Switch>
        </AnimatePresence>
      </Wrapper>
    </Layout>
  );
}

export default withWidth()(App);
