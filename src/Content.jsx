const Content = (props) =>{
    return (
      <>
        <h2>{props.h2Title}</h2>
        <div className='contentTxt' dangerouslySetInnerHTML={{__html:props.contentHtml}}></div>
      </>
    )
  };

export default Content;