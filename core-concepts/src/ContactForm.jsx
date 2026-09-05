export const ContactForm = () =>{
    return (
        /* 
            why we can use Without Fragment ...Because of his JSX rule : Every single tag must be properly closed..."Self closing tags"
        
        */
        
            <form>
                <input type="text" placeholder="Your Name"/>
                <br />
                <input type="email" placeholder="Enter Your Email"/>
            </form>
        
    )
}