import React, {useState} from 'react'

export default function Textarea(props) {
    const [text, settext]=useState(""); 
   
    
   
    const handelUpcase =() =>{
      let upperText = text.toUpperCase()
      settext(upperText)
   
  }
    const handelLowercase =() =>{
      let lowerCase = text.toLowerCase()
      settext(lowerCase)
   
  }
    const handelonChange =(event) =>{
        console.log("onchane")
        settext(event.target.value)
      }
      const clearScreen =()=>{
        let newText = '';
        settext(newText)
      }
      
      return (
    <div>
        <div>
            <h1 className="Sigli">{props.tital}</h1>
      <textarea className='mx-96 my-4 bg-black/5 ' id="textfield" value={text} onChange={handelonChange} name="Textarea" rows="10" placeholder='Enter text here' cols="100">
      </textarea>
        </div>
        <div className='mx-96 bg-slate-50/60 border-4 border-slate-100/50'>
          <div className='mx-52 justify-items-center'>
      <button className='px-2 rounded-xl bg-blue-600/40 border-2 border-blue-400/20 ' onClick={handelUpcase}> Uppercase</button>
      <button className='px-2 rounded-xl bg-blue-600/40 border-2 border-blue-400/20 ' onClick={clearScreen}>Clear</button>
      <button className='px-2 rounded-xl bg-blue-600/40 border-2 border-blue-400/20 ' onClick={handelLowercase}> LowerCase</button>
      <p className='mx-[3rem]'>characters: {text.length}</p>
      <p className='mx-[3rem]'>Words: {text.split(" ").length}</p>
      {/* <p className='mx-[3rem]'>cap{}</p> */}
      <h3 className='mx-[3rem]'>Preview </h3>
      <span className='mx-[3rem]'>first latter is {text.substring(0,1).toUpperCase().split(" ")}</span>
      <br />
      <span>{text}</span>
          </div>
        </div>
    </div>
  )
}
