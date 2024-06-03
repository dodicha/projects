const Swiming = {
  temp: 20,
  windSpeed: 5,
};
const Hiking = {
  temp: 13,
  windSpeed: 5,
};
const skiing = {
  temp: 7,
  windSpeed: 4,
};
const Camping = {
  temp: 10,
  windSpeed: 5.5,
};

const listOfPorpouse = ["Swiming", "Hiking", "skiing", "Camping"];
const letItBe = [Swiming, Hiking, skiing, Camping];

const apiKeyForWeather = "7e4511cab7321489f058d1226e2f414c";

let weatherIcon = document.querySelector(".img");

let cityNAme = document.querySelector("#city");

// console.log(date);

let catergory = "";

function chooseCategory(element) {
  if (document.getElementsByClassName("porpuse")[0].style.display === "block") {
    document.getElementsByClassName("porpuse")[0].style.display = "none";
  }
  document.querySelector(".selectedCategory").innerHTML = element.textContent;
  catergory = element.textContent;
}

function changeImg(string) {
  if (string === "Clouds") {
    weatherIcon.src = "weather_img/clouds.png";
  } else if (string === "Clear") {
    weatherIcon.src = "weather_img/clear.png";
  } else if (string === "Rain") {
    weatherIcon.src = "weather_img/rain.png";
  } else if (string === "Snow") {
    weatherIcon.src = "weather_img/snowy.png";
  }
}

function changeIconForSugesstion(string, element) {
  if (string === "Clouds") {
    element.src = "weather_img/clouds.png";
  } else if (string === "Clear") {
    element.src = "weather_img/clear.png";
  } else if (string === "Rain") {
    element.src = "weather_img/rain.png";
  } else if (string === "Snow") {
    element.src = "weather_img/snowy.png";
  }
}

function createDivsForSugesstion(temperature, windspeed, weather, date, city) {
  if (
    temperature >= catergory.temp &&
    windspeed <= catergory.windSpeed &&
    date === date
  ) {
    // console.log(5)

    let sugestedDate = document.createElement("div");
    let mainDiv1 = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = date.slice(0, 10);
    let img = document.createElement(`img`);
    changeIconForSugesstion(weather, img);
    let h1 = document.createElement("h1");
    h1.textContent = Math.round(temperature) + "°c";
    let h2 = document.createElement("h2");
    h2.textContent = city;
    mainDiv1.appendChild(p);
    mainDiv1.appendChild(img);
    mainDiv1.appendChild(h1);
    mainDiv1.appendChild(h2);
    sugestedDate.appendChild(mainDiv1);
    document.getElementById("suge").appendChild(sugestedDate);
    // console.log(mainDiv1);
  }
}

// console.log(time.getDate()); //ricxvi

let choosenDate = document.getElementById("date");
let miliseconds = 0;

choosenDate.addEventListener("input", () => {
  let valu = choosenDate.value;
  let time = new Date(valu);
  miliseconds = time.getTime();
});

function getInfoByDate(number, obj) {
  document.querySelector(".city1").innerHTML = obj.city.name;
  document.querySelector(".temp").innerHTML =
    Math.round(obj.list[number].main.temp) + "°c";
  document.querySelector(".humidity").innerHTML =
    obj.list[number].main.humidity + "% humidity";
  document.querySelector(".wind").innerHTML =
    obj.list[number].wind.speed + "kh/h speed";
  changeImg(obj.list[number].weather[0].main);
  document.querySelector("#cheesenDate").innerHTML = obj.list[number].dt_txt;
}

async function getWeather() {
  document.getElementById("sugesstion").style.display = "none";

  let api = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityNAme.value}&units=metric&appid=${apiKeyForWeather}`
  );
  let data = await api.json();

  function checkTime(number) {
    let time = new Date(data.list[number].dt_txt);
    time = time.getTime();
    return time;
  }

  for (let i = 0; i < 40; i++) {
    if (checkTime(i) > miliseconds) {
      getInfoByDate(i, data);
      break;
    } else {
      getInfoByDate(0, data);
    }
  }

  if (catergory) {
    document.querySelector(".para").innerHTML = "Recomendation";

    for (let i = 0; i < 4; i++) {
      if (`${catergory}` === listOfPorpouse[i]) {
        catergory = letItBe[i];
      }
    }
    document.querySelector("#suge").innerHTML = " ";
    for (let i = 0; i < 40; i += 8) {
      createDivsForSugesstion(
        data.list[i].main.temp,
        data.list[i].wind.speed,
        data.list[i].weather[0].main,
        data.list[i].dt_txt,
        data.city.name
      );
    }
    document.getElementById("content").style.display = "block";
  }
}

let cityArray = [];

(async function getcity() {
  let city = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities"
  );
  let data = await city.json();

  data.data.forEach((element) => {
    cityArray.push(element.city.toLowerCase().trim());
  });
})();

let input = document.getElementById("city");
input.addEventListener("input", () => {
  let lower = input.value.toLowerCase();
  document.querySelector("#sugesstion").innerHTML = " ";
  let suggestedCitys = document.getElementById("sugesstion");

  // filter

  let filteredCitys = cityArray.filter(
    (city) => city.startsWith(lower) && lower.length > 1
  );

  if (filteredCitys.length > 0) {
    filteredCitys.forEach((city) => {
      let listItem = document.createElement("li");
      listItem.textContent = city;
      suggestedCitys.appendChild(listItem);
      suggestedCitys.style.display = "block";
      listItem.addEventListener("click", () => {
        let name = event.target.textContent;
        suggestedCitys.style.display = "none";
        input.value = name;
      });
    });
  }
});

function selectCategory() {
  if (document.getElementsByClassName("porpuse")[0].style.display != "block") {
    document.getElementsByClassName("porpuse")[0].style.display = "block";
  } else {
    document.getElementsByClassName("porpuse")[0].style.display = "none";
  }
}
