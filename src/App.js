import {Article,Title,Content} from './index';


function App() {
  //おそらくNextなどを利用しないと HTMLをpropsで渡すことはできない
  const blogTxt = "本文<b>本文</b>";
  return (
    <>
      <Title
        h2title={'Reactの学習中です。'}
      />
      <Article />
      <Content
        contentHtml={blogTxt}
      />

    </>
  );
}

export default App;
