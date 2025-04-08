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
moveAlong();
setInterval(moveAlong, 1000);
