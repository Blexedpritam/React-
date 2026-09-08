import { UserInfo } from "./Userinfo"

// export const UserCard = ({name , age , city ,email}) =>{
//     return (
//         <>
//             <h2>User Details</h2>
//             <UserInfo name = {name} age = {age} city = {city} email={email} />
//         </>
//     )
// }

// export const UserCard = ({props}) =>{
//     return (
//         <>
//             <h2>User Details</h2>
//             <UserInfo {...props}/>
//         </>
//     )
// }


export const UserCard = ({id , ...rest}) =>{
    return (
        <>
            <h2>User {id} Details</h2>
            <UserInfo {...rest}/>
        </>
    )
}