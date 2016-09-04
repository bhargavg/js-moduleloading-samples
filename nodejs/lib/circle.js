function area(r) {
    return Math.PI * r * r;
}

function circumference(r) {
    return 2 * Math.PI * r;
}

module.exports = {
    area: area,
    circumference: circumference
}
