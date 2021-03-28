module.exports={
    devServer: {
        host: '0.0.0.0',
        public:'172.20.3.3:8080',
        port: 8081,
        proxy: {
          // 第一台服务器配置 
          '/admin': {
            target: 'http://localhost:8085',
            ws: true,
            changeOrigin: true,
            // pathRewrite: {
            //   '^/admin': ''
            // }
          },
          // 第二台服务器配置 
          '/api': {
            target: 'http://localhost:8080',
            ws: true,
            changeOrigin: true,
            // pathRewrite: {
            //   '^/api': ''
            // }
          } 
        }
    }
}
