export const useReadableTime = time => {
    const Month_names = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ]
    const week_days = [
        "Sunday",
        "Monday",
        "Tueday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const date = new Date(time);
    const month_name = Month_names[date.getMonth()];
    const month = date.getMonth();
    const date_no = date.getDate();
    const day = date.getDay();
    const day_name = week_days[date.getDay()];
    const hours = date.getHours();
    const hours_12 = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minute = date.getMinutes();
    const minute_0 = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
    const format = date.getHours() < 12 ? "AM" : "PM";
    const full_time = `${day_name} ${hours_12}:${minute_0} ${format}`

    return {
        date,
        month,
        month_name,
        date_no,
        day,
        day_name,
        hours,
        hours_12,
        minute,
        minute_0,
        format,
        full_time
    }
}