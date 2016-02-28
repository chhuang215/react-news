var React = require('react');
var Link = require('react-router').Link;

var Base = React.createClass({
  
    render: function(){
        
        var mainStyle={
            width:'100%',
            
        }
        
        var contentStyle={
            background:'gray repeat-y'
        }
        
        var contentsStyle={
            marginTop:'0',
             width:'80%',
             height:'100%'
        }
        
        
        var headerStyle={
            background:'#3366FF',
            color:'white',
            margin:0
        }
        
        var iconStyle={
            color:'white'
        }
        
        var linkStyle={
            color:'white',
            fontSize:30
        }
        
        var headerTextStyle={
            margin:0
        }
        
        return (
            <div style={mainStyle}>
                <div  className="row">
                    <div style={headerStyle} className="jumbotron">
                        <div className="container">
                            <div className="col-sm-8 col-xs-6">
                                <h1 style={headerTextStyle}>Country News</h1>
                                <h2>
                                    Top stories
                                </h2>

                            </div>

                            <div className="col-sm-4 col-xs-6">
                                <div className="row">
                                    <div className="col-sm-2 col-xs-4">
                                        <a style={iconStyle} href="#"><i className="fa fa-twitter-square fa-2x"></i></a>
                                    </div>
                                    <div className="col-sm-2 col-xs-4">
                                        <a style={iconStyle} href="#"><i className="fa fa-facebook-square fa-2x"></i></a>
                                    </div>
                                    <div className="col-sm-2 col-xs-4">
                                        <a style={iconStyle} href="#"><i className="fa fa-instagram fa-2x"></i></a>
                                    </div>
                                    <div className="col-sm-2 col-sm-offset-0 col-xs-4 col-xs-offset-2">
                                        <a style={iconStyle} href="#"><i className="fa fa-linkedin-square fa-2x"></i></a>
                                        </div>
                                    <div className="col-sm-2 col-xs-4">
                                        <a style={iconStyle} href="#"><i className="fa fa-envelope-square fa-2x"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={contentStyle} className="row">
                    <div style={contentsStyle} className="container">
                        <div className="row">
                            <div className="col-xs-6 col-xs-push-3 col-sm-push-7 col-sm-2 col-md-push-8">
                               <Link to="/news"><span style={linkStyle}> NEWS </span></Link>
                            </div>
                            <div className="col-xs-6 col-sm-2 col-sm-push-7 col-md-push-8">
                               
                               <Link to="/photos"><span style={linkStyle}> PHOTOS </span></Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
});

module.exports = Base;
