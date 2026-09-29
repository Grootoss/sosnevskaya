const contacts = [
  {
    id: "sales",
    href: "tel:+74952554824",
    icon: "/images/phone.svg",
    iconWidth: 18,
    iconHeight: 18,
    value: "+7 (495) 255-48-24",
    note: "Отдел продаж. Работаем в будние дни с 9:00 до 18:00",
  },
  {
    id: "mail",
    href: "mailto:mail@mail.ru",
    icon: "/images/mail.svg",
    iconWidth: 20,
    iconHeight: 20,
    value: "mail@mail.ru",
    note: "Пишите нам по вопросам партнерства",
  },
  {
    id: "mortgage",
    href: "tel:+74952554824",
    icon: "/images/phone.svg",
    iconWidth: 18,
    iconHeight: 18,
    value: "+7 (495) 255-48-24",
    note: "Ипотека. Работаем в будние дни с 9:00 до 18:00",
  },
] as const;

export function Contacts() {
  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <h2 className="contacts__title" id="contacts-title">
        Контакты
      </h2>

      <ul className="contacts__list">
        {contacts.map((item) => (
          <li className="contacts__item" key={item.id}>
            <a className="contacts__link" href={item.href}>
              <span className="contacts__icon" aria-hidden="true">
                <img
                  src={item.icon}
                  alt=""
                  width={item.iconWidth}
                  height={item.iconHeight}
                />
              </span>
              <span className="contacts__body">
                <span className="contacts__value">{item.value}</span>
                <span className="contacts__note">{item.note}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="contacts__office">
        <p className="contacts__office-label">Головной офис:</p>
        <p className="contacts__office-address">
          Москва, Пресненская набережная, 6с2, башня «Империя», 3-й подъезд,
          офис 4315
        </p>
      </div>

      <div className="contacts__nav">
        <a className="contacts__nav-link" href="#construction">
          Ход строительства
        </a>
        <a className="contacts__nav-link" href="#documents">
          Документы
        </a>
      </div>

      <button className="contacts__cta" type="button">
        Напишите нам
      </button>
    </section>
  );
}
