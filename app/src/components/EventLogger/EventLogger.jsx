import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';

const EventLogger = () => {
  const [logs, setLogs] = useState([]);

  const handleAdd = (operation) => {
    setLogs((prev) => {
      const lastEntry = prev[0];
      const lastValue = lastEntry ? lastEntry.val : 0;
      const newValue = operation === 'plus' ? lastValue + 1 : lastValue - 1;
      return [{ id: uuidv4(), val: newValue }, ...prev];
    });
  };

  const handleRemove = (id) => {
    setLogs((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <div className="mb-3">
        <ButtonGroup className="font-monospace">
          <Button variant="outline-success" onClick={() => handleAdd('plus')}>
            +
          </Button>
          <Button variant="outline-danger" onClick={() => handleAdd('minus')}>
            -
          </Button>
        </ButtonGroup>
      </div>

      {logs.length > 0 && (
        <ListGroup className="list-group">
          {logs.map((log) => (
            <Button
              key={log.id}
              type="button"
              onClick={() => handleRemove(log.id)}
              className="list-group-item list-group-item-action"
            >
              {log.val}
            </Button>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default EventLogger;
