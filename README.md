# 心智障碍就业支持工具

> 用科技温暖每一个生命，让包容成为社会的底色

## 项目简介

本项目旨在为心智障碍群体（孤独症谱系障碍、智力发育迟缓、唐氏综合征、脑瘫伴随智力障碍等）开发一套可落地的工作现场支持工具系统。

## 核心功能

### 1. 工作流程拆解工具
- 视觉任务卡系统（红-黄-绿三色状态指示）
- 步骤进度追踪器
- 时间可视化工具

### 2. 沟通辅助工具
- 情绪与需求表达卡
- 语音转文字辅助设备
- 工作场景需求卡

### 3. 智能工作助手（核心亮点）
- 基于Web Speech API的语音交互
- 任务状态实时联动
- AI智能分析与指导

## 项目结构

```
/workspace/
├── index.html                    # 项目首页
├── workflow-template.html        # 视觉任务卡模板
├── workflow-examples.html        # 工作流程示例
├── communication-tool.html       # 沟通辅助工具
├── job-classification.html       # 岗位分类方案
├── low-cost-solution.html        # 低成本方案
├── digital-solution.html         # 数字化方案
├── ai-assistant.html             # 智能工作助手
├── ability-level-adaptation-system.html  # 能力层级适配
├── case-studies.html             # 成功案例
├── integration.html              # 整合方案
├── training-support.html         # 培训支持
├── 心智障碍就业支持工具方案.md    # 需求文档
├── 参赛帖子-心智障碍就业支持工具开发.md  # 参赛文档
└── MindDisabilitySupportApp/     # React Native移动端应用
```

## 快速开始

### 本地运行

```bash
# 进入项目目录
cd /workspace

# 启动HTTP服务器
python3 -m http.server 8888

# 访问 http://localhost:8888
```

### 移动端应用

```bash
cd MindDisabilitySupportApp
npm install
npm start
```

## 技术栈

- **前端**: HTML + Tailwind CSS + JavaScript
- **语音交互**: Web Speech API
- **移动端**: React Native

## 岗位支持

| 岗位 | 核心任务 | 工具配置 |
|-----|---------|---------|
| 超市理货员 | 货架整理、商品归位、库存盘点 | 任务卡+进度追踪+Time Timer |
| 餐饮服务 | 食材备料、碗碟清洗、简单摆盘 | 步骤卡+颜色标记+定时提醒 |
| 数据标注员 | 图像框选、分类标注、内容校验 | 标注教程+语音引导+错题回放 |

## 成本方案

| 方案 | 成本 | 适用场景 |
|-----|------|---------|
| 低成本纸质版 | 100-200元/人 | 小规模机构、快速实施 |
| 数字化方案 | 1000-25000元/人 | 中大规模、数据追踪需求 |

## 参考资料

1. 《心智障碍者融合就业用人单位操作指引 T ZGZX 0002—2024》
2. 北京如常集团AI就业工坊"三步灯塔式"引导实践
3. 兰州市心连心工坊UI界面适配实践
4. NICE Guidance NG93 及英国Buckland Review of Autism Employment (2024)

## 许可证

MIT License

---

*就业一人，幸福一家，稳定一方*
