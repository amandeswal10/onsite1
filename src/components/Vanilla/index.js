function HelloWorld () {
    
    const heading = document.createElement("h1")
    heading.textContent = "Hello World!";
    document.body.appendChild(heading);
  
  
}

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    if(res.ok){
        alert('Data fetched successfully!')
    }

    const userData = await res.json();
    console.log(userData)
    //const userTable = document.createElement("table")

}

const updateGreeting = () => {
    const world = document.querySelector("h1")
    world.textContent = "You are logged out!"
    document.body.appendChild(world);
}

const addName = () => {
    const namePrompt = prompt("What is your name?")
    window.onload = () => {
    const name = document.createElement('h2')
    document.body.append(name.textContent = `${namePrompt}`)
    }
}
//addName();