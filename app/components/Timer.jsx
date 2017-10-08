var React = require('react');
var Clock = require('Clock');

var Timer = () => {
    return <div>
        Timer componenet
        <div><Clock totalSeconds={0}/></div>
    </div>
}

module.exports = Timer;