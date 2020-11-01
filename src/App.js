import { useEffect , useState } from 'react';
import './App.css';

function App() {

  //UseState for response of the API
  const [title, setTitle] = useState("Waiting for Response");
  const [userId, setUserId] = useState("Waiting for Response");
  const [id, setId] = useState("Waiting for Response");
  const [completed, setCompleted] = useState("Waiting for Response");

  // UseState for if Fetching data
  const [isFetching, setFetching] = useState(false);

  //UseState to re-fetch Data
  const [reFetch, setReFetch] = useState(0);

  // useEffect Hooks to use fetch function
  useEffect(() => {
    async function fetchData() {
      setFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      setTitle(data.title);
      setUserId(data.userId);
      setId(data.id);
      setCompleted(data.completed);
      setFetching(false); 
    }
    fetchData();
  },[reFetch]);
  
  // OnClick functions
  function onClickBtn() {
    setReFetch(reFetch+1);
    setTitle("Waiting for Response");
    setUserId("Waiting for Response");
    setId("Waiting for Response");
    setCompleted("Waiting for Response");
  }

  // To display Data Loading for the whole component
  if(isFetching){
    return <div className="container">
      <h1>Fetch Data</h1>
      <div className="using-js">
        <h2>Using JS</h2>
        <a href="./using-js/index.html" target="blank">Click <strong>here</strong> to view JS file</a>
      </div>
      <div className="using-react">
        <h2>Using React</h2>
        <span><strong>Data Loading...</strong></span>
        <span>Title : {title}</span>
        <span>User ID : {userId}</span>
        <span>ID : {id}</span>
        <span>Completed : {completed}</span>
      </div>
    </div>
  }

  return (
    <div className="container">
      <h1>Fetch Data</h1>
      <div className="using-js">
        <h2>Using JS</h2>
        <a href="./using-js/index.html" target="blank">Click <strong>here</strong> to view JS file</a>
      </div>
      <div className="using-react">
        <h2>Using React</h2>
        <span>Title : {title}</span>
        <span>User ID : {userId}</span>
        <span>ID : {id}</span>
        <span>Completed : {completed}</span>
        <button onClick={()=>{onClickBtn()}}>Fetch Again</button>
      </div>
    </div>
  );
}

export default App;
