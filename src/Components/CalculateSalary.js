import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/calculateSalary';


class CalculateSalary extends React.Component{
    addSalary = () => {
        console.log("[CalculateSalary]");
        this.props.addSalary();
    }
    render(){
        console.log("[CalculateSalary render]", this.props);
        return (
            <div>
                <p>CalculateSalary</p>
                <p>{this.props.name}</p>
                <p>{this.props.salary}</p>
                <button onClick = {this.addSalary}>addSalary</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    console.log("[CalculateSalary mapDispatchToProps]", dispatch);
    return {
        addSalary: () =>dispatch(actions.addSalary())
    }
}

const mapStatetoProps = state => {
    console.log("[CalculateSalary mapStatetoProps]", state);
    return {
        salary: state.salary,
        name: state.name
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CalculateSalary);



// step 1 
// class CalculateSalary extends React.Component{
//     addSalary = () => {
//         console.log("[CalculateSalary]");
//         this.props.addSalary();
//     }
//     render(){
//         console.log("[CalculateSalary render]", this.props);
//         return (
//             <div>
//                 <p>CalculateSalary</p>
//                 <p>{this.props.salary}</p>
//                 <button onClick = {this.addSalary}>addSalary</button>
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = dispatch => {
//     console.log("[CalculateSalary mapDispatchToProps]", dispatch);
//     return {
//         addSalary: () =>dispatch(actions.addSalary())
//     }
// }

// const mapStatetoProps = state => {
//     console.log("[CalculateSalary mapStatetoProps]", state);
//     return {
//         salary: state
//     }
// }

// export default connect(mapStatetoProps, mapDispatchToProps)(CalculateSalary);


// step 3 redux data become object
// class CalculateSalary extends React.Component{

//     addSalary = () => {
//         console.log("[CalculateSalary]");
//         this.props.addSalary();
//     }
//     render(){
//         console.log("[CalculateSalary render]", this.props);
//         return (
//             <div>
//                 <p>CalculateSalary</p>
//                 <p>{this.props.name}</p>
//                 <p>{this.props.salary}</p>
//                 <button onClick = {this.addSalary}>addSalary</button>
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = dispatch => {
//     console.log("[CalculateSalary mapDispatchToProps]", dispatch);
//     return {
//         addSalary: () =>dispatch(actions.addSalary())
//     }
// }

// const mapStatetoProps = state => {
//     console.log("[CalculateSalary mapStatetoProps]", state);
//     return {
//         salary: state.salary,
//         name: state.name
//     }
// }