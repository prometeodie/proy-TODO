import './styles.css';

import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

//>>>>>>otro tipo de importación, no tan eficiente como la de arriba.<<<<<<<
// import * as modulo from './classes/todo.class.js';
// const tarea = new modulo.Todo('re loco');

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );







