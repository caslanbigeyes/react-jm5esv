import React, { useRef, useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
function Form() {
  const [text, updateText] = useState('');
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text; // 把它写入 ref
  });

  const handleSubmit = useCallback(() => {
    const currentText = textRef.current; // 从 ref 读取它
    console.log(currentText);
    alert(currentText);
  }, [textRef]); // 不要像 [text] 那样重新创建 handleSubmit

  return (
    <>
      <input value={text} onChange={e => updateText(e.target.value)} />
      <ExpensiveTree onSubmit={handleSubmit} />
    </>
  );
}

function ExpensiveTree(props) {
  const onSubmit = e => {
    console.log(2222, e);
    props.onSubmit(2222);
  };
  return <div onClick={onSubmit}>按钮 e</div>;
}

ReactDOM.render(<Form />, document.getElementById('container'));
