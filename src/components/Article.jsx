var React = require('react');

var Article = React.createClass({

    render: function(){      
        
        var panelStyle = {
            background:'#fff',
            padding:35,
            margin:'0 20px 20px 20px'
        }
        
        var articleTitleStyle={
            fontWeight:'bold'
        }
        var articleSubStyle={
            margin:0
        }
        var articleLocStyle={
            color:'darkgray'
        }
        var articleStyle={
            color:'DimGray',
            fontSize:18
        }
        var iconStyle={
            maxWidth:60
        }
        
        var photos=[];
        
        for(var i = 0; i < 3; i++){
            if(this.props.photos[i]){
                photos.push(
                    <div className="col-sm-4">
                        <img src={this.props.photos[i]} className="img-responsive img-rounded" alt="articlePhoto"/>
                    </div>
                );
            }
        }
        
        return (
            <div style={panelStyle} className="col-xs-12">
                
                <div className="row">
                    <div className="col-sm-1">
                        <img style={iconStyle} src={this.props.icon} className="img-responsive" alt="icon"/>
                    </div>
                    
                    <div className="col-sm-11">
                        <div className="col-sm-12">
                            <h2 style={articleTitleStyle}>{this.props.title}</h2>
                            <h2 style={articleSubStyle}>{this.props.sub}</h2>
                        </div>
                        
                        <div className="col-sm-12">
                            <br/>
                            <br/>
                     
                            <p style={articleStyle}>{this.props.article}</p>
                        </div>
                        
                        <div className="col-sm-12">
                            <div className="row">
                                {photos}
                            </div>
                        </div>
                        
                        <div style={articleLocStyle} className="col-sm-12"><br/>{this.props.location}</div>
                    </div>
                    
                
                </div>
                
                
            </div>
        );
    }
});

module.exports = Article;
