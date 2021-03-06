var path = require('path');
module.exports = {
    entry:{
        index:[
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://localhost:8080', 
            path.resolve(__dirname,'app/main.js')
        ]
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
            loader:'babel-loader',
            exclude:[
                path.resolve(__dirname,'node_modules'),
            ],
            include:[
                path.resolve(__dirname,'app'),
            ],
            test:/\.jsx?$/,
            },
            {test: /\.css$/,loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            {test: /\.svg/, loader: 'svg-url-loader'}
        ]
    }
};