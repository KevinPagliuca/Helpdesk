
export function convertDateTime(date) {
    var past_date = new Date(date);
    var time_diff = new Date() - past_date;

    var min = Math.floor(time_diff / 60000);
    var hours = Math.floor(min / 60);
    var seconds = Math.floor(time_diff / 1000);
    var years = Math.floor(min / 525600);

    if (years > 1) {
        if (years < 2) {
            return "Comentado há " + years + " ano atrás.";
        }
        return "Comentado há " + years + " anos atrás.";
    } else if (hours > 24) {
        var days = hours / 24;
        days = days.toFixed(0);
        if (days < 2) {
            return "Comentado há " + days + " dia atrás.";
        }
        return "Comentado há " + days + " dias atrás.";
    } else if (hours > 1) {
        if (hours < 2) {
            return "Comentado há " + hours + " hora atrás.";
        }
        return "Comentado há " + hours + " horas atrás.";
    } else if (min > 1 && min <= 60) {
        if (min < 2) {
            return "Comentado há " + min + " minuto atrás.";
        }
        return "Comentado há " + min + " minutos atrás.";
    } else if (seconds > 0 && seconds <= 60) {
        if (seconds < 2) {
            return "Comentado há " + seconds + " segundo atrás."
        }
        return "Comentado há " + seconds + " segundos atrás."
    }
}

export function convertDate(date) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(date)
    return [pad(d.getDate() + 1), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}
