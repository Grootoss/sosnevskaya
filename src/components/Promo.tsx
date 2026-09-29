import { Header } from "./Header";

const stats = [
  {
    value: "14",
    unit: "Минут",
    caption: "Пешком до метро «Тульская»",
  },
  {
    value: "21",
    unit: "Минута",
    caption: "Пешком до метро «Тульская»",
  },
  {
    value: "100",
    unit: "Метров",
    caption: "До кремля",
  },
] as const;

export function Promo() {
  return (
    <section className="promo">
      <Header />
      <div className="promo__content">
        <h1 className="promo__heading">
          <span className="promo__mark">8-я</span>
          <span className="promo__name">Сосневская</span>
        </h1>
        <p className="promo__text">
          Удивлять — вот кредо проекта. Давать больше, чем принято стандартами,
          предугадывать желания. Комплекс создается по принципу клубной
          самодостаточности для взыскательных клиентов — здесь предусмотрено
          все для каждого
          <br />
          члена семьи.
        </p>
        <a className="promo__cta" href="#apartments">
          Выбрать квартиру
        </a>
        <ul className="promo__stats">
          {stats.map((stat) => (
            <li className="promo__stat" key={stat.value + stat.unit}>
              <p className="promo__stat-value">
                <span className="promo__stat-num">{stat.value}</span>
                <span className="promo__stat-sep">/</span>
                <span className="promo__stat-unit">{stat.unit}</span>
              </p>
              <p className="promo__stat-caption">{stat.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
