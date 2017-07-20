module.exports = {
    entry: "./main.jsx",
    output: {
        path: "/Users/sanshanxiashi/WebstormProjects/reactApp2/",
        filename: 'zhul.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },{ test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};