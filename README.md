# KERP Fitness Frontend

基于 `React + TypeScript + TailwindCSS + Vite` 实现 4 个模块页面：

- 首页 `Home`
- 视频课程库 `Courses`
- 训练统计与记录 `Stats`
- 个人主页 `Profile`

## 运行

1. 安装依赖

```bash
npm install
```

2. 启动开发环境

```bash
npm run dev
```

3. 构建

```bash
npm run build
```

## 环境要求

- Node.js `>= 18`
- npm `>= 9`

## CI/CD

项目已经补好了 GitHub Actions 自动化流程：

- `CI`
  - 文件：`.github/workflows/ci.yml`
  - 触发时机：`pull_request`、推送到 `main`
  - 执行内容：`npm ci` + `npm run build`

- `CD`
  - 文件：`.github/workflows/deploy-pages.yml`
  - 触发时机：推送到 `main`、手动触发
  - 执行内容：构建 `dist` 并发布到 Cloudflare Pages

### 需要在 GitHub 仓库里配置的 Secrets / Variables

在仓库 `Settings -> Secrets and variables -> Actions` 中添加：

#### Secrets

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

#### Variables

- `CLOUDFLARE_PAGES_PROJECT_NAME`

### Cloudflare API Token 权限建议

最少给到 Pages 部署相关权限即可。创建 Token 时可参考 Cloudflare Pages 官方文档中的 Pages Deploy 权限配置。

### 默认构建配置

- Node.js: `22`
- Build command: `npm run build`
- Output directory: `dist`
