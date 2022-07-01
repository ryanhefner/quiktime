export const Duration = {
  SECOND: 1000,
  MINUTE: 60000,
  HOUR: 360000,
  DAY: 86400000,
  MONTH: 2592000000,
  YEAR: 30758400000,
}

const DEFAULT_OPTIONS = {
  minimumIntegerDigits: 1,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}

/**
 * quiktime
 * Quick duration formatting in a condensed format
 *
 * @param {number} duration
 * @param {{ minimumIntegerDigits?: number=, minimumFractionDigits?: number=, maximumFractionDigits?: number= }} [options=]
 * @return string
 */
const quiktime = (duration, options) => {
  const opts = { ...DEFAULT_OPTIONS, ...options }

  // Milliseconds
  if (duration < Duration.SECOND) {
    return `${duration.toLocaleString(undefined, opts)} ms`
  }

  // Seconds
  if (duration < Duration.MINUTE) {
    return `${(duration / Duration.SECOND).toLocaleString(undefined, opts)} sec`
  }

  // Minutes
  if (duration < Duration.HOUR) {
    return `${(duration / Duration.MINUTE).toLocaleString(undefined, opts)} min`
  }

  // Hours
  if (duration < Duration.DAY) {
    return `${(duration / Duration.HOUR).toLocaleString(undefined, opts)} hr`
  }

  // Days
  if (duration < Duration.MONTH) {
    return `${(duration / Duration.DAY).toLocaleString(undefined, opts)} days`
  }

  // Months
  if (duration < Duration.YEAR) {
    return `${(duration / Duration.MONTH).toLocaleString(undefined, opts)} mo`
  }

  // Years
  return `${(duration / Duration.YEAR).toLocaleString(undefined, opts)} yr`
}

export default quiktime
