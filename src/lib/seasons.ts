export function getSeason(date: Date): string {
    if (date.getMonth() + 1 >= 8 && date.getMonth() + 1 <= 12) {
        return `${date.getFullYear()}-${date.getFullYear() + 1}`
    } else {
        return `${date.getFullYear() - 1}-${date.getFullYear()}`
    }
}