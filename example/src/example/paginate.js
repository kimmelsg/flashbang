import qs from 'qs';
import React from 'react';
import { Paginate } from '../flashbang';
import '../flashbang/paginate/style.css';

const query = () => qs.parse(window.location.search.substring(1));

export default () => (
  <Paginate
    page={parseInt(query().page, 10)}
    pages={25}
    createURL={page => `?page=${page}`}
  />
);
