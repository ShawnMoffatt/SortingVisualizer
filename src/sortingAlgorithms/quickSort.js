export function getQuickAnimations(arr) {
    const animations = [];
    return quick(arr, 0, arr.length-1, animations);
}

function quick(arr, l, r, animations) {
    let index;
    if(arr.length > 1) {
        index = partition(arr, l, r, animations);
        if(l < index -1) {
            quick(arr, l, index-1, animations);
        } 
        if(index < r) {
            quick(arr, index, r, animations);
        }
    }
    return animations;
}

function partition(arr, l, r, animations) {
    let pivot = arr[Math.floor((l + r) / 2)];
    let i = l;
    let j = r;

    while(i<=j) {
        while(arr[i] < pivot) {
            animations.push([i,-1]);
            animations.push([i,-1]);
            i++;
        }
        while(arr[j] > pivot) {
            animations.push([j,-1]);
            animations.push([j,-1]);
            j--;
        }
        if(i <= j) {
            animations.push([i,-1]);
            animations.push([j,-1]);
            animations.push([j, arr[i]]);
            animations.push([i,arr[j]]);
            animations.push([i,-1]);
            animations.push([j,-1]);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}