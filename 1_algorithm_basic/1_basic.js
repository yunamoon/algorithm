/**

세 수 중 최솟값
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

▣ 입력설명
첫 번째 줄에 100이하의 세 자연수가 입력된다.

▣ 출력설명
첫 번째 줄에 가장 작은 수를 출력한다.

▣ 입력예제 6 5 11
▣ 출력예제 5 

*/

function solution(a, b, c){
let result = 0;

// a가 b와 c보다 작으면 a를 출력
if (a < b && a < c) {
  result = a;
  // b가 a와 c보다 작으면 b를 출력
} else if (b < a && b < c) {
  result = b;
  // 둘다 아니면 c를 출력
} else {
  result = c;
}
return result;
}

console.log(solution(6, 5, 11));
