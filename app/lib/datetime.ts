export const toNotifDateTime = (date: Date) => {
    // Format manual
    const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options); // "31 Aug 2025"

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedTime = `${hours}.${minutes}`;

    // 👉 "31 Aug 2025 | 15.42"
    return `${formattedDate} | ${formattedTime}`;
}

