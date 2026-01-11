async function sayHello() {
  // eslint-disable-next-line no-undef
  let [tab] = await chrome.tabs.query({ active: true});
  // eslint-disable-next-line no-undef
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
        document.body
      alert("Hello from JobGuard!");
    },
  });
}

document.getElementById("myButton").addEventListener("click", sayHello);