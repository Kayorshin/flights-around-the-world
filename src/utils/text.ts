export function removeDiacritics(text: string) {
  return new RegExp(text.normalize('NFD').replace(/\p{Diacritic}/gu, ''), 'i')
}
