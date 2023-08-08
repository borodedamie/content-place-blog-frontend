export function formatRelativeTime(datetime: string): string {
    const date = new Date(datetime);
    const now = new Date();
    const diffInSeconds = (now.getTime() - date.getTime()) / 1000;
    const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    if (diffInSeconds < 60) {
        return formatter.format(-Math.round(diffInSeconds), 'second');
    } else if (diffInSeconds < 60 * 60) {
        return formatter.format(-Math.round(diffInSeconds / 60), 'minute');
    } else if (diffInSeconds < 60 * 60 * 24) {
        return formatter.format(-Math.round(diffInSeconds / (60 * 60)), 'hour');
    } else {
        return formatter.format(-Math.round(diffInSeconds / (60 * 60 * 24)), 'day');
    }
}