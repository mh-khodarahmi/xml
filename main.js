let btn = document.querySelector("button#btn")
btn.addEventListener("click", getData)

function getData() {
   setTimeout(() => {
    let xml=new XMLHttpRequest
    let html =""
    xml.open("get","https://jsonplaceholder.typicode.com/photos")
    xml.responseType="json"
    xml.onload = ()=>{
        xml.response.forEach((elem)=>{
            html +=`
   <div class="card">
            <img src="${elem.url}" alt="this is img" class="i-1" />
            <img src="${elem.thumbnailUrl}" alt="" class="i-2" />
            <h2>${elem.albumId}</h2>
            <h2>${elem.id}</h2>
        </div>
            `
        })
        document.querySelector("div.card-conteiner").innerHTML=html
    }
    xml.onerror=()=>{
        console.log("error");
    }
    xml.send(null)
}, 3000);
}
