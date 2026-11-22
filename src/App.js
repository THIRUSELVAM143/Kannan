import { useEffect, useState } from 'react';
import './App.css';

const business = {
  name: 'PanelForm',
  phone: '+91 7603989128',
  email: 'thiruselvam349@gmail.com',
  address: '[address], Erode, Tamil Nadu, India',
};

const translations = {
  en: {
    nav: ['About', 'Services', 'Projects', 'Contact'],
    quote: 'Get a quote',
    eyebrow: 'FIBRE CEMENT PANEL CONSTRUCTION',
    heroTitle: 'Build faster. Build smarter with fibre cement panels',
    heroText: 'Practical panel-built spaces for the way your business works.',
    heroNote: 'Walls, workspaces and structures — planned and built around you.',
    primary: 'Get a free quote',
    call: 'Call now',
    projectsLink: 'Explore our work',
    since: 'Built for business',
    aboutLabel: 'A better way to build',
    aboutTitle: 'More usable space. Less time on site.',
    aboutText: 'We help businesses create functional spaces with fibre cement panels. From a new partition to a complete site office, our team takes care of the details, coordination and finish.',
    aboutCta: 'Tell us about your project',
    servicesLabel: 'What we build',
    servicesTitle: 'One team. Many ways to build.',
    servicesText: 'A practical construction partner for new spaces, smarter layouts and fast-moving projects.',
    services: [
      ['Partition walls', 'Create clean, practical rooms and work zones without conventional masonry.'],
      ['Mezzanine floors', 'Make better use of vertical space with a planned mezzanine floor system.'],
      ['Prefab cabins', 'Set up a site office, security cabin or functional workspace with less on-site work.'],
      ['Panel flooring & roofing', 'Panel-based floor and roof solutions for project-specific needs.'],
      ['Joint finishing', 'Get a neat, consistent surface with careful jointing and finishing work.'],
    ],
    benefitsLabel: 'Built around your needs',
    benefitsTitle: 'Why choose panel construction?',
    benefitsText: 'A considered alternative to traditional building for many commercial and industrial spaces.',
    benefits: [
      ['Faster installation', 'Panel systems can help reduce on-site construction time.'],
      ['Flexible layouts', 'Plan new rooms and partitions around the way you work.'],
      ['Lighter construction', 'A practical option when you need to create space with less structural load.'],
      ['Neat finish', 'Consistent panels and carefully finished joints create a clean look.'],
      ['Less site disruption', 'Organised installation helps keep your project moving.'],
      ['Made for many uses', 'From work zones and cabins to floors and roofing structures.'],
    ],
    processLabel: 'Straightforward from day one',
    processTitle: 'A clear process. A better build.',
    process: [
      ['Tell us what you need', 'Share your site, space and project goals.'],
      ['Plan the right solution', 'We discuss the layout, materials and scope with you.'],
      ['Build on site', 'Our team coordinates the panel work and installation.'],
      ['Finish and hand over', 'We complete the finishing details and walk you through the result.'],
    ],
    galleryLabel: 'Work in progress and finished spaces',
    galleryTitle: 'Built on real sites.',
    galleryText: 'A look at panel walls, mezzanines, cabins and structures from our project photos.',
    filters: ['All projects', 'Partitions', 'Mezzanine', 'Prefab cabins', 'Structures'],
    galleryButton: 'View project photo',
    applicationsLabel: 'Spaces we serve',
    applicationsTitle: 'Useful spaces for real work.',
    applicationsText: 'We work with owners and project teams across a range of industries.',
    applications: ['Factories & workshops', 'Offices & workspaces', 'Schools & institutions', 'Farms & agriculture', 'Resorts & hospitality', 'Plots & developments'],
    faqLabel: 'Good to know',
    faqTitle: 'Frequently asked questions',
    faq: [
      ['What is fibre cement panel construction?', 'It is a way to create walls and other building elements using fibre cement panels fixed to a suitable support system. The right build-up depends on the application and site conditions.'],
      ['Where do you provide your services?', 'We are based in Erode, Tamil Nadu. Share your project location with us and we can discuss the scope and feasibility.'],
      ['Can you build a site office or prefab cabin?', 'Yes. We work on prefab cabins and site offices, as well as partition walls, mezzanine floors, panel flooring, roofing structures and joint finishing.'],
      ['How do I get a quote?', 'Send us your location, a short description of the requirement and any useful site photos. We will review the details and discuss next steps.'],
    ],
    testimonialsLabel: 'A good build starts with trust',
    testimonialsTitle: 'Projects are personal. So is our approach.',
    testimonialsText: 'We focus on clear conversations, practical planning and careful work from the first site discussion to the final finish.',
    contactLabel: 'Let’s talk about your site',
    contactTitle: 'Have a space in mind?',
    contactText: 'Tell us what you want to build. We’ll help you explore the next step.',
    formName: 'Your name',
    formPhone: 'Phone number',
    formLocation: 'Project location',
    formRequirement: 'What do you need?',
    formUpload: 'Add a site photo (optional)',
    formUploadButton: 'Choose a photo',
    formSubmit: 'Prepare my enquiry',
    formPrivacy: 'Your photo stays in this browser and is not uploaded.',
    formFeedback: 'To receive enquiries online, connect this form to your email or a form service. For now, please use the contact details beside this form.',
    locationTitle: 'Based in Erode',
    locationText: 'Erode, Tamil Nadu, India',
    addressLabel: 'Address',
    phoneLabel: 'Call us',
    emailLabel: 'Email us',
    placeholderNote: 'Replace the bracketed contact details with your business information.',
    footerText: 'Practical panel construction for better business spaces.',
    footerLinks: ['Privacy', 'Contact'],
    whatsapp: 'Chat on WhatsApp',
    close: 'Close image',
    previous: 'Previous photo',
    next: 'Next photo',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'தமிழ்',
  },
  ta: {
    nav: ['எங்களைப் பற்றி', 'சேவைகள்', 'திட்டங்கள்', 'தொடர்பு'],
    quote: 'விலை கேட்க',
    eyebrow: 'ஃபைபர் சிமெண்ட் பேனல் கட்டுமானம்',
    heroTitle: 'விரைவாகக் கட்டுங்கள். சிறப்பாகக் கட்டுங்கள்',
    heroText: 'உங்கள் தொழிலுக்கான பயனுள்ள பேனல் கட்டமைப்புகள்.',
    heroNote: 'சுவர்கள், பணியிடங்கள், கட்டமைப்புகள் — உங்கள் தேவைக்கேற்ப.',
    primary: 'இலவச விலை மதிப்பீடு',
    call: 'அழைக்கவும்',
    projectsLink: 'எங்கள் பணிகளைப் பாருங்கள்',
    since: 'தொழிலுக்கான கட்டுமானம்',
    aboutLabel: 'கட்டுமானத்தின் சிறந்த வழி',
    aboutTitle: 'பயனுள்ள இடம். குறைந்த நேரத்தில்.',
    aboutText: 'ஃபைபர் சிமெண்ட் பேனல்கள் மூலம் பயனுள்ள இடங்களை உருவாக்க உதவுகிறோம். பகிர்வு சுவர் முதல் தள அலுவலகம் வரை, திட்டமிடல் முதல் இறுதிப் பணி வரை கவனிக்கிறோம்.',
    aboutCta: 'உங்கள் திட்டத்தைப் பகிருங்கள்',
    servicesLabel: 'எங்கள் பணிகள்',
    servicesTitle: 'ஒரே குழு. பல கட்டுமானங்கள்.',
    servicesText: 'புதிய இடங்கள், சிறந்த அமைப்புகள் மற்றும் விரைவான திட்டங்களுக்கு நடைமுறை கட்டுமான உதவி.',
    services: [
      ['பகிர்வு சுவர்கள்', 'செங்கல் கட்டுமானமின்றி சுத்தமான அறைகள் மற்றும் பணியிடங்களை உருவாக்குங்கள்.'],
      ['மெஸ்ஸனைன் தளங்கள்', 'திட்டமிட்ட மெஸ்ஸனைன் தள அமைப்புடன் உயர இடத்தைச் சிறப்பாகப் பயன்படுத்துங்கள்.'],
      ['முன் தயாரிப்பு கேபின்கள்', 'தள அலுவலகம் அல்லது பாதுகாப்பு கேபினை விரைவாக அமைக்கவும்.'],
      ['பேனல் தரை & கூரை', 'திட்டத் தேவைகளுக்கான பேனல் தரை மற்றும் கூரைத் தீர்வுகள்.'],
      ['இணைப்பு முடித்தல்', 'கவனமான இணைப்பு மற்றும் முடித்தல் பணியுடன் சீரான தோற்றம்.'],
    ],
    benefitsLabel: 'உங்கள் தேவைக்காக',
    benefitsTitle: 'பேனல் கட்டுமானம் ஏன்?',
    benefitsText: 'பல வணிக மற்றும் தொழில்துறை இடங்களுக்கு பாரம்பரிய கட்டுமானத்திற்கு ஏற்ற மாற்று.',
    benefits: [
      ['விரைவான நிறுவல்', 'பேனல் அமைப்புகள் தளப் பணிநேரத்தைக் குறைக்க உதவும்.'],
      ['மாற்றக்கூடிய அமைப்பு', 'உங்கள் பணிமுறைக்கு ஏற்ற அறைகள் மற்றும் சுவர்களைத் திட்டமிடுங்கள்.'],
      ['குறைந்த எடை', 'குறைந்த கட்டமைப்பு சுமையுடன் இடம் உருவாக்க உதவும் நடைமுறைத் தேர்வு.'],
      ['சீரான முடிப்பு', 'ஒரே மாதிரியான பேனல்கள் மற்றும் கவனமான இணைப்புகள் அழகான தோற்றம் தரும்.'],
      ['தள இடையூறு குறைவு', 'ஒழுங்கான நிறுவல் உங்கள் திட்டத்தைத் தொடர உதவும்.'],
      ['பல பயன்பாடுகள்', 'பணியிடம், கேபின், தரை மற்றும் கூரை கட்டமைப்புகளுக்கு.'],
    ],
    processLabel: 'எளிய தொடக்கம்',
    processTitle: 'தெளிவான செயல்முறை. சிறந்த கட்டுமானம்.',
    process: [
      ['தேவையைப் பகிருங்கள்', 'தளம், இடம் மற்றும் திட்ட நோக்கத்தைப் பகிருங்கள்.'],
      ['தீர்வைத் திட்டமிடுவோம்', 'அமைப்பு, பொருட்கள் மற்றும் பணிகளைப் பற்றி ஆலோசிப்போம்.'],
      ['தளத்தில் கட்டுவோம்', 'எங்கள் குழு பேனல் பணிகளையும் நிறுவலையும் ஒருங்கிணைக்கும்.'],
      ['முடித்து ஒப்படைப்போம்', 'இறுதிப் பணிகளை முடித்து கட்டுமானத்தை உங்களுடன் சரிபார்ப்போம்.'],
    ],
    galleryLabel: 'நடைபெறும் மற்றும் முடிந்த பணிகள்',
    galleryTitle: 'உண்மையான தளங்களில் கட்டப்பட்டது.',
    galleryText: 'எங்கள் திட்டப் படங்களில் சுவர்கள், மெஸ்ஸனைன், கேபின்கள் மற்றும் கட்டமைப்புகள்.',
    filters: ['அனைத்தும்', 'பகிர்வு சுவர்கள்', 'மெஸ்ஸனைன்', 'கேபின்கள்', 'கட்டமைப்புகள்'],
    galleryButton: 'திட்டப் படத்தைப் பார்க்க',
    applicationsLabel: 'நாங்கள் சேவை செய்யும் இடங்கள்',
    applicationsTitle: 'பணிக்கான பயனுள்ள இடங்கள்.',
    applicationsText: 'பல துறைகளின் உரிமையாளர்கள் மற்றும் திட்டக் குழுக்களுடன் பணிபுரிகிறோம்.',
    applications: ['தொழிற்சாலைகள் & பட்டறைகள்', 'அலுவலகங்கள் & பணியிடங்கள்', 'பள்ளிகள் & நிறுவனங்கள்', 'பண்ணைகள் & விவசாயம்', 'ரிசார்ட்கள் & விருந்தோம்பல்', 'மனை & மேம்பாட்டுத் திட்டங்கள்'],
    faqLabel: 'அறிய வேண்டியவை',
    faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    faq: [
      ['ஃபைபர் சிமெண்ட் பேனல் கட்டுமானம் என்றால் என்ன?', 'பொருத்தமான ஆதரவு அமைப்பில் பொருத்தப்பட்ட ஃபைபர் சிமெண்ட் பேனல்கள் மூலம் சுவர்கள் மற்றும் கட்டுமானப் பகுதிகளை உருவாக்கும் முறை. பயன்பாடு மற்றும் தளத்தைப் பொறுத்து அமைப்பு மாறும்.'],
      ['எந்த இடங்களில் சேவை வழங்குகிறீர்கள்?', 'நாங்கள் ஈரோடு, தமிழ்நாட்டில் உள்ளோம். உங்கள் திட்ட இடத்தைப் பகிர்ந்தால், பணியின் சாத்தியக்கூறுகளைப் பற்றி பேசலாம்.'],
      ['தள அலுவலகம் அல்லது கேபின் அமைக்க முடியுமா?', 'ஆம். தள அலுவலகம், முன் தயாரிப்பு கேபின், பகிர்வு சுவர், மெஸ்ஸனைன் தளம், பேனல் தரை, கூரை கட்டமைப்பு மற்றும் இணைப்பு முடித்தல் பணிகள் செய்கிறோம்.'],
      ['விலை மதிப்பீடு பெறுவது எப்படி?', 'உங்கள் இடம், தேவையின் விவரம் மற்றும் தளப் படங்களை அனுப்புங்கள். விவரங்களைப் பார்த்து அடுத்த படிகளைப் பேசுவோம்.'],
    ],
    testimonialsLabel: 'நம்பிக்கையுடன் தொடங்கும் கட்டுமானம்',
    testimonialsTitle: 'ஒவ்வொரு திட்டமும் முக்கியம்.',
    testimonialsText: 'முதல் ஆலோசனை முதல் இறுதிப் பணி வரை தெளிவான உரையாடல், நடைமுறைத் திட்டமிடல் மற்றும் கவனமான வேலை.',
    contactLabel: 'உங்கள் தளத்தைப் பற்றி பேசலாம்',
    contactTitle: 'ஒரு இடத்தை உருவாக்கத் திட்டமா?',
    contactText: 'உங்கள் கட்டுமானத் தேவையைச் சொல்லுங்கள். அடுத்த படியைத் திட்டமிட உதவுகிறோம்.',
    formName: 'உங்கள் பெயர்',
    formPhone: 'தொலைபேசி எண்',
    formLocation: 'திட்ட இடம்',
    formRequirement: 'உங்கள் தேவை என்ன?',
    formUpload: 'தளப் படத்தைச் சேர்க்கவும் (விருப்பம்)',
    formUploadButton: 'படத்தைத் தேர்வு செய்யுங்கள்',
    formSubmit: 'விசாரணையைத் தயாரிக்கவும்',
    formPrivacy: 'படம் இந்த உலாவியில் மட்டுமே இருக்கும்; பதிவேற்றப்படாது.',
    formFeedback: 'ஆன்லைனில் விசாரணைகளைப் பெற இந்தப் படிவத்தை உங்கள் மின்னஞ்சல் அல்லது சேவையுடன் இணைக்கவும். இப்போது அருகிலுள்ள தொடர்பு விவரங்களைப் பயன்படுத்தவும்.',
    locationTitle: 'ஈரோட்டில்',
    locationText: 'ஈரோடு, தமிழ்நாடு, இந்தியா',
    addressLabel: 'முகவரி',
    phoneLabel: 'அழைக்கவும்',
    emailLabel: 'மின்னஞ்சல்',
    placeholderNote: 'அடைப்புக்குறிக்குள் உள்ள தொடர்பு விவரங்களை உங்கள் வணிகத் தகவலால் மாற்றுங்கள்.',
    footerText: 'சிறந்த வணிக இடங்களுக்கான பேனல் கட்டுமானம்.',
    footerLinks: ['தனியுரிமை', 'தொடர்பு'],
    whatsapp: 'வாட்ஸ்அப்பில் பேசுங்கள்',
    close: 'படத்தை மூடவும்',
    previous: 'முந்தைய படம்',
    next: 'அடுத்த படம்',
    openMenu: 'மெனுவைத் திற',
    closeMenu: 'மெனுவை மூடவும்',
    language: 'English',
  },
};

const projects = [
  { title: 'Fibre cement partition installation', category: 'Partitions', image: '/images/partition-installation.jpg', alt: 'Fibre cement partition wall installation inside a large industrial workspace' },
  { title: 'Finished panel wall and workspace', category: 'Partitions', image: '/images/partition-finish.jpg', alt: 'Finished fibre cement panel partition wall in a commercial site office' },
  { title: 'Industrial mezzanine floor', category: 'Mezzanine', image: '/images/mezzanine-installation.jpg', alt: 'Mezzanine floor and panel installation inside an industrial building' },
  { title: 'Panel mezzanine structure', category: 'Mezzanine', image: '/images/mezzanine-project.jpg', alt: 'Interior view of a completed mezzanine level with fibre cement panels' },
  { title: 'Prefab site office cabin', category: 'Prefab cabins', image: '/images/prefab-site-office.jpg', alt: 'Prefab site office cabin installed at an open project site' },
  { title: 'Panel cabin exterior', category: 'Prefab cabins', image: '/images/prefab-cabin-exterior.jpg', alt: 'Fibre cement panel cabin exterior with a covered entry structure' },
  { title: 'Roofing and steel frame', category: 'Structures', image: '/images/roofing-structure.jpg', alt: 'Steel roof framing prepared for a panel construction project' },
  { title: 'Panel building structure', category: 'Structures', image: '/images/panel-structure.jpg', alt: 'Panel-built site structure with roof and exterior walls' },
  { title: 'Joint finishing in progress', category: 'Partitions', image: '/images/joint-finishing.jpg', alt: 'Fibre cement panel joints being finished on an interior wall' },
  { title: 'Cabin interior panels', category: 'Prefab cabins', image: '/images/cabin-interior.jpg', alt: 'Interior wall panels and doorway in a prefab cabin' },
  { title: 'Panel wall installation', category: 'Partitions', image: '/images/wall-panels.jpg', alt: 'Workers fitting large fibre cement panels inside an industrial space' },
  { title: 'Prefab cabin at site', category: 'Prefab cabins', image: '/images/hero-cabin.jpg', alt: 'Compact prefab site cabin standing at a development site' },
];

const serviceIcons = ['▥', '▤', '⌂', '◫', '✳'];
const benefitIcons = ['↗', '⊞', '▱', '✓', '◷', '⌂'];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      {diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3 10h13m-5-5 5 5-5 5" />}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M6.3 2.8 8.6 6 7.3 8c.8 1.7 2.1 3 3.8 3.8l2-1.3 3.2 2.3-.9 3.1c-.2.6-.8 1-1.5.9C7.2 15.9 4.1 12.8 3.2 6.1c-.1-.7.3-1.3.9-1.5l2.2-1.8Z" />
    </svg>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="PanelForm home">
      <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
      <span className="brand-copy">
        <strong>PANEL<span>FORM</span></strong>
        <small>BUILT FOR WHAT'S NEXT</small>
      </span>
    </a>
  );
}

function App() {
  const [language, setLanguage] = useState('en');
  const [activeFilter, setActiveFilter] = useState('All projects');
  const [activeProject, setActiveProject] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const t = translations[language];
  const categories = ['All projects', 'Partitions', 'Mezzanine', 'Prefab cabins', 'Structures'];
  const visibleProjects = activeFilter === 'All projects'
    ? projects
    : projects.filter((project) => project.category === activeFilter);
  const phoneConfigured = !business.phone.startsWith('[');
  const emailConfigured = !business.email.startsWith('[');
  const phoneLink = phoneConfigured ? `tel:${business.phone.replace(/[^\d+]/g, '')}` : '#contact';
  const emailLink = emailConfigured ? `mailto:${business.email}` : '#contact';
  const whatsappDigits = business.phone.replace(/\D/g, '');
  const whatsappLink = whatsappDigits.length >= 10 ? `https://wa.me/${whatsappDigits}` : '#contact';

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!activeProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
      if (event.key === 'ArrowRight') {
        setActiveProject((current) => projects[(projects.indexOf(current) + 1) % projects.length]);
      }
      if (event.key === 'ArrowLeft') {
        setActiveProject((current) => projects[(projects.indexOf(current) - 1 + projects.length) % projects.length]);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('lightbox-open');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lightbox-open');
    };
  }, [activeProject]);

  function navigateProject(direction) {
    const index = projects.indexOf(activeProject);
    setActiveProject(projects[(index + direction + projects.length) % projects.length]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormMessage(t.formFeedback);
  }

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span><span className="topline-dot" /> Panel construction · Erode, TN</span>
          <span className="topline-location">Erode, Tamil Nadu, India</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {t.nav.map((label, index) => (
              <a key={label} href={`#${['about', 'services', 'projects', 'contact'][index]}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="header-phone" href={phoneLink}><PhoneIcon />{business.phone}</a>
            <button
              type="button"
              className="language-toggle"
              onClick={() => setLanguage((current) => (current === 'en' ? 'ta' : 'en'))}
              aria-label={`Switch language to ${t.language}`}
            >
              <span className="language-globe">◎</span> {t.language}
            </button>
            <a className="button button-orange nav-quote" href="#contact">{t.primary}<ArrowIcon /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src="/images/hero-cabin.jpg" alt="Prefab fibre cement panel cabin at a project site" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.eyebrow}</span>
              <h1>{t.heroTitle}<span className="hero-period">.</span></h1>
              <p className="hero-lead">{t.heroText}</p>
              <p className="hero-subtext">{t.heroNote}</p>
              <div className="hero-actions">
                <a className="button button-orange" href="#contact">{t.primary}<ArrowIcon /></a>
                <a className="button button-ghost" href={phoneLink}><span className="button-icon"><PhoneIcon /></span>{t.call}</a>
              </div>
              <div className="hero-proof"><span className="proof-rule" />{t.since}<span className="proof-separator">·</span> Erode, Tamil Nadu</div>
            </div>
            <a className="hero-project-link" href="#projects"><span>01</span> {t.projectsLink}<ArrowIcon diagonal /></a>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="container intro-grid">
            <div className="intro-visual">
              <img src="/images/partition-installation.jpg" alt="Fibre cement partition walls being installed in an industrial workspace" loading="lazy" />
              <div className="intro-image-caption"><span className="caption-dot" /> Built around your work</div>
              <span className="intro-index">01 / ABOUT PANELFORM</span>
            </div>
            <div className="intro-copy">
              <span className="eyebrow">{t.aboutLabel}</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
              <div className="intro-points">
                <div><span className="point-check">✓</span><span>Practical site planning</span></div>
                <div><span className="point-check">✓</span><span>Careful installation</span></div>
                <div><span className="point-check">✓</span><span>Finishing that feels considered</span></div>
              </div>
              <a className="text-link" href="#contact">{t.aboutCta}<ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="section-heading heading-split">
              <div><span className="eyebrow">{t.servicesLabel}</span><h2>{t.servicesTitle}</h2></div>
              <p>{t.servicesText}</p>
            </div>
            <div className="service-grid">
              {t.services.map(([title, description], index) => (
                <article className="service-card" key={title}>
                  <div className="service-topline"><span className="service-icon">{serviceIcons[index]}</span><span className="card-index">0{index + 1}</span></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#contact" aria-label={`${t.aboutCta}: ${title}`}><ArrowIcon diagonal /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section section-pad">
          <div className="container">
            <div className="benefits-heading"><span className="eyebrow eyebrow-light">{t.benefitsLabel}</span><h2>{t.benefitsTitle}</h2><p>{t.benefitsText}</p></div>
            <div className="benefit-grid">
              {t.benefits.map(([title, description], index) => (
                <article className="benefit-card" key={title}>
                  <span className="benefit-icon" aria-hidden="true">{benefitIcons[index]}</span>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section section-pad">
          <div className="container">
            <div className="section-heading process-heading"><span className="eyebrow">{t.processLabel}</span><h2>{t.processTitle}</h2></div>
            <div className="process-grid">
              {t.process.map(([title, description], index) => (
                <article className="process-step" key={title}>
                  <span className="process-number">0{index + 1}</span>
                  {index < t.process.length - 1 && <span className="process-connector" />}
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects">
          <div className="container">
            <div className="section-heading heading-split">
              <div><span className="eyebrow">{t.galleryLabel}</span><h2>{t.galleryTitle}</h2></div>
              <p>{t.galleryText}</p>
            </div>
            <div className="filter-row" role="group" aria-label="Filter projects">
              {categories.map((category, index) => (
                <button
                  type="button"
                  className={activeFilter === category ? 'filter-button is-active' : 'filter-button'}
                  key={category}
                  aria-pressed={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                >
                  {t.filters[index]}<span className="filter-count">{String(category === 'All projects' ? projects.length : projects.filter((project) => project.category === category).length).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
            <div className="project-grid">
              {visibleProjects.map((project, index) => (
                <button
                  className={`project-card${index === 0 ? ' project-card-large' : ''}`}
                  key={project.image}
                  type="button"
                  onClick={() => setActiveProject(project)}
                  aria-label={`${t.galleryButton}: ${project.title}`}
                >
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-overlay"><span className="project-category">{t.filters[categories.indexOf(project.category)] || project.category}</span><strong>{project.title}</strong></span>
                  <span className="project-open"><ArrowIcon diagonal /></span>
                </button>
              ))}
            </div>
            <div className="gallery-footer"><span>SELECTED PROJECT PHOTOS</span><span>{String(visibleProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span></div>
          </div>
        </section>

        <section className="applications-section section-pad">
          <div className="container applications-layout">
            <div className="applications-copy"><span className="eyebrow">{t.applicationsLabel}</span><h2>{t.applicationsTitle}</h2><p>{t.applicationsText}</p></div>
            <div className="applications-list">
              {t.applications.map((application, index) => <div key={application}><span>0{index + 1}</span><strong>{application}</strong><ArrowIcon diagonal /></div>)}
            </div>
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="container faq-layout">
            <div className="faq-intro"><span className="eyebrow">{t.faqLabel}</span><h2>{t.faqTitle}</h2><p>{t.contactText}</p><a className="text-link" href="#contact">{t.aboutCta}<ArrowIcon /></a></div>
            <div className="faq-list">
              {t.faq.map(([question, answer], index) => (
                <article className={`faq-item${activeFaq === index ? ' is-open' : ''}`} key={question}>
                  <button type="button" className="faq-question" aria-expanded={activeFaq === index} onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                    <span><i>0{index + 1}</i>{question}</span><span className="faq-toggle" aria-hidden="true" />
                  </button>
                  {activeFaq === index && <div className="faq-answer"><p>{answer}</p></div>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container testimonial-content">
            <span className="eyebrow eyebrow-light">{t.testimonialsLabel}</span>
            <span className="quote-mark" aria-hidden="true">“</span>
            <h2>{t.testimonialsTitle}</h2>
            <p>{t.testimonialsText}</p>
            <div className="testimonial-signature"><span /> PANELFORM · ERODE, TAMIL NADU</div>
          </div>
          <div className="testimonial-shape" aria-hidden="true" />
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container">
            <div className="section-heading contact-heading"><span className="eyebrow">{t.contactLabel}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
            <div className="contact-grid">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label>{t.formName}<input type="text" name="name" placeholder="e.g. Your name" autoComplete="name" required /></label>
                  <label>{t.formPhone}<input type="tel" name="phone" placeholder="+91" autoComplete="tel" required /></label>
                  <label className="form-field-wide">{t.formLocation}<input type="text" name="location" placeholder="Town or project site" autoComplete="address-level2" required /></label>
                  <label className="form-field-wide">{t.formRequirement}<textarea name="requirement" rows="4" placeholder="Tell us about your space or project..." required /></label>
                  <div className="form-field-wide upload-field">
                    <span className="upload-label">{t.formUpload}</span>
                    <label className="upload-control"><input type="file" name="sitePhoto" accept="image/*" onChange={(event) => setFileName(event.target.files?.[0]?.name || '')} /><span className="upload-icon">+</span>{fileName || t.formUploadButton}</label>
                    <span className="upload-hint">{t.formPrivacy}</span>
                  </div>
                </div>
                <button type="submit" className="button button-orange form-submit">{t.formSubmit}<ArrowIcon /></button>
                {formMessage && <p className="form-message" role="status">{formMessage}</p>}
              </form>
              <aside className="contact-aside">
                <div className="contact-details">
                  <span className="eyebrow eyebrow-light">{t.locationTitle}</span>
                  <h3>PanelForm<br />{t.locationText}</h3>
                  <div className="contact-detail"><span>{t.addressLabel}</span><p>{business.address}</p></div>
                  <a className="contact-detail contact-detail-link" href={phoneLink}><span>{t.phoneLabel}</span><p>{business.phone}</p></a>
                  <a className="contact-detail contact-detail-link" href={emailLink}><span>{t.emailLabel}</span><p>{business.email}</p></a>
                  <p className="placeholder-note">{t.placeholderNote}</p>
                </div>
                <div className="map-frame">
                  <iframe title="Map showing Erode, Tamil Nadu" src="https://www.google.com/maps?q=Erode,Tamil%20Nadu&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  <a href="https://maps.google.com/?q=Erode,Tamil+Nadu" target="_blank" rel="noreferrer">OPEN MAP <ArrowIcon diagonal /></a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><BrandMark /><p>{t.footerText}</p></div>
          <div className="footer-nav"><span>EXPLORE</span>{t.nav.map((label, index) => <a key={label} href={`#${['about', 'services', 'projects', 'contact'][index]}`}>{label}</a>)}</div>
          <div className="footer-contact"><span>GET IN TOUCH</span><a href={phoneLink}>{business.phone}</a><a href={emailLink}>{business.email}</a><a href="#contact">{business.address}</a></div>
          <a className="footer-cta" href="#contact">{t.quote}<ArrowIcon diagonal /></a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} PanelForm. {t.footerText}</span><span>ERODE · TAMIL NADU · INDIA</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink} target={whatsappLink.startsWith('https:') ? '_blank' : undefined} rel={whatsappLink.startsWith('https:') ? 'noreferrer' : undefined} aria-label={t.whatsapp}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M20.2 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-4a8.1 8.1 0 1 1 15-4.3Z" /><path d="M9 8.5c.3-.5.6-.5.9-.5.2 0 .4 0 .5.4l.7 1.6c.1.3 0 .5-.2.7l-.5.6c-.2.2-.1.4 0 .6.6 1 1.4 1.7 2.4 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.7-.1l1.5.7c.3.2.4.3.4.5 0 .3-.2.8-.5 1.1-.4.4-1.1.7-1.8.6-1-.2-2.2-.7-3.4-1.7-1-.8-1.8-1.9-2.2-2.9-.3-.8-.2-1.5.2-2.1Z" /></svg>
        <span>{t.whatsapp}</span>
      </a>
      <a className="floating-call" href={phoneLink} aria-label={t.call}><PhoneIcon /></a>

      {activeProject && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={() => setActiveProject(null)}>
          <button type="button" className="lightbox-close" onClick={() => setActiveProject(null)} aria-label={t.close}>×</button>
          <button type="button" className="lightbox-arrow lightbox-previous" aria-label={t.previous} onClick={(event) => { event.stopPropagation(); navigateProject(-1); }}>‹</button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={activeProject.image} alt={activeProject.alt} />
            <figcaption>{activeProject.title}<span>{activeProject.category}</span></figcaption>
          </figure>
          <button type="button" className="lightbox-arrow lightbox-next" aria-label={t.next} onClick={(event) => { event.stopPropagation(); navigateProject(1); }}>›</button>
        </div>
      )}
    </div>
  );
}

export default App;
