export function getWebSocketID(): string {
  return localStorage.getItem('websocket') || '';
}

export function setWebSocketID(id: string): void {
  localStorage.setItem('websocket', id);
}

export function removeWebSocketID(): void {
  localStorage.removeItem('websocket');
}

export function getPeerID(): string {
  return localStorage.getItem('peer') || '';
}

export function setPeerID(id: string): void {
  localStorage.setItem('peer', id);
}

export function removePeerID(): void {
  localStorage.removeItem('peer');
}
