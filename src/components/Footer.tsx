import { asset } from "../asset";

const navItems = [
  { href: "#features", label: "Преимущества" },
  { href: "#infrastructure", label: "Инфраструктура" },
  { href: "#apartments", label: "Квартиры" },
  { href: "#mortgage", label: "Ипотека" },
  { href: "#contacts", label: "Контакты" },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <button className="footer__menu" type="button" aria-label="Меню">
        <span />
        <span />
        <span />
      </button>
      <img
        className="footer__logo"
        src={asset("images/logo-mobile.svg")}
        alt="8-я Сосневская"
        width={133}
        height={42}
      />
      <nav className="footer__nav" aria-label="Навигация в подвале">
        {navItems.map((item) => (
          <a className="footer__nav-link" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="footer__phone" href="tel:+70000000000">
        <span className="footer__phone-icon" aria-hidden="true">
          <img
            src={asset("images/phone.svg")}
            alt=""
            width={18}
            height={18}
          />
        </span>
        <span className="footer__phone-number">+ 7 (000) 000 00 00</span>
      </a>
    </footer>
  );
}
