import './App.css'
import Data from './companies.json'
import React, { useState } from 'react';
function Container(){

    const [compName, setCompName] = useState('');
    const [compAddress, setCompAddress] = useState('');
    function apiCall() {
        var found = false ;
         console.log('Api called')
        console.log(Data)
        // fetch("companies.json",{
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //       }
        // })
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //         console.log(result)
        //     //   this.setState({
        //     //     isLoaded: true,
        //     //     items: result.items
        //     //   });
        //     },
        //     // Note: it's important to handle errors here
        //     // instead of a catch() block so that we don't swallow
        //     // exceptions from actual bugs in components.
        //     (error) => {
        //         console.log(error)
        //     //   this.setState({
        //     //     isLoaded: true,
        //     //     error
        //     //   });
        //     }
        //   )

        for(var i=0;i<Data.length;i++){
            if(compName===Data[i].company_name){
                var addr=JSON.stringify(Data[i].location)
                addr=addr.replace(/,/g, '');
                addr=addr.replace(/{/g, '');
                addr=addr.replace(/}/g, '');
                addr=addr.replace(/"/g, '');
                addr=addr.replace(/\\/g, '');
                console.log(addr)
                setCompAddress(addr)
                found = true
            }
         
        }
        if (!found){
            setCompAddress("address not found");
        }
      }


    return(
        <div className="container">
            <div className="firstDiv">
                <div className="leftImage" >
                    <img src={require('./assets/left.png')}/>
                </div>
                <div className="headerText">
                Fly Faster and Build Better with Craft's Supply Chain Intelligence for Aerospace and Defense

                <div className="searchCompany">
                    <input placeholder="Search company" value={compName} onChange={(e)=>setCompName(e.target.value)} /> <div className="customButton" style={{color:'white'}} onClick={apiCall}>Search</div>
                </div>
                <div style={{color:'#000'}}>Address of Company: {compAddress}</div>
                
                </div>
                <div className="rightImage" >
                    <img src={require('./assets/right.png')}/>
                </div>
            </div>
            <div className="secondDiv">
                <h1> The most comprehensive supplier intelligence platform </h1>
                <div style={{fontSize:'18px'}}> Better supplier discovery, evaluation, and monitoring for stronger supply chain resilience </div>
                <div style={{marginTop:"50px"}}> <div className="customButton">Start a free account</div> </div>
            </div>
        </div>
    )
}

export default Container;