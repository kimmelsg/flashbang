import React from 'react';

export default class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  children(children) {
    let { toggled } = this.state;

    return React.Children.map(children, child => {
      let { toggle, on, off, ...props } = child.props;

      if (toggle)
        return React.createElement(child.type, {
          ...props,
          onClick: () => this.setState({ toggled: !toggled }),
        });

      if (on) {
        if (!toggled) return null;
        return React.createElement(child.type, props);
      }

      if (off) {
        if (toggled) return null;
        return React.createElement(child.type, props);
      }

      return child;
    });
  }
  render() {
    return this.children(this.props.children);
  }
}
