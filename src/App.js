import './index.css';

function App() {
  let p = document.getElementById('megaTest');
  console.log('ss')

  let $ = {
      radius: 250, 
      speed: 20
  }
  let f = 0;
  let s = 2 * Math.PI / 180;
  setInterval(function() {
      f += s; 
      p.style.left =  235 + $.radius * Math.sin(f)  + 'px'; 
      p.style.top =   235 + $.radius * Math.cos(f) + 'px';
  }, $.speed)
    
  return (
    <div className="App">
      <p id='megaTest'>you r gay bro</p>
    </div>
  );
}

export default App;
