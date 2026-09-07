import './App.css';
import { Welcome   } from './Welcome';
import { Button } from './Button';
// import { Hello } from './Hello';
import { Hello,HelloWithoutJSX } from './Hello';
import { Card } from './Card';
import { UserProfile } from './UserProfile';
import { ContactForm } from './ContactForm';
import { StyleFrom } from './StyleFrom';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';



function App() {

  return (
    <div>
      <Product
      // When Passing Different Type Of Data ....
       title = "Gaming Laptop" //For Striing use = " "
       price={1299.99}  
       inStock={true}         //For everthing else we use Curly Braces ...
       categories={["Electroonics, Computer , Gaming "]} 
      />
      {/* Each Welcome Componenets recevie has props  */}
      <Welcome name = "Bruce" alias = "Batman"/>
      <Welcome name = "Clark" alias = "Superman"/>
      <Welcome name = "Diana" alias = "Wonder Woman"/>
      

      <CandidateProfile/>
      <StyleFrom/>
      <ContactForm/>
      <Hello/>
      <HelloWithoutJSX/>
      <UserProfile/>
      <Card/>
      
      <Button/>
    </div>
  )
}

export default App
