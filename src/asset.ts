/** Public asset path that respects Vite `base` (GitHub Pages project URL). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
