import React from 'react'

const person={
  Name:"Jalal",
  Prof:"Programmer",
  Address:"mirpur",
}
function Clipboard() {
    const CopyText=()=>{
        alert('Copy Text');
    }
    const CutText=()=>{
        alert('Copy Text');
    }
    const PastText=()=>{
        alert('past Text');
    }
    //style container
    const pColor={
      backgroundColor:"red",
      letterSpacing:"1px",
    }

  return (
    <>
    <p onCopy={CopyText} style={{backgroundColor:'blue'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa quo nam sint ab odio nulla harum sit, quia magnam. Esse nulla doloribus maiores beatae repellendus soluta quo laudantium eos.</p>
    <p onCut={CutText} style={pColor}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quam a consequatur quas modi ducimus quidem nemo porro et laborum consectetur nihil autem, ad fuga inventore laboriosam, iusto quasi illo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur saepe magnam facilis commodi dolores, repellendus sapiente et dolor corporis laboriosam expedita, vero amet molestias iusto placeat. Ducimus hic asperiores eaque?</p><br />
    <input onPaste={PastText} type="text" />
     <h1>{`My name is ${person.Name}.I am a ${person.Prof}& I live in ${person.Address}`}</h1>
   

    </>
  )
}

export default Clipboard