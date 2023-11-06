import React from 'react';
import './App.css';
import LoginForm from './componentes/logint';
// import AppRouter from './componentes/routers/Approuter';
import Login from './componentes/login';
import MedicationTable from './componentes/tablamed';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Login/>
      <MedicationTable/>
    </div>
  );
}

export default App;
