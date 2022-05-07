# Vue3-huohuo-admin

**English** | [中文](./README.zh-CN.md)

## introduce

......

## Usage

Note: After clone project, remember to check whether the project path is correct before using, use `cd xxx` to enter the file, use `cd ...` Returns a layer above the file

- Installation dependencies

```bash
pnpm install
```

- run

```bash
pnpm serve
```

- build

```bash
pnpm build
```

## Submit code

### Submit the order

① git add .

② git commit -m 'fix: For example, note that there is a space in front, otherwise the validation fails'

If you want to skip submitting code validation, replace the previous line with this

② git commit -m "fix: test" --no-verify

③ git push

### Submit specifications

Reference [vue] (<https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md>) - Specification ([Angular](<https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog>- angular))

- `feat` Adds a new function
- `fix` Fixes problems/bugs
- `style` code style correlation does not affect the run result
- `perf` optimization/performance improvement
- `refactor` refactoring
- `revert` reverses the change
- `test` Tests related
- `docs` documents/comments
- `chore` dependency updates/scaffold configuration modifications, etc
- `workflow` Workflow improvements
- `CI` continuous integration
- `types` Type definition file changes
- `WIP` under development

## Browser support

Chrome 80+ is recommended for local development

Modern browsers are supported, IE is not supported
