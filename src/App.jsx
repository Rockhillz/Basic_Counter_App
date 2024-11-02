import { useState } from 'react'
import './App.css'

function App() {
  const imgUrls = [
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/8694163/1.jpg?9947",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/8694163/2.jpg?9947",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/8694163/3.jpg?9947",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/8694163/7.jpg?9947"
  ];
  // const [getter, setter] = useState(defaultValue)
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("Great counter App!");
  const [imgUrl, setImgUrl] = useState(imgUrls[0]);

  //handle Update message function
  const handleUpdateMessage = () => {
    switch (counter) {
      case 10:
        setMessage("In Tens Value");
        break;
      case 20:
        setMessage("In Your 20s!");
        break;
      case 30:
        setMessage("In Your 30s!");
        break;
      case 40:
        setMessage("Keep going!");
        break;
      case 50:
        setMessage("Congratulations you are in your 50s!");
        break;
      default:
        setMessage("Count! count!! count!!!");
    }
  }

  // Functions to update the state
  const handleDecrement = () => {
    counter > 0 ? setCounter(counter - 1) : counter;
    handleUpdateMessage();
  }
  const handleIncrement = () => {
    setCounter(counter + 1);
    handleUpdateMessage();
  }

  // const updateImage = () => {
  //   setImgUrl(imgUrls);
  // }
  
  return (
    <div>
      <h1> {message} </h1>
      <h1> Count: { counter }</h1>

      <div>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleIncrement}>Increment</button>
      </div>

      <div className='img-con'>
        <img src={imgUrl} alt="img" />
      </div>

      <div className='imgDiv'>
        {imgUrls.map((imgUrl, index) => (
          <img key={index}
          src={imgUrl}
          alt="img"
          className='imgy'
          onClick={() => setImgUrl(imgUrl)} />
        ) )}
      </div>
    </div>
  )
}

export default App
