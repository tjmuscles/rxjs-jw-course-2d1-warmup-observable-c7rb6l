import { observable, Observable } from "rxjs";

console.log('Hello World!');

const obvservable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
});

const observer = {
  next: value => console.log(value)
};

obvservable$.subscribe(observer);