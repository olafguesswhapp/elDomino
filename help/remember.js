# Remember
DEBUG=elDomino:* npm start

babel --presets react components --watch --out-dir public/build

<div id="react-main-mount">{{{reactOutput}}}</div>



/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactApp = require('./components/ReactApp');
var JSX = require('node-jsx').install();

window.React = React; 

var mountNode = document.getElementById('react-main-mount');
var MyElement = <ReactApp />;

ReactDOM.render(MyElement, mountNode);
