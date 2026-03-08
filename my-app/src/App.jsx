import Definitions from './components/Definitions.jsx';
import React from 'react';

const App = () => {
  const definitionsData = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];

  return (
    <div className="MyApp d-flex justify-content-center align-items-center vh-100 bg-dark text-light gap-3">
      <Definitions data={definitionsData} />
    </div>
  );
};

export default App;
