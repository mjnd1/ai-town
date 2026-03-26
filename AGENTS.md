# Repository Guidelines

## Project Structure & Module Organization

`src/` 存放前端界面，核心入口是 `src/main.tsx` 和 `src/App.tsx`，通用 UI 在 `src/components/`，自定义逻辑在 `src/hooks/`，关卡编辑器在 `src/editor/`。`convex/` 是后端与游戏引擎代码，其中 `convex/aiTown/` 负责业务规则，`convex/engine/` 负责模拟引擎，`convex/agent/` 负责代理行为。角色与故事初始数据在 `data/`，静态资源在 `public/` 与 `assets/`，架构说明见 `ARCHITECTURE.md`。

## Build, Test, and Development Commands

- `npm run dev`：并行启动 Vite 前端和 Convex 后端，适合日常开发。
- `npm run predev`：首次本地初始化 Convex 数据后端。
- `npm run dev:frontend` / `npm run dev:backend`：分别单独启动前端或后端，便于定位问题。
- `npm run build`：执行 TypeScript 检查并产出生产构建。
- `npm run lint`：运行 ESLint 检查整个仓库。
- `npm test`：运行 Jest 测试。
- `npm run level-editor`：启动关卡编辑器，入口位于 `src/editor/`。

## Coding Style & Naming Conventions

项目使用 TypeScript、ES Modules、React 函数组件。Prettier 约定为 2 空格缩进、单引号、保留尾随逗号、`printWidth: 100`；提交前请运行 `npm run lint`。组件文件使用 `PascalCase`，hooks 使用 `useXxx`，普通模块与工具函数使用 `camelCase`，测试文件使用 `*.test.ts`。优先在既有目录中扩展，避免平行重复模块。

## Testing Guidelines

测试框架为 Jest + `ts-jest`，现有单元测试主要分布在 `convex/util/*.test.ts` 与 `convex/engine/*.test.ts`。仓库未配置强制覆盖率阈值，但任何引擎规则、工具函数或数据结构改动都应补充相邻测试。前端交互改动至少需要在本地运行 `npm run dev` 做一次手工验证。

## Commit & Pull Request Guidelines

历史提交以简短祈使句为主，如 `update fly instructions`、`don't collect joins`，也接受 Conventional Commit 风格前缀，如 `fix:`。建议格式为 `<type>: <summary>` 或直接使用简洁动词短语，主题控制在一行内，聚焦单一变更。PR 应说明变更目的、影响范围、验证方式；涉及 UI 时附截图，涉及 Convex schema、环境变量或初始化流程时补充升级/回滚说明。

## Configuration & Security Tips

敏感信息放入 `.env.local`，不要提交 API key、Convex 部署凭据或第三方模型配置。涉及 LLM 提供方、Clerk 或自托管 Convex 的调整，先同步更新 `README.md` 中对应步骤，避免让本地开发和部署说明失效。
