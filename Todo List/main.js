var clrList = document.getElementById('clrList')
update()

function update() {
    let table = document.getElementById('tBody')

    try {
        let getLocal = localStorage.getItem('listItem')
        let parse = JSON.parse(getLocal)
        let str = ''
        if(getLocal != null) {
            parse.forEach( (element, index) => {
                str += `<tr class="my-3">
                            <th scope="row" class="text-success">${index+1}</th>
                            <td>${element[0]}</td>
                            <td>${element[1]}</td>
                            <td><button type="button" onclick="deleteItem(${index})" class="btn btn-sm btn-danger">Delete</button></td>
                        </tr>`
            });
        }
        else {
            str = `<h4 class="text-light">Sorry, List is Null</h4>`
        }
        table.innerHTML = str;
    }
    catch(err) {
        alert(err.message)
    }

}


function addToList() {
    
    let title = document.getElementById('title').value
    let desc = document.getElementById('desc').value
    if(localStorage.getItem('listItem') == null) {
        try {
            var list = []
            var p = list.push([title, desc])
            var localStore = localStorage.setItem('listItem', JSON.stringify(list))
        }
        catch(err) {
            alert(err.message)
        }
    }
    else {
        try {
            let getItem = localStorage.getItem('listItem')
            let parse = JSON.parse(getItem)
            parse.push([title, desc])
            localStore = localStorage.setItem('listItem', JSON.stringify(parse))
        }
        catch(err) {
            alert(err.message)
        }
    }  
    update()
}


clrList.addEventListener('click', () =>{
    try {
        if(localStorage.getItem('listItem') != null) {
            if(confirm("DO YOU REALLY WANT ......?") == true) {
                try {
                    // localStorage.removeItem('listItem')
                    localStorage.clear()
                }
                catch(err) {
                    alert(err.message)
                }            
            }
            else {
                alert("Whole list not deleted")
            }
        }
        else {
            alert("List is empty")
        }
        
    }
    catch(err) {
        alert(err.message)
    }
    update()
})


function deleteItem(index) {
    try {
        let getLocal = localStorage.getItem('listItem')
        let parse = JSON.parse(getLocal)
        parse.splice(index, 1)
        try {
            if(parse == "") {
                localStorage.clear()
                update()
                return null
            }
        }
        catch(err) {
            alert(err.message)
        }
        localStorage.setItem('listItem', JSON.stringify(parse))
        update()
    }
    catch(err) {
        alert(err.message)    
    }
}