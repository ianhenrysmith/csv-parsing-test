import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import CSVUploader from './CSVUploader';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CSV Uploader</h1>
      <CSVUploader />
    </div>
  );
}

export default App;
