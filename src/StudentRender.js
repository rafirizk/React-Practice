import React from 'react'

const studentRender = (props) => {
    const editText = props.isedit ? 'Save' : 'Edit'
    
    return (
        <tr>
            <th scope="row">{props.id+1}</th>
            <td>{props.isedit ? <input type="text" value={props.name} onChange={props.changename} /> : props.name}</td>
            <td>{props.isedit ? <input type="number" value={props.age} onChange={props.changeage} /> : props.age}</td>
            <td><button className="btn btn-primary" onClick={props.edit}>{editText}</button></td>
            <td><button className="btn btn-danger" onClick={props.delete}>Delete</button></td>
        </tr>
    )
}

export default studentRender