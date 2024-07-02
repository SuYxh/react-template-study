import './styles/index.css';
import Button from './component/Button';

const a = 10
const b = 11

console.log(a+b);

[1,2,3].map(n => n + 1)


class Person {
  name: string
  constructor (name) {
    this.name = name || 'jarvis'
  }

  sayHi() {
    console.log('hi', this.name);
  }
}

const p1 = new Person('xiaoming')
console.log(p1);


console.log(Button);