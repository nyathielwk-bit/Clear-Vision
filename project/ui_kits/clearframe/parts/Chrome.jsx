// Clearframe UI kit — chrome: top nav + footer.
const { Icons } = APP;
const { Button } = DS;

function TopNav({ route, onNavigate, onQuote }) {
  const links = [
    ["home", "Home"],
    ["services", "Services"],
    ["home#packages", "Pricing"],
    ["home#process", "Process"],
    ["contact", "Contact"],
  ];
  const isActive = (id) => {
    const page = id.split("#")[0];
    return page === route && !id.includes("#");
  };
  return (
    <header className="nav">
      <div className="container">
        <div className="nav__inner">
          <button className="nav__brand" onClick={() => onNavigate("home")}>
            <span className="nav__word">Clearframe</span>
          </button>
          <nav className="nav__links">
            {links.map(([id, label]) => (
              <button
                key={id}
                className={"nav__link" + (isActive(id) ? " nav__link--active" : "")}
                onClick={() => onNavigate(id)}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="nav__right">
            <span className="nav__phone"><Icons.Phone size={16} /> (416) 555-0142</span>
            <Button variant="accent" size="sm" onClick={onQuote}>Get a quote</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer({ onNavigate, onQuote }) {
  const cols = [
    ["Services", [["Launch Page", "services#packages"], ["Business Website", "services#packages"], ["Growth Website", "services#packages"], ["Care & maintenance", "services#care"]]],
    ["Company", [["Services", "services"], ["Process", "home#process"], ["FAQ", "home#faq"], ["Contact", "contact"]]],
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <button className="footer__brand footer__brand--btn" onClick={() => onNavigate("home")}>Clearframe Studio</button>
            <p className="footer__about">Fast, professional websites for Toronto &amp; GTA businesses. Clean, credible, and built to convert.</p>
          </div>
          {cols.map(([title, items]) => (
            <div className="footer__col" key={title}>
              <h4>{title}</h4>
              {items.map(([label, target]) => <a key={label} onClick={() => onNavigate(target)}>{label}</a>)}
            </div>
          ))}
          <div className="footer__col">
            <h4>Get in touch</h4>
            <a onClick={onQuote}><span style={{display:"inline-flex",alignItems:"center",gap:"7px"}}><Icons.Mail size={15}/> hello@clearframe.studio</span></a>
            <a onClick={onQuote}><span style={{display:"inline-flex",alignItems:"center",gap:"7px"}}><Icons.Phone size={15}/> (416) 555-0142</span></a>
            <a onClick={() => onNavigate("contact")}><span style={{display:"inline-flex",alignItems:"center",gap:"7px"}}><Icons.Pin size={15}/> Toronto, ON</span></a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Clearframe Studio. All rights reserved.</span>
          <span>Toronto &amp; the GTA</span>
        </div>
      </div>
    </footer>
  );
}

APP.TopNav = TopNav;
APP.Footer = Footer;
