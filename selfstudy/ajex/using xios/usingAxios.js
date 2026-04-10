async function getData(){
    const tbody = document.getElementById('tbody')
    try{
    const response = await axios.get('http://127.0.0.1:5500/Self_Learning/Json/Books.json')
    
    const data = response.data
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