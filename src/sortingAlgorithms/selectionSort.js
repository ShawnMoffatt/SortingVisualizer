export function getSelectionAnimations(arr) {
    const animationArr = [];
    selection(arr, animationArr);
    return animationArr;
}

function selection(arr, animationArr) {

    for(let i = 0; i < arr.length-1; i++) {
        animationArr.push([i,-1]);
        let minPos = i;
        for(let j = i+1; j < arr.length; j++) {
            animationArr.push([j,-1]);
            if(arr[j] < arr[minPos]) {
                minPos = j;
            }
            animationArr.push([j,-1]);
        }
        animationArr.push([minPos, arr[i]]);
        animationArr.push([i,arr[minPos]]);
        animationArr.push([i, -1]);
        let temp = arr[minPos];
        arr[minPos] = arr[i];
        arr[i] = temp;
    }
    return animationArr;
}

