import { asset } from "../asset";

const items = [
  {
    id: 1,
    title: "Библиотека",
    mobile: asset("images/infra-mobile-1.jpg"),
    tablet: asset("images/infra-tablet-1.jpg"),
    desktop: asset("images/infra-desktop-1.jpg"),
  },
  {
    id: 2,
    title: "Парковка",
    mobile: asset("images/infra-mobile-2.jpg"),
    tablet: asset("images/infra-tablet-2.jpg"),
    desktop: asset("images/infra-desktop-2.jpg"),
  },
  {
    id: 3,
    title: "Бассейн",
    mobile: asset("images/infra-mobile-3.jpg"),
    tablet: asset("images/infra-tablet-3.jpg"),
    desktop: asset("images/infra-desktop-3.jpg"),
  },
  {
    id: 4,
    title: "Фитнес",
    mobile: asset("images/infra-mobile-4.jpg"),
    tablet: asset("images/infra-tablet-4.jpg"),
    desktop: asset("images/infra-desktop-4.jpg"),
  },
] as const;

const description =
  "Взрослые деревья, медитативная гладь пруда и деликатно вписанные в зеленое окружение";

export function Infrastructure() {
  return (
    <section className="infra" id="infrastructure" aria-labelledby="infra-title">
      <h2 className="infra__title" id="infra-title">
        Инфраструктура
      </h2>

      <ul className="infra__list">
        {items.map((item) => (
          <li className="infra__item" key={item.id}>
            <picture>
              <source media="(min-width: 1440px)" srcSet={item.desktop} />
              <source media="(min-width: 834px)" srcSet={item.tablet} />
              <img
                className="infra__image"
                src={item.mobile}
                alt=""
                width={375}
                height={340}
              />
            </picture>
            <div className="infra__content">
              <span className="infra__num">
                {String(item.id).padStart(2, "0")}
              </span>
              <h3 className="infra__name">{item.title}</h3>
              <p className="infra__text">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
