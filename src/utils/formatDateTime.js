export function formatDateTime(input) {
    const output = new Date(input + "Z").toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: "2-digit",
        minute: "2-digit"
    })
    return output
}