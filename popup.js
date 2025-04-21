document.addEventListener("DOMContentLoaded", () => {
  // 使用從 translations.js 中暴露的全局函數
  const { get_text, get_browser_language } = window

  const cleanAllCheckbox = document.getElementById("cleanAll")
  const processedUrlTextarea = document.getElementById("processedUrl")
  const processBtn = document.getElementById("processBtn")
  const copyBtn = document.getElementById("copyBtn")
  const applyBtn = document.getElementById("applyBtn")
  const statusDiv = document.getElementById("status")
  const titleElement = document.getElementById("title")
  const infoTextElement = document.getElementById("infoText")

  let currentUrl = ""
  let processedUrl = ""
  let currentLanguage = get_browser_language() // 使用瀏覽器預設語言

  // 載入儲存的語言設定
  chrome.storage.sync.get("language", (data) => {
    if (data.language) {
      currentLanguage = data.language
    }
    set_text(currentLanguage)
  })

  // 設定所有文字的函數
  function set_text(lang) {
    // 更新標題和標籤
    titleElement.textContent = get_text("title", lang)
    document.getElementById("labelAll").textContent = get_text("labelAll", lang)
    document.getElementById("labelProcessed").textContent = get_text("labelProcessed", lang)
    infoTextElement.textContent = get_text("autoClean", lang)

    // 更新按鈕文字
    processBtn.textContent = get_text("processBtn", lang)
    copyBtn.textContent = get_text("copyBtn", lang)
    applyBtn.textContent = get_text("applyBtn", lang)

    // 更新設定連結的標題
    document.querySelector(".settings-link").title = get_text("settings", lang)
  }

  // 監聽語言變更事件
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === "sync" && changes.language) {
      currentLanguage = changes.language.newValue
      set_text(currentLanguage)
    }
  })

  // 獲取當前頁面的 URL
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    currentUrl = tabs[0].url
    processedUrlTextarea.value = currentUrl

    // 自動處理URL
    processUrl()
  })

  // Clean_router 函數：根據URL自動判斷要清理的項目
  function Clean_router(url) {
    const cleanOptions = {
      taobao: false,
      shopee: false,
      tracking: false,
      yahoo: false,
      rakutenTW: false,
      rakutenJP: false,
      pchome: false,
    }

    try {
      // 檢查是否為淘寶或天貓連結
      if (url.includes("taobao.com") || url.includes("tmall.com")) {
        cleanOptions.taobao = true
      }

      // 檢查是否為蝦皮連結
      const shopeeRegex = /shopee\.(tw|sg|com\.my|co\.th|ph|vn|co\.id)/i
      if (shopeeRegex.test(url)) {
        cleanOptions.shopee = true
      }

      // 檢查是否為Yahoo購物中心連結
      if (url.includes("buy.yahoo.com")) {
        cleanOptions.yahoo = true
      }

      // 檢查是否為台灣樂天市場連結
      if (url.includes("rakuten.com.tw")) {
        cleanOptions.rakutenTW = true
      }

      // 檢查是否為日本樂天市場連結
      if (url.includes("rakuten.co.jp")) {
        cleanOptions.rakutenJP = true
      }

      // 檢查是否為PcHome連結
      if (url.includes("pchome.com.tw") || url.includes("24h.pchome")) {
        cleanOptions.pchome = true
      }

      // 檢查是否包含常見追蹤參數
      const urlObj = new URL(url)
      const trackingParams = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "gclid",
        "fbclid",
        "fb_action_ids",
        "fb_action_types",
        "fb_source",
        "fb_ref",
      ]

      for (const param of trackingParams) {
        if (urlObj.searchParams.has(param)) {
          cleanOptions.tracking = true
          break
        }
      }
    } catch (e) {
      console.error("URL 解析錯誤:", e)
    }

    return cleanOptions
  }

  // 處理連結按鈕
  processBtn.addEventListener("click", () => {
    processUrl()
  })

  // 複製連結按鈕
  copyBtn.addEventListener("click", () => {
    processedUrlTextarea.select()
    document.execCommand("copy")
    showStatus("success", get_text("successCopied", currentLanguage))
  })

  // 套用連結按鈕
  applyBtn.addEventListener("click", () => {
    const urlToApply = processedUrlTextarea.value
    if (urlToApply) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.update(tabs[0].id, { url: urlToApply })
        showStatus("success", get_text("successApplied", currentLanguage))
      })
    } else {
      showStatus("error", get_text("errorNoLink", currentLanguage))
    }
  })

  // QR Code 容器
  const qrcodeContainer = document.getElementById("qrcode-container")
  let qrCodeInstance = null

  // 生成 QR Code 的函數
  function generateQRCode(url) {
    if (!url) return

    // 清除之前的 QR Code
    const qrcodeElement = document.getElementById("qrcode")
    qrcodeElement.innerHTML = ""

    // 生成新的 QR Code
    try {
      qrCodeInstance = new QRCode(qrcodeElement, {
        text: url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      })
    } catch (error) {
      console.error("QR Code generation error:", error)
    }
  }

  // 當勾選框狀態改變時，自動處理 URL
  cleanAllCheckbox.addEventListener("change", processUrl)

  // 清理所有參數
  function cleanAllParams(urlObj) {
    urlObj.search = ""
    return true
  }

  // 清理淘寶連結
  function cleanTaobaoLink(urlObj, url) {
    if (url.includes("taobao.com") || url.includes("tmall.com")) {
      const id = urlObj.searchParams.get("id")
      urlObj.search = ""
      if (id) {
        urlObj.searchParams.set("id", id)
      }
      return true
    }
    return false
  }

  // 清理蝦皮連結
  function cleanShopeeLink(urlObj, url) {
    // 支援各國蝦皮網域
    const shopeeRegex = /shopee\.(tw|sg|com\.my|co\.th|ph|vn|co\.id)/i
    if (shopeeRegex.test(url)) {
      // 處理路徑中的中文和多餘字符
      const pathParts = urlObj.pathname.split("/")

      // 檢查是否有產品路徑（通常是第二個部分，第一個是空字符串）
      if (pathParts.length >= 2) {
        const productPath = pathParts[1]

        // 檢查是否包含 "i." 標記（蝦皮產品 ID 標記）
        const iIndex = urlObj.pathname.indexOf("i.")

        if (iIndex !== -1) {
          // 提取 "i.xxx.xxx" 部分
          const idPart = urlObj.pathname.substring(iIndex)

          // 創建新的路徑：/1-1-i.xxx.xxx
          urlObj.pathname = "/1-1-" + idPart
        }
      }

      // 處理查詢參數
      const itemid = urlObj.searchParams.get("itemid")
      const shopid = urlObj.searchParams.get("shopid")
      urlObj.search = ""

      // 保留商品 ID 和商店 ID（如果 URL 中有這些參數）
      if (itemid) {
        urlObj.searchParams.set("itemid", itemid)
      }
      if (shopid) {
        urlObj.searchParams.set("shopid", shopid)
      }

      return true
    }
    return false
  }

  // 清理Yahoo購物中心連結
  function cleanYahooLink(urlObj, url) {
    if (url.includes("buy.yahoo.com")) {
      // 檢查是否包含 gdsale.asp
      const isGdsale = url.includes("gdsale.asp")

      // 如果是 gdsale.asp 頁面，保留 gdid 參數
      const gdid = isGdsale ? urlObj.searchParams.get("gdid") : null

      // 清空所有參數
      urlObj.search = ""

      // 如果有 gdid 參數且是 gdsale.asp 頁面，則保留該參數
      if (gdid && isGdsale) {
        urlObj.searchParams.set("gdid", gdid)
      }

      // 只有在不是 gdsale.asp 頁面時才處理路徑
      if (!isGdsale) {
        // 處理路徑
        const pathSegments = urlObj.pathname.split("/")

        // 處理最後一個路徑段（通常包含產品資訊）
        for (let i = 0; i < pathSegments.length; i++) {
          const segment = pathSegments[i]

          // 如果路徑段包含連字符號
          if (segment.includes("-")) {
            const pathParts = segment.split("-")

            // 如果路徑包含至少一個連字符號
            if (pathParts.length > 1) {
              // 取得最後一個部分
              const lastPart = pathParts[pathParts.length - 1]

              // 構建新的路徑，只保留一個 "1" 和最後一個部分
              const newPathParts = ["1", lastPart]

              // 更新路徑段
              pathSegments[i] = newPathParts.join("-")
            }
          }
        }

        // 更新完整路徑
        urlObj.pathname = pathSegments.join("/")
      }

      return true
    }
    return false
  }

  // 清理台灣樂天市場連結
  function cleanRakutenTWLink(urlObj) {
    // 移除指定的參數
    const paramsToRemove = ["scid", "srsltid"]
    let processed = false

    paramsToRemove.forEach((param) => {
      if (urlObj.searchParams.has(param)) {
        urlObj.searchParams.delete(param)
        processed = true
      }
    })

    return processed
  }

  // 清理日本樂天市場連結
  function cleanRakutenJPLink(urlObj) {
    // 移除指定的參數
    let processed = false

    if (urlObj.searchParams.has("iasid")) {
      urlObj.searchParams.delete("iasid")
      processed = true
    }

    return processed
  }

  // 清理PcHome連結
  function cleanPcHomeLink(urlObj) {
    // 移除指定的參數
    let processed = false

    if (urlObj.searchParams.has("srsltid")) {
      urlObj.searchParams.delete("srsltid")
      processed = true
    }

    return processed
  }

  // 清理追蹤代碼
  function cleanTrackingCodes(urlObj) {
    let processed = false

    // Google 追蹤參數
    const googleParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"]

    // Facebook 追蹤參數
    const fbParams = ["fbclid", "fb_action_ids", "fb_action_types", "fb_source", "fb_ref"]

    // 其他常見追蹤參數
    const otherParams = [
      "ref",
      "source",
      "campaign",
      "xptdk",
      "sp_atk",
      "scenario",
      "type",
      "entry_point",
      "gad_source",
    ]

    const trackingParams = [...googleParams, ...fbParams, ...otherParams]

    // 刪除追蹤參數
    trackingParams.forEach((param) => {
      if (urlObj.searchParams.has(param)) {
        urlObj.searchParams.delete(param)
        processed = true
      }
    })

    return processed
  }

  // 處理 URL 的函數
  function processUrl() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url
      let processed = false

      try {
        const urlObj = new URL(url)

        // 如果勾選了「清理所有參數」，則優先處理
        if (cleanAllCheckbox.checked) {
          processed = cleanAllParams(urlObj) || processed
        } else {
          // 使用 Clean_router 自動判斷要清理的項目
          const cleanOptions = Clean_router(url)

          // 清理淘寶連結
          if (cleanOptions.taobao) {
            processed = cleanTaobaoLink(urlObj, url) || processed
          }

          // 清理蝦皮連結
          if (cleanOptions.shopee) {
            processed = cleanShopeeLink(urlObj, url) || processed
          }

          // 清理Yahoo購物中心連結
          if (cleanOptions.yahoo) {
            processed = cleanYahooLink(urlObj, url) || processed
          }

          // 清理台灣樂天市場連結
          if (cleanOptions.rakutenTW) {
            processed = cleanRakutenTWLink(urlObj) || processed
          }

          // 清理日本樂天市場連結
          if (cleanOptions.rakutenJP) {
            processed = cleanRakutenJPLink(urlObj) || processed
          }

          // 清理PcHome連結
          if (cleanOptions.pchome) {
            processed = cleanPcHomeLink(urlObj) || processed
          }

          // 清理追蹤代碼
          if (cleanOptions.tracking) {
            processed = cleanTrackingCodes(urlObj) || processed
          }
        }

        processedUrl = urlObj.toString()
        processedUrlTextarea.value = processedUrl

        // 更新 QR Code
        generateQRCode(processedUrl)

        if (processed) {
          showStatus("success", get_text("successCleaned", currentLanguage))
        } else {
          showStatus("success", get_text("successNoParams", currentLanguage))
        }
      } catch (e) {
        console.error("URL 解析錯誤:", e)
        showStatus("error", get_text("errorParsing", currentLanguage))
      }
    })
  }

  function showStatus(type, message) {
    statusDiv.textContent = message
    statusDiv.className = "status " + type
    statusDiv.style.display = "block"

    setTimeout(() => {
      statusDiv.style.display = "none"
    }, 3000)
  }
})
