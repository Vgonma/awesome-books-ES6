export function saveLocalStorage(key, object) {
  if (!key || !object) { return; }
  localStorage.setItem(key, JSON.stringify(object));

}

export function loadLocalStorage(key, object) {
  if (!key || !object) { return; }
  if (JSON.parse(localStorage.getItem(key))) {
    object = JSON.parse(localStorage.getItem(key));
  }
}