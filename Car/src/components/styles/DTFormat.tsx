import moment from "moment";

export default function updateLocale (): void {
    moment.updateLocale("en", {
        relativeTime: {
            s: "now",
            ss: "now",
            m: "1 min",
            mm: "%d min",
            h: "1 h",
            hh: "%d h",
        },
        calendar: {
            sameDay: "[today at] HH:mm",
            nextDay: "[tomorrow at] HH:mm",
            lastDay: "DD.MM[,] HH:mm",
            lastWeek: "DD.MM[,] HH:mm",
            nextWeek: "DD.MM[,] HH:mm",
            sameElse: "DD.MM[,] HH:mm",
        },
    });
    moment.locale("en");
};
