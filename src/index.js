import React ,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button ,List} from 'antd';


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


class  TodoList extends Component {
    render(){
        return(
            <div>
            {/*<div>*/}
                {/*<Input placeholder={'todo list'} style={{width:300}}/>*/}
                {/*<Button type={"primary"}></Button>*/}
            {/*</div>*/}
                {/*<List*/}
                    {/*header={<div>Header</div>}*/}
                    {/*footer={<div>Footer</div>}*/}
                    {/*bordered*/}
                    {/*dataSource={data}*/}
                    {/*renderItem={item => (<List.Item>{item}</List.Item>)}*/}
                {/*/>*/}
            </div>
        )
    }
}




export default TodoList


