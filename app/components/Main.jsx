var React = require('react');
var Nav = require('Nav');

var Main = (props) => 
    <div>
        <div>
            <div>
                <Nav></Nav>
                {props.children}
            </div>
        </div>
    </div>
;

module.exports = Main;