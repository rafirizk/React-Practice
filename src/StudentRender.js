import React from 'react'

const studentRender = (props) => {
    const editText = props.isedit ? 'Save' : 'Edit'
    const save = props.isedit ? props.saveedit : props.edit
    
    return (
        <tr>
            <th scope="row">{props.id+1}</th>
            <td>{props.isedit ? <input type="text" defaultValue={props.name} ref={props.refname} /> : props.name}</td>
            <td>{props.isedit ? <input type="number" defaultValue={props.age} ref={props.refusia} /> : props.age}</td>
            <td><button className="btn btn-primary" onClick={save}>{editText}</button></td>
            <td>
                {props.isedit ? 
                <button className="btn btn-danger" onClick={props.edit}>Cancel</button>:
                <button className="btn btn-danger" onClick={props.delete}>Delete</button> }
                
            </td>
        </tr>
    )
}

export default studentRender