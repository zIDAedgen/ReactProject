import React from 'react';
import { Input } from 'antd';
import Navibar from './components/Navibar';
import InputLine from './components/inputLine';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue : '',
      created : []
    }
  }



  render () {
      return (
              <div>
                <div>      
                    <InputLine  />
                </div>


                  <Navibar />
              </div>
            );
          }
}

export default App;
