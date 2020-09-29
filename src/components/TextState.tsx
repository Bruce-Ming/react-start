import React, { Component, PureComponent } from 'react';

export class TextState extends Component {
  state = { count: 0 };

  change = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count); // 1
  };

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log(1, this.state.count); // 1
    this.setState(
      (pre, props) => {
        console.log(pre, props);

        console.log(2, pre, this.state.count); // 1
        let a = Math.random() * 10;
        console.log(a);

        return { count: a };
      },
      () => {
        console.log('改变后的值', this.state);
      },
    );
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(4, this.state.count); // 1
    }, 0);
  }

  render() {
    return <div>{`Count is: ${this.state.count}`}</div>;
  }
}
