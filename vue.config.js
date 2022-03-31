const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  devServer:{
    proxy:'http://localhost:5000'
  }
})
