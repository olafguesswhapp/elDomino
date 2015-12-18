var ReactApp = React.createClass({
  displayName: 'ReactApp',

  getInitialState: function () {
    return {
      counter: 0
    };
  },

  handleClick: function (event) {
    this.setState({ counter: this.state.counter + 1 });
    console.log('btn event was ' + event.type + ' - current counter is ' + this.state.counter);
  },

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Testing React'
      ),
      React.createElement(
        'button',
        { onClick: this.handleClick },
        'click to increase'
      ),
      React.createElement(
        'p',
        null,
        'Punkte: ',
        this.state.counter
      )
    );
  }
});

ReactDOM.render(React.createElement(ReactApp, null), document.getElementById("app"));