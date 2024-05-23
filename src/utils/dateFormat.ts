export default function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
    const date: Date = new Date(dateString);
    const formattedDate: string = date.toLocaleDateString('en-US', options);
    // const formattedTime: string = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    return `${formattedDate}`;
}