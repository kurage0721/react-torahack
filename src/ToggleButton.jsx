import { useEffect, useState } from "react";

const ToggleButton = () =>{
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState) //prevStateで受け取った値を!で反転させる
  }


//-追加--
useEffect(()=>{
  console.log('Current state is', open)

  if (open) {
    console.log('Subscribe database...')
  }

  return () => {
    console.log('Unsubscribe database!')
  }

})
//---ここまで

//三項演算子でOPENとCLOSEを切り替える、三項演算子はReactではよく使う模様。
  return(
    <button onClick={toggle}>
      
      {open ? 'OPEN' : 'CLOSE'}
    </button>
  )
}

export default ToggleButton;