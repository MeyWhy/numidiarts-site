export function withBase(path) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return `${prefix}${path}`;
}