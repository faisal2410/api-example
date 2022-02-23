const loadCountries=async()=>{
   await fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
loadCountries()
const displayCountries=(countries)=>{
    const countriesDiv=document.getElementById('countries')
  countries.forEach(country=>{
    // console.log(country.altSpellings[country.altSpellings.length-1])
    const div=document.createElement('div')
    div.classList.add('country')
    div.innerHTML=`
    <h3>${country.name.official}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryByName('${country.name.official}')">Details</button>
    
    `
    // div.classList.add('country')
    // const h3=document.createElement('h3')    
    // h3.innerText=country.name.official
    // div.appendChild(h3);
    // const p=document.createElement('p');
    // p.innerText=country.capital
    // div.appendChild(p)
    countriesDiv.appendChild(div)
}
  )
}

const loadCountryByName=(name)=>{
    // console.log(name)
    const url=`https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then((data)=>displayCountryDetail(data))

}

const displayCountryDetail=countryDetail=>{
    console.log(countryDetail[0])
    const countryDiv=document.getElementById('country-detail');
    countryDiv.innerHTML=`
    <h5>${countryDetail[0].name.official}</h5>
    <p>Population: ${countryDetail[0].population}</p>
     <img width="200px" src="${countryDetail[0].flags.png}"/>
    
    `

}