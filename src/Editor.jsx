import React from 'react'

const Editor = (props) => {

    return (
        <div>
            <textarea name="" id="editor" cols="30" rows="10" onInput={props.handleInput} defaultValue={props.text}>
            </textarea>
        </div>
    )
}

export default Editor