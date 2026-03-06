greet=()=>{
    return 'hello';
}

getinfo=(name,age)=>`name: ${name}, age: ${age}`;

console.log(greet());
console.log(getinfo('이주은',22));