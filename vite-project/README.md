# 开始
  创建 npm init vite@latest
  启动 npm run dev
  依赖：
  npm i less
  npm i less-loader@5.0.0
  npm i antd
  npm i vite-plugin-imp
  npm install --save @ant-design/icons
  
  按需加载：
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import vitePluginImp from 'vite-plugin-imp'
  export default defineConfig({
    plugins: [
      react(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name)=>`antd/es/${name}/style`,
          }
        ]
      })
    ],
    css:{
      preprocessorOptions:{
        less:{
          javascriptEnabled:true,
          modifyVars:{
            '@primary-color': '#7675fe'
          }
        }
      }
    }
  })

  打包 npm run build
  配置 vite.config.js   base: './'  解决空白页

  # 其他配置
    npm i normalize.css
    npm i react-router-dom@5
    npm i prop-types
    npm i mockjs
    npm i echarts
    npm i axios