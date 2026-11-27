# DealTrace CRM

面向企服 SaaS 大客户销售的静态交互演示。从砚舟智造的 30 席试点出发，串起客户会话、商机分析、试点范围确认和人工回访。其他样例包括区域团队扩容、订阅续签及信息安全评审。演示交互使用虚构数据与浏览器本地状态。

[桌面演示](https://crm.myfyx.top/#/app/inbox) · [手机演示](https://crm.myfyx.top/mobile#/app/inbox) · [架构说明](https://crm.myfyx.top/about)

## 体验路径

1. 打开设计架构导览，查看系统架构、运行状态机和技术亮点。
2. 在 Agent 工作台运行本体查询和客户记忆场景，查看回执并试用模拟审批。
3. 进入跟进流程，打开「30 席试点方案发出后跟进」，在桌面画布增减流程节点。

## 本地预览

在仓库根目录启动静态服务。

```sh
python -m http.server 8788 --bind 127.0.0.1 --directory public
```

[桌面](http://127.0.0.1:8788/#/app/inbox) · [手机](http://127.0.0.1:8788/mobile.html#/app/inbox) · [架构说明](http://127.0.0.1:8788/about.html)

## 托管配置

`public/` 是静态资源目录。Cloudflare Workers 的 `src/worker.js` 通过 `ASSETS` 绑定提供首页、`/mobile` 和 `/about`。Vercel 由 `vercel.json` 的 `cleanUrls` 提供对应的无扩展名地址。[Vercel 路由说明](https://vercel.com/docs/project-configuration/vercel-json#cleanurls)

### GitHub → Cloudflare Pages

1. 将版本提交并推送到 GitHub 的 `main` 分支。
2. 在 Cloudflare 控制台的 Workers & Pages 创建 **Pages** 项目，选择 **Connect to Git**，接入 `FFXFF1/dealtrace-crm-demo`，选 `main` 作为生产分支。
3. 框架选 **None**，构建命令留空，输出目录填写 `public`。部署后打开 `/`、`/mobile`、`/about` 检查三个入口。

当前在线演示由已经绑定的 Cloudflare Worker 发布。以上步骤可用于独立的 Pages 部署。[Cloudflare Pages Git 接入](https://developers.cloudflare.com/pages/configuration/git-integration/)

## 来源与许可

演示整理 `fyx`。界面基于获准复用的参考静态资源，原项目许可随代码保留。[参考演示](https://crm.helson.top/) · [MIT 许可](LICENSE)
