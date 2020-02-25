/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */


class TaskList {
  constructor() {
    this.tasks = {};
    this.mods = '';
  }

  addTask( task ) {
    this.tasks[ task.data.id ] = task;
  }

  removeTask( task_id ) {
    delete this.tasks[ task_id ];
  }

  draw() {
    this.view_list = document.createElement( 'div' );
    $( this.view_list ).addClass( 'taskList' );

    for ( const key in this.tasks ) {
      const task = this.tasks[ key ];
      $( this.view_list ).append( task.draw() );
    }

    return this.view_list;
  }
}

module.exports = TaskList;
