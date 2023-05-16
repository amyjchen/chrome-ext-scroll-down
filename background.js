const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';

const scrollToBottom = async (tab) => {
  await chrome.scripting.executeScript({
    files: ["injection.js"],
    target: { tabId: tab.id }
  });
};

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  scrollToBottom(tab);
});