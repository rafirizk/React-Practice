import React, { createRef } from 'react';
import './App.css';
import "./bootstrap/dist/css/bootstrap.css"
import StudentRender from './StudentRender'

class App extends React.Component {
  state = {
    studentData: [
      {name: 'Budi', usia: 8, isEdit: false},
      {name: 'Robin', usia: 6, isEdit: false},
      {name: 'Dino', usia: 7, isEdit: false}
    ],
  }
  nameref = createRef()
  usiaref = createRef()
  changenameref = createRef()
  changeusiaref = createRef()

  deleteStudentData = (id) => {
    const student = [...this.state.studentData]
    student.splice(id, 1)
    this.setState({studentData:student})
  }

  editStudentData = (id) => {
    let student = [...this.state.studentData]
    let isedit = student[id].isEdit
    student[id] = {...student[id], isEdit: !isedit}
    this.setState({
      studentData: student,
    })
  }

  changeName = (event, id) => {
    let student = {...this.state.studentData[id]}
    student.name = event.target.value
    let studentdata = [...this.state.studentData]
    studentdata[id] = student
    this.setState({studentData: studentdata})
  }

  changeAge = (event, id) => {
    let student = {...this.state.studentData[id]}
    student.usia = event.target.value
    let studentdata = [...this.state.studentData]
    studentdata[id] = student
    this.setState({studentData: studentdata})
  }
  
  renderStudentData = () => {
    return this.state.studentData.map((val, index) =>{
      return (
        <StudentRender 
        key={index}
        id={index}
        name={val.name}
        age={val.usia}
        delete={() => this.deleteStudentData(index)}
        edit={() => this.editStudentData(index)} 
        isedit={val.isEdit} 
        changename={(event) => this.changeName(event, index)}
        changeage={(event) => this.changeAge(event, index)}
         />
      )
    })
  }
  
  addStundentData = (event) => {
    event.preventDefault()
    let name = this.nameref.current.value
    let usia = this.usiaref.current.value
    let studentData = this.state.studentData
    studentData.push({name,usia})
    this.setState({studentData})
    this.nameref.current.value = ''
    this.usiaref.current.value = ''
  }
  
  render() {
    return (
      <div className='d-flex justify-content-center flex-column align-items-center'>
        <h1>Data Murid SD 01 Pagi</h1>
        <div>
          <input className="form-control input" type="text" placeholder="Masukkan Nama" ref={this.nameref} />  
        </div>
        <div>
          <input className="form-control input" type="number" placeholder="Masukkan Usia" ref={this.usiaref} />  
        </div>
        <button className="btn btn-primary" onClick={this.addStundentData}>Submit</button>  
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Nama</th>
              <th scope="col">Usia</th>
              <th scope="col" colSpan='2' className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderStudentData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
