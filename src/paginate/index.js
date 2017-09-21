import React from 'react';
import getPages from './get-pages';
import { Link } from 'react-router-dom';

const defaults = {
  className: 'flashbang-p',
  liClassName: 'flashbang-p__li',
  linkClassName: (active, disabled) =>
    `flashbang-p__link${disabled ? ' flashbang-p__disabled' : ''}${active
      ? ' flashbang-p__is-active'
      : ''}`,
};

export default ({
  page,
  pages,
  createURL,
  className = defaults.className,
  liClassName = defaults.liClassName,
  linkClassName = defaults.linkClassName,
  ...props
}) => {
  page = page || 1;
  if (!pages || pages === 1) return null;
  let goBack = page !== 1;
  let goForward = page !== pages;

  return (
    <div className={className} {...props}>
      <ul>
        <li className={liClassName} onClick={() => window.scrollTo(0, 0)}>
          <Link
            to={goBack ? createURL(page - 1) : createURL(page)}
            className={linkClassName(false, !goBack)}
          >
            {'«'}
          </Link>
        </li>
        {getPages(page, pages, createURL, liClassName, linkClassName)}
        <li className={liClassName} onClick={() => window.scrollTo(0, 0)}>
          <Link
            to={goForward ? createURL(page + 1) : createURL(page)}
            className={linkClassName(false, !goForward)}
          >
            {'»'}
          </Link>
        </li>
      </ul>
    </div>
  );
};
