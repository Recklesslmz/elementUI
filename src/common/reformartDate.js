export const reformat = (date) => {
  let dates = new Date(date)
  let Y = dates.getFullYear() + '-'
  let M = (dates.getMonth() + 1 < 10 ? '0' + (dates.getMonth() + 1) : dates.getMonth() + 1) + '-'
  let D = dates.getDate() < 10 ? '0' + dates.getDate() + ' ' : dates.getDate() + ' '
  const currentDate = Y + M + D
  return currentDate
}
