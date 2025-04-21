// 多國語言翻譯
const msg_trans = {
  // 英文
  en: {
    title: "Pure Link Tools",
    labelAll: "Clean All Parameters",
    labelProcessed: "Processed Link:",
    processBtn: "Process Link",
    copyBtn: "Copy Link",
    applyBtn: "Apply Link",
    successCleaned: "Link processed",
    successNoParams: "No parameters to clean",
    successCopied: "Link copied to clipboard",
    successApplied: "New link applied",
    errorNoLink: "No link to apply",
    errorParsing: "URL parsing error",
    settings: "Settings",
    language: "Language",
    save: "Save",
    features: "Features",
    featureTaobao:
      "Clean Taobao Links: Removes promotional parameters from Taobao and Tmall links while preserving the essential product ID.",
    featureShopee:
      "Clean Shopee Links: Simplifies Shopee links across all regional domains (TW, SG, MY, etc.) while maintaining product identification.",
    featureTracking:
      "Clean Tracking Codes: Removes analytics parameters (UTM, Facebook IDs, etc.) that track your browsing activity.",
    featureAll:
      "Clean All Parameters: Creates the simplest possible URL by removing all query parameters while keeping the base address.",
    featureQR:
      "QR Code Generation: Automatically creates a scannable QR code for your cleaned link for easy mobile sharing.",
    featureYahoo:
      "Clean Yahoo Shopping Links: Simplifies Yahoo Shopping links by keeping only the essential product ID and removing all parameters.",
    featureRakutenTW:
      "Clean Rakuten Taiwan Links: Removes tracking parameters (scid, srsltid) from Rakuten Taiwan shopping links.",
    featureRakutenJP:
      "Clean Rakuten Japan Links: Removes tracking parameters (iasid) from Rakuten Japan shopping links.",
    featurePcHome: "Clean PcHome Links: Removes tracking parameters (srsltid) from PcHome shopping links.",
    backToMain: "Back to main page",
    languageChanged: "Language changed",
    autoClean: "Links are automatically cleaned based on their type.",
  },
  // 繁體中文
  "zh-TW": {
    title: "純淨連結工具",
    labelAll: "清理所有參數",
    labelProcessed: "處理後的連結：",
    processBtn: "處理連結",
    copyBtn: "複製連結",
    applyBtn: "套用連結",
    successCleaned: "連結已處理",
    successNoParams: "沒有需要清理的參數",
    successCopied: "連結已複製到剪貼簿",
    successApplied: "已套用新連結",
    errorNoLink: "沒有可套用的連結",
    errorParsing: "URL 解析錯誤",
    settings: "設定",
    language: "語言",
    save: "儲存",
    features: "功能說明",
    featureTaobao: "清理淘寶連結：移除淘寶和天貓連結中的促銷參數，同時保留必要的商品 ID。",
    featureShopee: "清理蝦皮連結：簡化各地區蝦皮網站（台灣、新加坡、馬來西亞等）的連結，保留產品識別資訊。",
    featureTracking: "清理追蹤代碼：移除分析參數（UTM、Facebook ID 等）以防止瀏覽活動被追蹤。",
    featureAll: "清理所有參數：移除所有查詢參數，僅保留基本網址，創建最簡潔的連結。",
    featureQR: "QR 碼生成：自動為清理後的連結生成可掃描的 QR 碼，方便在行動裝置上分享。",
    featureYahoo: "清理Yahoo購物中心連結：簡化Yahoo購物中心連結，只保留必要的商品ID並移除所有參數。",
    featureRakutenTW: "清理台灣樂天市場連結：移除台灣樂天市場連結中的追蹤參數（scid、srsltid）。",
    featureRakutenJP: "清理日本樂天市場連結：移除日本樂天市場連結中的追蹤參數（iasid）。",
    featurePcHome: "清理PcHome連結：移除PcHome連結中的追蹤參數（srsltid）。",
    backToMain: "返回主頁",
    languageChanged: "語言已變更",
    autoClean: "連結會根據其類型自動清理。",
  },
  // 簡體中文
  "zh-CN": {
    title: "纯净链接工具",
    labelAll: "清理所有参数",
    labelProcessed: "处理后的链接：",
    processBtn: "处理链接",
    copyBtn: "复制链接",
    applyBtn: "应用链接",
    successCleaned: "链接已处理",
    successNoParams: "没有需要清理的参数",
    successCopied: "链接已复制到剪贴板",
    successApplied: "已应用新链接",
    errorNoLink: "没有可应用的链接",
    errorParsing: "URL 解析错误",
    settings: "设置",
    language: "语言",
    save: "保存",
    features: "功能说明",
    featureTaobao: "清理淘宝链接：移除淘宝和天猫链接中的促销参数，同时保留必要的商品 ID。",
    featureShopee: "清理虾皮链接：简化各地区虾皮网站（台湾、新加坡、马来西亚等）的链接，保留产品识别信息。",
    featureTracking: "清理追踪代码：移除分析参数（UTM、Facebook ID 等）以防止浏览活动被追踪。",
    featureAll: "清理所有参数：移除所有查询参数，仅保留基本网址，创建最简洁的链接。",
    featureQR: "QR 码生成：自动为清理后的链接生成可扫描的 QR 码，方便在移动设备上分享。",
    featureYahoo: "清理Yahoo购物中心链接：简化Yahoo购物中心链接，只保留必要的商品ID并移除所有参数。",
    featureRakutenTW: "清理台湾乐天市场链接：移除台湾乐天市场链接中的追踪参数（scid、srsltid）。",
    featureRakutenJP: "清理日本乐天市场链接：移除日本乐天市场链接中的追踪参数（iasid）。",
    featurePcHome: "清理PcHome链接：移除PcHome链接中的追踪参数（srsltid）。",
    backToMain: "返回主页",
    languageChanged: "语言已更改",
    autoClean: "链接会根据其类型自动清理。",
  },
  // 韓文
  ko: {
    title: "순수 링크 도구",
    labelAll: "모든 매개변수 정리",
    labelProcessed: "처리된 링크:",
    processBtn: "링크 처리",
    copyBtn: "링크 복사",
    applyBtn: "링크 적용",
    successCleaned: "링크가 처리되었습니다",
    successNoParams: "정리할 매개변수가 없습니다",
    successCopied: "링크가 클립보드에 복사되었습니다",
    successApplied: "새 링크가 적용되었습니다",
    errorNoLink: "적용할 링크가 없습니다",
    errorParsing: "URL 구문 분석 오류",
    settings: "설정",
    language: "언어",
    save: "저장",
    features: "기능 설명",
    featureTaobao:
      "타오바오 링크 정리: 타오바오 및 티몰 링크에서 프로모션 매개변수를 제거하고 필수 제품 ID를 유지합니다.",
    featureShopee:
      "쇼피 링크 정리: 모든 지역 도메인(TW, SG, MY 등)에서 쇼피 링크를 단순화하면서 제품 식별 정보를 유지합니다.",
    featureTracking: "추적 코드 정리: 브라우징 활동을 추적하는 분석 매개변수(UTM, Facebook ID 등)를 제거합니다.",
    featureAll:
      "모든 매개변수 정리: 모든 쿼리 매개변수를 제거하고 기본 주소만 유지하여 가능한 가장 간단한 URL을 만듭니다.",
    featureQR:
      "QR 코드 생성: 정리된 링크에 대한 스캔 가능한 QR 코드를 자동으로 생성하여 모바일에서 쉽게 공유할 수 있습니다.",
    featureYahoo:
      "Yahoo 쇼핑 링크 정리: Yahoo 쇼핑 링크를 단순화하여 필수 제품 ID만 유지하고 모든 매개변수를 제거합니다.",
    featureRakutenTW: "라쿠텐 대만 링크 정리: 라쿠텐 대만 쇼핑 링크에서 추적 매개변수(scid, srsltid)를 제거합니다.",
    featureRakutenJP: "라쿠텐 일본 링크 정리: 라쿠텐 일본 쇼핑 링크에서 추적 매개변수(iasid)를 제거합니다.",
    featurePcHome: "PcHome 링크 정리: PcHome 쇼핑 링크에서 추적 매개변수(srsltid)를 제거합니다.",
    backToMain: "메인 페이지로 돌아가기",
    languageChanged: "언어가 변경되었습니다",
    autoClean: "링크는 유형에 따라 자동으로 정리됩니다.",
  },
  // 日文
  ja: {
    title: "ピュアリンクツール",
    labelAll: "すべてのパラメータをクリーニング",
    labelProcessed: "処理されたリンク：",
    processBtn: "リンクを処理",
    copyBtn: "リンクをコピー",
    applyBtn: "リンクを適用",
    successCleaned: "リンクが処理されました",
    successNoParams: "クリーニングするパラメータがありません",
    successCopied: "リンクがクリップボードにコピーされました",
    successApplied: "新しいリンクが適用されました",
    errorNoLink: "適用するリンクがありません",
    errorParsing: "URL解析エラー",
    settings: "設定",
    language: "言語",
    save: "保存",
    features: "機能説明",
    featureTaobao:
      "タオバオリンクのクリーニング：タオバオと天猫のリンクからプロモーションパラメータを削除し、必須の商品IDを保持します。",
    featureShopee:
      "ショッピーリンクのクリーニング：すべての地域ドメイン（TW、SG、MYなど）のショッピーリンクを簡素化し、製品識別情報を維持します。",
    featureTracking:
      "トラッキングコードのクリーニング：ブラウジング活動を追跡する分析パラメータ（UTM、Facebook IDなど）を削除します。",
    featureAll:
      "すべてのパラメータをクリーニング：すべてのクエリパラメータを削除し、基本アドレスのみを保持して、可能な限り最もシンプルなURLを作成します。",
    featureQR:
      "QRコード生成：クリーニングされたリンクのスキャン可能なQRコードを自動的に作成し、モバイルでの共有を容易にします。",
    featureYahoo:
      "Yahoo!ショッピングリンクのクリーニング：Yahoo!ショッピングリンクを簡素化し、必須の商品IDのみを保持してすべてのパラメータを削除します。",
    featureRakutenTW:
      "台湾楽天市場リンクのクリーニング：台湾楽天市場リンクから追跡パラメータ（scid、srsltid）を削除します。",
    featureRakutenJP: "日本楽天市場リンクのクリーニング：日本楽天市場リンクから追跡パラメータ（iasid）を削除します。",
    featurePcHome: "PcHomeリンクのクリーニング：PcHomeリンクから追跡パラメータ（srsltid）を削除します。",
    backToMain: "メインページに戻る",
    languageChanged: "言語が変更されました",
    autoClean: "リンクはタイプに基づいて自動的にクリーニングされます。",
  },
}

// 取得文字訊息的函數
function get_text(key, lang = "en") {
  // 如果找不到指定語言，使用英文作為預設
  if (!msg_trans[lang]) {
    lang = "en"
  }

  // 如果找不到指定的鍵值，嘗試從英文中獲取，如果還是沒有，則返回鍵值本身
  return msg_trans[lang][key] || msg_trans["en"][key] || key
}

// 獲取瀏覽器預設語言
function get_browser_language() {
  let browserLang = navigator.language || navigator.userLanguage

  // 處理語言代碼，例如 zh-TW, zh-CN, en-US 等
  if (browserLang.includes("-")) {
    // 對於中文，我們需要保留完整的語言代碼以區分繁體和簡體
    if (browserLang.startsWith("zh")) {
      if (browserLang.includes("TW") || browserLang.includes("HK")) {
        browserLang = "zh-TW"
      } else if (browserLang.includes("CN") || browserLang.includes("SG")) {
        browserLang = "zh-CN"
      }
    } else {
      // 對於其他語言，我們只取主要語言代碼
      browserLang = browserLang.split("-")[0]
    }
  }

  // 檢查是否支援該語言，如果不支援則使用英文
  return msg_trans[browserLang] ? browserLang : "en"
}

// 將函數暴露給全局作用域，以便其他腳本可以使用
window.get_text = get_text
window.get_browser_language = get_browser_language
