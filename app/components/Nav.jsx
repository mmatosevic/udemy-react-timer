var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Timer App</li>
                        <li><IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/'>Timer</IndexLink></li>
                        <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/countdown'>Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="http://www.google.com/search?q=DoubleM">DoubleM</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Nav;