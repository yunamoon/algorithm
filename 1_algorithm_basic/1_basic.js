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
    let answer = 0;
    // a가 b보다 작고, c 보다도 작으면 = a
    if(a <b && a < c) {
        return answer =a;
    // b가 a보다 작고, c 보다도 작으면 = b
    } else if (b < a && b < c) {
        return answer = b;
    // c가 a보다 작고, b 보다도 작으면 = c    
    } else {
        return answer = c;
    }
}

console.log(solution(6, 5, 11));
