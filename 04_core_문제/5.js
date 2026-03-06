function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayHello=function(){
        return `안녕하세요, 제 이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`;
    };
};
const person = new Person("홍길동", 20);
person.sayHello();
console.log(person.sayHello());
