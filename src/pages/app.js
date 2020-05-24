import React from 'react';
import UserInfo from './userInfo/index';
import Student from './student/index'
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <UserInfo/>
        <Student />
      </div>
    )
  }
}
export default App;
