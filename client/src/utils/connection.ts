export function getWebSocketConnection(): boolean {
  return localStorage.getItem('websocket') === 'true';
}

export function setWebSocketConnection(): void {
  localStorage.setItem('websocket', 'true');
}

export function removeWebSocketConnection(): void {
  localStorage.removeItem('websocket');
}

export function getPeerConnection(): string {
  return localStorage.getItem('peer') || '';
}

export function setPeerConnection(id: string): void {
  localStorage.setItem('peer', id);
}

export function removePeerConnection(): void {
  localStorage.removeItem('peer');
}
