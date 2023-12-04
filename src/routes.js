import {
  addNoteHandler, getNotesHandler, getNotesByIdHandler, putNoteHandler, deleteNoteByIdHandler,
} from './handler.js';

const routes = [
  {
    path: '/notes',
    method: 'POST',
    handler: addNoteHandler,
  },
  {
    path: '/notes',
    method: 'GET',
    handler: getNotesHandler,
  },
  {
    path: '/notes/{id}',
    method: 'GET',
    handler: getNotesByIdHandler,
  },
  {
    path: '/notes/{id}',
    method: 'PUT',
    handler: putNoteHandler,
  },
  {
    path: '/notes/{id}',
    method: 'DELETE',
    handler: deleteNoteByIdHandler,
  },
];

export default routes;
