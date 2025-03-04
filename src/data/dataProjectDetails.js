const projectsDetails = [
  {
    id: 1,
    title: "Projeto 1",
    texto1: "Encarte rápido",
    texto2: "Supermarket flyer generator.",
    description: "Encarte Rápido is a cross-platform app for iOS and Android, built with Flutter, providing a complete solution for creating and customizing marketing flyers. It allows users to load products via API, automatically remove image backgrounds, and design custom themes using a Canvas Drag and Drop system. With flexible grid layouts, local data storage, and seamless API synchronization, the app ensures an efficient and intuitive experience, handling everything directly within the platform.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/encarte-1.jpg"),
      require("../assets/imagesDetailsProjects/encarte-2.jpg"),
      require("../assets/imagesDetailsProjects/encarte-3.jpg"),
      require("../assets/imagesDetailsProjects/encarte-4.jpg")
    ],
    icon: require("../assets/icons/encarte.png"),
    video: "",
    badges: [
      require("../assets/badgets/apple.png"),
      require("../assets/badgets/google.png")
    ],
    links: [
      "https://apple.co/3Y0B5Rj",
      "https://play.google.com/store/apps/details?id=com.marcelo.encarte_facil_2&pcampaignid=web_share"
    ],
    isVertical: true
  },
  {
    id: 2,
    title: "Projeto 2",
    texto1: "Trendy",
    texto2: "Personal media to live new experiences.",
    description: "Trendy is a team-developed project that took 6 months to complete.\n\nIt helps you discover and experience unconventional activities, encouraging you to step out of your routine.\n\nWith gamified challenges, it motivates you to create memories and capture them within the app—perfect for anyone looking to explore new adventures and share their journey!\n\nTechnologies used include SwiftUI, CloudKit, CoreData, UserDefaults, and Animation. For complex animations within the sticker image grid, SpriteKit was implemented.\n\nThe app follows a structured architecture using Coordinator and VIPER, ensuring scalability and maintainability.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/trendy-1.jpg"),
      require("../assets/imagesDetailsProjects/trendy-2.jpg"),
      require("../assets/imagesDetailsProjects/trendy-3.jpg"),
      require("../assets/imagesDetailsProjects/trendy-4.jpg"),
    ],
    icon: require("../assets/icons/trendy.png"),
    video: "",
    badges: [
      require("../assets/badgets/apple.png"),
    ],
    links: [
      "https://apple.co/47mKdCK"
    ],
    isVertical: true
  },
  {
    id: 3,
    title: "Projeto 3",
    texto1: "Burguer Maker",
    texto2: "Build your burger and compete.",
    description: "Burger Maker: Recipe Rush is a game I developed entirely on my own, creating both the code and assets. Available for iPhone and iPad, it offers a fast-paced experience for players who enjoy quick challenges and competitive gameplay. Built with SpriteKit for smooth animations and responsive mechanics, it uses SwiftUI for seamless navigation. The iPad version features a local multiplayer mode, allowing two players to compete on the same device, just like a physical board game.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/burguer-1.png"),
      require("../assets/imagesDetailsProjects/burguer-2.png"),
      require("../assets/imagesDetailsProjects/burguer-3.png"),
    ],    icon: require("../assets/icons/burguer.png"),
    video: require("../assets/videos/burguermaker.mov"),
    badges: [
      require("../assets/badgets/apple.png"),
    ],
    links: [
      "https://apple.co/4ehpSBn"
    ],
    isVertical: false
  },
  {
    id: 4,
    title: "Projeto 4",
    texto1: "Flipty",
    texto2: "A coin or a dice, right from your wrist.",
    description: "Flipty is a team-developed app for iPhone and Apple Watch that simulates two classic games: heads or tails and dice rolling. Built in just two weeks using MVVM architecture, the app provides an immersive experience enhanced with 3D objects and CoreMotion gesture detection. One of Flipty’s standout features is its gesture detection system, powered by a custom CoreMotion algorithm developed entirely by our team. The app is also accessible with VoiceOver, localized in four languages, and designed for a seamless user experience. At launch, Flipty remained in the Top 10 Paid Apps for two weeks, a milestone that highlighted its success among users.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/flipty-1.png"),
    ],
    icon: require("../assets/icons/flipty.png"),
    video: require("../assets/videos/tans.mp4"),
    badges: [
      require("../assets/badgets/apple.png"),
    ],
    links: [
      "https://apple.co/4gFeVes"
    ],
    isVertical: false
  },
  {
    id: 5,
    title: "Projeto 5",
    texto1: "Morfie",
    texto2: "Mood tracker and playlist maker.",
    description: "Morfie is a mood tracker that transforms your emotions into the perfect playlist using the Spotify API. It records how you feel and suggests songs that match your mood or help shift your vibe. Just like a chameleon, the app’s colors and icon change with each new entry. Built with SwiftUI, CoreData, and advanced programming logic, Morfie customizes every detail of the experience. It seamlessly integrates with Spotify’s API to fetch personalized music recommendations.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/morfie-1.jpg"),
      require("../assets/imagesDetailsProjects/morfie-2.jpg"),
      require("../assets/imagesDetailsProjects/morfie-3.jpg"),
    ],
    icon: require("../assets/icons/morfie.png"),
    video: require("../assets/videos/morfie.mov"),
    badges: [],
    links: [],
    isVertical: true,
  },
  {
    id: 6,
    title: "Projeto 6",
    texto1: "Tans",
    texto2: "Mini-games to practice logic.",
    description: "This app was developed in one month by a dedicated team to enhance logical reasoning and introduce computational thinking through interactive mini-games. Built entirely in Swift using SwiftUI, it offers an engaging experience enriched with haptic feedback for greater immersion. The app features three mini-games, each designed to teach fundamental logic concepts in an intuitive way. Players can identify shapes, understand Boolean logic, and explore greater and lesser comparisons to grasp relational logic. Combining education with gamification, the app makes learning problem-solving skills both fun and accessible.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/tans-1.png"),
      require("../assets/imagesDetailsProjects/tans-2.png"),
      require("../assets/imagesDetailsProjects/tans-3.png"),
      require("../assets/imagesDetailsProjects/tans-4.png"),
    ],
    icon: require("../assets/icons/tans.png"),
    video: require("../assets/videos/tans.mp4"),
    badges: [
      require("../assets/badgets/apple.png"),
    ],
    links: [
      "https://apple.co/4ehfYzE"
    ],
    isVertical: false
  },
  {
    id: 7,
    title: "Projeto 7",
    texto1: "Byte Verse",
    texto2: "Gyroscope-based game like Space Invaders.",
    description: "Byteverse is a game developed in one month by a team, bringing an innovative gameplay experience by utilizing the gyroscope for realistic character movement. Built with SpriteKit and Core Motion, the game allows players to tilt their device to control the hero, facing off against drones with skill and precision. This dynamic mechanic creates an immersive and unique experience, making motion a key element of gameplay.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/byte-1.png"),
    ],
    icon: require("../assets/icons/byte.png"),
    video: require("../assets/videos/byteverse.mp4"),
    badges: [
      require("../assets/badgets/apple.png"),
    ],
    links: [
      "https://apple.co/4dm3fKR"
    ],
    isVertical: true
  },
  {
    id: 8,
    title: "Projeto 8",
    texto1: "Word Mistery",
    texto2: "Hangman game using Apple Watch and iPhone.",
    description: "Mystery Word is a dynamic word game that I developed entirely on my own, handling both design and development. Designed for iPhone and Apple Watch, it offers two gameplay modes: players can either mirror their iPhone screen to a TV for a shared experience or control the game entirely from their Apple Watch for a more immersive interaction. Built with SwiftUI and structured using the MVVM architecture, the game ensures smooth performance, scalability, and a seamless user experience enhanced by SwiftUI animations.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/word-1.png"),
      require("../assets/imagesDetailsProjects/word-2.png"),
      require("../assets/imagesDetailsProjects/word-3.png"),
      require("../assets/imagesDetailsProjects/word-4.png"),
    ],    icon: require("../assets/icons/word.png"),
    video: require("../assets/videos/word.mp4"),
    badges: [
      require("../assets/badgets/apple.png"),
    ],
    links: [
      "https://apple.co/3MYZC2D"
    ],
    isVertical: false
  },
  {
    id: 9,
    title: "Projeto 9",
    texto1: "Tardigrade",
    texto2: "Save the world in a 2D game.",
    description: "Tardigrade is a game developed in one month by a team, and it was my first project using SpriteKit. The idea originated from research on how a game could raise awareness about environmental impacts, which led to the choice of the tardigrade as the main character. This microscopic organism is known for its extreme resilience, capable of surviving both high and low temperatures, making it a perfect symbol for adaptation and survival. Through engaging gameplay and an educational approach, Tardigrade encourages players to reflect on environmental challenges while enjoying an immersive experience.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/tardigrade-1.png"),
      require("../assets/imagesDetailsProjects/tardigrade-2.png"),
      require("../assets/imagesDetailsProjects/tardigrade-3.png"),
    ],
    icon: require("../assets/icons/tardigrado.png"),
    video: require("../assets/videos/tardigrado.mov"),
    badges: [
      require("../assets/badgets/apple.png"),
    ],
    links: [
      "https://apple.co/3ZDdEyp"
    ],
    isVertical: false
  },
  {
    id: 10,
    title: "Projeto 10",
    texto1: "Keyboard Animal",
    texto2: "Keyboard to recognize animal songs.",
    description: "Keyboard Animal was my first app developed for the Swift Student Challenge, inspired by a childhood toy. Created entirely on my own, the app was designed to help children learn to recognize animal sounds in a fun and interactive way. Developed using SwiftUI and built within Swift Playgrounds, it provides an engaging experience that combines education and entertainment, making learning more intuitive for young users.",
    imageSrc: [
      require("../assets/imagesDetailsProjects/animal-1.png"),
      require("../assets/imagesDetailsProjects/animal-2.png"),
      require("../assets/imagesDetailsProjects/animal-3.png"),
    ],
    icon: require("../assets/icons/animal.png"),
    video: require("../assets/videos/animal.mp4"),
    badges: [
      require("../assets/badgets/apple.png"),
    ],
    links: [
      "https://apple.co/4dm2pxw"
    ],
    isVertical: false
  }
];

export default projectsDetails;