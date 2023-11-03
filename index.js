// Add your code here
const submitData = (name, email) => {
    const userInfo = {
        name: `${name}`,
        email: `${email}`
    }
   return (
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then((resp) => resp.json())
    .then((data) => document.body.append(data.id))
    .catch((error) => document.body.append(error.message))
   )

}