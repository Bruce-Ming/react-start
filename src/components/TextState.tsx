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
        console.log('%c 严格模式下setState传入的第一个参数函数会执行两次', 'color:red;font-size:24px');

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
    return (
      <>
        <h1>类组件</h1>
        <div>{`Count is: ${this.state.count}`}</div>
      </>
    );
  }
}
