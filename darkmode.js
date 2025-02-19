let rootElm = document.documentElement;
let switchElm = document.querySelector("#switch");
let userDark = readFromLocalStorage("isDarkMode");
let browserDark = window.matchMedia("(prefers-color-scheme: dark)")
console.log(browserDark);

if (userDark) {
    switchElm.checked = true;
    rootElm.setAttribute("data-dark", "true");
} else {
    switchElm.checked = false;
    rootElm.setAttribute("data-dark", "false");
}

switchElm.addEventListener("change", function() {
    console.log(switchElm.checked);
    saveToLocalStorage("isDarkMode", switchElm.checked);
   
    if (switchElm.checked) {
        rootElm.setAttribute("data-dark", "true");
    } else {
        rootElm.setAttribute("data-dark", "false");
    }
});

function readFromLocalStorage(key) {
    return localStorage.getItem(key) === "true";
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}