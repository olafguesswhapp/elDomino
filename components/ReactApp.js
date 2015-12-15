/** @jsx React.DOM */

var React = require('react');

var ReactApp = React.createClass({

      render: function () {
        return (
          <div id="table-area">
            <h1>Testing React</h1>

          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;