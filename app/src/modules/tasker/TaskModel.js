const prod = false;

class TaskModel {
  constructor() {
    this.task = null;
    this.task_list = null;
  }

  static get( id = null ) { // get task
    let url = '';
    if ( id ) {
      url = `${url}/${id}`;
    }
    if ( prod ) {
      $.ajax( {
        type: 'GET',
        url: `/api/${url}`
      } )
        .done( ( result ) => {
          console.log( result );
          return result;
        } )
        .fail( ( xhr, textStatus, errorThrown ) => {
          console.log( xhr, textStatus, errorThrown );
        } );
    }
  }

  static create( data ) { // send query to create task
    if ( prod ) {
      $.ajax( {
        type: 'POST',
        url: '/api/create_task',
        dataType: 'json',
        data
      } )
        .done( ( result ) => {
          console.log( 'Task created', result );
        } )
        .fail( ( xhr, textStatus, errorThrown ) => {
          console.log( xhr, textStatus, errorThrown );
        } );
    }
  }

  static update( task_id, data ) { // send query to update task
    if ( prod ) {
      $.ajax( {
        type: 'POST',
        url: '/api/update_task',
        dataType: 'json',
        data: {
          task_id,
          data
        }
      } )
        .done( ( result ) => {
          console.log( 'Successfully updated', result );
        } )
        .fail( ( xhr, textStatus, errorThrown ) => {
          console.log( xhr, textStatus, errorThrown );
        } );
    }
  }

  static remove( task_id ) { // send query to remove task
    if ( prod ) {
      $.ajax( {
        type: 'POST',
        url: '/api/remove_task',
        dataType: 'json',
        data: task_id
      } )
        .done( ( result ) => {
          console.log( 'Task removed', result );
        } )
        .fail( ( xhr, textStatus, errorThrown ) => {
          console.log( xhr, textStatus, errorThrown );
        } );
    }
  }
}

module.exports = TaskModel;
