const countriesData = fetch("https://restcountries.com/v3.1/all");
countriesData.then((data) => data.json()).then((newData) => displayData(newData))

const container = document.createElement('div');
container.className = 'container';

const row = document.createElement('div');
row.className = 'row';

function displayData(data) {
    for(let i = 0; i < data.length; i++) {
        const col = document.createElement('div');
        col.className = 'col-lg-4';
        col.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header text-center" style="background-color: #000;">${data[i].name.common}</div>
        <div class="card-body text-center">
        <img src="${data[i].flags.png}" alt="" style="width: 100%; height: 120px">
        <label for="capital">Capital: </label>
        <span>${data[i].capital}</span><br>
        <label for="region">Region: </label>
        <span>${data[i].region}</span><br>
        <label for="countryCode">Country Code: </label>
        <span>${data[i].cca3}</span><br>
        <label for="position">Position: </label>
        <span>${data[i].latlng}</span><br>
        <a class="btn btn-light" target="_blank" href="${data[i].maps.googleMaps}">Open Maps</a>
        </div>
      </div>`;
      row.append(col);
      container.append(row);
      document.body.append(container);
    }
}

function openMaps(mapData) {

}