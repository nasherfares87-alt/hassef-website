/* Hassef Law — bilingual logic, reveal animations, nav behavior */

const I18N = {
  ar: {
    "brand.name": "منظومة حصيف",
    "brand.sub": "للمحاماة والاستشارات القانونية",
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.gov": "خدمات الجهات الحكومية",
    "nav.corp": "خدمات الشركات",
    "nav.values": "قيمنا",
    "nav.contact": "تواصل معنا",
    "hero.badge": "15 عاماً من الخبرة القانونية",
    "hero.title1": "حلول قانونية دقيقة",
    "hero.title2": "تحمي مصالحك وتدعم قراراتك",
    "hero.sub": "من الاستشارات القانونية والترافع، إلى الصياغة التشريعية وتأسيس الشركات والاندماج والاستحواذ — نخدم الجهات الحكومية والشركات بخبرة تمتد لـ15 عاماً.",
    "hero.cta1": "اكتشف خدماتنا",
    "hero.cta2": "استشارة قانونية",
    "hero.stat1": "عاماً من الخبرة",
    "hero.stat2": "قطاعات رئيسية: حكومي وشركات",
    "hero.stat3": "صياغة تشريعية وفق قرار مجلس الوزراء",
    "about.tag": "من نحن",
    "about.title": "شريكك القانوني الموثوق",
    "about.p1": "شركة منظومة حصيف للمحاماة والاستشارات القانونية شركة متخصصة في تقديم الخدمات القانونية والاستشارات المتكاملة للجهات الحكومية والشركات، بخبرة قانونية تمتد لـ15 عاماً.",
    "about.p2": "نجمع بين الخبرة العملية والرؤية الحديثة لنقدم حلولاً قانونية دقيقة تحمي مصالح عملائنا وتدعم قراراتهم.",
    "about.card1.t": "خبرة عملية",
    "about.card1.d": "15 عاماً في خدمة الجهات الحكومية والشركات",
    "about.card2.t": "رؤية حديثة",
    "about.card2.d": "منهجيات معاصرة تسند القرار وتحمي المركز النظامي",
    "about.card3.t": "التزام بالمواعيد",
    "about.card3.d": "دقة وسرية في كل ما نقدمه لعملائنا",
    "gov.tag": "خدماتنا",
    "gov.title": "خدماتنا للجهات الحكومية",
    "gov.intro": "نقدم للجهات الحكومية خدمات قانونية متخصصة تدعم أعمالها ومشاريعها النظامية، بدءاً من الصياغة التشريعية لأنظمة الجهات ولوائحها، وصولاً إلى حوكمة الجهات العامة بما يعزز كفاءتها وسلامة إجراءاتها. كما نتولى الترافع نيابة عن الجهات ونعد الدراسات القانونية والقضائية المتخصصة بمنهجية دقيقة تسند القرار وتحمي المركز النظامي للجهة.",
    "gov.s1.t": "الصياغة التشريعية للأنظمة واللوائح",
    "gov.s1.d": "صياغة أنظمة الجهات ولوائحها وفقاً لقرار مجلس الوزراء رقم (713)",
    "gov.s2.t": "حوكمة الجهات العامة",
    "gov.s2.d": "ما يعزز كفاءة الجهة وسلامة إجراءاتها",
    "gov.s3.t": "تقديم الاستشارات القانونية",
    "gov.s3.d": "استشارات متخصصة تسند أعمال ومشاريع الجهة",
    "gov.s4.t": "الترافع",
    "gov.s4.d": "الترافع نيابة عن الجهات أمام الجهات القضائية المختصة",
    "gov.s5.t": "الدراسات القانونية والقضائية المتخصصة",
    "gov.s5.d": "دراسات بمنهجية دقيقة تحمي المركز النظامي للجهة",
    "corp.tag": "خدماتنا",
    "corp.title": "خدماتنا للشركات",
    "corp.intro": "نرافق الشركات في مختلف مراحلها، من التأسيس وهيكلة الشركة نظامياً، إلى إرساء ممارسات الحوكمة التي تنظم العلاقة بين الملاك والإدارة وتحمي حقوق الأطراف. كما نقدم الدعم القانوني في عمليات الاندماج والاستحواذ، لنكون شريكاً قانونياً موثوقاً يدعم قرارات الشركة ونموها.",
    "corp.s1.t": "تأسيس الشركات",
    "corp.s1.d": "تأسيس وهيكلة الشركة نظامياً من اليوم الأول",
    "corp.s2.t": "الحوكمة",
    "corp.s2.d": "ممارسات تنظم العلاقة بين الملاك والإدارة وتحمي حقوق الأطراف",
    "corp.s3.t": "المراجعة القانونية لقرارات مجالس الإدارة",
    "corp.s3.d": "لضمان سلامة القرارات ومطابقتها للأنظمة",
    "corp.s4.t": "الاندماج والاستحواذ",
    "corp.s4.d": "دعم قانوني متكامل عبر كامل مراحل الصفقة",
    "corp.s5.t": "الاستشارات القانونية والترافع",
    "corp.s5.d": "شريك قانوني موثوق يدعم قرارات الشركة ونموها",
    "corp.s6.t": "إعداد الدراسات القانونية",
    "corp.s6.d": "دراسات دقيقة تسند قرارات الشركة الاستراتيجية",
    "values.tag": "قيمنا",
    "values.title": "ما نلتزم به في كل تعامل",
    "values.v1.t": "السرية",
    "values.v2.t": "الدقة",
    "values.v3.t": "الالتزام بالمواعيد",
    "values.v4.t": "علاقات مهنية طويلة الأمد",
    "contact.title": "لنبدأ الحديث عن احتياجك القانوني",
    "contact.sub": "فريقنا القانوني جاهز للاستماع إليك وتقديم الدعم الذي تحتاجه — بسرية تامة ودقة عالية.",
    "contact.email": "راسلنا: info@hassef.sa",
    "contact.phone": "اتصل بنا",
    "contact.note": "المملكة العربية السعودية — الرياض",
    "meta.title": "منظومة حصيف للمحاماة والاستشارات القانونية | Hassef Law",
    "meta.desc": "شركة متخصصة في الخدمات القانونية والاستشارات المتكاملة للجهات الحكومية والشركات — 15 عاماً من الخبرة."
  },
  en: {
    "brand.name": "Hassef Law",
    "brand.sub": "Legal Services & Consultations",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.gov": "Government Services",
    "nav.corp": "Corporate Services",
    "nav.values": "Our Values",
    "nav.contact": "Contact Us",
    "hero.badge": "15 Years of Legal Excellence",
    "hero.title1": "Precise Legal Solutions",
    "hero.title2": "that protect your interests and empower your decisions",
    "hero.sub": "From legal consultations and litigation to legislative drafting, company formation, and mergers & acquisitions — we serve government entities and corporations with 15 years of experience.",
    "hero.cta1": "Explore Our Services",
    "hero.cta2": "Request a Consultation",
    "hero.stat1": "Years of Experience",
    "hero.stat2": "Core Sectors: Government & Corporate",
    "hero.stat3": "Legislative drafting per Council of Ministers Resolution",
    "about.tag": "About Us",
    "about.title": "Your Trusted Legal Partner",
    "about.p1": "Hassef Law is a specialized firm providing comprehensive legal services and consultations to government entities and corporations, backed by 15 years of legal experience.",
    "about.p2": "We combine practical expertise with a modern vision to deliver precise legal solutions that protect our clients' interests and support their decisions.",
    "about.card1.t": "Practical Expertise",
    "about.card1.d": "15 years serving government entities and corporations",
    "about.card2.t": "Modern Vision",
    "about.card2.d": "Contemporary methodologies that support decisions and protect legal standing",
    "about.card3.t": "Commitment to Deadlines",
    "about.card3.d": "Accuracy and confidentiality in everything we deliver",
    "gov.tag": "Our Services",
    "gov.title": "Government Entity Services",
    "gov.intro": "We provide government entities with specialized legal services supporting their operations and regulatory projects — from legislative drafting of entity regulations in accordance with Council of Ministers Resolution No. (713), to public governance that enhances efficiency and procedural integrity. We also represent entities before competent judicial authorities and prepare specialized legal and judicial studies with a rigorous methodology.",
    "gov.s1.t": "Legislative Drafting of Regulations",
    "gov.s1.d": "Drafting entity regulations and bylaws per Council of Ministers Resolution No. (713)",
    "gov.s2.t": "Public Governance",
    "gov.s2.d": "Enhancing entity efficiency and procedural integrity",
    "gov.s3.t": "Legal Consultations",
    "gov.s3.d": "Specialized advice supporting the entity's operations and projects",
    "gov.s4.t": "Litigation",
    "gov.s4.d": "Representing entities before competent judicial authorities",
    "gov.s5.t": "Specialized Legal & Judicial Studies",
    "gov.s5.d": "Rigorous studies that support decisions and protect legal standing",
    "corp.tag": "Our Services",
    "corp.title": "Corporate Services",
    "corp.intro": "We accompany companies through every stage — from incorporation and lawful structuring, to establishing governance practices that organize the relationship between owners and management while protecting all parties. We also provide legal support for mergers and acquisitions, to be a trusted legal partner supporting the company's decisions and growth.",
    "corp.s1.t": "Company Incorporation",
    "corp.s1.d": "Lawful incorporation and structuring from day one",
    "corp.s2.t": "Governance",
    "corp.s2.d": "Practices that organize owner–management relations and protect stakeholders",
    "corp.s3.t": "Legal Review of Board Decisions",
    "corp.s3.d": "Ensuring soundness and regulatory compliance",
    "corp.s4.t": "Mergers & Acquisitions",
    "corp.s4.d": "Comprehensive legal support across every deal stage",
    "corp.s5.t": "Consultations & Litigation",
    "corp.s5.d": "A trusted legal partner supporting decisions and growth",
    "corp.s6.t": "Legal Studies",
    "corp.s6.d": "Precise studies supporting strategic corporate decisions",
    "values.tag": "Our Values",
    "values.title": "Our Commitment in Every Engagement",
    "values.v1.t": "Confidentiality",
    "values.v2.t": "Accuracy",
    "values.v3.t": "Commitment to Deadlines",
    "values.v4.t": "Long-term Professional Relationships",
    "contact.title": "Let's Discuss Your Legal Needs",
    "contact.sub": "Our legal team is ready to listen and provide the support you need — with complete confidentiality and precision.",
    "contact.email": "Email us: info@hassef.sa",
    "contact.phone": "Call Us",
    "contact.note": "Kingdom of Saudi Arabia — Riyadh",
    "meta.title": "Hassef Law | Legal Services & Consultations",
    "meta.desc": "A specialized firm providing comprehensive legal services to government entities and corporations — 15 years of experience."
  }
};

const html = document.documentElement;
const langToggle = document.getElementById("langToggle");
const langActive = document.getElementById("langActive");
const langNext = document.getElementById("langNext");

function applyLang(lang) {
  const dict = I18N[lang];
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.title = dict["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict["meta.desc"]);
  langActive.textContent = lang === "ar" ? "ع" : "EN";
  langNext.textContent = lang === "ar" ? "EN" : "ع";
  localStorage.setItem("hassef-lang", lang);
}

langToggle.addEventListener("click", () => {
  applyLang(html.getAttribute("lang") === "ar" ? "en" : "ar");
});

const saved = localStorage.getItem("hassef-lang");
if (saved && saved !== "ar") applyLang(saved);

/* Header scroll state */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

/* Mobile menu */
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    nav.classList.remove("open");
  })
);

/* Reveal on scroll */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();