import './App.css';
import { Welcome   } from './Welcome';
import { Button } from './Button';
// import { Hello } from './Hello';
import { Hello,HelloWithoutJSX } from './Hello';
import { Card } from './Card';




function App() {

  return (
    <div>
      <Hello/>
      <HelloWithoutJSX/>
      <Card/>
      <Welcome/>
      <Button/>
    </div>
  )
}

export default App
