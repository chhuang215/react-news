var React = require('react');
var Photo = require('./Photo.jsx');

var Photos = React.createClass({
    
    
    
    render: function(){
        var panelStyle = {
            background:'#fff',
            padding:35,
            margin:'0 20px 20px 20px'
        }
        return (
            <div style={panelStyle} className="row">
                <Photo imgsrc='http://www.w3schools.com/bootstrap/cinqueterre.jpg'/>
                <Photo imgsrc='http://www.w3schools.com/bootstrap/cinqueterre.jpg'/>
                <Photo imgsrc='https://facebook.github.io/react/img/logo.svg'/>
                <Photo imgsrc='https://pbs.twimg.com/profile_images/665041991089041409/xcly1_SH.png'/>
                
                <Photo imgsrc='http://www.w3schools.com/bootstrap/cinqueterre.jpg'/>
                <Photo imgsrc='https://facebook.github.io/react/img/logo.svg'/>
                <Photo imgsrc='https://pbs.twimg.com/profile_images/665041991089041409/xcly1_SH.png'/>
                
               
                <Photo imgsrc='http://www.w3schools.com/bootstrap/cinqueterre.jpg'/>
            </div>
        );
    }
});

module.exports = Photos;
