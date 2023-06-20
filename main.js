


async function cocteles() {
    const response = await fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
    const coctelesJSON = await response.json();
    console.log(coctelesJSON);
} 

cocteles()    