chrome.runtime.onInstalled.addListener(() => {
  console.log("URL Cleaner extension installed")
})

// 由於我們改變了工作流程，大部分處理都在 popup.js 中完成
// 但我們保留這個文件以便將來擴展功能
