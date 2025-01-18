let clickInterval;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startClicking') {
    clickInterval = setInterval(() => {
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: clickButtons
          }).catch(err => console.log('Cannot access this tab:', err));
        });
      });
    }, 1000); // Vérifie toutes les secondes
  } else if (request.action === 'stopClicking') {
    clearInterval(clickInterval);
  }
});

function clickButtons() {
  const warningButton = document.querySelector('button[class="Button__StyledButton-sc-1nc0i48-0 FQtDt WarningModal__ButtonWithMarginTop-sc-i2av6q-2 kXEgJs"]');
  const convertButton = document.querySelector('button[class="Button__StyledButton-sc-1nc0i48-0 lbmadj Workspace__ConvertBtn-sc-1ulolw6-24 ccLGQx convert-icon"]');
  
  if (warningButton) {
    warningButton.click();
    console.log('Warning button clicked!');
  }
  
  if (convertButton) {
    convertButton.click();
    console.log('Convert button clicked!');
  }
}