// Importa los módulos necesarios
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'; // Importa tu componente de inicio de sesión
import MedicationTable from './MedicationTable'; // Importa tu componente de MedicationTable

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/medicationtable" component={MedicationTable} />
      </Switch>
    </Router>
  );
};

export default App;
