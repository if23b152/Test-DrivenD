function findSpaceship(map) {
    const rows = map.split('\n');
    for (let y = 0; y < rows.length; y++) {
        const x = rows[y].indexOf('X');
        if (x !== -1) {
            return [y, x];
        }
    }
    return "Spaceship lost forever.";
}
