# Pure Link Tools

<p align="center">
  <img src="icons/icon128.png" alt="Pure Link Tools Logo" width="128" height="128">
</p>

A Chrome extension that cleans and simplifies URLs by removing unnecessary tracking parameters and simplifying shopping links from various platforms.

## Translations / 多語言文檔 / 多言語ドキュメント

- [English (Current)](README.md)
- [繁體中文](doc/README.zh-TW.md)
- [日本語](doc/README.ja.md)

## Features

Pure Link Tools automatically detects and cleans links from various shopping platforms and removes tracking parameters to create cleaner, more shareable URLs.

### Supported Shopping Platforms

- **Taobao & Tmall**: Removes promotional parameters while preserving the essential product ID
- **Shopee**: Simplifies links across all regional domains (TW, SG, MY, etc.) while maintaining product identification
- **Yahoo Shopping**: Simplifies Yahoo Shopping links by keeping only the essential product ID
- **Rakuten Taiwan**: Removes tracking parameters (scid, srsltid) from Rakuten Taiwan shopping links
- **Rakuten Japan**: Removes tracking parameters (iasid) from Rakuten Japan shopping links
- **PcHome**: Removes tracking parameters (srsltid) from PcHome shopping links

### Tracking Parameter Removal

Automatically removes common tracking parameters including:
- Google Analytics parameters (utm_source, utm_medium, utm_campaign, etc.)
- Facebook tracking parameters (fbclid, fb_action_ids, etc.)
- Other common tracking parameters (ref, source, campaign, etc.)

### Additional Features

- **QR Code Generation**: Automatically creates a scannable QR code for your cleaned link
- **Clean All Parameters**: Option to remove all URL parameters for maximum simplicity
- **Multi-language Support**: Available in English, Traditional Chinese, Simplified Chinese, Korean, and Japanese
- **Copy & Apply**: Easily copy the cleaned link or apply it directly to your current tab

## Installation

### From Chrome Web Store

1. Visit the [Chrome Web Store](https://chrome.google.com/webstore/detail/pure-link-tools/your-extension-id)
2. Click "Add to Chrome"
3. Confirm the installation when prompted

### Manual Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the extension directory
5. The extension should now be installed and visible in your toolbar

## Usage

1. Navigate to any webpage with a URL you want to clean
2. Click the Pure Link Tools icon in your Chrome toolbar
3. The extension will automatically detect and clean the URL based on its type
4. Use the "Copy Link" button to copy the cleaned URL to your clipboard
5. Use the "Apply Link" button to navigate to the cleaned URL
6. Scan the QR code to share the cleaned link with mobile devices

### Settings

Access the settings page by clicking the gear icon in the top-right corner of the extension popup:

- **Language**: Choose from English, Traditional Chinese, Simplified Chinese, Korean, or Japanese
- **Features**: View detailed descriptions of all available features

## Privacy

Pure Link Tools respects your privacy:

- All URL processing happens locally in your browser
- No data is sent to any external servers
- No user tracking or analytics
- No personal data collection

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- Icons made by [Freepik](https://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com/)
- QR code generation powered by [QRCode.js](https://github.com/davidshimjs/qrcodejs)
