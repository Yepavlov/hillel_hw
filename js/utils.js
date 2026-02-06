export function isNumber(value) {
    if (value === null || value === "") return false;
    const numberMark = Number(value);
    return !isNaN(numberMark) && numberMark >= 0 && numberMark <= 100;
}

export function isValidDate(value) {
    if (typeof value !== "string" || value.trim() === "") return false;
    const parts = value.split("-");
    if (parts.length !== 3) return false;

    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const yearStr = parts[2];

    if (isNaN(day) || day < 1 || day > 31) return false;
    if (isNaN(month) || month < 1 || month > 12) return false;
    if (yearStr.length !== 4 || isNaN(Number(yearStr))) return false;

    return true;
}
