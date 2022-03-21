import React from 'react';

const title = "React"

// Function component
// For is a reserved word in JS, that's why label for becomes label htmlFor

const getTitle = (title) => {
  return title;
}

// JS must be inside curly braces
// const title = 'React' -> <h1>Hello {title}!</h1>

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
      <hr />
      <List />
    </div>
  );
};

const List = () => {
  return <ul>
    {list.map((article) => {
      return (
        <li key={article.objectID}>
          <a href={article.url}>
            {article.title}
          </a>
          <span> - {article.author}</span>
        </li>
      );
    })}
  </ul>;
}

export default App;
