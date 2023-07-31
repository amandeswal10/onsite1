import { useEffect, useState } from "react"

export const useFormFns = () => {
    const url ='https://jsonplaceholder.typicode.com/users/'
    const [users, setUsers] = useState(null);

   useEffect(()=>{
    const fetchUsers = async () => {
        const response = await fetch(url)
        const userData = await response.json()
        if(response.ok) {
            setUsers(userData)
        }
    }

    fetchUsers()
   }, [])
   
    // Mock API result data
    const countries = [{
        name: "US",
        areaCode: "+1",
    },
    {
        name: "India",
        areaCode: "+91",
    }]

    const [values, setValues] = useState({
        first: "",
        last: "",
        email: "",
        areaCode: "",
        phone: "",
    });

    const handleSubmission = (event) => {
        // Check if user already exists
       for(var i=0; i<users.length; i++) {
        if(values.email === users[0]["email"]){
            alert('This account already exists')
            return
        }
       }
        // TODO: Add to redux store

        event.preventDefault()
        // In this case, let's first just console log it
        console.log('submission: ', values)

    }

    const handleChange = (event) => {
        event.persist()
        setValues((values)=> ({...values, [event.target.name]: event.target.value}))
    }


    // Do various operations on the data and pass it down as props
    // Reduce, spread operator, Ternary, map, pop/push, string manipulation

    return [countries, handleSubmission, handleChange, values]
}