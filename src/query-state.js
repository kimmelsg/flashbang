import qs from 'qs';
import React from 'react';
import { withRouter } from 'react-router-dom';
const getQuery = search => qs.parse(search.substring(1));

export default component =>
  withRouter(
    class QueryState extends React.Component {
      constructor({ location: { search } }) {
        super();
        this.state = getQuery(search);
        this.update = this.update.bind(this);
      }

      update(values) {
        let { history: { push }, location: { pathname, search } } = this.props;
        let query = { ...getQuery(search), ...values };
        this.setState(query);

        clearTimeout(this.timer);
        this.timer = setTimeout(
          () => push(`${pathname}?${qs.stringify(query)}`),
          350
        );
      }

      render() {
        return React.createElement(component, {
          ...this.props,
          state: { ...this.state },
          setState: this.update,
        });
      }
    }
  );
