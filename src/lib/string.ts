// Function to truncate description to 300 characters
export function truncateDescription(description: string): string {
    if (!description) return '';
    if (description.length <= 300) return description;
    return description.substring(0, 300) + '... ';
}
