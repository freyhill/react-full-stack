import React from 'react';
import UserInfo from './userInfo/index';
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
      </div>
    )
  }
}
export default App;
