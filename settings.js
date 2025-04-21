document.addEventListener("DOMContentLoaded", () => {
  // 使用從 translations.js 中暴露的全局函數
  const { get_text, get_browser_language } = window

  const languageSelector = document.getElementById("languageSelector")
  const saveBtn = document.getElementById("saveBtn")
  const titleElement = document.getElementById("title")
  const languageTitle = document.getElementById("languageTitle")
  const featuresTitle = document.getElementById("featuresTitle")
  const backText = document.getElementById("backText")
  const featureTaobao = document.getElementById("featureTaobao")
  const featureShopee = document.getElementById("featureShopee")
  const featureYahoo = document.getElementById("featureYahoo")
  const featureRakutenTW = document.getElementById("featureRakutenTW")
  const featureRakutenJP = document.getElementById("featureRakutenJP")
  const featurePcHome = document.getElementById("featurePcHome")
  const featureTracking = document.getElementById("featureTracking")
  const featureAll = document.getElementById("featureAll")
  const featureQR = document.getElementById("featureQR")
  const statusDiv = document.getElementById("status")

  let currentLanguage = get_browser_language() // 使用瀏覽器預設語言

  // 載入儲存的語言設定
  chrome.storage.sync.get("language", (data) => {
    if (data.language) {
      currentLanguage = data.language
    }
    languageSelector.value = currentLanguage
    set_text(currentLanguage)
  })

  // 設定所有文字的函數
  function set_text(lang) {
    // 更新標題和標籤
    titleElement.textContent = get_text("settings", lang)
    languageTitle.textContent = get_text("language", lang)
    featuresTitle.textContent = get_text("features", lang)
    backText.textContent = get_text("backToMain", lang)

    // 更新按鈕文字
    saveBtn.textContent = get_text("save", lang)

    // 更新功能說明
    featureTaobao.textContent = get_text("featureTaobao", lang)
    featureShopee.textContent = get_text("featureShopee", lang)
    featureYahoo.textContent = get_text("featureYahoo", lang)
    featureRakutenTW.textContent = get_text("featureRakutenTW", lang)
    featureRakutenJP.textContent = get_text("featureRakutenJP", lang)
    featurePcHome.textContent = get_text("featurePcHome", lang)
    featureTracking.textContent = get_text("featureTracking", lang)
    featureAll.textContent = get_text("featureAll", lang)
    featureQR.textContent = get_text("featureQR", lang)
  }

  // 顯示狀態訊息
  function showStatus(message) {
    statusDiv.textContent = message
    statusDiv.style.display = "block"

    setTimeout(() => {
      statusDiv.style.display = "none"
    }, 2000)
  }

  // 語言選擇器變更事件
  languageSelector.addEventListener("change", () => {
    const selectedLanguage = languageSelector.value
    // 立即更新介面文字
    set_text(selectedLanguage)
  })

  // 儲存按鈕點擊事件
  saveBtn.addEventListener("click", () => {
    const selectedLanguage = languageSelector.value
    // Check if chrome is defined, if not, it likely means we are not in a browser extension context.
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({ language: selectedLanguage }, () => {
        currentLanguage = selectedLanguage

        // 顯示儲存成功訊息
        showStatus(get_text("languageChanged", currentLanguage))

        // 更新按鈕文字為勾選標記，然後恢復
        saveBtn.textContent = "✓"
        setTimeout(() => {
          saveBtn.textContent = get_text("save", currentLanguage)
        }, 1500)
      })
    } else {
      // Handle the case where chrome is not defined (e.g., running in a regular browser environment)
      console.warn("Chrome storage API not available. Language setting will not be saved.")
      showStatus("Chrome storage API not available. Language setting will not be saved.")
    }
  })
})

