import React from 'react';
import { Link } from 'react-router-dom';

export default (page, pages, createURL, liClassName, linkClassName) => {
  let pageList = [];

  for (var pager = 1; pages >= pager; pager++) {
    let distance = pager - page;
    if (distance > 4 || distance < -4) continue;

    pageList.push(
      <li
        key={pager}
        className={liClassName}
        onClick={() => window.scrollTo(0, 0)}
      >
        <Link to={createURL(pager)} className={linkClassName(pager === page)}>
          {pager}
        </Link>
      </li>
    );
  }

  return pageList;
};
