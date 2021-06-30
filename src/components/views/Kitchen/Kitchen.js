import { styles } from './Kitchen.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Kitchen = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
    <Link to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Link>
    <h2>Kitchen view</h2>
  </div>
);

export default Kitchen;
