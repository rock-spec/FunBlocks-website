export default function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
    const date: Date = new Date(dateString);
    const formattedDate: string = date.toLocaleDateString('en-US', options);
    // const formattedTime: string = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    return `${formattedDate}`;
}

// // Example usage:
// const formattedDateTime: string = formatDate('2024-04-10T02:02:01+00:00');
// console.log(formattedDateTime); // Output: April 10, 2024 at 2:02 AM
