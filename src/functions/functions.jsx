function getLastMonth(date) {
    var x = new Date(date);
    x.setDate(1);
    x.setMonth(x.getMonth()-1);

    return new Date(x);
}

function shortTime(date) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let time = new Date(date);
    
    return months[time.getMonth()] + ' ' + time.getDate() + ' ' + time.getFullYear()
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

export {
    getLastMonth,
    shortTime
}