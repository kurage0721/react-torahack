import { useState } from "react";
import {PublishButton} from './index';

const Article = (props) =>{
  const [isPublished, setIsPublished] = useState(false)
  const publishArticle = () => {
    setIsPublished(true)
  }
  console.log(isPublished)
  return (
    <PublishButton
      isPublished={isPublished}
      onClick={publishArticle}
    />
  )

};

export default Article;