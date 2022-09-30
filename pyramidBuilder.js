const pyramidBuilder = (floorNumber) => {
    const buildFloor = (num, level) => {
        const bloks = '*'.repeat(level * 2 - 1);
        const spaces = ' '.repeat(num - level);

        return `${spaces}${bloks}${spaces}`;
    };

    const result = [];

    for (let i = 1; i <= floorNumber; i++) {
        result.push(buildFloor(floorNumber, i))
    };

    return JSON.stringify(result, null, 2);
}

console.log(pyramidBuilder(process.argv[2]));