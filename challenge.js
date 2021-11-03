function pickingNumbers(a) {
   
    let max = 0;
    let values = new Array(100).fill(0);

    (a || []).forEach(value => {
        values[value]++;
    });

    return values.reduce((target, value, index) => {
        (
            (index >= 1) &&
            (value + values[index - 1] > target)
        ) && (target = value + values[index - 1]);

        return target;
    }, []);
}
