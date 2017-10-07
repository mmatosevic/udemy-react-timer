var React = require('react');

var Clock = React.createClass({
    padNumber: function(n){
        if(n < 10) return "0" + n;
        return n;
    },
    formatSeconds: function(seconds) {
        var s = seconds % 60;
        var m = Math.floor(seconds / 60);
        return this.padNumber(m) + ':' + this.padNumber(s);
    },
    render: function() {
        return <div></div>
    }
});

module.exports = Clock;