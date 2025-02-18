function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return "Data was saved with the key " + key;
}

function readFromLocalStorage(key) {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

let success = saveToLocalStorage("favorites", [1, 5, 8]);