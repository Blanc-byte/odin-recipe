const library = [];

document.querySelector('.addbtn').addEventListener('click', function(){
    document.querySelector('#myform').style.display = 'flex';
});

document.querySelector('#myform').addEventListener('submit',function(event){
    event.preventDefault();

    const ti = document.querySelector('#title').value;
    const au = document.querySelector('#author').value;

    library.push({title:ti, author:au});
    showBooks();
});



function showBooks(){
    const showBooksss = document.querySelector('.showBooks');
    showBooksss.innerHTML='';
    if(library.length!==0){
        const table = document.createElement("table");
        const attr = document.createElement("tr");
        Object.keys(library).forEach(key => {
            const attrName = document.createElement('th');
            attrName.textContent = key ;
            attr.appendChild(attrName);
        });
        table.appendChild(attr);
        library.forEach(book => {
            const row = document.createElement('tr');

            Object.entries(book).forEach(([key, value]) => {
                const col = document.createElement('td');
                col.textContent=value;
                row.appendChild(col);
            });

            table.appendChild(row);
        });
        
        showBooksss.appendChild(table);
    }
}
