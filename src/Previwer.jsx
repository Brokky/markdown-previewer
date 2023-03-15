import React from 'react'
import { marked } from 'marked'

const Previwer = (props) => {

  const text = marked.parse(props.text);

  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: text }}>
    </div>
  )
}

export default Previwer