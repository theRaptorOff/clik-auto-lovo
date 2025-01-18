document.getElementById('startBtn').addEventListener('click', () => {
  chrome.storage.local.set({ isActive: true });
  chrome.runtime.sendMessage({ action: 'startClicking' });
});

document.getElementById('stopBtn').addEventListener('click', () => {
  chrome.storage.local.set({ isActive: false });
  chrome.runtime.sendMessage({ action: 'stopClicking' });
});