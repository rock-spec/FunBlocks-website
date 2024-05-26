export default function formatDate(dateString: string): string {
    const date: Date = new Date(dateString)
    // Convert to EST
    const estDate = new Date(date.toLocaleString("en-US", { timeZone: "America/New_York" }))
    // Format the date parts separately
    const day = estDate.getUTCDate()
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(estDate)
    const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(estDate)

    // Add the ordinal suffix to the day
    const dayWithSuffix =
        day +
        (day % 10 === 1 && day !== 11
            ? "st"
            : day % 10 === 2 && day !== 12
            ? "nd"
            : day % 10 === 3 && day !== 13
            ? "rd"
            : "th")

    // Combine the parts into the final formatted date
    const formattedDate = `${month} ${dayWithSuffix}, ${year}`

    return formattedDate
}

// export default function formatDate(dateString: string): string {
//     const options: Intl.DateTimeFormatOptions = {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//         hour: "numeric",
//         minute: "2-digit",
//     }
//     const date: Date = new Date(dateString)
//     const formattedDate: string = date.toLocaleDateString("en-US", options)
//     // const formattedTime: string = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
//     console.log(formattedDate)

//     return `${formattedDate}`
// }
