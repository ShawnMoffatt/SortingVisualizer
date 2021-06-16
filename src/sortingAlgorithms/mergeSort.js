export function getMergeAnimations(arr) {
  const animationArr = [];
  if (arr.length <= 1) return arr;
  const auxArr = arr.slice();
  mergeHelper(arr, 0, arr.length - 1, auxArr, animationArr);
  return animationArr;
}

function mergeHelper(
  mainArr, 
  startId,
  endId,
  auxArr,
  animationArr,
) {
  if (startId === endId) return;
  const midID = Math.floor((startId + endId) / 2);
  mergeHelper(auxArr, startId, midID, mainArr, animationArr);
  mergeHelper(auxArr, midID + 1, endId, mainArr, animationArr);
  merge(mainArr, startId, midID, endId, auxArr, animationArr);
}

function merge( mainArr, 
  startId,
  midId,
  endId,
  auxArr,
  animationArr,
  ) {
  let k = startId;
  let i = startId;
  let j = midId + 1;
  while (i <= midId && j <= endId) {
    animationArr.push([i,-1]);
    animationArr.push([j,-1]);
    animationArr.push([i,-1]);
    animationArr.push([j,-1]);
    
    if (auxArr[i] <= auxArr[j]) {
      // replacing the value index k in original array with value in aux array at index i
      animationArr.push([k, auxArr[i]]);
      mainArr[k++] = auxArr[i++];
    } else {
      // replacing the value index k in original array with value in aux array at index j
      animationArr.push([k, auxArr[j]]);
      mainArr[k++] = auxArr[j++];
    }
  }

  while(i<=midId) {
    animationArr.push([i,-1]);
    animationArr.push([i,-1]);
    animationArr.push([k, auxArr[i]]); // replace value at k in original array with value at i in aux array
    mainArr[k++] = auxArr[i++];
  }
  while (j <= endId) {
    animationArr.push([j,-1]);
    animationArr.push([j,-1]);
    animationArr.push([k, auxArr[j]]); // replace value at k in original array with value at j in aux array
    mainArr[k++] = auxArr[j++];
  }
}