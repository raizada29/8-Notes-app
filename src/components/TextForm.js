import React,{useState} from 'react'
export default function TextForm(props) {
//   let dark = {color : 'white', backgroundColor : 'black'}
//   let light = {color :'black', backgroundColor:'white'}
//   const [myStyle, setMyStyle] = useState({color:'black', backgroundColor:'white'});
//   const [btnText, setBtnText] = useState('Enable Dark Mode')
//   const toggleBtn =()=>{
//   if(myStyle.color === 'black')
//   {
//     setMyStyle(dark)
//     setBtnText('Enable Light Mode')
//   }
//   else
//   {
//     setMyStyle(light)
//     setBtnText('Enable Dark Mode')
//   }
// }
  const handleUpClick = ()=> 
  {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase");
  }
  const handleLowClick = ()=> 
  {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowerCase');
  }
  const handleOnChange = (event) =>
  {
     setText(event.target.value);
  }
  const speak = () =>
  {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="mainContainer"> 
    <div className="container">
    <div className="form-group" >
    <h1>
        {props.heading}
    </h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" value ={text}
    style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}}
     onChange={handleOnChange}></textarea>
    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upper caSe</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to lower caSe</button>
    <button className="btn btn-primary my-3" onClick={speak} type="button" >Speak</button>
    {/* <button className="btn btn-primary my-3 mx-3" onClick={toggleBtn} type="button">{btnText}</button> */}
  </div>
  </div>
  <div className="container">
  <h1>
    You text summary
  </h1>
  <p>{text.split(" ").length-1} words ,{text.length} characters</p>
</div>
</div>
      </>
  )
}
