/**
 * NUR FÜR DIE VORSCHAU-VERSION: erfundene, aber pro Artikel stabile Beispielpreise.
 * Sie werden ausschließlich angezeigt, wenn `environment.demo` aktiv ist und jemand eingeloggt ist.
 */
export function demoPrice(key: string): string {
  let hash = 2166136261;
  for (let i = 0; i < key.length; i++) {
    hash = Math.imul(hash ^ key.charCodeAt(i), 16777619) >>> 0;
  }
  const euros = 14 + (hash % 76); // 14 … 89 €
  const cents = [0, 40, 50, 90][(hash >>> 8) % 4];
  return `${euros},${String(cents).padStart(2, '0')} € pro Karton`;
}
