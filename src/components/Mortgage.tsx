import { useState } from "react";

const banks = [
  {
    id: 1,
    name: "Альфабанк",
    logo: "/images/bank-mobile-1.svg",
    payment: "30%",
  },
  {
    id: 2,
    name: "Сбербанк",
    logo: "/images/bank-mobile-2.svg",
    payment: "30%",
  },
  {
    id: 3,
    name: "Азиатско Тихоокеанский банк",
    logo: "/images/bank-mobile-3.svg",
    payment: "30%",
  },
  {
    id: 4,
    name: "Всероссийский банк развития регионов",
    logo: "/images/bank-mobile-4.svg",
    payment: "30%",
  },
] as const;

type Tab = "mortgage" | "family";

export function Mortgage() {
  const [tab, setTab] = useState<Tab>("mortgage");

  return (
    <section className="mortgage" aria-labelledby="mortgage-title">
      <h2 className="mortgage__title" id="mortgage-title">
        Ипотека
      </h2>

      <div className="mortgage__tabs" role="tablist" aria-label="Тип ипотеки">
        <button
          className={`mortgage__tab${tab === "mortgage" ? " mortgage__tab--active" : ""}`}
          type="button"
          role="tab"
          aria-selected={tab === "mortgage"}
          onClick={() => setTab("mortgage")}
        >
          Ипотека
        </button>
        <button
          className={`mortgage__tab${tab === "family" ? " mortgage__tab--active" : ""}`}
          type="button"
          role="tab"
          aria-selected={tab === "family"}
          onClick={() => setTab("family")}
        >
          Семейная ипотека
        </button>
      </div>

      {tab === "family" ? (
        <p className="mortgage__placeholder">условия обсуждаются</p>
      ) : (
        <div className="mortgage__panel">
          <div className="mortgage__block">
            <h3 className="mortgage__heading">Лучшие банки</h3>
            <p className="mortgage__text">
              Мы сотрудничаем с лучшими банками для предоставления вам ипотеки с
              отличными условиями
            </p>
          </div>

          <div className="mortgage__block">
            <h3 className="mortgage__heading">Льготные программы</h3>
            <p className="mortgage__text">
              Наш дом подходит под большинство льготных программ которые
              существуют в России
            </p>
          </div>

          <div className="mortgage__partners">
            <h3 className="mortgage__heading">Банки – партнеры</h3>

            <div className="mortgage__table-head">
              <span>Банк</span>
              <span>Первоначальный взнос</span>
            </div>

            <ul className="mortgage__banks">
              {banks.map((bank) => (
                <li className="mortgage__bank" key={bank.id}>
                  <img
                    className="mortgage__logo"
                    src={bank.logo}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <span className="mortgage__bank-name">{bank.name}</span>
                  <span className="mortgage__bank-payment">{bank.payment}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mortgage__cta" type="button">
            Напишите нам
          </button>
          <p className="mortgage__note">
            Подберем для вас лучшие условия кредитования
          </p>
        </div>
      )}
    </section>
  );
}
