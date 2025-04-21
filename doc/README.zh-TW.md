# Pure Link Tools 純淨連結工具

<p align="center">
  <img src="../icons/icon128.png" alt="Pure Link Tools Logo" width="128" height="128">
</p>

一個 Chrome 擴充功能，通過移除不必要的追蹤參數和簡化來自各種平台的購物連結，使 URL 更加乾淨和簡潔。

## 功能特色

Pure Link Tools 能自動檢測並清理來自各種購物平台的連結，移除追蹤參數，創建更乾淨、更易於分享的 URL。

### 支援的購物平台

- **淘寶和天貓**：移除促銷參數，同時保留必要的商品 ID
- **蝦皮**：簡化各地區蝦皮網站（台灣、新加坡、馬來西亞等）的連結，保留產品識別資訊
- **Yahoo 購物中心**：簡化 Yahoo 購物中心連結，只保留必要的商品 ID
- **台灣樂天市場**：移除台灣樂天市場連結中的追蹤參數（scid、srsltid）
- **日本樂天市場**：移除日本樂天市場連結中的追蹤參數（iasid）
- **PcHome**：移除 PcHome 連結中的追蹤參數（srsltid）

### 追蹤參數移除

自動移除常見的追蹤參數，包括：
- Google Analytics 參數（utm_source、utm_medium、utm_campaign 等）
- Facebook 追蹤參數（fbclid、fb_action_ids 等）
- 其他常見追蹤參數（ref、source、campaign 等）

### 其他功能

- **QR 碼生成**：自動為清理後的連結生成可掃描的 QR 碼
- **清理所有參數**：選項可移除所有 URL 參數，實現最大簡化
- **多語言支援**：提供英文、繁體中文、簡體中文、韓文和日文版本
- **複製和套用**：輕鬆複製清理後的連結或直接套用到當前分頁

## 安裝方法

### 從 Chrome 網上應用店安裝

1. 訪問 [Chrome 網上應用店](https://chrome.google.com/webstore/detail/pure-link-tools/your-extension-id)
2. 點擊「添加至 Chrome」
3. 在提示時確認安裝

### 手動安裝（開發者模式）

1. 下載或克隆此儲存庫
2. 打開 Chrome 並導航至 `chrome://extensions/`
3. 在右上角啟用「開發者模式」
4. 點擊「載入未封裝項目」並選擇擴充功能目錄
5. 擴充功能現在應該已安裝並在工具欄中可見

## 使用方法

1. 導航到任何包含您想清理的 URL 的網頁
2. 點擊 Chrome 工具欄中的 Pure Link Tools 圖標
3. 擴充功能將根據 URL 類型自動檢測並清理 URL
4. 使用「複製連結」按鈕將清理後的 URL 複製到剪貼簿
5. 使用「套用連結」按鈕導航到清理後的 URL
6. 掃描 QR 碼以在移動設備上分享清理後的連結

### 設定

通過點擊擴充功能彈出窗口右上角的齒輪圖標訪問設定頁面：

- **語言**：選擇英文、繁體中文、簡體中文、韓文或日文
- **功能**：查看所有可用功能的詳細描述

## 隱私

Pure Link Tools 尊重您的隱私：

- 所有 URL 處理都在您的瀏覽器本地進行
- 不會向任何外部伺服器發送數據
- 不進行用戶追蹤或分析
- 不收集個人數據

## 授權

本項目採用 MIT 授權 - 詳情請參閱 LICENSE 文件。

## 貢獻

歡迎貢獻！請隨時提交 Pull Request。

## 致謝

- 圖標由 [Freepik](https://www.freepik.com) 從 [www.flaticon.com](https://www.flaticon.com/) 製作
- QR 碼生成由 [QRCode.js](https://github.com/davidshimjs/qrcodejs) 提供支持
