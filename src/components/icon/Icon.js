import React from 'react'
import classNames from 'classnames'
import './icon.less'

class Icon extends React.Component {
    render() {
        const {type,className,animation,animationValue}=this.props;
        const classString=classNames(
            {
                yiicon:true,
                [`yiicon-${type}`]:true,
                [`yiicon-${animation}`]:animation,
                [`yiicon-${animation}-${animationValue}`]:animation&&animationValue,
            },className)
        return (
            <i className={classString}></i>
        )
    }
}
export default Icon