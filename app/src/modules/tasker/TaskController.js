/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

const Task = require( './Task.js' );
const TaskList = require( './TaskList.js' );

function taskInListView() {
  this.task = document.createElement( 'div' );
  $( this.task ).addClass( 'taskList__item' );
  this.task.id = this.data.id;

  const title = document.createElement( 'span' );
  $( title ).addClass( 'taskTitle' );
  $( title ).text( this.data.title );
  $( this.task ).append( title );

  this.edit_btn = document.createElement( 'button' );
  $( this.edit_btn ).addClass( 'taskControl taskEdit' );
  $( this.edit_btn ).text( 'edit' );
  $( this.task ).append( this.edit_btn );

  this.remove_btn = document.createElement( 'button' );
  $( this.remove_btn ).addClass( 'taskControl taskRemove' );
  $( this.remove_btn ).text( 'remove' );
  $( this.task ).append( this.remove_btn );

  return this.task;
}

function singleTaskView() {
  console.log( this.data );
}

class TaskController {
  constructor( data ) {
    this.data = data;
    this.taskList = null;
    this.init();
  }

  init() {
    this.taskList = new TaskList();
    for ( const item of this.data ) {
      const task = new Task( item );
      task.draw = taskInListView;
      this.taskList.addTask( task );
    }
  }

  drawList() {
    return this.taskList.draw();
  }

  drawTask( task_id ) {
    return singleTaskView.call( this.taskList.tasks[ task_id ] );
  }
}

module.exports = TaskController;
