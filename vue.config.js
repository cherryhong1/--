module.exports = {
    publicPath:'/mioamiao',
    devServer: {
        proxy:{
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin:true,
                pathRewrite: {
                    '^/api': '/api'
                }
                
            }
        }
    },
  

}
