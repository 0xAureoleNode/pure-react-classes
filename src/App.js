import React from 'react';

function App() {
  return <Child onAction={handleAction} />;
}

function handleAction() {
  console.log('click');
}

function Child({ onAction }) {
  return <button onClick={onAction}> Click Me!</button>;
}

export default App;
