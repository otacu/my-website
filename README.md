# my-website
个人首页，目前只有一个圣地地图（使用了[vue-googlemaps项目](https://github.com/Akryum/vue-googlemaps)，这个项目只是开了个坑，连地点信息窗口组件都没有封装）。后台API是[圣地信息API](https://github.com/otacu/seichi-api)。要到谷歌云平台申请apiKey，启用Places API。使用谷歌api要翻墙。如果要去掉For development purposes only水印还要绑定信用卡（总之好烦）。

## 编译打包
```
npx vue-cli-service build
```

