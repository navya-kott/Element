function dropdown() {
    fetch("./assets/data.json")
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.brands.forEach(function (item) {
                output += `
            <li><a class="dropdown-item" href="#">${item.name}</a></li>`;
            });
            document.getElementById('menu').innerHTML = output
        })
        .catch(e => {
            console.log(e);
        })
}
dropdown()


//  function loadHero() {
//     fetch("../her.html").then((res)=>res.text()).then((data)=>document.getElementById("hero").innerHTML=data).catch((e)=>{console.log(e);
//     })
//  }
    
//  loadHero()