const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

// Extract the day, month, and year components

// Create the formatted date string
export const beautifyDate = (unformattedDate) => {
  const originalDate = new Date(unformattedDate)
  const day = originalDate.getDate()
  const month = months[originalDate.getMonth()]
  const year = originalDate.getFullYear()

  return `${day} ${month} ${year}`
}
