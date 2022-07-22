export function getQuickSortAnimations(array) {
    const animations = [];
    // console.log(animations);
    // console.log(array);
    if (array.length <= 1)
        return array;
    quickSort(array, 0, array.length - 1, animations);
    // console.log(array);
    // console.log(animations);
    return animations;
}
function quickSort(arr, low, high, animations) {
    if (low < high) {
        let pi = partition(arr, low, high, animations);
        quickSort(arr, low, pi - 1, animations);
        quickSort(arr, pi + 1, high, animations);
    }
}
function partition(arr, low, high, animations) {
    // console.log(arr);
    let pivot = arr[high];
    let i = (low - 1);
    // console.log(animations);
    for (let j = low; j <= high - 1; j++) {
        animations.push([j, high]);
        animations.push([j, high]);
        if (arr[j] < pivot) {
            i++;
            animations.push([j, arr[i]]);
            animations.push([i, i]);
            animations.push([i, i]);
            animations.push([i, arr[j]]);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        else {
            animations.push([j, arr[j]]);
        }
    }
    animations.push([i + 1, high]);
    animations.push([i + 1, high]);
    animations.push([i + 1, arr[high]]);
    animations.push([high, high]);
    animations.push([high, high]);
    animations.push([high, arr[i + 1]]);
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}
