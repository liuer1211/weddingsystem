# 开始
  启动 npm run dev
  依赖：
  npm init vite@latest
  npm i less
  npm i less-loader@5.0.0
  npm i antd
  npm i vite-plugin-imp 
  
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
            '@primary-color': '#eee'
          }
        }
      }
    }
  })

  # 其他配置
    npm i normalize.css