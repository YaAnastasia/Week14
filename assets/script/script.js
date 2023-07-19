const directors = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссер, Актер, Сценарист, Монтажер',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссер, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссер, Сценарист, Актер, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссер, Сценарист, Актер',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зеленая книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажер, Актер, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];
  
  directors.forEach(function(director) {
    const info = document.createElement('div');
    info.innerHTML = `<h3>${director.name}</h3>
                      <h4>${director.career}</h4>
                      <a href="${director.films}">${director.films}</a>
                      <h4>Лучший фильм: ${director.top_rated_film}</h4>`;
    document.body.append(info);
  });
  
  const topFilmsList = directors.map(function(topFilms) {
    return topFilms.top_rated_film;
  });
  
  const topFilms = document.createElement('div');
  topFilms.innerHTML = `Лучшие фильмы режиссеров: ${topFilmsList.join(', ')}`;
  document.body.append(topFilms);