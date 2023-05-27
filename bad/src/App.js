import logo from './bank.png';
import './App.css';
const express = require('express');
const path = require ('path');

const app = express();
 app.get('/api', (req, res) =>{
    res.json('HTTP GET request recieved');
 })

app.use('/', express.static(path.join(_dirname),'/react-app/build')));

app.use('/website', express.static(path.join(_dirname, 'public')));

app.use ((req. res) => {
  res.status(404)
  res.send('<h1>Resource Not Found: 404 Error</h1>')
})

app.listen(3000,  () =>{
  console.log("App listening on port 3000. YE-HAW")
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 

export default App;
