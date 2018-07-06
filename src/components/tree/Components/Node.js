/**
 * Created by yisheng on 2018/7/4
 */
import React from 'react';
import PropTypes from 'prop-types';
import plus from './img/plus.png'
import reduce from './img/reduce.png'
import './node.css'


class Node extends React.PureComponent {
  static propTypes = {
    hasChild: PropTypes.bool, //是否有子节点
    defaultExpand: PropTypes.bool,  //是否展开
    value: PropTypes.string,
    nodeType: PropTypes.string,
    expandChange: PropTypes.func,
    contentStyle:PropTypes.object,
    rowStyle:PropTypes.object,
    nodeStyle:PropTypes.object,
    expandImg:PropTypes.any,
    unExpandImg:PropTypes.any,
  };
  static defaultProps = {
    nodeType: 'common', // common,root,leaf
    defaultExpand: true,
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      isExpand: props.defaultExpand,
      isHove: false
    }
  }

  handleExpandChange() {
    this.setState({isExpand: !this.state.isExpand})
  }

  render() {
    const {value, children, nodeType, hoveNode, height, id, contentStyle, rowStyle,nodeStyle,
      expandImg,unExpandImg} = this.props;
    const {isHove, isExpand} = this.state;
    // 自定义编辑区域
    const editRender = isHove ? hoveNode(value, id) : ''
    const expandRender =
      nodeType !== 'leaf' ?
        <img className={`yi-expand-img`}
             alt={isExpand?'收缩':'展开'}
             width={30} src={isExpand ? (unExpandImg||reduce) : (expandImg||plus)} onClick={this.handleExpandChange.bind(this)}/>
        : ''
    return (
      <div className={`yi-tree-row`} style={rowStyle}>
        <div className={`yi-treeNode yi-treeNode-${nodeType}`}
             style={nodeStyle}
             onMouseMove={() => this.setState({isHove: true})}
             onMouseLeave={() => this.setState({isHove: false})}>
          <div className={'yi-nodeContent'} style={{height, lineHeight: `${height}px`, ...contentStyle}}>
            {value}
          </div>
          {
            expandRender
          }
          {
            editRender
          }
        </div>
        <div style={{display: 'flex'}}>
          {this.state.isExpand ? children : ''}
        </div>
      </div>
    )
  }
}

export default Node
