// export const Product = (props) => {
//     return (
//         <>
//         <h3>{props.title}</h3>
//         <p>Price : ${props.price}</p>
//         <p>In stock : {props.inStock ? "Yes" : "No"}</p>
//         <p>Categories : {props.categories.join(", ")}</p>
        
//         </>
//     )
// };


/*

    We Can use aslo use props in another way ...like 


    * In Curly Brakects i use Props without writing again an again Props..!!
    
    export const Product = ({title ,price ,inStock, categories}) => {
    return (
        <>
        <h3>{title}</h3>
        <p>Price : ${price}</p>
        <p>In stock : {inStock ? "Yes" : "No"}</p>
        <p>Categories : {categories.join(", ")}</p>
        
        </>
    )
};


*/

export const Product = ({title ,price ,inStock, categories}) => {
    return (
        <>
        <h3>{title}</h3>
        <p>Price : ${price}</p>
        <p>In stock : {inStock ? "Yes" : "No"}</p>
        <p>Categories : {categories.join(", ")}</p>
        
        </>
    )
};

