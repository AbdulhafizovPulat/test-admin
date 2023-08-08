import module from "ra-language-russian";

export const ru = {
  ...module,
  resources: {
    agents: {
      name: "Агент |||| Агенты",
      fields: {
        id: "Идентификатор",
        userId: "Идентификатор пользователя",
        appId: "Идентификатор приложения",
      },
    },
    apps: {
      name: "Приложения |||| Приложении",
      fields: {
        id: "Идентификатор",
        name: "Наименование",
        appType: "Тип приложения",
      },
    },
    categories: {
      name: "Категория |||| Категории",
      fields: {
        id: "Идентификатор",
        name: "Наименование",
        upperId: "Верхний идентификатор",
        locales: "Локали",
        localeKey: "Ключ локали",
        title: "Заголовок",
        description: "Описание",
      },
    },
    finorgs: {
      name: "финОрганизация |||| финОрганизации",
      fields: {
        id: "Идентификатор",
        orgId: "Идентификатор организации",
        mfo: "Мфо",
        contract: "Контракт",
        locales: "Локали",
        localeKey: "Ключ локали",
        title: "Заголовок",
      },
    },
    finproducts: {
      name: "финПродукт |||| финПродукты",
      fields: {
        id: "Идентификатор",
        finOrgId: "Идентификатор финОрг",
        term:{
          duration: "Продолжительность",
          type: "Тип",
        },
        value: "Стоимость",
        addedValue: "Добавленная стоимость ",
        comissionValue: "Коммисионные",
        prepay: "Предоплата",
        productSource: "Источник продукта",
        dealType: "Тип сделки",
        scheduleOn: "График работы",
        scoreGuarantee: "Оценка гарантии",
        scoring: "Подсчет баллов",
        identification: "Идентификация",
        scheduler: "Планировщик",
        coBorrower: "Созаёмщик",
        guarantee: "Гарантия",
        categories: "Категории",
        merchants: "Торговцы",
        locales: "Локали",
        localeKey: "Ключ локали",
        title: "Заголовок",
        description: "Описание",
      },
    },
    merchantagents: {
      name: "Торговый агент |||| Торговые агенты",
      fields: {
        merchantId: "Идентификатор продавца",
        agentId: "Идентификатор агента",
        isDisabled: "Отключен",
        contract: "Контракт",
      },
    },
    merchants: {
      name: "Торговец |||| Торговцы",
      fields: {
        id: "Идентификатор",
        orgId: "Идентификатор организации",
        name: "Наименование",
        bankAccountId: "Идентификатор банковского счета",
        contract: "Контракт",
        regionId: "Идентификатор региона",
        agentid: "Идентификатор агента",
        locales: "Локали",
        localeKey: "Ключ локали",
        address: "Адрес",
        title: "Заголовок",
      },
    },
  },
};
