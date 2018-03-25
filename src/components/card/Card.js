import React from 'react';
import './card.less';
import classNames from 'classnames'

class Card extends React.Component {
    render() {
        //style 覆盖重写属性，添加了子div  确保替换父类继承样式
        const {prefixCls = 'yi-card', hoverable=true,className,style, bodyStyle, action, title, backImage, children,...rest} = this.props;
        const header = (
            <div className={`${prefixCls}-header`}>
                <div className={`${prefixCls}-header-title`}>
                    {title}
                </div>
                <div className={`${prefixCls}-header-action`}>
                    {action}
                </div>
            </div>
        )
        const body = (
            <div className={`${prefixCls}-body`} style={bodyStyle}>
                {children}
            </div>
        );
        const footer=(
            <div></div>
        )
        //className 拼接,通过传入的 hoverable，来判断是否需要hover效果
        const classString = classNames(prefixCls, className,{
            [`${prefixCls}-hoverable`]: hoverable,
          });
        //背景图，避免覆盖渐变阴影（用before  字体会被阴影覆盖）
        let styleString={};
        if(backImage)
        {
            styleString['backgroundImage']=`url(${backImage})`;
            styleString['backgroundSize']=`cover`;

        }
        return (
            //rest 事件能正常传递
            <div {...rest} className={classString} style={styleString}>
                <div className={`${prefixCls}-liner`} style={style}>
                    {header}
                    {body}
                    {footer}
                </div>
            </div>
        )
    }
}

export default Card;
