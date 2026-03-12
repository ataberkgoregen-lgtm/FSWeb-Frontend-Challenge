import workintech from "./src/assets/projects/workintech.svg";
import randomjokes from "./src/assets/projects/randomjokes.svg";
import journey from "./src/assets/projects/journey.svg";
const initialState = {
  theme: "light",
  tr: {
    personal: {
      name: "Almila Su",
      title: "Yaratıcı düşünür\nMinimalizm tutkunu",
      bio: "Merhaba, ben Almila. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünleri geliştiren, kullanıcı deneyimine önem veren bir geliştirici arıyorsanız doğru yerdesiniz. Hadi tanışalım.",
      avatar: "/assets/almila.jpg",
      email: "almilasucode@gmail.com",
      links: {
        github: "https://github.com/almilasu",
        linkedin: "https://linkedin.com/in/almilasu",
        personalBlog: "https://almilasu.dev",
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
        { label: "Doğum Tarihi", value: "24.03.1998" },
        { label: "İkamet Şehri", value: "Ankara" },
        {
          label: "Eğitim Durumu",
          value: "Hacettepe Üni. Biyoloji\nLisans, 2016",
        },
        { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
      ],
      aboutMe: {
        title: "Hakkımda",
        paragraphs: [
          "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Veniam aut, odit laborum aliquam voluptatum nil mollitia.",
          "Minima accusamus ratione soluta aperiam ait voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        ],
      },
    },

    projects: [
      {
        id: 1,
        title: "Workintech",
        image: workintech,
        description:
          "Kullanıcılarınızın hangi çerezleri kabul veya reddedeceğini seçmesine olanak tanıyan basit ve özelleştirilebilir bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile geliştirilmiş olup NPM paketi olarak kullanılabilir.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://github.com/almilasu/workintech",
          live: "https://workintech.com",
        },
      },
      {
        id: 2,
        title: "Random Jokes",
        image: randomjokes,
        description:
          "Kullanıcılarınızın hangi çerezleri kabul veya reddedeceğini seçmesine olanak tanıyan basit ve özelleştirilebilir bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile geliştirilmiş olup NPM paketi olarak kullanılabilir.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://github.com/almilasu/random-jokes",
          live: "https://randomjokes.vercel.app",
        },
      },
      {
        id: 3,
        title: "Journey",
        image: journey,
        description:
          "Kullanıcılarınızın hangi çerezleri kabul veya reddedeceğini seçmesine olanak tanıyan basit ve özelleştirilebilir bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile geliştirilmiş olup NPM paketi olarak kullanılabilir.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://github.com/almilasu/journey",
          live: "https://journey.vercel.app",
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
      name: "Almila Su",
      title: "Creative thinker\nMinimalism lover",
      bio: "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
      avatar: "/assets/almila.jpg",
      email: "almilasucode@gmail.com",
      links: {
        github: "https://github.com/almilasu",
        linkedin: "https://linkedin.com/in/almilasu",
        personalBlog: "https://almilasu.dev",
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
        { label: "Date of Birth", value: "24.03.1998" },
        { label: "City", value: "Ankara" },
        {
          label: "Education",
          value: "Hacettepe Uni. Biology\nBachelor's, 2016",
        },
        { label: "Preferred Role", value: "Frontend, UI" },
      ],
      aboutMe: {
        title: "About Me",
        paragraphs: [
          "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Veniam aut, odit laborum aliquam voluptatum nil mollitia.",
          "Minima accusamus ratione soluta aperiam ait voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        ],
      },
    },

    projects: [
      {
        id: 1,
        title: "Workintech",
        image: workintech,
        description:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://github.com/almilasu/workintech",
          live: "https://workintech.com",
        },
      },
      {
        id: 2,
        title: "Random Jokes",
        image: randomjokes,
        description:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://github.com/almilasu/random-jokes",
          live: "https://randomjokes.vercel.app",
        },
      },
      {
        id: 3,
        title: "Journey",
        image: journey,
        description:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package.",
        tags: ["react", "redux", "axios"],
        links: {
          github: "https://github.com/almilasu/journey",
          live: "https://journey.vercel.app",
        },
      },
    ],

    footerCta: {
      heading: "Let's work together on\nyour next product.",
      email: "almilasucode@gmail.com",
    },
  },
};

export default initialState;
