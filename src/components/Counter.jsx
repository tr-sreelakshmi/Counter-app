import React, { useState } from 'react'
import { MDBBtn,  } from 'mdb-react-ui-kit';


function Counter() {
    //State creation
    const [counter , setCounter]= useState(0)
    //onclick function
    function incrementcounter() {
        //increment by 1
        setCounter(counter+1)
    }
    // decrement counter
    function decrementcounter() {
        if(counter!==0){
        setCounter(counter-1)
        }
    }
    //reset counter
    function resetcounter(){
        setCounter(0)
    }
  return (
    <div className='m-5 p-5 d-flex align-items-center justify-content-center'>
      <div className='container m-5 p-5 border border-2 border-dark shadow rounded w-50 bg-danger' >
        <h1 className='text-light text-center'>COUNTER APP</h1>
        <h1  className='text-center'>{counter}</h1>
      <div className='m-3 ms-5' >
        <MDBBtn className='m-3 'color='success' onClick={incrementcounter}> Increment</MDBBtn> {/*doesnt use () in functionname of onclick , if therse is(parameter) can use*/}
        <MDBBtn className='m-3 'color='warning' onClick={decrementcounter}> Decrement</MDBBtn> {/*doesnt use () in functionname of onclick , if therse is(parameter) can use*/}
        <MDBBtn className='m-3' color='info' onClick={resetcounter}> Reset</MDBBtn> {/*doesnt use () in functionname of onclick , if therse is(parameter) can use*/}

      </div>
      </div>
    </div>
  )
}

export default Counter
