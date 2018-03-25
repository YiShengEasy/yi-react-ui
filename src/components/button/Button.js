import React from 'react'
import classNames from 'classnames'
import './button.less'

const ButtonType = ["success", "warning", "error"]
class Button extends React.Component {
    render() {
        const {type, className,children} = this.props;
        const prefixCls='yi';
        const buttonType = type && ButtonType.find(item => type === item) ? type : ButtonType[0]
        //样式覆盖
        const classes = classNames(`${prefixCls}-button`, className, {
            [`${prefixCls}-button-${buttonType}`]: true
        });
        const kids = (children || children === 0)
        ? React.Children.map(children, child => child) : null;
        return (
            <div>
                <button className={classes}>
                   {kids}
                </button>
            </div>
        )
    }
}
export default Button