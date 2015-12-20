var CreateUserApp = React.createClass({
	
  getInitialState: function() {
	  return {
	  };
	},

	handleClick: function(event) {
  },

  render: function () {
    return (
      <div>
        <h4>Create new User</h4>
        <form role="form" action="/register" method="POST">
          
          <div>
            <label htmlFor="fieldUserEmail">User email:</label>
            <div>
              <input type="email" required id="fieldUserEmail" name="userEmail"/>
            </div>
          </div>

          <div>
            <label htmlFor="fieldUserFirstName">First Name:</label>
            <div>
              <input type="text" required id="fieldUserFirstName" name="firstName"/>
            </div>
          </div>

          <div>
            <label htmlFor="fieldUserLastName">Last Name:</label>
            <div>
              <input type="text" required id="fieldUserLastName" name="lastName"/>
            </div>
          </div>

          <br/>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
});

ReactDOM.render(<CreateUserApp />,document.getElementById("app"));