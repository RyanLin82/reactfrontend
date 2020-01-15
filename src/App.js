import React from 'react';
import EmployeeContainer from './Container/EmployeeContainer';
import CalculateSalary from './Components/CalculateSalary';

class App extends React.Component {
  render(){
    return (
      <div>
        {/* <EmployeeContainer /> */}
        <CalculateSalary />
      </div>
    );
  }
}

export default App;
