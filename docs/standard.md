---
title: 提交信息规范
order: 2
group:
  path: /
nav:
  title: 文档
  path: /docs
---

## 概述

Commit message 规范是在提交消息之上进行的约定，它提供了一组简单的规则来创建明确的提交历史记录。

统一团队的 Commit message 标准，有以下好处：

- 提供更多的历史信息，方便快速浏览
- 过滤某些 commit（比如文档改动），便于快速查找信息
- 直接从 commit 生成 CHANGELOG
- 提升易读性，不必深入看代码即可了解当前 commit 的作用
- 便于 code review
- 便于版本发布
- ...

## 基本规则

Commit message 包括三个部分: Header、Body、Footer

结构如下：

```
<emoji> <type>[optional scope]: <subject>
BLANK LINE
[optional body]
BLANK LINE
[optional footer(s)]
```

其中，Header 是必需的，Body 和 Footer 可以省略。

不管是哪一个部分，任何一行都不得超过 72 个字符（或 100 个字符）。这是为了避免自动换行影响美观。

## 详细说明

### Header

Header 部分只有一行，包括: emoji（必填） type（必填）、scope（可选）和 subject（必填）。

#### emoji

本次提交的表情符号，请在[表情符号](/emoji)中选择。

#### type

本次提交的类型，可选择以下选项：

- feat 新功能
- fix 修复 BUG
- refactor 重构（即不是新增功能，也不是修改 bug 的代码变动）
- docs 文档相关
- test 增加测试（例如单元测试、集成测试）
- perf 优化相关（比如性能、体验的提升）
- revert 代码回滚
- style 格式（不影响代码运行的变动）
- build 系统构建或依赖项的修改
- ci CI（自动化流程或脚本的修改）
- wip 工作正在进行中
- ui 更新 UI 或样式文件
- chore 构建过程或辅助工具的变动（非主代码和测试的修改）

如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况由你决定，要不要放入 Change log，建议是不要。

#### scope

本次提交的影响范围。

#### subject

本次提交的简短描述。

### Body

本次提交的详细描述，可多行。

### Footer

本次提交需要关联或关闭的 Issue

- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved

## 详细示例

```
📝 docs(button): 完善Button组件文档

添加了加载中的实例
修复了拼写错误

close #1
```
