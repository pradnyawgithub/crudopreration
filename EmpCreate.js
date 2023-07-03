import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 const EmpCreate = () => {
    const[id,idchange]=useState("");
    const[fname,fnamechange]=useState("");
    const[lname,lnamechange]=useState("");
    const[email,emailchange]=useState("");
    const[edit,editchange]=useState("");
    const[active,activechange]=useState("true");
    const[validation,valchange]=useState("false");

    const navigate=useNavigate();
   

    const handlesubmit=(e)=>{
     e.preventDefault();
     const empdata={fname,lname,email,edit};

    fetch(" http://localhost:8000/dataemployee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
    }).then((res)=>{
        alert("Saved successfully.")
        navigate('/');
    }).catch((err)=>{
        console.log(err.message)
    })
    }
    

    return (
        <div>
            <div className="row">
                <div className="offset-1g-3 col-1g-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{"text-align":"left"}}>
                            <div className="card-title">
                                <h2>Create Employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-1g-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-1g-12">
                                        <div className="form-group">
                                            <label>Fname</label>
                                            <input required value={fname}onMouseDown={e=>valchange(true)}  onChange={e=>fnamechange(e.target.value)} className="form-control"></input>
                                            {fname.length==0 && validation && <span className="text-danger">Enter the first name</span>}
                                        </div>
                                    </div>
                                    <div className="col-1g-12">
                                        <div className="form-group">
                                            <label>Lname</label>
                                            <input required value={lname} onMouseDown={e=>valchange(true)} onChange={e=>lnamechange(e.target.value)} className="form-control"></input>
                                            {lname.length==0 && validation && <span className="text-danger">Enter the last name</span>}
                                        </div>
                                    </div>
                                    <div className="col-1g-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required value={email} onMouseDown={e=>valchange(true)} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                            {email.length==0 && validation && <span className="text-danger">Enter email id</span>}
                                        </div>
                                    </div>
                                    <div className="col-1g-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-1g-12">
                                        <div className="form-check">
                                            <input checked={edit} onChange={e=>editchange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">edit</label>
                                        </div>
                                    </div>
                                    <div className="col-1g-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Submit</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default EmpCreate;

// json-server --watch db.json --port 8000 


