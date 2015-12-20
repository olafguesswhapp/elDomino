var Test = React.createClass({
	
  getInitialState: function() {
	  return {
	  };
	},

  render: function () {
    console.log('this.props:');
    console.log(JSON.stringify(this.props));
    return (
      <div>
        <h1>{this.props.text}</h1>
        <p>Punkte: {this.props.title}</p>
      </div>
    )
  }
});

ReactDOM.render(<Test />,document.getElementById("app"));