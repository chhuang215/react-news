var React = require('react');
var Article = require('./Article.jsx');

var News = React.createClass({
    render: function(){
        return (
            <div className="row">
                <Article 
                    icon="https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/CNN.png"
                    title="Tim Cook: Standing up to FBI is 'right thing to do'"
                    sub="Tim Cook is standing firm."
                    article="The Apple CEO reiterated his position on the company's legal fight with the FBI during its annual shareholder meeting on Friday." 
                    location="USA"
                    photos={["http://www.independentsentinel.com/wp-content/uploads/2016/02/tim-cook.jpg", "http://i2.cdn.turner.com/money/dam/assets/160218080041-apple-vs-fbi-san-bernardino-iphone-00000000-1024x576.jpg"]}

                />
                
                <Article 
                    icon="https://canadaalive.files.wordpress.com/2013/01/cbc.jpg"
                    title="Japan's population shrinks by nearly 1M since 2010"
                    sub="It is the first decline since the census count began in 1920"
                    article="Japan's population stood at 127.1 million last fall, down 0.7 per cent from 128.1 million in 2010, according to results of the 2015 census, released Friday. The 947,000 decline in the population in the last five years was the first since the once-every-five-years count started in 1920." 
                    location="Japan"
                    photos={["http://i.cbc.ca/1.3467614.1456601379!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/japan-economy-cpi.jpg", "http://i.cbc.ca/1.2996843.1426519125!/fileImage/httpImage/image.jpg_gen/derivatives/original_620/japan-dolls-widerimage-feb-24-2015-shikoku-nagoro-town.jpg"]}

                />
                
            </div>
        );
    }
});

module.exports = News;
