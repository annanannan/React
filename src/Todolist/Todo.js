import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todo extends Component {
    
    render() {
        return (
            <div>
                <h2>正在进行<span style={{marginLeft:675,color:'red'}}>{this.props.todo.length}</span></h2>
                <ul>
                    {
                        this.props.todo.map((item,idx)=><ol key={idx}>
                            <input type="checkbox" onClick={()=>{this.props.deltodo(idx)}}/>
                            {item}<button onClick={()=>{this.props.delitem(idx)}}>删除</button></ol>)
                    }
                </ul>
                <br/>
                <h2>已经完成<span style={{marginLeft:675,color:'red'}}>{this.props.todone.length}</span></h2>
                <ul>
                    {
                        this.props.todone.map((item,index)=><ol key={index}>
                            <input type="checkbox" defaultChecked onClick={()=>{this.props.deltodoes(index)}}/>
                            {item}<button onClick={()=>{this.props.delitems(index)}}>删除</button></ol>)
                    }
                </ul>
            </div>
        )
    }
}
Todo.propTypes = {

    todo: PropTypes.array,
    todone:PropTypes.array

}
