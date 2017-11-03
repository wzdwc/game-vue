# 快速运行
```bash
# 安装依赖
npm install

# 运行项目
npm run dev projectName
```

# 测试以及部署 (所有分支版本)
### 1. dev部署
> 触发条件，所有 提交信息以 --build 开头，后面跟要编译的项目名称例如 `--build touch` `--build touch channel`

### 2. test部署
> 触发条件 `--build -t` 开头，后面跟要编译的项目名称例如  `--build -t payment user-center`

### 3. prd部署
> 首先master分支打tags, `npm version patch -m "--build -p payment"`
> `git push --tags -u origin master`

# 项目文档
---
## 路由说明
- 普通路由直接放到根路由数组

- 需要带有 `Header` 的路由，作为 `path:/header` 的 `children` 填入


## 全局service
`src/service` 目录下的index.js 将所有需要用到的 service 复制给 Vue.prototype.$serviceName，方便所有组件直接调用。  项目 `main.js` 会导入该目录，是配置生效

## store
待完善




### [开发规范](./readme/dev-readme.md)
### [组件说明](./readme/component.md)


## 渠道配置说明
```js
{
  "data" : {
    "styleDir" : "/ued/mobile/images/v2/channel/base",
    "iosOnly" : "0",
    "preOrderWay" : "",
    "isSalerCheck" : "1",
    "qbackCheck" : "0",
    "uploadImgPrice" : 100,
    "storeJumpUrl" : "-1",
    "isManagerOrder" : "1",
    "isSalesShare" : "1",
    "logoType" : "1",
    "mobile3g24g" : "0",
    "needImei" : "0",
    "needMemberInfo" : "",
    "o2oOrder" : "1",
    "offlineOrder" : "1",
    "onlineOrder" : "1",
    "payNowPrice" : 10000,
    "payTypeOffline" : "4",
    "payTypeOnline" : "1,2,3",    // 1支付宝， 2微信付款， 3银行卡
    "sellOrder" : "0",
    "suningOrder" : "0",
    "specialChannelCode" : "",
    "isManualCheck" : "1",
    "isZhuowang" : "",
    "applyType" : "1",
    "offlineMemberInfo" : "-1",
    "offlineTradeInMemberInfo" : "-1",
    "salesmanWallet" : "1"
  },
  "success" : true,
  "status" : "200",
  "msg" : ""
}
```
### 小程序 普通二维码说明
> /static/detection 普通二位码 需要放置.txt格式的校验文件
> /static/mini-program 存放小程序图片 小程序的背景图片是不能存放在小程序项目中1

--deploy test
--deploy user-center
--deploy build detection

--build
