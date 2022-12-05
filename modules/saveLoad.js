export function saveLocalStorage(key, object) {
  if (!key || !object) { return; }
  localStorage.setItem(key, JSON.stringify(object));

}

export function loadLocalStorage(key) {
  if (!key) { return; }
  if (JSON.parse(localStorage.getItem(key))) {
    return JSON.parse(localStorage.getItem(key));
  }
}