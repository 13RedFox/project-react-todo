import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// # src
// #   /components
// #              /App
// #                  /Folders
// *                   Folders.tsx
// *                   Folders.module.scss
// *                   index.ts
// #                   /components
// #                              /FolderList
// *                               FolderList.tsx
// *                               FolderList.module.scss
// *                               index.ts
// #                              /FolderItem
// *                               FolderItem.tsx
// *                               FolderItem.module.scss
// *                               index.ts
// #                              /FolderAddItem
// *                               FolderAddItem.tsx
// *                               FolderAddItem.module.scss
// *                               index.ts
// #                  /Todos
// *                   Todos.tsx
// *                   Todos.module.scss
// *                   index.ts
// #                   /components
// #                              /TodosList
// *                               TodosList.tx
// *                               TodosList.module.scss
// *                               index.ts
// #                              /TodosItem
// *                               TodosItem.tx
// *                               TodosItem.module.scss
// *                               index.ts
// #                              /TodosAddItem
// *                               TodosAddItem.tx
// *                               TodosAddItem.module.scss
// *                               index.ts
