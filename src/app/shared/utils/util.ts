export function filterInputValue(
  v: string | null | object,
  minLength = 2,
): boolean {
  return (
    (typeof v === 'string' && (v.length > minLength - 1 || !v.length)) ||
    v === null
  );
}
