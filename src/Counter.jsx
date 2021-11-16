import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

	const countUP = () => {
    //非同期処理のためコールバックにしないと、setTimeoutなどを使う際に正常に処理が完了されなくなり、エラーも出ない
		setCount(prevState => prevState +1)
	}
  
  const countDown = () => {
    //非同期処理のためコールバックにしないと、setTimeoutなどを使う際に正常に処理が完了されなくなり、エラーも出ない
    //コールバック prevState => prevState -1
    setCount(prevState => prevState -1)
  }

//----追加
  //ライフサイクル管理 初回のレンダリング(ページ読み込み時)とカウンターが更新された(再描画)際に実行される
  useEffect(()=>{
    console.log("Current cont is...", count)
  },[count])
//----ここまで
  return(
    <>
      <p>現在のカウント数:{count}</p>
      <button onClick={countUP}>up</button>
      <button onClick={countDown}>down</button>
    </>
  )

}

export default Counter;