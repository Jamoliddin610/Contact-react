import React from 'react';
import '../global.css'
import List from './list';
let arr = ['all', 'relative', 'friends','workmates']
const Shower = (props) => {
    return (
                <div className="wrapper__btn-inner" id="btn-group">
                    {arr.map((item, i) => {
                        return (
                            <button onClick={props.btnSort} key={i} id={item} className="btn btn-primary">{item}</button>
                        )
                    })}
                </div>
               
    );
}

export default Shower;
