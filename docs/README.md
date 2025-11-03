# Documentation

## 📁 Directory Structure

### `/architecture`
系統架構分析和設計文檔
- `navigation-components-analysis.md` - 導航元件分析
- `project-architecture-analysis.md` - 專案架構分析

### `/assets`
PDF 文件和其他資源
- `Twin Matrix 編碼.pdf` - Twin Matrix 編碼規範
- `twin3.ai Marketplace (B-side).pdf` - B 端市場規格
- `twin3.ai Marketplace (C-side).pdf` - C 端市場規格

### `/cleanup`
文件清理記錄
- `FILE_CLEANUP_2024-11-03.md` - 第一次清理記錄
- `FILE_CLEANUP_2024-11-04.md` - 第二次清理記錄
- `file-cleanup-analysis.md` - 清理分析報告
- `file-cleanup-phase2-analysis.md` - Phase 2 清理分析
- `FINAL_CLEANUP_COMPLETE.md` - 最終清理完成報告
- `FIREBASE_CLEANUP_COMPLETE.md` - Firebase 清理記錄
- `OPTIMIZATION_COMPLETE.md` - 優化完成記錄

### `/design-system`
設計系統文檔和指南
- `design-system-overview.md` - 設計系統概覽
- `design-tokens.md` - Design Tokens 文檔
- `button-variants-explained.md` - Button 變體說明
- `button-quick-reference.md` - Button 快速參考
- `material-design-guide.md` - Material Design 指南
- `material-design-summary.md` - Material Design 總結
- `quest-types.md` - Quest Type 設計規範
- `typography-guide.md` - 字體排版指南

### `/migration`
遷移指南和記錄
- `migration-guide.md` - 遷移指南
- `navigation-migration-complete.md` - 導航遷移完成記錄

### `/reports`
完成報告和審計文檔
- `component-standardization-audit.md` - 元件標準化審計
- `quest-type-icon-unification-complete.md` - Quest Type 圖示統一完成報告
- `standardization-phase1-final-complete.md` - 標準化 Phase 1 完成報告
- `user-dashboard-design-compliance-final.md` - User Dashboard 設計合規報告

### `/specs`
功能規格和藍圖
- `blueprint.md` - 專案藍圖
- `twin-matrix-implementation-spec.md` - Twin Matrix 實作規格

---

## 🔍 Quick Links

### 設計系統
- [設計系統概覽](design-system/design-system-overview.md)
- [Design Tokens](design-system/design-tokens.md)
- [Quest Types 設計規範](design-system/quest-types.md)

### 架構
- [專案架構分析](architecture/project-architecture-analysis.md)
- [導航元件分析](architecture/navigation-components-analysis.md)

### 規格
- [專案藍圖](specs/blueprint.md)
- [Twin Matrix 實作規格](specs/twin-matrix-implementation-spec.md)

### 最新報告
- [標準化 Phase 1 完成](reports/standardization-phase1-final-complete.md)
- [元件標準化審計](reports/component-standardization-audit.md)
- [文件清理 2024-11-04](cleanup/FILE_CLEANUP_2024-11-04.md)

---

## 📝 Document Types

### 📊 Reports
完成報告、審計結果、進度記錄

### 📐 Specs
功能規格、需求文檔、實作計劃

### 🏗️ Architecture
系統架構、元件設計、技術決策

### 🎨 Design System
設計規範、元件指南、樣式標準

### 🔄 Migration
遷移指南、升級記錄、破壞性變更

### 🧹 Cleanup
清理記錄、優化報告、重構文檔

---

## 🎯 Current Focus

### Active Specs
- `.kiro/specs/design-system-standardization/` - 設計系統標準化（進行中）
- `.kiro/specs/twin-matrix-card-implementation/` - Twin Matrix 卡片實作
- `.kiro/specs/user-module/` - User 模組

### Recent Completions
- ✅ Quest Type 圖示統一
- ✅ 標準化 Phase 1 & 2
- ✅ 文件清理和歸檔
- ✅ 共用元件創建（StatCard, MetricBadge）

---

## 📚 Contributing

### Adding New Documentation

1. **Reports** → `docs/reports/`
   - 完成報告、審計結果
   - 命名格式：`feature-name-complete.md`

2. **Specs** → `docs/specs/`
   - 功能規格、需求文檔
   - 命名格式：`feature-name-spec.md`

3. **Design System** → `docs/design-system/`
   - 設計指南、元件文檔
   - 命名格式：`component-name-guide.md`

4. **Architecture** → `docs/architecture/`
   - 架構分析、技術決策
   - 命名格式：`topic-analysis.md`

### Document Template

```markdown
# [Document Title]

## Overview
Brief description of the document purpose

## [Main Sections]
Content organized by sections

## Related Documents
- Link to related docs

## Last Updated
YYYY-MM-DD
```

---

## 🔗 External Resources

- [Kiro Specs](.kiro/specs/) - Active feature specifications
- [Steering Rules](.kiro/steering/) - Development guidelines
- [Source Code](../src/) - Application source code

---

Last Updated: 2024-11-04
