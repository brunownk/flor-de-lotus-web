export function normalizeString(str: string) {
  return str
    .normalize('NFD') // Normalizes the string to decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Removes diacritical marks
    .replace(/[^a-z0-9]/gi, '') // Removes special characters, keeping only letters and numbers
    .toLowerCase(); // Converts to lowercase
}
