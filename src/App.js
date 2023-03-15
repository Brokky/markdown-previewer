import './App.css';
import Editor from './Editor';
import Previwer from './Previwer';
import { useState } from 'react';

function App() {

  const [text, setText] = useState(`
  # Heading 1

  ## Subheading

  Here's a [link](https://www.example.com/).

  You can use inline code by wrapping text in backticks, like this: \`console.log('Hello, world!');\`.

  To create a code block, indent the text with four spaces:

      function factorial(n) {
          if (n === 0) {
              return 1;
          } else {
              return n * factorial(n - 1);
          }
      }

  You can create a list item by starting the line with an asterisk:

  * Item 1
  * Item 2
  * Item 3

  You can create a blockquote by starting the line with a greater-than symbol:

  > This is a blockquote.

  Here's an image:

  ![React logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png)

  And here's some **bolded text**.
`);

  const handleInput = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <Editor handleInput={handleInput} text={text}/>
      <Previwer text={text} />
    </div>
  );
}

export default App;
