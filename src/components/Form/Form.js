import { useFormFns } from "./useFormFns";

export const Form = () => {

    const [countries, handleSubmission, handleChange, values] = useFormFns();

// To do: make this look less ugly / repetitive 
    return(
        <div>
        <form style={{border: "2px", borderStyle:"solid", margin:"12px", padding: "14px"}} onSubmit={handleSubmission}>
            <label>First Name: </label>
            <input name="first" value={values.first} onChange={handleChange}/>
            <br/>

            <label>Last Name: </label>
            <input name="last" value={values.last} onChange={handleChange}/>
            <br/>

            <label>Email: </label>
            <input name="email" value={values.email} onChange={handleChange}/>
            <br/>

            <label>Country Code</label>
            <select name="areaCode" value={values.areaCode} onChange={handleChange}>
                {countries.map((country)=> <option defaultValue="" key={country.areaCode}>{country.name} {country.areaCode}</option>)}
                
            </select>

            <label>Phone: </label>
            <input name="phone" value={values.phone} onChange={handleChange}/>
            <br/>

            <button type="submit" style={{backgroundColor: "green"}}>Create Account</button>
        </form>
        </div>
    )
}