import logo from './logo.svg';
import './ComponentUseRef.css';
import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react';
// import { Component } from 'react';
import Proptypes from 'prop-types';

const Post = ({ post, onClick }) => {
  console.log('Render Post');

  return (
    <div>
      <h1 onClick={(event) => onClick(event.target.innerHTML)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: Proptypes.shape({
    id: Proptypes.number,
    title: Proptypes.string,
    body: Proptypes.string,
  }),
  onClick: Proptypes.func,
};

const Button = ({ incrementButton }) => {
  console.log('Render button');

  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.displayName = 'Button';

Button.propTypes = {
  incrementButton: Proptypes.func,
};

// const handleClicked = () => {
//   console.log('h1 clicado');
// };

function ComponentUseRef() {
  const [posts, setPosts] = useState([]);
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  const handleChangeRotation = () => {
    setReverse(!reverse);
  };

  const handleIncrementCounter = useCallback((number) => {
    setCounter((counter) => counter + number);
  }, []);

  useEffect(() => {
    console.log(`counter atualizou para: ${counter} [componentDidUpdate]`);
  }, [counter]);

  // useEffect(() => console.log('componentDidUpdate'));

  // useEffect(() => {
  //   console.log('componentDidMount');
  //   /*trash in component*/
  //   document.querySelector('h1')?.addEventListener('click', handleClicked);

  //   //component will unmount
  //   return () => {
  //     document.querySelector('h1')?.removeEventListener('click', handleClicked);
  //   };
  // }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const memoButton = useMemo(
    () => <Button incrementButton={handleIncrementCounter} />,
    [handleIncrementCounter],
  );

  const handlePostToInput = (text) => {
    console.log('post to input', text);
    setInput(text);
  };

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, [input]);

  console.log('Render ComponentUseRef');
  return (
    <div className="ComponentUseRef">
      <header className="ComponentUseRef-header">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img
          src={logo}
          className={`ComponentUseRef-logo ${reverse ? 'reverse' : ''}`}
          alt="logo"
        />

        {useMemo(
          () =>
            posts &&
            posts.map((post) => (
              <Post onClick={handlePostToInput} key={post.id} post={post} />
            )),
          [posts],
        )}

        {posts.length <= 0 && <p>Ainda não existem posts</p>}
        <h1>Contador: {counter}</h1>
        {memoButton}
        <p onClick={handleChangeRotation}>
          {reverse
            ? 'Rodando no sentido Horário'
            : 'Rodando no sentido anti-horário'}
        </p>
        <a
          className="ComponentUseRef-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// class ComponentUseRef extends Component {
//   constructor(props) {
//     super(props);

//     this.handleChangeRotation = this.handleChangeRotation.bind(this);

//     this.state = {
//       reverse: false,
//     };
//   }

//   handleChangeRotation() {
//     this.setState({ reverse: !this.state.reverse });
//   }

//   render() {
//     const { reverse } = this.state;

//     return (
//       <div className="ComponentUseRef">
//         <header className="ComponentUseRef-header">
//           <img
//             src={logo}
//             className={`ComponentUseRef-logo ${reverse ? 'reverse' : ''}`}
//             alt="logo"
//           />
//           <p onClick={this.handleChangeRotation}>
//             {reverse
//               ? 'Rodando no sentido Horário'
//               : 'Rodando no sentido anti-horário'}
//           </p>
//           <a
//             className="ComponentUseRef-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default ComponentUseRef;
