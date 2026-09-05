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



function App() {

  return (
    <div>
      <CandidateProfile/>
      <StyleFrom/>
      <ContactForm/>
      <Hello/>
      <HelloWithoutJSX/>
      <UserProfile/>
      <Card/>
      <Welcome/>
      <Button/>
    </div>
  )
}

export default App
