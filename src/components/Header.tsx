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
        src="/images/logo-mobile.svg"
        alt="8-я Сосневская"
        width={133}
        height={42}
      />
      <a className="header__phone" href="tel:" aria-label="Позвонить">
        <img src="/images/phone.svg" alt="" width={18} height={18} />
      </a>
    </header>
  );
}
