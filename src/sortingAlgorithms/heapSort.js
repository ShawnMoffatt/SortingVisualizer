export function getHeapAnimations(arr) {
    const animations = [];
    let size = arr.length;
    console.log(arr);
    for (let i = (size/2) -1; i >= 0; i--) {
        heapify(arr, size, i, animations);
    }

    for (let i = size - 1; i > 0; i--) {
        animations.push([0,-1]);
        animations.push([i,-1]);
        animations.push([0, arr[i]]);
        animations.push([i, arr[0]]);
        animations.push([0,-1]);
        animations.push([i,-1]);
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0, animations);
    }
    console.log(arr);
    return animations;
}

function heapify(arr, size, i, animations) {
    let indexLarge = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < size && arr[left] > arr[indexLarge]) {
        indexLarge = left;
    }
    if (right < size && arr[right] > arr[indexLarge]) {
        indexLarge = right;
    }

    if(indexLarge !== i) { 
        animations.push([i,-1]);
        animations.push([indexLarge,-1]);
        animations.push([i, arr[indexLarge]]);
        animations.push([indexLarge, arr[i]]);
        animations.push([i,-1]);
        animations.push([indexLarge,-1]);
        let temp = arr[i];
        arr[i] = arr[indexLarge];
        arr[indexLarge] = temp;
        heapify(arr, size, indexLarge, animations);
    }
}