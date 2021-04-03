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

统一团队的 Commit message 标准，由以下好处：

- 提升易读性，可以直观的了解到本次提交的影响范围，以及做了哪些修改等等。
- 便于 code review
- 自动生成 CHANGELOG
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

## 详细说明

### Header

Header 部分只有一行，包括: emoji（必填） type（必填）、scope（可选）和 subject（必填）。

#### emoji

本次提交的表情符号，请在[表情符号](/emoji)中选择。

#### type

本次提交的类型，可选择以下选项：

- feat 新功能
- fix 修复 BUG
- refactor 代码重构
- docs 文档相关
- test 添加单元测试或 e2e 测试
- perf 提高性能
- revert 代码回滚
- style 更新 UI 或样式文件
- build 构建相关
- ci 关于 CI 构建相关
- wip 工作正在进行中
- chore 处理配置或其他内容

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
