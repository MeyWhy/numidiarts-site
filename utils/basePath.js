export function withBase(path) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  console.log("prefix is ",prefix);
  return `${prefix}${path}`;
}