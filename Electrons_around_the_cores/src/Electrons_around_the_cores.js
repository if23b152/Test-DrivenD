function electronsAroundTheCores(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

module.exports = electronsAroundTheCores;
