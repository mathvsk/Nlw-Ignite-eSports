export function convertHourStringToMinutes(hourString: string) {
    // exemplo: 12:00 => split ["12", "00"] => map [12, 00]
    const [hours, minutes] = hourString.split(':').map(Number)

    // convertendo a hora pra minuto
    const minutesAmount = (hours * 60) + minutes;

    return minutesAmount;
}