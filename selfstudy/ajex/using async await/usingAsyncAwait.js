async function getData () {
    const tbody = document.getElementById('tbody')

    try{
        const response = await fetch('http://127.0.0.1:5500/Self_Learning/Json/Books.json')

        const data = await response.json()

        for(b of data){
                    const row = `<tr>
                                <td>${b.title}</td>
                                <td>${b.author}</td>
                                <td>${b.year}</td>
                                </tr>`
                            tbody.innerHTML += row
                    }
    }
    catch(ex){
        console.log(ex)
    }
}