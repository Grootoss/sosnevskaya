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
        src="/images/logo-mobile.svg"
        alt="8-я Сосневская"
        width={133}
        height={42}
      />
      <a className="footer__phone" href="tel:" aria-label="Позвонить">
        <img src="/images/phone.svg" alt="" width={18} height={18} />
      </a>
    </footer>
  );
}
