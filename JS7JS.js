let Person = {
    name: "John",
    Mail: "LJqyQ@example.com",
}

let Fetching = fetch("https://jsonplaceholder.typicode.com/todos/1")
.then (response => response.json())
.then (data => 
    {
        let button = document.getElementById("btn")
        button.addEventListener("click", () => 
        {
            console.log(data)
            console.log(Person)
        })
    }
)
.catch(error => console.log(error))

let PersonsInfo = {
    "userId": 239,
    "id": 239,
    "title": " lorem ipsu mollitia sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": " aqua deserunt mollitia animi, id est laborum et sint quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }


let second = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(PersonsInfo)
})
.then (response => response.json())
.then (data => console.log(data))
.catch(error => console.log(error))


let button1 = document.getElementById("btn")
button1.addEventListener("click", () => 
{
    console.log(PersonsInfo)
})
