# FakeSteamEmbed

這是一個模擬 Steam 嵌入訊息的 HTML 頁面，主要用途是用於在 Discord 分享連結時，產生類似 Steam 的預覽效果。

---

## 目的

本專案的目的是：

- 模仿 Steam 網站的外觀，包括 404 錯誤頁面樣式。
- 利用 Open Graph meta 標籤，自訂分享時在 Discord 顯示的預覽訊息（標題、說明、圖片等）。
- 使用特殊空白符號遮擋 URL，使 Discord 嵌入訊息顯示，但使用者無法直接點擊網址。

---

## 功能特色

- 模擬 Steam 風格的錯誤頁面，包含導覽列、按鈕、頁尾等。
- 自訂 Open Graph 標籤：
  - `og:title`
  - `og:description`
  - `og:image`
- 嵌入資訊表格顯示連結詳細資料。
- 支援 Discord 預覽嵌入。

---

## 使用方式（Discord）

1. 上傳此 HTML 頁面至您的網站或伺服器。
2. 確保頁面部署時能正確讀取 meta 標籤（Open Graph）。
3. 在 Discord 中貼上以下格式的訊息：

⠀

> **注意：**
> - `[⠀]` 中的空白是特殊的「不可見空白符號」（U+2800 Braille Pattern Blank）。
> - 這樣貼文時只會顯示嵌入預覽，不會顯示文字或連結。

---

## 範例

```md
[⠀](https://nickyangtpe.github.io/FakeSteamEmbed/)
```
貼上後，Discord 將顯示預設的 Steam 風格嵌入訊息（圖像、標題、描述），但文字中不會看到連結。

---

## 注意事項

* 部署的網站必須支援 HTTPS，否則 Discord 無法正確抓取預覽。

* Discord 會快取嵌入訊息，建議首次發佈後使用 Discord 的 開發者工具預覽 或使用 Discord Embed Debug 工具測試嵌入效果。



---

## 授權

本專案僅作為教育與展示用途，與 Valve 或 Steam 無任何關聯。

需要我幫你自動生成這個 U+2800 空白字符的複製用範例嗎？

