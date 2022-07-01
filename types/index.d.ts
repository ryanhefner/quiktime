export namespace Duration {
    const SECOND: number;
    const MINUTE: number;
    const HOUR: number;
    const DAY: number;
    const MONTH: number;
    const YEAR: number;
}
export default quiktime;
/**
 * quiktime
 * Quick duration formatting in a condensed format
 *
 * @param {number} duration
 * @param {{ minimumIntegerDigits?: number=, minimumFractionDigits?: number=, maximumFractionDigits?: number= }} [options=]
 * @return string
 */
declare function quiktime(duration: number, options?: {
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}): string;
