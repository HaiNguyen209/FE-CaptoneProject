import React from 'react';
import PropTypes from 'prop-types';
// import { useQuery } from 'react-query';
import Header from './Header';
import Footer from './Footer';
// import { api } from '../../helpers/axios';

const Layout = ({ children }) => (
  <>
    {/* <Header me={data} /> */}
    <Header />
    {children}
    <Footer />
  </>
);
// const { data } = useQuery('me', async () => {
//   const res = await api.get('/me');
//   return res.data;
// }, {
//   staleTime: 300000,
// });

// if (data) {

// } return <></>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
