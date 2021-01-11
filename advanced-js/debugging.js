const flattened = [[0,1], [2,3], [4,5]].reduce(
    (accumulator,array) => {

        return accumulator.concat(array)
    }, []);
