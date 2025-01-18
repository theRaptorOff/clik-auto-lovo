chrome.storage.local.get(['isActive'], (result) => {
  if (result.isActive) {
    setInterval(() => {
      const warningButton = document.querySelector('button[class="Button__StyledButton-sc-1nc0i48-0 FQtDt WarningModal__ButtonWithMarginTop-sc-i2av6q-2 kXEgJs"]');
      const convertButton = document.querySelector('button[class="Button__StyledButton-sc-1nc0i48-0 lbmadj Workspace__ConvertBtn-sc-1ulolw6-24 ccLGQx convert-icon"]');
      
      if (warningButton) {
        warningButton.click();
        console.log('Warning button clicked from content script!');
      }
      
      if (convertButton) {
        convertButton.click();
        console.log('Convert button clicked from content script!');
      }
    }, 1000);
  }
});