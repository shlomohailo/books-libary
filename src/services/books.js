

export async function BooksFetch() {

    return await fetch("https://my-json-server.typicode.com/Jeck99/books-api/books")
        .then(response => response.json())
        .catch((error) => {
            alert(error)
        })
}
