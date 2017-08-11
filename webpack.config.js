/**
 * Created by User on 2017/7/25.
 */
/**
 * Created by User on 2017/7/14.
 */
module.exports = {
    entry: './index1.js',
    output: {
        path:__dirname,
        filename:'index.js'
    },
    module: {
        loaders: [
            {
                test:/\.css$/,//支持正则
                loader:'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '$':'jquery/dist/jquery.js'
        }
    }
};