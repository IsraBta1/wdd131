const countryData = {
    area: "916,445 km²",
    population: "Approximately 28.3 million",
    capital: "Caracas",
    languages: "Spanish",
    currency: "Venezuelan bolívar (VES)",
    timeZone: "UTC-4",
    callingCode: "+58",
    internetTld: ".ve"
};

function displayCountryData() {
    document.getElementById("area").textContent = countryData.area;
    document.getElementById("population").textContent = countryData.population;
    document.getElementById("capital").textContent = countryData.capital;
    document.getElementById("languages").textContent = countryData.languages;
    document.getElementById("currency").textContent = countryData.currency;
    document.getElementById("time-zone").textContent = countryData.timeZone;
    document.getElementById("calling-code").textContent = countryData.callingCode;
    document.getElementById("internet-tld").textContent = countryData.internetTld;
}

displayCountryData();
