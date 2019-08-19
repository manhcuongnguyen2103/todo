import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

function App() {

  return (

    <SplitterLayout percentage = {true} primaryMinSize = {20} secondaryInitialSize = {80}>
        <div>
          <div>
          React
          List YYY
          </div>
          <div>
          React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.
          </div>
          <div>
          List XXX
          </div>
          <div>
          If you have other helpful links to share, or find any of the links above no longer work, please let us know.
          </div>
        </div>
        <div>TODOs
          <div>
            todo list
          </div>
          <div>
            Double-click to edit a todo<br/>
            Created by petehunt<br/>
            Cover by McKun<br/>
            Part of <a href = "http://todomvc.com/">TodoMVC</a>
          </div>
        </div>
    </SplitterLayout>

  );
}

export default App;
