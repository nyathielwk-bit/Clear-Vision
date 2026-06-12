// Clearframe UI kit — app shell, routing, scrolling, toast.
const { TopNav, Footer, Home, Services, Contact, Icons } = APP;
const { useState, useEffect, useCallback, useRef } = React;

const PAGES = { home: true, services: true, contact: true };

function App() {
  const [route, setRoute] = useState((typeof window !== "undefined" && window.__CF_ROUTE__) || "home");
  const [toast, setToast] = useState(null);
  const pendingScroll = useRef(null);

  // Smooth-scroll to a section id (offset for the sticky nav).
  const scrollToId = useCallback((id) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (!el) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);
  APP.scrollTo = scrollToId;

  // navigate("services") / navigate("contact") / navigate("home")
  // navigate("home#packages") jumps to a section, switching page first if needed.
  const navigate = useCallback((target) => {
    const [page, hash] = String(target).split("#");
    if (PAGES[page] && page !== undefined) {
      if (page !== route) {
        if (hash) pendingScroll.current = hash;
        setRoute(page);
        if (!hash) window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        hash ? scrollToId(hash) : window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // bare section id on the current page
      scrollToId(target);
    }
  }, [route, scrollToId]);

  const quote = useCallback(() => navigate("contact"), [navigate]);
  const submit = useCallback(() => setToast("Thanks — we’ll send your quote within one business day."), []);

  // After a route change that requested a section, scroll once mounted.
  useEffect(() => {
    if (pendingScroll.current) {
      const id = pendingScroll.current;
      pendingScroll.current = null;
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)));
    }
  }, [route, scrollToId]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="cf-app">
      <TopNav route={route} onNavigate={navigate} onQuote={quote} />
      {route === "home" && <Home onQuote={quote} onSubmitForm={submit} onNavigate={navigate} />}
      {route === "services" && <Services onQuote={quote} />}
      {route === "contact" && <Contact onSubmitForm={submit} />}
      <Footer route={route} onNavigate={navigate} onQuote={quote} />
      {toast ? <div className="toast"><Icons.Check size={16} />{toast}</div> : null}
    </div>
  );
}

APP.App = App;
