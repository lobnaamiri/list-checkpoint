import React from 'react';
import Mybutton from './Mybutton'


export default class List extends React.Component{

    state={
        task:"",
        todo:[],
        style:{textDecoration:"none"},   
    }
   

render(){

    return ( 
        <>
            <div>
                <input placeholder="input your text here" value={this.state.task} onChange={(event)=>{this.setState({task: event.target.value})}} type="text" id="a" name="a"></input>
            </div>

    
            <Mybutton label="add" onClick={()=>{
                const prevstate =this.state.todo;
                const nexstate= [this.state.task];
                const list=prevstate.concat(nexstate);

                console.log(list);

                this.setState({style:{textDecoration:""},todo:list,task : ""})
                ;} 
            }/>
        
    
            <ul> { 
                this.state.todo.map((element,index)=>
                <div>
                    <li  style={this.state.style} onClick={()=> this.setState(
                        {style:{textDecoration:"line-through"}})}>{element}
                    </li>
                    <Mybutton label="delete" onClick={()=> {
                        const Newstate = this.state.todo;
                        Newstate.splice(index,1);
                        this.setState({todo : Newstate})
                            console.log(this.state.todo)
                    }}/>
                        
            
                
                </div> )   
                }

            </ul>
       
       
        
        </>  
    )
}
}