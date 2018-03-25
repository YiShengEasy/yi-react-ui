import React, { Component } from 'react';
import './App.less';
import Icon from '../../icon/Icon'
import Card from '../Card'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Card
                        onClick={() => { console.log('点击卡片') }}
                        title={'默认样式'}               
                        action={
                            <div onClick={(e) => { e.stopPropagation(); console.log('点击星标') }}>
                                <Icon type={'star-o'} animation={'turnColor'} animationValue={'yellow'}>
                                </Icon>
                            </div>}
                    >
                        没有背景图
                </Card>
                </div>
                <div>
                    <Card
                        onClick={() => { console.log('点击卡片') }}
                        title={'测试标题'}               
                        bodyStyle={{color:'red'}}
                        backImage={"https://mailimg.teambition.com/logos/cover-media.jpg"}
                        action={
                            <div onClick={(e) => { e.stopPropagation(); console.log('点击星标') }}>
                                <Icon type={'search'} animation={'from'} animationValue={'right'}>
                                </Icon>
                            </div>}
                    >
                        鼠标上移
                </Card>
                </div>
                <div>
                    <Card
                        onClick={() => { console.log('点击卡片') }}
                        title={'测试标题'}
                        style={{ color: 'yellow' }}
                        hoverable={false}
                        backImage={"https://tcs-ga.teambition.net/thumbnail/110z3251840899548ed5f8779ecc5d4afe64/w/600/h/300"}
                        action={
                            <div onClick={(e) => { e.stopPropagation(); console.log('点击星标') }}>
                                <Icon type={'star-o'} animation={'turnColor'} animationValue={'yellow'}>
                                </Icon>
                            </div>}
                    >
                        没有鼠标上移
                </Card>
                </div>
            </div>
        );
    }
}

export default App;
