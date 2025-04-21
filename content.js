// 這個文件現在主要用於接收來自 popup 的消息
// 由於我們改變了工作流程，大部分處理都在 popup.js 中完成
// 但我們保留這個文件以便將來擴展功能

if (typeof chrome !== "undefined" && chrome.runtime) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getCurrentUrl") {
      sendResponse({ url: window.location.href })
    }
    return true
  })
} else {
  console.warn("Chrome runtime environment not detected.")
}
