import React, { Component } from 'react';
import Adder from '../../components/Adder/Adder';
import '../../components/global.css'
import List from '../../components/Shower/list';
import Btn from '../../components/Shower/Btn';

class Builder extends Component {
    constructor(){
        super();
        this.state = {
            listObj:{
                name:undefined,
                phone:undefined,
                surname:undefined,
                relative:undefined,
            },
            listContact:[{
                name:'Aziz',
                phone: 999999999,
                surname:"Rakhimov",
                relative:'workmates'
            },
                {
                    name: 'Jamoliddin',
                    phone: 999998899,
                    surname: "Najmiddinov",
                    relative: 'friends'
                },
                {
                    name: 'Shamisiddin',
                    phone: 999999911,
                    surname: "Najmiddinov",
                    relative: 'relative'
                },
        ],
        newList:[{
                name: 'Aziz',
                phone: 999999999,
                surname: "Rakhimov",
                relative: 'workmates'
            },
        {
            name: 'Jamoliddin',
            phone: 999998899,
            surname: "Najmiddinov",
            relative: 'friends'
        },
        {
            name: 'Shamisiddin',
            phone: 999999911,
            surname: "Najmiddinov",
            relative: 'relative'
        },
        ]

        }
    }
    changeName=(e)=>{
        let obj = {
            name: e.target.value
        }
        this.setState({listObj:{...this.state.listObj,...obj}})
    }
    changeSurname = (e) => {
        let obj = {
            surname: e.target.value
        }
        this.setState({listObj:{...this.state.listObj,...obj}})
    }
    changeRelative = (e) => {
        let obj = {
            relative: e.target.value
        }
        this.setState({listObj:{...this.state.listObj,...obj}})
    }
    changePhone = (e) => {
        let obj = {
            phone: e.target.value
        }
        this.setState({listObj:{...this.state.listObj,...obj}})
    }
    formSubmit = (e)=>{
        e.preventDefault()
        this.setState({listContact:[...this.state.listContact,this.state.listObj]})
        this.setState({ newList: [...this.state.newList, this.state.listObj] })

    }
    btnSort = (e) => {
        if (e.target.id === 'all') {
            this.setState({ listContact: [...this.state.newList] })
        }

        if (e.target.id === 'relative') {
            let arr = []
            this.state.newList.map((elem, i) => {
                if (elem.relative === 'relative') {
                    newArr.push(elem)
                }
            })
            this.setState({ listContact: [...newArr] })
        }

        if (e.target.id=== 'friends') {
            let arr = []
            this.state.newList.map((elem, i) => {
                if (elem.relative === 'friends') {
                    newArr.push(elem)
                }
            })
            this.setState({ listContact: [...newArr] })
        }

        if (e.target.id === 'workmates') {
            let arr = []
            this.state.newList.map((elem, i) => {
                if (elem.relative === 'workmates') {
                    newArr.push(elem)
                }
            })
            this.setState({ listContact: [...newArr] })
        }
    }

    render(){
        return (
        <div className='box'>
                <Adder formSubmit={this.formSubmit}
                 changeName={this.changeName}
                  changeSurname={this.changeSurname}
                    changeRelative={this.changeRelative}
                    changePhone={this.changePhone}/>
                <div className="wrapper border-primary">
                    <Btn btnSort={this.btnSort}/>
                    <ul className="wrapperList">
            {this.state.listContact.map((el,i)=>(
                <List key={i} name={el.name} surname={el.surname} phone={el.phone} relative={el.relative}/>
            ))}

                    </ul>
                </div>

        </div>
    );
}
}

export default Builder;
