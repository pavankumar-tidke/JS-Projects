
function update() {
    if(localStorage.getItem('arrangingItemLikeJson') == null) {
        // itemArr = [] 
        localStorage.setItem('arrangingItemLikeJson', JSON.stringify(itemArr))
        console.log('update_if_block')
    } 
    else {
        itemArrStr = localStorage.getItem('arrangingItemLikeJson')
        itemArr = JSON.parse(itemArrStr)
        // console.log(itemArr)
    }

    let tBody = document.getElementById('tBody'); 
    let str = '';
    itemArr.forEach((element, index) => { 
        str += `<tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-sm btn-danger" onclick="itemDelete(${index})">Delete</button></td>
                </tr>`;
    });
    tBody.innerHTML = str;
}

function addList(){
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let alrt = document.getElementById('alrt'); 
    if(localStorage.getItem('arrangingItemLikeJson') == null) {
        if(window.confirm('Sure about insert first item') == true) {
            itemArr.push([title, desc])
            localStorage.setItem('arrangingItemLikeJson', JSON.stringify(itemArr))
            alrt.classList.add('alert-success')
            alrt.innerText = 'Item added successfully'
            console.log('first add')
        }
        else {
            alrt.classList.add('alert-danger')
            alrt.innerText = 'Item Not Added'
            // return
        }
    }
    else {
        itemArr.push([title, desc])
        localStorage.setItem('arrangingItemLikeJson', JSON.stringify(itemArr))
        console.log(localStorage.getItem('arrangingItemLikeJson'))
        alrt.classList.add('alert-success')
        alrt.innerText = 'Item added successfully'
        console.log('second add')
    }    
    update();
}

function clrList(){
    // if(confirm("Are You Sure, \n That All Items Could be DELETED. NO BACKUP's") == true) {
        // localStorage.clear();
        console.log(localStorage.clear());
        alrt.classList.add('alert-danger')
        alrt.innerText = 'Todo List Cleared.'
        setTimeout(() => {
            location.reload()
            // update()
        }, 1000);
        // location.reload()
    // }
    // else {
        // console.log('not clear')
        // alrt.classList.add('alert-warning')
        // alrt.innerText = 'You Survive'
        // update()
    // }
}

function itemDelete(index) {
    
    console.log('delete', index)
    itemArrStr = localStorage.getItem('arrangingItemLikeJson')
    itemArr = JSON.parse(itemArrStr)
    // delete item from array
    itemArr.splice(index, 1)
    localStorage.setItem('arrangingItemLikeJson', JSON.stringify(itemArr))
    alrt.classList.add('alert-danger')
    alrt.innerText = 'Item Deleted'
    update()
    setTimeout(() => {
        location.reload()
    }, 1000);
}


let itemArr = [];
update();