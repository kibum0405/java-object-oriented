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
console.log("memberObject.designer : ", memberObject.designer);