# Vue3-huohuo-admin

**中文** | [English](./README.md)

## 介绍

......

## 用法

注：clone 项目后，使用时记得先检查项目路径是否正确，使用 cd xxx 进入文件，使用 cd ... 返回文件上一层

- 安装依赖

```bash
cd vue-pure-admin

pnpm install

```

- 运行

```bash
pnpm serve
```

- 打包

```bash
pnpm build
```

## Git 提交代码

### 提交命令

① git add .

② git commit -m 'fix: 例子，注意前边有个空格，否则验证不通过'

如果你想跳过提交代码验证，将上一行命令换成

② git commit -m "fix: test" --no-verify

③ git push

### 提交规范

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE
