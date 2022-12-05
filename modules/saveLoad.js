export function saveLocalStorage(key, object) {
  if (!key || !object) { return; }
  localStorage.setItem(key, JSON.stringify(object));
}

export function loadLocalStorage(key, object) {
  if (!key) { return; }
  if (JSON.parse(localStorage.getItem(key))) {
    object.populateCollection(JSON.parse(localStorage.getItem(key)));
  }
}