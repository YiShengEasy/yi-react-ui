/**
 * Created by yisheng on 2018/7/5
 */
import React from 'react';
import Node from "./Node";
import PropTypes from "prop-types";

class Tree extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array,
    contentStyle:PropTypes.object,
    rowStyle:PropTypes.object,
    nodeStyle:PropTypes.object,
    expandImg:PropTypes.any,
    unExpandImg:PropTypes.any,
  };
  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    this.nodeType='root';
  }


  // 渲染节点
  renderChildTree = (data) => {
    const {nodeHeight,hoveNode,...res}=this.props;
    return data.map(item => {
      const nodeProps = {
        value: item.value,
        id:item.id,
        nodeType:this.nodeType,
        height:nodeHeight,
        hoveNode,
        record:item,
        ...res
      }
      this.nodeType = 'common';
      if (!item.children) {
        return (
          <Node {...nodeProps}   key={item.id} nodeType={'leaf'}/>
        )
      } else {
        return (
          <Node {...nodeProps}  key={item.id}>
            {this.renderChildTree(item.children)}
          </Node>
        )
      }
    })
  };


  render() {
    const {data} = this.props;
    return (
      <div style={{display: 'flex',overflowX:'auto',padding:20}}>
        {data ? this.renderChildTree(data) : ''}
      </div>
    )
  }
};

export default Tree;
