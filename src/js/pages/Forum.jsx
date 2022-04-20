import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import Layout from '../components/common/Layout';

const Home = () => {
  const content = 'Danh mục tài liệu';
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  return (
    <Layout>
      {content}
      {/* <div>
        {user}

      </div> */}
    </Layout>
  );
};

export default Home;
