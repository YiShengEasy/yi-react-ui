### npm 安装

```
npm i  yi-react-ui --save
```
### 组件导入

EditNode 自定义组件
```
import {Tree } from 'yi-react-ui'

     <Tree data={data}
           nodeHeight={60}
           unExpandImg={img2}
           expandImg={img}
           hoveNode={(value,id,record) =>(<EditNode value={value} id={id}record={record}/>)}/>

```


### 参数


名词 | 数据类型 | 说明
---|---|---
nodeHeight| num|节点高度
data|array|树形数据源
expandImg|img|展开图片
unExpandImg|img|收拢图片
hoveNode|func|(value,id,record) =>(<EditNodevalue={value} id={id}record={record}/>) 鼠标上移回调组件，value 值,id ,record item





