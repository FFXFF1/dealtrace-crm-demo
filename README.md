# DealTrace CRM

面向企服 SaaS 大客户销售的静态交互演示。以企业协同工作台试点和席位扩容为例，串起客户会话、商机分析、跟进流程和人工确认。演示交互使用虚构数据与浏览器本地状态。

[桌面演示](https://crm.myfyx.top/#/app/inbox) · [手机演示](https://crm.myfyx.top/mobile#/app/inbox) · [架构说明](https://crm.myfyx.top/about)

## 体验路径

1. 打开设计架构导览，查看系统架构、运行状态机和技术亮点。
2. 在 Agent 工作台运行本体查询和客户记忆场景，查看回执并试用模拟审批。
3. 进入跟进流程，打开「试点方案发出后跟进」，在桌面画布增减流程节点。

## 本地预览

在仓库根目录启动静态服务。

```sh
python -m http.server 8788 --bind 127.0.0.1 --directory public
```

[桌面](http://127.0.0.1:8788/#/app/inbox) · [手机](http://127.0.0.1:8788/mobile.html#/app/inbox) · [架构说明](http://127.0.0.1:8788/about.html)

## 托管配置

`public/` 可直接作为静态资源目录。`wrangler.jsonc` 用于独立部署到 Cloudflare Workers，`vercel.json` 用于 Vercel 静态托管。两份配置均以 `/mobile` 和 `/about` 作为页面入口。

## 来源与许可

演示整理 `fyx`。界面基于获准复用的参考静态资源，原项目许可随代码保留。[参考演示](https://crm.helson.top/) · [MIT 许可](LICENSE)
