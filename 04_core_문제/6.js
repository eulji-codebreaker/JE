// (1) user 객체에 email 프로퍼티를 추가하고 "hong@gmail.com" 값을 넣으세요.
// (2) age 값을 21로 수정하세요.
// (3) name 값을 삭제하세요.

// const user = {
//    name : "gildong",
//    age : 20
// };

const user = {
   name : "gildong",
   age : 20,
   email:"hong@gmail.com"
};

user.age=21;
delete user.name;
console.log(user);