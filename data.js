import workintech from "./src/assets/projects/workintech.svg";
import randomjokes from "./src/assets/projects/randomjokes.svg";
import journey from "./src/assets/projects/journey.svg";
const initialState = {
  theme: "light",
  tr: {
    personal: {
      name: "Ataberk Göregen",
      title: "Yaratıcı Düşünür\n Minimalizm tutkunu",
      bio: "Merhaba, ben Ataberk. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünleri geliştiren, kullanıcı deneyimine önem veren bir geliştirici arıyorsanız doğru yerdesiniz.",
      avatar: "/assets/ataberk.jpg",
      email: "ataberk.goregen@gmail.com",
      links: {
        github: "https://github.com/ataberkgoregen-lgtm",
        linkedin: "https://www.linkedin.com/in/ataberk-g%C3%B6regen-704105202/",
        personalBlog: "/",
      },
      cta: "İşe Al",
    },

    navItems: [
      { id: 1, label: "Yetenekler", href: "skills" },
      { id: 2, label: "Projeler", href: "projects" },
    ],

    navCta: {
      label: "İşe Al",
      href: "#contact",
    },

    skills: [
      {
        id: 1,
        title: "JavaScript",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labore.",
      },
      {
        id: 2,
        title: "React.Js",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
      },
      {
        id: 3,
        title: "Node.Js",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labore.",
      },
    ],

    profile: {
      details: [
        { label: "Doğum Tarihi", value: "20.08.2000" },
        { label: "İkamet Şehri", value: "Ankara" },
        {
          label: "Eğitim Durumu",
          value: "Ondokuz Mayıs Üni. Endüsti Müh.\nLisans,2025",
        },
        {
          label: "Tercih Ettiği Rol",
          value: "Manufacturing Execution System (MES)",
        },
      ],
      aboutMe: {
        title: "Hakkımda",
        paragraphs: [
          "Bilgisayar Mühendisliği yan dalı ve Erasmus deneyimiyle güçlendirilmiş Endüstri Mühendisi. British American Tobacco'da 1 yılı aşkın üretim stajının ardından yazılım geliştirmeye adım atarak Workintech'te 960+ saatlik yoğun Full Stack eğitimi tamamladım.",
          "Süreç optimizasyonu ve veri odaklı düşünce yapısını React, Spring Boot ve SQL gibi modern teknolojilerle birleştiriyorum.",
        ],
      },
    },

    projects: [
      {
        id: 1,
        title: "E-commerce",
        image: workintech,
        description:
          "Bu e-ticaret projesi, modern frontend teknolojileri kullanılarak geliştirilmiş ölçeklenebilir bir web uygulamasıdır. React ile kullanıcı arayüzü oluşturulmuş, Redux ile uygulama genel state yönetimi merkezi hale getirilmiştir. Redux Thunk middleware kullanılarak ürün listeleme, sepet işlemleri ve diğer API çağrıları asenkron şekilde yönetilmiştir.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://github.com/ataberkgoregen-lgtm/e-commerce-website",
          live: "https://vercel.com/ataberkgoregen-6182s-projects/e-commerce-website",
        },
      },
      {
        id: 2,
        title: "AI integration",
        image: randomjokes,
        description:
          "Kullanıcılara yapay zeka destekli etkileşim sunan basit ve özelleştirilebilir bir web uygulaması. React ve Redux ile geliştirilmiş olup, Google Gemini API entegrasyonu sayesinde kullanıcılar dinamik içerik üretebilir ve akıllı öneriler alabilir. Modern frontend teknolojileriyle oluşturulan bu yapı.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://customhookgeminiai.vercel.app/",
          live: "https://github.com/ataberkgoregen-lgtm/customhook-geminiAI-website",
        },
      },
      {
        id: 3,
        title: "Movie Solution",
        image: journey,
        description:
          "Kullanıcıların film içeriklerini kolayca kaydedip yönetmesini sağlayan basit ve özelleştirilebilir bir film yönetim modülü. React ve Redux kullanılarak geliştirilmiş olup, harici API entegrasyonu sayesinde kullanıcılar filmleri listeleyebilir, favorilerine ekleyebilir ve istedikleri zaman silebilir.",
        tags: ["react", "redux", "axios"],
        links: {
          github:
            "https://github.com/ataberkgoregen-lgtm/fsweb-s10g2-redux-filmler-solution",
          live: "https://fsweb-s10g2-redux-filmler-solution-eight-pearl.vercel.app/movies",
        },
      },
    ],

    footerCta: {
      heading: "Bir sonraki ürününüzde\nbirlikte çalışalım.",
      email: "almilasucode@gmail.com",
    },
  },

  en: {
    personal: {
      name: "Ataberk Göregen",
      title: "Creative thinker\nMinimalism lover",
      bio: "Hi, I’m Ataberk. I’m a full-stack developer. If you’re looking for a developer who builds solid and scalable frontend products with a strong focus on user experience, you’re in the right place.",
      avatar: "/assets/almila.jpg",
      email: "almilasucode@gmail.com",
      links: {
        github: "https://github.com/ataberkgoregen-lgtm",
        linkedin: "https://www.linkedin.com/in/ataberk-g%C3%B6regen-704105202/",
        personalBlog: "/",
      },
      cta: "Hire me",
    },

    navItems: [
      { id: 2, label: "Skills", href: "skills" },
      { id: 3, label: "Projects", href: "projects" },
    ],

    navCta: {
      label: "Hire me",
      href: "#contact",
    },

    skills: [
      {
        id: 1,
        title: "JavaScript",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labore.",
      },
      {
        id: 2,
        title: "React.Js",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
      },
      {
        id: 3,
        title: "Node.Js",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labore.",
      },
    ],

    profile: {
      details: [
        { label: "Date of Birth", value: "20.08.2000" },
        { label: "City", value: "Ankara" },
        {
          label: "Education",
          value: "Ondokuz Mayis Uni. Industrial Engineering\nBachelor's, 2025",
        },
        {
          label: "Preferred Role",
          value: "Manufacturing Execution Systems(MES)",
        },
      ],
      aboutMe: {
        title: "About Me",
        paragraphs: [
          "An Industrial Engineer strengthened with a minor in Computer Engineering and Erasmus experience. After completing over one year of production internship at British American Tobacco, I transitioned into software development and completed an intensive 960+ hour Full Stack program at Workintech. I combine process optimization and a data-driven mindset with modern technologies such as React, Spring Boot, and SQL.",
        ],
      },
    },

    projects: [
      {
        id: 1,
        title: "E-commerce",
        image: workintech,
        description:
          "This e-commerce project is a scalable web application built using modern frontend technologies. The user interface is developed with React, and application-wide state management is centralized using Redux. Asynchronous operations such as product listing, cart management, and other API requests are handled through Redux Thunk middleware.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://github.com/ataberkgoregen-lgtm/e-commerce-website",
          live: "https://vercel.com/ataberkgoregen-6182s-projects/e-commerce-website",
        },
      },
      {
        id: 2,
        title: "AI Integration",
        image: randomjokes,
        description:
          "A simple and customizable web application that provides users with AI-powered interactions. It is built using React and Redux, and through integration with the Google Gemini API, users can generate dynamic content and receive intelligent suggestions. This structure is developed using modern frontend technologies.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://customhookgeminiai.vercel.app/",
          live: "https://github.com/ataberkgoregen-lgtm/customhook-geminiAI-website",
        },
      },
      {
        id: 3,
        title: "Movie Solution",
        image: journey,
        description:
          "A simple and customizable movie management module that allows users to easily save and manage movie content. It is built using React and Redux, and through external API integration, users can list movies, add them to their favorites, and delete them whenever they want.",
        tags: ["react", "redux", "axios"],
        links: {
          github:
            "https://github.com/ataberkgoregen-lgtm/fsweb-s10g2-redux-filmler-solution",
          live: "https://fsweb-s10g2-redux-filmler-solution-eight-pearl.vercel.app/movies",
        },
      },
    ],

    footerCta: {
      heading: "Let's work together on\nyour next product.",
      email: "ataberk.goregen@gmail.com",
    },
  },
};

export default initialState;
