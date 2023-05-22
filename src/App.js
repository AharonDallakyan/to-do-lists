// import { useState } from 'react';
// import AddButton from './AddButton';
// import './App.css';
// import Input from './input';
// import DeleteButton from './DeleteButton';
// import { Article } from './Article';
// import Edit from './EditText';
// import DatePicker from './DatePicker';

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [articles, setArticles] = useState([]);
//   const [filter, setFilter] = useState('all');
//   const [dueDate, setDueDate] = useState(null);
  
//   const handleAddData = () => {
//     if (inputValue === '') {
//       return false;
//     }
//     setArticles((prevState) => {
//       return [
//         {
//           isCompleted: true,
//           id: Math.floor(Math.random() * 100),
//           title: inputValue,
//           dueDate: dueDate
//         },
//         ...prevState,
//       ];
//     });
//     setInputValue('');
//     setDueDate(null)
//   };
 

//   const handleDeleteData = (id) => {
//     const removeItem = articles.filter((todo) => {
//       return todo.id !== id;
//     });
//     setArticles(removeItem);
//   };

//   function editItem(id) {
//     const editTask = articles.find((i) => i.id === id);
//     setInputValue(editTask.title);
//     const updatedArticles = articles.filter((article) => article.id !== id);
//     setArticles(updatedArticles);
//     return editTask.title;
//   }

//   function toggleComplete(id) {
//     setArticles((prevArticles) =>
//       prevArticles.map((article) => {
//         if (article.id === id) {
//           return { ...article, completed: !article.completed };
//         }
//         return article;
//       })
//     );
//   }

//   function handleFilterChange(value) {
//     setFilter(value);
//   }

//   let filteredArticles = articles;

//   if (filter === 'completed') {
//     filteredArticles = articles.filter((article) => article.completed);
//   } else if (filter === 'incomplete') {
//     filteredArticles = articles.filter((article) => !article.completed);
//   }
//   console.log(articles);
//   console.log(dueDate)

//   return (
//     <div className='container'>
//       <div className='block'>
//         <div className='inputContainer'>
//           <Input onChange={setInputValue} value={inputValue} />
//           <AddButton onClick={handleAddData} />
//           <DatePicker className='date' selected={dueDate} onChange={date => setDueDate(date)} />
//         </div>
//         <ul>
//           {filteredArticles.map((article) => (
//             <li
//               key={article.id}
//               style={{ textDecoration: article.completed ? 'line-through' : 'none' }}
//             >
//               <div className='articleContainer'>
//                 <div className='artic'>
//                   <Article item={article} />
//                 </div>
//                 <div className='buttonContainer'>
//                   <Edit onClick={() => editItem(article.id)} />
//                   <DeleteButton
//                     onClick={() => {
//                       handleDeleteData(article.id);
//                     }}
//                   />
//                 </div>
//               </div>
//               <div>Due Date: {article.dueDate ? article.dueDate.toLocaleDateString() : 'No due date'}</div>
//               <button onClick={() => toggleComplete(article.id)}>
//                 {article.completed ? 'Incomplete' : 'Complete'}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className='buttonCompl'>
//           <button onClick={() => handleFilterChange('all')}>All</button>
//           <button onClick={() => handleFilterChange('completed')}>Completed</button>
//           <button onClick={() => handleFilterChange('incomplete')}>Incomplete</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import AddButton from './AddButton';
import './App.css';
import Input from './input';
import DeleteButton from './DeleteButton';
import { Article } from './Article';
import Edit from './EditText';
import DatePicker from './DatePicker';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('all');
  const [dueDate, setDueDate] = useState(null);
  
  const handleAddData = () => {
    if (inputValue === '') {
      return false;
    }
    setArticles((prevState) => {
      return [
        {
          isCompleted: true,
          id: Math.floor(Math.random() * 100),
          title: inputValue,
          dueDate: dueDate
        },
        ...prevState,
      ];
    });
    setInputValue('');
    setDueDate(null)
  };
 

  const handleDeleteData = (id) => {
    const removeItem = articles.filter((todo) => {
      return todo.id !== id;
    });
    setArticles(removeItem);
  };

  function editItem(id) {
    const editTask = articles.find((i) => i.id === id);
    setInputValue(editTask.title);
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
    return editTask.title;
  }

  function toggleComplete(id) {
    setArticles((prevArticles) =>
      prevArticles.map((article) => {
        if (article.id === id) {
          return { ...article, completed: !article.completed };
        }
        return article;
      })
    );
  }

  function handleFilterChange(value) {
    setFilter(value);
  }

  let filteredArticles = articles;

  if (filter === 'completed') {
    filteredArticles = articles.filter((article) => article.completed);
  } else if (filter === 'incomplete') {
    filteredArticles = articles.filter((article) => !article.completed);
  }

  filteredArticles.sort((a, b) => {
    if (filter === 'dueDate') {
      if (!a.dueDate && !b.dueDate) {
        return 0;
      }
      if (!a.dueDate) {
        return 1;
      }
      if (!b.dueDate) {
        return -1;
      }
      return a.dueDate - b.dueDate;
    } 
    return 0;
  });

  console.log(articles);
  console.log(dueDate);

  return (
    <div className='container'>
      <div className='block'>
        <div className='inputContainer'>
          <Input onChange={setInputValue} value={inputValue} />
          <AddButton onClick={handleAddData} />
          <DatePicker className='date' selected={dueDate} onChange={date => setDueDate(date)} />
        </div>
        <ul>
          {filteredArticles.map((article) => (
            <li
              key={article.id}
              style={{ textDecoration: article.completed ? 'line-through' : 'none' }}
            >
              <div className='articleContainer'>
                <div className='artic'>
                  <Article item={article} />
                </div>
                <div className='buttonContainer'>
                  <Edit onClick={() => editItem(article.id)} />
                  <DeleteButton
                    onClick={() => {
                      handleDeleteData(article.id);
                    }}
                  />
                </div>
              </div>
              <div>Due Date: {article.dueDate ? article.dueDate.toLocaleDateString() : 'No due date'}</div>
              <button onClick={() => toggleComplete(article.id)}>
                {article.completed ? 'Incomplete' : 'Complete'}
              </button>
            </li>
          ))}
        </ul>

        <div className='buttonCompl'>
          <button onClick={() => handleFilterChange('all')}>All</button>
          <button onClick={() => handleFilterChange('completed')}>Completed</button>
          <button onClick={() => handleFilterChange('incomplete')}>Incomplete</button>
          <button onClick={() => handleFilterChange('dueDate')}>Due Date</button>
        </div>
      </div>
    </div>
  );
}

export default App;
