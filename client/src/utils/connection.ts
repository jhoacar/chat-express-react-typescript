export function getConnection() {
  return localStorage.getItem('connection') === 'true';
}

export function setConnection() {
  localStorage.setItem('connection', 'true');
}

export function removeConnection() {
  localStorage.removeItem('connection');
}
