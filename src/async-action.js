import React from 'react';

export default class AsyncAction extends React.Component {
  constructor() {
    super();
    this.state = { status: 'before' };
    this.onClick = this.onClick.bind(this);
  }

  async onClick(e) {
    let { onClick } = this.props;
    this.setState({ status: 'during' });
    await onClick(e);
    this.setState({ status: 'after' });
  }

  render() {
    let { status } = this.state;

    return React.cloneElement(this.props[status], {
      onClick: status === 'before' ? this.onClick : null,
    });
  }
}
