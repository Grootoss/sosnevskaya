import { useState } from "react";
import { asset } from "../asset";

const banks = [
  {
    id: 1,
    name: "Альфабанк",
    logo: asset("images/bank-mobile-1.svg"),
    payment: "30%",
    term: "от 1 года до 30 лет",
    rate: "12,6%",
    monthly: "92 767 ₽",
  },
  {
    id: 2,
    name: "Сбербанк",
    logo: asset("images/bank-mobile-2.svg"),
    payment: "30%",
    term: "от 1 года до 30 лет",
    rate: "12,6%",
    monthly: "92 767 ₽",
  },
  {
    id: 3,
    name: "Азиатско Тихоокеанский банк",
    logo: asset("images/bank-mobile-3.svg"),
    payment: "30%",
    term: "от 1 года до 30 лет",
    rate: "12,6%",
    monthly: "92 767 ₽",
  },
  {
    id: 4,
    name: "Всероссийский банк развития регионов",
    logo: asset("images/bank-mobile-4.svg"),
    payment: "30%",
    term: "от 1 года до 30 лет",
    rate: "12,6%",
    monthly: "92 767 ₽",
  },
] as const;

const tabs = [
  { id: "mortgage", label: "Ипотека" },
  { id: "family", label: "Семейная ипотека" },
  { id: "support", label: "Ипотека с господдержкой" },
  { id: "it", label: "IT ипотека" },
] as const;

type Tab = (typeof tabs)[number]["id"];

const placeholders: Partial<Record<Tab, string>> = {
  family: "условия обсуждаются",
  support: "условия уточняются",
  it: "условия уточняются",
};

export function Mortgage() {
  const [tab, setTab] = useState<Tab>("mortgage");
  const placeholder = placeholders[tab];

  return (
    <section className="mortgage" id="mortgage" aria-labelledby="mortgage-title">
      <h2 className="mortgage__title" id="mortgage-title">
        Ипотека
      </h2>

      <div className="mortgage__tabs" role="tablist" aria-label="Тип ипотеки">
        {tabs.map((item) => (
          <button
            className={`mortgage__tab${tab === item.id ? " mortgage__tab--active" : ""}`}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>

      {placeholder ? (
        <p className="mortgage__placeholder">{placeholder}</p>
      ) : (
        <div className="mortgage__panel">
          <div className="mortgage__intro">
            <div className="mortgage__block">
              <h3 className="mortgage__heading">Лучшие банки</h3>
              <p className="mortgage__text">
                Мы сотрудничаем с лучшими банками для предоставления вам ипотеки
                с отличными условиями
              </p>
            </div>

            <div className="mortgage__block">
              <h3 className="mortgage__heading">Льготные программы</h3>
              <p className="mortgage__text">
                Наш дом подходит под большинство льготных программ которые
                существуют в России
              </p>
            </div>
          </div>

          <div className="mortgage__partners">
            <h3 className="mortgage__heading">Банки – партнеры</h3>

            <div className="mortgage__table-head">
              <span>Банк</span>
              <span>Первоначальный взнос</span>
              <span className="mortgage__col-extra">Срок кредитования</span>
              <span className="mortgage__col-extra">Процентная ставка</span>
              <span className="mortgage__col-extra">Ежемесячный платеж</span>
              <span className="mortgage__col-action" aria-hidden="true" />
            </div>

            <ul className="mortgage__banks">
              {banks.map((bank) => (
                <li className="mortgage__bank" key={bank.id}>
                  <span className="mortgage__bank-info">
                    <img
                      className="mortgage__logo"
                      src={bank.logo}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <span className="mortgage__bank-name">{bank.name}</span>
                  </span>
                  <span className="mortgage__bank-payment">{bank.payment}</span>
                  <span className="mortgage__col-extra">{bank.term}</span>
                  <span className="mortgage__col-extra">{bank.rate}</span>
                  <span className="mortgage__col-extra">{bank.monthly}</span>
                  <a className="mortgage__apply" href="#apply">
                    Оставить заявку
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mortgage__footer">
            <button className="mortgage__cta" type="button">
              Напишите нам
            </button>
            <p className="mortgage__note">
              Подберем для вас лучшие условия кредитования
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
