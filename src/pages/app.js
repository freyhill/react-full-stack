import React from 'react';
import Student from './student';
import Course from './course';
class App extends React.Component{
  constructor(props) {
    super(props);
  }
 
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <Student />
        <Course />
      </div>
    )
  }
}
export default App;
