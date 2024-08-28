import { format } from "date-fns"

export default function formatTimestamp(timestamp: string): string {

    const date = new Date(timestamp)
    const dayOfMonth = date.getDate()
    const daySuffix = (day: number) => {
        if (day > 3 && day < 21) return "th"
        switch (day % 10) {
            case 1:
                return "st"
            case 2:
                return "nd"
            case 3:
                return "rd"
            default:
                return "th"
        }
    }
    // const formattedDate = format(date, `MMMM do, yyyy 'at' h:mm a`)
    const formattedDate = format(date, `MMMM do, yyyy `)
    return formattedDate.replace("do", `${dayOfMonth}${daySuffix(dayOfMonth)}`)
}
