function processItems() {
    data.forEach((key) => {
        const item = key;
        const listItem = document.createElement('li');
        listItem.innerHTML = `ID : ${item.id}, Value : ${item.value}`;
        resultElement.appendChild(listItem);
    }
    );


    for (let i = 0; i < data.length; i++) {
        if (data[i].id === item.id) {
            data[i].processed = true;
        }
    }
}
