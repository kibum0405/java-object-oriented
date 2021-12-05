// 객체의 기본적인 사용 방법
// 배열 조직의 멤버를 목록화 -> 배열 or 객체
// 배열에서는 0,1,2 순으로 진행

// node 실행 방법(파일 프로젝트 경로 안에서 실행 해야함) : node "파일명" ex) node object.js

var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2] : ", memberArray[2]);

var memberObject = {
    manger: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}

// 객체에 저장된 원소의 값을 업데이트
memberObject.designer = 'leezche'

// 객체는.으로도 배열처럼 []로 접근이 가능합니다.
console.log("memberObject.designer : ", memberObject.designer);
console.log("memberObject.['designer'] : ", memberObject['designer']);

// delete라는 연산자를 이용해서 저장된 원소의 값을 제거
delete memberObject.manger
console.log('after delete memberObject.manager : ', memberObject.manger);

// 객체란 무엇인가 ?
// 1. 이름이 있는 정보를 정리 정돈할 때 쓰는 도구입니다.
// 2. 객체에 있는 값을 읽을 때에는.이나 []를 통해서 읽을 수 있습니다.
// 3. 값을 업데이트하거나 추가하고 싶을 때는 memberObject.designer = 'leezche' 이런 식으로 사용 가능합니다.
// 4. 저장된 원소의 값을 제거하는 방법은 delete라는 연산자를 이용하는 것입니다.

