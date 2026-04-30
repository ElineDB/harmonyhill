import { DateTime } from 'luxon';

export function toNumber(valueIn: any) {
    if (isString(valueIn)) {
        const value = valueIn.replace(/,/g, '');
        return Number(value);
    } else if (isNumber(valueIn)) {
        return valueIn;
    } else {
        throw new Error(`${valueIn} cannot be parsed to a number`);
    }
}

export function exists(obj: any, fieldName: string) {
    if (isEmpty(obj) || isEmpty(fieldName) || !isString(fieldName)) {
        return false;
    } else if (Array.isArray(obj)) {
        return obj.includes(fieldName);
    } else if (isJsonObject(obj)) {
        return Object.hasOwn(obj, fieldName) && obj[fieldName] !== undefined;
    } else {
        return false;
    }
}

export function isBoolean(value: any) {
    return typeof value === "boolean";
}

export function isAmount(value: any) {
    return isNumber(value) || isString(value);
}

export function isNumber(value: any) {
    return typeof value === "number" && !isNaN(value);
}

export function isLink(value: any) {
    if (!isString(value)) return false;
    if (value.includes("https://")) {
        return true;
    } else if (value.includes("http://")) {
        return true;
    }
    return false;
}

export function isEmpty(value: any) {
    value = isString(value) ? value.trim() : value;
    if (value === "" || value === undefined || value === null) {
        return true;
    }

    if (Array.isArray(value)) {
        const valueStr = JSON.stringify(value);
        return valueStr === "[]";
    }

    if (isJsonObject(value)) {
        const valueStr = JSON.stringify(value);
        return valueStr === "{}";
    }

    return false;
}

/**
 * 
 * @param {*} start start of the date range (a date (luxon datetime, firestore timestamp, JS Date))
 * @param {*} end end of the date range (a date (luxon datetime, firestore timestamp, JS Date))
 * @param {*} occupied JSON object, with month int as keys, and arrays with dates of months as values
 *                     e.g. occupied = {"1" : [1, 2, 4, ...], "2" : [5, 6, 30], ...}
 * @returns dates, filled in with dates between the start and end dates
 */
export function getDatesBetween(start: any, end: any, dates: Record<string, any[]> = {}) {
    try {
        const startDt = toDateTime(start);
        if (!startDt) return dates;

        const endDt = toDateTime(end);
        if (!endDt) return dates;

        //if (isEmpty(startDt) || isEmpty(endDt)) return dates;

        let current = startDt.startOf('day');
        while (current < endDt.startOf('day')) {
            const month = `${current.month}`;
            // if (!exists(dates, month)) dates[month] = []; // todo: not accepted by TS
            dates[month] ??= [];
            dates[month].push(current.day);
            current = current.plus({ days: 1 });
        }
    } catch (e) {
        return dates;
    }

    return dates;
}

export function isJsonObject(value: any) {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value) &&
        Object.prototype.toString.call(value) === "[object Object]"
    );
}

export function isString(value: any) {
    return typeof value === "string";
}

export function getCurrency() {
    return "Rp";
}

export function isDateTime(value: any) {
    return DateTime.isDateTime(value);
}

export function isDate(value: any) {
    if (isEmpty(value)) {
        return false;
    }
    else if (value instanceof Date || typeof value.toDate === "function" || isDateTime(value)) {
        return true;
        // Might be some Timestamp object from firebase admin SDK, which is also a "Timestamp", but not the same as the other Timestamp
    } else if (value.toDate === "function") {
        return true;
    }
    else if (isString(value)) {
        const hasDateFormat = /^\d{4}-\d{2}-\d{2}/.test(value); // starts with YYYY-MM-dd
        if (hasDateFormat) {
            const parsedDate = new Date(value);
            return !isNaN(parsedDate.getTime());
        }
    }
    return false;
}

/**
 * @returns date string in the format YYMMDD HH:MM GMT+X
 */
export function to_yyMMddHHmmTz(date : any = null, separator = '') {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.yy}${separator}${data.month}${separator}${data.day} ${data.hours}:${data.minutes} ${data.tz}`;
    } catch (e) {
        return "Invalid date";
    }
}

export function to_yyMMddHHmm(date : any  = null, separator = '') {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.yy}${separator}${data.month}${separator}${data.day} ${data.hours}:${data.minutes}`;
    } catch (e) {
        return "Invalid date";
    }
}

/**
 * @returns date string formatted as YYMMDD, without hyphens
 */
export function to_YYMMdd(date : any = null, separator = '') {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.yy}${separator}${data.month}${separator}${data.day}`;
    } catch (e) {
        return "Invalid date";
    }
}

export function to_ddMMYY(date : any = null, separator = '') {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.day}${separator}${data.month}${separator}${data.yy}`;
    } catch (e) {
        return "Invalid date";
    }
}

export function to_yyMMM(date : any = null, separator = '') {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.yy}${separator}${data.monthName}`;
    } catch (e) {
        return "Invalid date";
    }
}


export function to_ddMMM(date : any  = null) {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.day} ${data.monthName}`;
    } catch (e) {
        return "Invalid date";
    }
}

export function to_www_ddMMM(date : any = null) {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.weekday}, ${data.day} ${data.monthName}`;
    } catch (e) {
        return "Invalid date";
    }
}

export function to_HHmm(date : any  = null) {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.hours}:${data.minutes}`;
    } catch (e) {
        return "Invalid date";
    }
}

export function to_ddMMM_HHmm(date : any = null) {
    date = date ? date : now();
    try {
        const data = getData(date);
        return `${data.day} ${data.monthName} ${data.hours}:${data.minutes}`;
    } catch (e) {
        return "Invalid date";
    }
}

function getData(inputDate : any) {
    if (isEmpty(inputDate)) {
        return {};
    }

    const luxonDateTime = toLuxonDateTime(inputDate);
    const month = luxonDateTime.month.toString().padStart(2, '0');

    const monthNames = [
        "0", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Timezone offset in minutes
    const tzOffsetMin = luxonDateTime.offset; // e.g., -480 for GMT+8
    const tzOffsetHr = tzOffsetMin / 60;         // Flip sign to match GMT+X
    const tz = `GMT${tzOffsetHr >= 0 ? "+" : ""}${tzOffsetHr}`;

    return {
        yy: luxonDateTime.year.toString().slice(-2),
        ccyy: luxonDateTime.year, // Full year
        month: month,
        day: luxonDateTime.day.toString().padStart(2, '0'), // Pad day with leading zero if needed
        weekday: luxonDateTime.weekdayShort,
        hours: luxonDateTime.hour.toString().padStart(2, '0'), // Pad hour with leading zero if needed
        minutes: luxonDateTime.minute.toString().padStart(2, '0'), // Pad minute with leading zero if needed
        tz: tz,
        monthName: monthNames[luxonDateTime.month],
    };
}

function toLuxonDateTime(inputDate : any) {
    if (inputDate instanceof DateTime) {
        return inputDate;
    } else if (inputDate instanceof Date) {
        return DateTime.fromJSDate(inputDate, { zone: getHotelTimezone() });
        // Could be Timestamp from firebase admin SDK or Timestamp from client side firestore. Both have a toDate() function
    } else if (typeof inputDate.toDate === "function") {
        const date = inputDate.toDate();
        return DateTime.fromJSDate(date, { zone: getHotelTimezone() });
    } else if (typeof inputDate === "string") {
        const formats = generateDateFormats();
        for (const format of formats) {
            const luxonDateTime = DateTime.fromFormat(inputDate, format, { zone: getHotelTimezone() });
            if (luxonDateTime.isValid) {
                return luxonDateTime;
            }
        }

        throw new Error(`Invalid date string format: ${inputDate}`);
    } else {
        throw new Error(`Invalid date type. Expected DateTime, Timestamp, Date, or string: ${inputDate}`);
    }
}

export function toJsDate(inputDate : any) {
    // Convert Luxon DateTime to JavaScript Date
    if (inputDate instanceof DateTime) {
        return inputDate.toJSDate();
    }
    // Could be Timestamp from firebase admin SDK or Timestamp from client side firestore. Both have a toDate() function
    else if (typeof inputDate.toDate === "function") {
        return inputDate.toDate();
    } else if (inputDate instanceof Date) {
        const luxonDateTime = DateTime.fromJSDate(inputDate, { zone: getHotelTimezone() });
        return luxonDateTime.toJSDate();
    } else if (typeof inputDate.toDate === "function") {
        return inputDate.toDate();
    } else if (typeof inputDate === "string") {
        let parsedDate = null;

        const formats = generateDateFormats();
        for (const format of formats) {
            const luxonDateTime = DateTime.fromFormat(inputDate, format, { zone: getHotelTimezone() });
            if (luxonDateTime.isValid) {
                parsedDate = luxonDateTime.toJSDate();
                break;
            }
        }

        if (!parsedDate) {
            throw new Error(`Invalid date string format: ${inputDate}`);
        }

        return parsedDate;
    } else {
        throw new Error(`Invalid date type. Expected DateTime, Timestamp, Date, or string: ${inputDate}`);
    }
}

export function toDateTime(inputDate : any) {
    if (isEmpty(inputDate)) return null;
    return toLuxonDateTime(inputDate);
}

export function isToday(inputDate : any) {
    if(!inputDate) return false;
    const inputDt = toLuxonDateTime(inputDate);
    const todayDt = today(0, false);
    return inputDt.startOf('day').equals(todayDt.startOf('day'));
}

export function isTomorrow(inputDate : any) {
    if(!inputDate) return false;
    const inputDt = toLuxonDateTime(inputDate);
    const tomorrowDt = today(0, false).plus({ days: 1 });
    return inputDt.startOf('day').equals(tomorrowDt.startOf('day'));
}

export function isBeforeToday(inputDate : any) {
    if(!inputDate) return false;
    const inputDt = toLuxonDateTime(inputDate);
    const todayDt = today(0, false);
    return inputDt.startOf('day') < todayDt.startOf('day');
}

export function isPast(inputDate : any) {
    if(!inputDate) return false;
    const inputDt = toLuxonDateTime(inputDate);
    const nowDt = now(0, false);
    return inputDt.toMillis() < nowDt.toMillis();
}

export function dateIsSame(oldDate : any, newDate : any, ignoreTimeOfDay = false) {
    if (isEmpty(oldDate)) {
        return isEmpty(newDate);
    }
    if (isEmpty(newDate)) {
        return isEmpty(oldDate);
    }

    try {
        const oldDateTime = toDateTime(oldDate);
        if(!oldDateTime) return false;

        const newDateTime = toDateTime(newDate);
        if(!newDateTime) return false;

        if (ignoreTimeOfDay) {
            return oldDateTime.startOf('day').equals(newDateTime.startOf('day'));
        } else {
            return oldDateTime.equals(newDateTime);
        }
    } catch (e) {
        return false;
    }
}

/**
 * get a Luxon date time object with time at midnight
 */
export function monthStart(date : any = null, addDays = 0) {
    date = date ? toDateTime(date) : now();
    date = date ? date : now();
    date = date.startOf('month').plus({ days: addDays });
    return date
}

/**
 * get a Luxon date time object with time at midnight
 */
export function monthEnd(date : any = null, addDays = 0) {
    date = date ? toDateTime(date) : now();
    date = date ? date : now();
    return date.endOf('month').plus({ days: addDays });
}

/**
 * @param {*} monthInt, 1-indexed (1 = January). No month given, means using current month
 * @returns JSON object with two luxon dates: {after: monthStart, before: monthEnd}
 */
export function monthRange(monthInt = 0) {
    let selectedMonthDate = now();
    if (monthInt !== 0) {
        selectedMonthDate = selectedMonthDate.set({ month: monthInt });
    }
    return {
        after: monthStart(selectedMonthDate),
        before: monthEnd(selectedMonthDate),
    };
}

export function beginning() {
    return DateTime.now().set({ year: 2000 });
}

export function end() {
    return DateTime.now().set({ year: 2100 });
}

/**
 * get a Luxon date time object with time at midnight
 */
export function today(addDays = 0, keepLocalTime = false) {
    return now(addDays, keepLocalTime).startOf('day');
}

/**
 * get a Luxon date time object with time at this moment
 */
export function now(addDays = 0, keepLocalTime = false) : DateTime {
    const now = DateTime.now();
    const nowHotelTz = setZone(now, keepLocalTime);
    return nowHotelTz.plus({ days: addDays });
}

export function setZone(date : any, keepLocalTime = false) : DateTime  {
    if (!date) date = DateTime.now();
    date = toDateTime(date);
    date = date.setZone(getHotelTimezone(), { keepLocalTime: keepLocalTime });
    return date;
}

export function getHotelTimezone() : string {
    return 'Asia/Singapore';
}

export function getHouseColor(house : string) {
    house = house ? house.toLowerCase() : "";
    switch (house) {
        case 'the jungle nook':
            return 'bg-jn'; // Tailwind CSS class for light blue
        case 'harmony hill':
            return 'bg-hh'; // Tailwind CSS class for light green
        default:
            return 'bg-none'; // No background color by default
    }
};

export function cleanNumeric(value : any) {
    // Remove all non-digit characters (commas, dots, currency symbols, etc.)
    const cleanValue = isString(value) ? value.replace(/[^0-9]/g, '') : value;
    // Convert to integer; use empty string if input is empty
    const numericValue = cleanValue === '' ? 0 : parseInt(cleanValue, 10);
    return numericValue;
}

export function capitalizeWords(str : string) {
    return isString(str) ? str.replace(/\b\w/g, (char) => char.toUpperCase()) : str;
}

export function formatDisplayPrice(price : any, useCurrencyPrefix = false) {
    const amount = isAmount(price) ? price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : '0';
    return `${(useCurrencyPrefix ? getCurrency() + " " : "")}${amount}`;
}

function generateDateFormats() {
    let formats = [];
    for (const d of ["d", "dd"]) {
        for (const M of ["M", "MM"]) {
            for (const y of ["yy", "yyyy"]) {
                for (const sep of ["-", "/"]) {
                    formats.push(`${d}${sep}${M}${sep}${y}`);
                }
            }
        }
    }

    //formats.push("yyyy/MM/dd", "yyyy-MM-dd");
    for (const y of ["yyyy"]) {
        for (const M of ["M", "MM"]) {
            for (const d of ["d", "dd"]) {
                for (const sep of ["-", "/"]) {
                    formats.push(`${y}${sep}${M}${sep}${d}`);
                }
            }
        }
    }

    return formats;
}

export function groupBy<T>(elements : T[] | Record<string, T>, createKey : (item: T) => string) : Record<string, T[]> {
    return Object.values(elements).reduce((map, element) => {
        const group = createKey(element);
        if (!map[group]) map[group] = [];
        map[group].push(element);
        return map;
    }, {} as Record<string, T[]>);
}

// export function allToTimestamp(data : any, level = 0) {  // todo
//     for (const [key, value] of Object.entries(data)) {
//         if (isDate(value)) {
//             data[key] = toFireStoreTime(value);
//         } //else if(isJsonObject(value)) {}
//     }
// }

// export function toFireStoreTime(inputDate : any) {
//     if (isEmpty(inputDate)) return null;
//     const luxonDateTime = toLuxonDateTime(inputDate);
//     const jsDate = toJsDate(luxonDateTime);
//     return Timestamp.fromDate(jsDate); // Timestamp from client side firestore? Or the admin package?
// }

export function allToDateTime(data : any, level = 0) {
    for (const [key, value] of Object.entries(data)) {
        if (isDate(value)) {
            data[key] = toDateTime(value);
        } //else if(isJsonObject(value)) {}
    }
}

export function deepCopy(obj : any) : any {
    if (isEmpty(obj)) return obj;
    if (!isJsonObject(obj)) return obj;

    if (obj.constructor.name === 'Timestamp' && typeof obj.toDate === 'function') {
        return obj;
    }

    if (obj instanceof DateTime) {
        return obj;
    }

    // Firestore DocumentReference, a hugely complex object, which should not be deep copied
    // if (obj instanceof DocumentReference) { // todo
    //     return obj;
    // }

    // Handle Date objects (standard practice for deep copy)
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (Array.isArray(obj)) {
        const copy = [];
        for (const item of obj) {
            copy.push(deepCopy(item));
        }
        return copy;
    }

    // Handle Object
    const copy : Record<string, any> = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

export async function wait(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
