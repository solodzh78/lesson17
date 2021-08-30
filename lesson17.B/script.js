const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');
const result = document.querySelector('.result');

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
};

const getCity = e => {

  while (citySelect.firstChild) {
    citySelect.removeChild(citySelect.firstChild);
  }
  const city = cityArr[e.target.options[e.target.selectedIndex].value];
  city.forEach(element => {
    const citySelectElem = document.createElement('option');
    citySelectElem.setAttribute('value', element);
    citySelectElem.textContent = element;
    citySelect.append(citySelectElem);
    citySelect.style.display = 'inline-block';
  });
};

const showResult = () => {
  result.textContent = countrySelect.options[countrySelect.selectedIndex].textContent + ', ' +
  citySelect.options[citySelect.selectedIndex].textContent;
};

countrySelect.addEventListener('change', getCity);
citySelect.addEventListener('change', showResult);
