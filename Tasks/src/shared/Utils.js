export const TODAY = new Date().toISOString().slice(0, 10);

export function generateId() {
  const result = (((1 + Math.random()) * 0x10000) | 0)
    .toString(16)
    .substring(1);
  return result;
}
