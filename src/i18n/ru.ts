import module from "ra-language-russian";

export const ru = {
  ...module,
  resources: {
    posts: {
      name: "Пост |||| Посты",
      fields: {
        title: "Заголовок",
        body: "Основная часть",
        userId: "ID Пользователя",
        id: "Идентификатор",
      },
    },
    comments: {
      name: "Комментарий |||| Комментарии",
      fields: {
        email: "Электронная почта",
        id: "Идентификатор",
        name: "Имя",
        body: "Основная часть",
        postId: "Идентификатор сообщения",
      },
    },
    photos: {
      name: "Фото |||| Фото",
      fields: {
        albumId: "Идентификатор альбома",
        id: "Идентификатор",
        title: "Заголовок",
        url: "URL",
        thumbnailUrl: "URL эскиза",
      },
    },
    users: {
      name: "Пользователь |||| Пользователи",
      fields: {
        id: "Идентификатор",
        name: "Имя",
        username: "Имя пользователя",
        email: "Электронная почта",
        address: {
          street: "Адрес улицы",
          suite: "Адресный набор",
          city: "Адрес город",
          zipcode: "Почтовый индекс",
          geo: {
            lat: "Географическая широта ",
            lng: "Географическая долгота",
          },
        },
        phone: "Телефон",
        website: "Веб-сайт",
        company: {
          name: "Название компании",
          catchPhrase: "Лозунг",
          bs: "Бс",
        },
      },
    },
  },
  
  saved_queries:{
    subscribed_to_newsletter: 'Подписался на рассылку новостей',
    yes: 'Да',
    no: 'Нет',
    category: 'Категория',
    tests: 'Тесты',
    news: 'Новости',
    deals: 'Сделки',
    tutorials: 'Учебники',
  }
};
