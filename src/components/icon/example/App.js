import React, { Component } from 'react';
import './App.less';
import Icon from '../Icon'

class App extends Component {
    render() {
        return (
            <div className="App" style={{ color: '#fff', lineHeight: '100px', height: 100, background: 'blue', fontSize: 18 }}>
                <Icon type={'search'} />
                <Icon type={'heart'} animation={'turnColor'} />
                <div className='action'>
                    <Icon type={'search'} animation={'from'} animationValue={'right'} />
                    <Icon type={'heart'} animation={'turnColor'} animationValue={'yellow'} />
                </div>
            </div>
        );
    }
}

export default App;
