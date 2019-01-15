const {VueLoaderPlugin} = require('vue-loader');



module.exports = {
    node: {
        fs: 'empty',
        tls: 'empty',
        dns: 'empty',
        child_process: 'empty'
      },
    //darle un archivo de entrada
    entry: './src/app/indexFront.js',
    output:{
        //darle la ruta de salida y el archivo a generar puede ser cualquier nombre 'bundle'
        path: __dirname + '/src/public/js',
        publicPath: '/src/public',
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                
            },
            {test: /\.css/,
            use: ['vue-style-loader', 'css-loader']}, // BOTH are needed!
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};