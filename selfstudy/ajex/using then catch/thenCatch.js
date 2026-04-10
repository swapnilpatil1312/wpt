function getData(){
    const tbody=document.getElementById('tbody')

    fetch('http://127.0.0.1:5500/Self_Learning/Json/Books.json')
        .then((response) => {
            response.json()
                .then((data) => {
                    for(b of data){
                    const row = `<tr>
                                <td>${b.title}</td>
                                <td>${b.author}</td>
                                <td>${b.year}</td>
                                </tr>`
                            tbody.innerHTML += row
                    }
                }).catch((ex) => {
                    console.log(ex)
                })
        })
        .catch((ex) => {
            console.log("Error while fetching - ")
            console.log(ex)
        })
}