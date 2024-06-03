import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

const{ useState }=React;

const Counter = () => {
  const [count,setCount]=useState(5);

  return(
    <div className="container">
      {count <10 &&(
        <div 
          className="chevron chevron-up"
          onClick={() => setCount(count+1)}
        />
      )}
    
      <div className="number">{count}</div>
      {count >0&&(
        <div 
          className="chevron chevron-down"
          onClick={() => setCount(count-1)}
        />
      )}
    </div>
  );
};

root.render(<Counter/>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
