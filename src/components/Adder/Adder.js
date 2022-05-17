import React, { Component } from 'react';
import '../global.css'
let newArr = ['Relative', 'Friends','Workmates']

function Adder(props) {
        return (
            <div className='wrapper border-primary' >
                <form className="form" onSubmit={props.formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInput1" className="form-label">name:</label>
                        <input onChange={props.changeName} type="text" className="form-control" id="exampleInput1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInput2" className="form-label">surname:</label>
                        <input onChange={props.changeSurname} type="text" className="form-control" id="exampleInput2" required />
                        </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInput3" className="form-label">Who is for you:</label>
                        <input onChange={props.changeRelative} type="text" className="form-control" id="exampleInput3" list="date" required />
                        <datalist id="date">
                            {newArr.map((elem,index)=>{
                                return(
                                    <option  key={index+1}>{elem}</option>
                                )
                            })}
                        </datalist>
                        </div>
                   <div>
                    <div className="mb-4">
                        <label htmlFor="exampleInput4" className="form-label">Phone:</label>
                            <input onChange={props.changePhone} type="number" className="form-control" id="exampleInput4" required />
                    </div>
                        <button  type="submit" className="btn btn-primary btn-sb">add</button>
                    </div>
    
                </form>
            </div>
        );
}

export default Adder;
