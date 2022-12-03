chrome.contextMenus.create({
    id: 'context-run',
    title: 'Generate blog post',
    contexts: ['selection'],
  });
  
  // Add listener
  chrome.contextMenus.onClicked.addListener(generateCompletionAction);

  const generateCompletionAction = async (info) => {}

// Don't touch this
chrome.contextMenus.create({
  id: 'context-run',
  title: 'Generate blog post',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener(generateCompletionAction);