export function getStringInitials(string: string) {
  const [firstString, secondaryString] = string.split(' ');

  let initials = firstString[0];

  if (secondaryString) {
    initials += secondaryString[0];
  }

  return initials.toUpperCase();
}
