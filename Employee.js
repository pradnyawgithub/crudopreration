import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
    const [empdata,empdatachange] = useState(null);
    const navigate=useNavigate();
    const loadEdit=(id)=>{
      navigate("employee/edit/"+id);
    }
    const Deletefunction=(id)=>{
      if(window.confirm("Do you want to delete?")){
        fetch("http://localhost:8000/dataemployee/"+id,{
            method:"DELETE"
        }).then((res)=>{
            alert("Deleted successfully.")
            window.location.reload();
        }).catch((err)=>{
            console.log(err.message)
        })
      }
    }

    useEffect(() => {
        fetch(" http://localhost:8000/dataemployee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
                   
            <div className="card">
                <div className="card-title">
                    <h2>Add Employee</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add new (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-white text black">
                            <tr>
                                <th>Id</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { empdata &&
                                empdata.map(item => (
                                    <tr key={item.Id}>
                                        <td>{item.id}</td>
                                        <td>{item.fname}</td>
                                        <td>{item.lname}</td>
                                        <td>{item.email}</td>
                                        <td> <a onClick={()=>{loadEdit(item.id)}} className="btn btn-primary">edit
                                        <i className="fas fa-user-edit ml-2"></i>
                                    </a></td>
                                        <td> <a onClick={()=>{Deletefunction(item.id)}} className="btn btn-primary">delete
                                        <i className="fas fa-user-times ml-2"></i>
                                    </a></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>                
        </div>
    );
}
export default Employee;