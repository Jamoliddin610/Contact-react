import React from 'react';

const List = (props) => {
    return (
        <li className="wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center">
            <div className="wrapper__about align-items-start justify-content-center d-flex flex-column">
                <h2 className="wrapper__name fw-bolder">{props.name} {props.surname}</h2>
                <div className="wrapper__about-inner d-flex align-items-center">
                    <span className="wrapper__tel me-3">+998 {props.phone}</span>
                    <p className="wrapper__wh text-primary fw-bolder text-lowercase p-0 m-0">{props.relative}</p>
                </div>
            </div>
            <a href={`tel:+998${props.phone}`} className="bg-success d-flex align-items-lg-center justify-content-center text-decoration-none wrapper__link">Call</a>
        </li>
    );
}

export default List;
