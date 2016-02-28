var React = require('react');

var Photo = React.createClass({
    render: function(){
        var style={
            maxWidth:'175',
            maxHeight:'175',
            padding:7
        }
      
        return (
            <div className="col-sm-3 col-xs-6">
                <div style={style} >
                    <img src={this.props.imgsrc} className="img-responsive img-thumbnail"  alt="demoImage"/>
                </div>
                
            </div>
        );
    }
});

module.exports = Photo;
