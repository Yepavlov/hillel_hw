import Card from './components/Card.jsx';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="MyApp d-flex justify-content-center align-items-center vh-100 bg-dark text-light gap-3">
        <Card title="Only title (without text)" />
        <Card text="Only text (without title)" />
        <Card title="Some title" text="Some text" />
      </div>
    );
  }
}

export default App;
