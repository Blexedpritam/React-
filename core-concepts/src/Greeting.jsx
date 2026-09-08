export const Greeting = ({name= "Guest",message ="Hello"}) => { //we add here default props
    return(
        <>
            <h2>{message} , {name}</h2>
        </>
    )
};