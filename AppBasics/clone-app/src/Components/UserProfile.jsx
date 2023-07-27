export default function UserProfile(props){
   let {name,age,work}=props;
   
    return(
<>
<h2>Name : {name}, Age : {age}, Work :{work}</h2>
</>
    )
    
}