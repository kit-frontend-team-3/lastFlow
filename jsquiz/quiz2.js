/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

// function division(arr, n) {
//   const copy = [];
//   for (i = 0; i < arr.length; i += n) {
//     copy.push(arr.slice(i, i + n));
//   }
//   return copy;
// }

// const origin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = division(origin, 2);
// console.log(result);

function division(num, slice) {
  let newArray = [];
  let count = 0;

  let arr = Array(num)
    .fill()
    .map((v, i) => i + 1);
  while (arr.length > 0) {
    let arr1;
    arr1 = arr.splice(0, slice);
    newArray.push(arr1);
    count++;
  }
  console.log(count);
  return console.log(newArray);
}

division(80, 5);
