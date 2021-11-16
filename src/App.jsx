import { useEffect, useState } from 'react';
import {Article,Content,Textinput,Counter,ToggleButton} from './index';



function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('deatiger')
  const ids =['deatiger', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }
  // axios{}
  //おそらくNextなどを利用しないと HTMLをpropsで渡すことはできない
  // const blogTxt = '<span style="color:red">本文</span>';

  useEffect( () => {
    fetch(`https://api.github.com/users/${id}`) //"`"バッククオート内で　${}で変数が展開できる
    .then(res => res.json())
    .then(data => {
      console.log("取得",data)
      setName(data.name)
    })
    .catch(error =>{
      console.error(error)
    })
  },[id] )


  return (
    <>
      <p>{id}の、GitHub上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>



      {/* <p>{name}</p> */}
      {/* <Textinput /> */}
      {/* <Counter /> */}
      {/* <br/>
      <ToggleButton /> */}
      {/* <Article /> */}
      {/* <Content */}
        {/* h2Title ={'Reactの学習中です。。。'}
        contentHtml={blogTxt}
      /> */}

    </>
  );
}

export default App;
