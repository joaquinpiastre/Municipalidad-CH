const currentYear = new Date().getFullYear()

export const boletinYears = [currentYear, currentYear - 1, currentYear - 2]

export const boletinEditions = [
  { year: currentYear, number: 1, date: `${currentYear}-01-15`, title: 'Edición 1' },
  { year: currentYear, number: 2, date: `${currentYear}-02-01`, title: 'Edición 2' },
  { year: currentYear - 1, number: 1, date: `${currentYear - 1}-01-10`, title: 'Edición 1' },
  { year: currentYear - 1, number: 2, date: `${currentYear - 1}-02-05`, title: 'Edición 2' },
  { year: currentYear - 1, number: 3, date: `${currentYear - 1}-03-01`, title: 'Edición 3' },
]
