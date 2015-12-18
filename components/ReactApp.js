var ReactApp = React.createClass({
	
  getInitialState: function() {
	  return {
	    counter: 0,
	  };
	},

	handleClick: function(event) {
    this.setState({ counter: this.state.counter + 1 });
    console.log('btn event was ' + event.type + ' - current counter is ' + this.state.counter);
  },

  render: function () {
    return (
      <div>
        <h1>Testing React</h1>
        <button onClick={this.handleClick}>click to increase</button>
        <p>Punkte: {this.state.counter}</p>
      </div>
    )
  }
});

ReactDOM.render(<ReactApp />,document.getElementById("app"));