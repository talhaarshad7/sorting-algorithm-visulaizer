export function getBubbleSortAnimations(array) {
    const animations = [];
    var n = array.length;
    // console.log(n);
    if (array.length <= 1) return array;
    var i, j;
    // console.log(array);
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            // console.log(1);
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                animations.push([j, array[j + 1]]);
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                animations.push([j + 1, j + 1]);
                animations.push([j + 1, j + 1]);
                animations.push([j + 1, temp]);
            }
            else {
                animations.push([j, array[j]]);
            }
        }
        // console.log(array);
    }
    // console.log(animations);
    // console.log(array);
    return animations;
}