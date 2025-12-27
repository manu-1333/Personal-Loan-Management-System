import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoanList from './components/LoanList';
import AddLoan from './components/AddLoan';
import LoanDetails from './components/LoanDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* In v5, we use Switch instead of Routes */}
      <Switch>
        <Route exact path="/" component={LoanList} />
        <Route path="/add-loan" component={AddLoan} />
        <Route path="/loan/:id" component={LoanDetails} />
      </Switch>
    </div>
  );
}

export default App;