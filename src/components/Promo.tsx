import { Header } from "./Header";

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
      </div>
    </section>
  );
}
