function moveAlong() {
  let pretoriaElement = document.querySelector("#pretoria");
  let pretoriaDateElement = pretoriaElement.querySelector(".date");
  let pretoriaTimeElement = pretoriaElement.querySelector(".time");
  let pretoriaTime = moment().tz("Africa/Johannesburg");

  pretoriaDateElement.innerHTML = moment().format("MMMM Do y");
  pretoriaTimeElement.innerHTML = pretoriaTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let kenyaElement = document.querySelector("#dodoma");
  let kenyaDateElement = kenyaElement.querySelector(".date");
  let kenyaTimeElement = kenyaElement.querySelector(".time");
  let kenyaTime = moment().tz("Africa/Nairobi");

  kenyaDateElement.innerHTML = moment().format("MMMM Do y");
  kenyaTimeElement.innerHTML = kenyaTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let ricaElement = document.querySelector("#beijing");
  let ricaDateElement = ricaElement.querySelector(".date");
  let ricaTimeElement = ricaElement.querySelector(".time");
  let ricaTime = moment().tz("America/Costa_Rica");

  ricaDateElement.innerHTML = moment().format("MMMM Do y");
  ricaTimeElement.innerHTML = ricaTime.format("hh:mm:ss [<small>]A[</small>]");

  let dagElement = document.querySelector("#antananarivo");
  let dagDateElement = dagElement.querySelector(".date");
  let dagTimeElement = dagElement.querySelector(".time");
  let dagTime = moment().tz("Indian/Antananarivo");

  dagDateElement.innerHTML = moment().format("MMMM Do y");
  dagTimeElement.innerHTML = dagTime.format("hh:mm:ss [<small>]A[</small>]");
}

function differentCitizen(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do y")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "hh:mm:ss [<small>]A[</small>]"
            )}</div>
          </div>
        </div>`;
}

moveAlong();
setInterval(moveAlong, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", differentCitizen);
