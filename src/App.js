import { useState } from 'react';
import AddButton from './AddButton';
import './App.css';
import Input from './input';
import DeleteButton from './DeleteButton';
import { Article } from './Article';
import Edit from './EditText';


function App() {
  const [inputValue,setInputValue]=useState('')
  const [articles, setArticles] = useState([]);


  const handleAddData = () => {
    if(inputValue === ''){
      return false
    }
    setArticles((prevState) => {
      return [
        {
          isCompleted:true,
          id: Math.floor(Math.random() * 100),
          title: inputValue,
        },
        ...prevState,
      ];
    });
    setInputValue('')
  };
  const handleDeleteData = (id) => {
    const removeItem = articles.filter((todo) => {
      return todo.id !== id;
    });
    setArticles(removeItem);   
  };

  function editItem(id){
    const editTask = articles.find((i) => i.id === id);
    setInputValue(editTask.title);
    console.log(articles);
  }

  
  // function handleChange(event) {
  //   setInputValue((prevInputValue) => ({
  //     ...prevInputValue,
  //   }));
  // }
  console.log(articles);


  return (
    <div className='container'>
      <div className='block'>
        <Input onChange={setInputValue} value={inputValue}/>
        <AddButton onClick={handleAddData} />
         {articles.map((article) =>(
        <div className='title'>
            <Article item={article} />
            <Edit  onClick={()=>  editItem(article.id)}/>
            <DeleteButton onClick={() =>{
              handleDeleteData(article.id)
            }
          }
             />
         </div> 
      ))}      
    </div>
    </div>
  
  
  );
}

export default App;
