const TaskController = require( '../modules/tasker/TaskController.js' );
const Task = require( '../modules/tasker/Task.js' );

// const TaskList = require( '../modules/tasker/TaskList.js' );

const ID = function() {
  return `_${Math.random().toString( 36 ).substr( 2, 9 )}`;
};
class Widget {
  constructor( params ) {
    this.name = params.name;
    this.id = params.id;
    this.init();
  }

  init() {
    this.widget = document.createElement( 'div' );
    const head = document.createElement( 'div' );
    const body = document.createElement( 'div' );
    this.widget.classList.add( 'widget' );
    head.classList.add( 'widget__headasd' );
    body.classList.add( 'widget__body' );
    this.widget.appendChild( head );
    this.widget.appendChild( body );
  }
}

const widget = new Widget( {
  id: ID(),
  name: 'Task list'
} );
console.log( widget );
console.log( 'App started' );

// const app = new App();
const elem = document.createElement( 'div' );
function foo( lname ) {
  const name = lname;
  console.log( `My name is ${name}` );
}
let n = 20;
n++;
console.log( n, elem );
const arrow = ( y ) => y + 1;
arrow( 2 );
foo( 'nasd' );
const { x, y, ...z } = {
  x: 1, y: 2, a: 3, b: 4
};
console.log( x ); // 1
console.log( y ); // 2
console.log( z ); // { a: 3, b: 4 }
[ 5, 6 ].map( ( m ) => console.log( m ) );

const taskData = [ {
  id: ID(),
  title: 'test title 1',
  description: 'test description 1'
}, {
  id: ID(),
  title: 'test title 2',
  description: 'test description 2'
}, {

  id: ID(),
  title: 'test title 3',
  description: 'test description 3'

} ];
window.taskListController = new TaskController( taskData, 'listView' );
window.task = new Task( taskData[ 1 ] );
