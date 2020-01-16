import React from 'react';
import EmployeeContainer from './Container/EmployeeContainer';
import CalculateSalary from './Components/CalculateSalary';
import TeamUI from './Components/TeamUI';

class App extends React.Component {
  render(){
    return (
      <div>
        {/* <EmployeeContainer /> */}
        <CalculateSalary />
        <TeamUI />
      </div>
    );
  }
}

export default App;
