export const CandidateProfile = () => {
    const name = "Peter Parker";
    const role = "Web Developer";
    const yearsOfExperience = 5;
    const isAvailbe = true;


    /* 
        We can embed  JavaScript expression directly in your markup  using curly braces ...
        
        Example :
         return (
        <>
            <h2>{name}</h2>
            <p>{role} with {yearsOfExperience} years of experience</p>
            <p>Started in {2025 - yearsOfExperience}</p>
            <p>Status : {isAvailbe ? "Available for hire " : "Not available"} </p>
            <p>Contact : {name.toLowerCase().replace(" ", ".")}@email.com</p>
        </>
    )
    )
    
    */

    return (
        <>
            <h2>{name}</h2>
            <p>{role} with {yearsOfExperience} years of experience</p>
            <p>Started in {2025 - yearsOfExperience}</p>
            <p>Status : {isAvailbe ? "Available for hire " : "Not available"} </p>
            <p>Contact : {name.toLowerCase().replace(" ", ".")}@email.com</p>
        </>
    )
}