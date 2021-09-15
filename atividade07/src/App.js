import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Loggin from './components/Loggin'
import {Switch, Route} from 'react-router-dom'
import { useState } from 'react';
function App() {
  const [data, setData] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/'>
              <Form data={data}setData={setData}/>
          </Route>
          <Route exact path='/logado/'>
              <Card data={data}/>
          </Route>
          <Route exact path='/logar'> 
              <Loggin data={data}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
