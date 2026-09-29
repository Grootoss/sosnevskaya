import { asset } from "../asset";

const navItems = [
  { href: "#features", label: "Преимущества" },
  { href: "#infrastructure", label: "Инфраструктура" },
  { href: "#apartments", label: "Квартиры" },
  { href: "#mortgage", label: "Ипотека" },
  { href: "#contacts", label: "Контакты" },
] as const;

export function Header() {
  return (
    <header className="header">
      <button className="header__menu" type="button" aria-label="Меню">
        <span />
        <span />
        <span />
      </button>
      <img
        className="header__logo"
        src={asset("images/logo-mobile.svg")}
        alt="8-я Сосневская"
        width={133}
        height={42}
      />
      <nav className="header__nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <a className="header__nav-link" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header__phone" href="tel:+70000000000">
        <span className="header__phone-icon" aria-hidden="true">
          <img
            src={asset("images/phone.svg")}
            alt=""
            width={18}
            height={18}
          />
        </span>
        <span className="header__phone-number">+ 7 (000) 000 00 00</span>
      </a>
    </header>
  );
}
