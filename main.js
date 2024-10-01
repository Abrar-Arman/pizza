const content=document.querySelector('.pizza-cards')
// Fetch data from API
async function gitPizza(){
    const response= await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();
    const pizzas= data.recipes;
   const result= pizzas.map(function(pizza){
        return `
               <div class="card">
                   <img src="${pizza.image_url}" alt="${pizza.title}">
                   <h2>${pizza.title}</h2>
                   
               </div>
        `}).join('')
    
    console.log(result)
content.innerHTML=result
}
gitPizza()

 


