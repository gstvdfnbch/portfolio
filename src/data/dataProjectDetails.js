// Importação de ícones
import encarteIcon from "../assets/icons/encarte.png";
import trendyIcon from "../assets/icons/trendy.png";
import burguerIcon from "../assets/icons/burguer.png";
import fliptyIcon from "../assets/icons/flipty.png";
import morfieIcon from "../assets/icons/morfie.png";
import tansIcon from "../assets/icons/tans.png";
import byteIcon from "../assets/icons/byte.png";
import wordIcon from "../assets/icons/word.png";
import tardigradoIcon from "../assets/icons/tardigrado.png";
import animalIcon from "../assets/icons/animal.png";

// Importação de imagens de projetos
import encarte1 from "../assets/imagesDetailsProjects/encarte-1.jpg";
import encarte2 from "../assets/imagesDetailsProjects/encarte-2.jpg";
import encarte3 from "../assets/imagesDetailsProjects/encarte-3.jpg";
import encarte4 from "../assets/imagesDetailsProjects/encarte-4.jpg";

import trendy1 from "../assets/imagesDetailsProjects/trendy-1.jpg";
import trendy2 from "../assets/imagesDetailsProjects/trendy-2.jpg";
import trendy3 from "../assets/imagesDetailsProjects/trendy-3.jpg";
import trendy4 from "../assets/imagesDetailsProjects/trendy-4.jpg";

import burguer1 from "../assets/imagesDetailsProjects/burguer-1.png";
import burguer2 from "../assets/imagesDetailsProjects/burguer-2.png";
import burguer3 from "../assets/imagesDetailsProjects/burguer-3.png";

import flipty1 from "../assets/imagesDetailsProjects/flipty-1.png";

import morfie1 from "../assets/imagesDetailsProjects/morfie-1.jpg";
import morfie2 from "../assets/imagesDetailsProjects/morfie-2.jpg";
import morfie3 from "../assets/imagesDetailsProjects/morfie-3.jpg";

import tans1 from "../assets/imagesDetailsProjects/tans-1.png";
import tans2 from "../assets/imagesDetailsProjects/tans-2.png";
import tans3 from "../assets/imagesDetailsProjects/tans-3.png";
import tans4 from "../assets/imagesDetailsProjects/tans-4.png";

import byte1 from "../assets/imagesDetailsProjects/byte-1.png";

import word1 from "../assets/imagesDetailsProjects/word-1.png";
import word2 from "../assets/imagesDetailsProjects/word-2.png";
import word3 from "../assets/imagesDetailsProjects/word-3.png";
import word4 from "../assets/imagesDetailsProjects/word-4.png";

import tardigrade1 from "../assets/imagesDetailsProjects/tardigrade-1.png";
import tardigrade2 from "../assets/imagesDetailsProjects/tardigrade-2.png";
import tardigrade3 from "../assets/imagesDetailsProjects/tardigrade-3.png";

import animal1 from "../assets/imagesDetailsProjects/animal-1.png";
import animal2 from "../assets/imagesDetailsProjects/animal-2.png";
import animal3 from "../assets/imagesDetailsProjects/animal-3.png";

// Importação de vídeos
import burguerVideo from "../assets/videos/burguermaker.mov";
import fliptyVideo from "../assets/videos/tans.mp4";
import morfieVideo from "../assets/videos/morfie.mov";
import tansVideo from "../assets/videos/tans.mp4";
import byteVideo from "../assets/videos/byteverse.mp4";
import wordVideo from "../assets/videos/word.mp4";
import tardigradeVideo from "../assets/videos/tardigrado.mov";
import animalVideo from "../assets/videos/animal.mp4";

// Importação de badges
import appleBadge from "../assets/badgets/apple.png";
import googleBadge from "../assets/badgets/google.png";

const projectsDetails = [
  {
    id: 1,
    title: "Encarte Rápido",
    texto1: "Encarte rápido",
    texto2: "Supermarket flyer generator.",
    description: "Encarte Rápido is a cross-platform app for iOS and Android, built with Flutter, providing a complete solution for creating and customizing marketing flyers. It allows users to load products via API, automatically remove image backgrounds, and design custom themes using a Canvas Drag and Drop system. With flexible grid layouts, local data storage, and seamless API synchronization, the app ensures an efficient and intuitive experience, handling everything directly within the platform.",
    imageSrc: [encarte1, encarte2, encarte3, encarte4],
    icon: encarteIcon,
    video: "",
    badges: [appleBadge, googleBadge],
    links: [
      "https://apple.co/3Y0B5Rj",
      "https://play.google.com/store/apps/details?id=com.marcelo.encarte_facil_2&pcampaignid=web_share"
    ],
    isVertical: true
  },
  {
    id: 2,
    title: "Trendy",
    texto1: "Trendy",
    texto2: "Personal media to live new experiences.",
    description: "Trendy is a team-developed project that took 6 months to complete. It helps you discover and experience unconventional activities, encouraging you to step out of your routine. With gamified challenges, it motivates you to create memories and capture them within the app—perfect for anyone looking to explore new adventures and share their journey!",
    imageSrc: [trendy1, trendy2, trendy3, trendy4],
    icon: trendyIcon,
    video: "",
    badges: [appleBadge],
    links: ["https://apple.co/47mKdCK"],
    isVertical: true
  },
  {
    id: 3,
    title: "Burger Maker",
    texto1: "Burger Maker",
    texto2: "Build your burger and compete.",
    description: "Burger Maker: Recipe Rush is a game I developed entirely on my own, creating both the code and assets. Available for iPhone and iPad, it offers a fast-paced experience for players who enjoy quick challenges and competitive gameplay. Built with SpriteKit for smooth animations and responsive mechanics, it uses SwiftUI for seamless navigation.",
    imageSrc: [burguer1, burguer2, burguer3],
    icon: burguerIcon,
    video: burguerVideo,
    badges: [appleBadge],
    links: ["https://apple.co/4ehpSBn"],
    isVertical: false
  },
  {
    id: 4,
    title: "Flipty",
    texto1: "Flipty",
    texto2: "A coin or a dice, right from your wrist.",
    description: "Flipty is a team-developed app for iPhone and Apple Watch that simulates two classic games: heads or tails and dice rolling. Built in just two weeks using MVVM architecture, the app provides an immersive experience enhanced with 3D objects and CoreMotion gesture detection.",
    imageSrc: [flipty1],
    icon: fliptyIcon,
    video: fliptyVideo,
    badges: [appleBadge],
    links: ["https://apple.co/4gFeVes"],
    isVertical: false
  },
  {
    id: 5,
    title: "Morfie",
    texto1: "Morfie",
    texto2: "Mood tracker and playlist maker.",
    description: "Morfie is a mood tracker that transforms your emotions into the perfect playlist using the Spotify API. It records how you feel and suggests songs that match your mood or help shift your vibe. Just like a chameleon, the app’s colors and icon change with each new entry. Built with SwiftUI, CoreData, and advanced programming logic, Morfie customizes every detail of the experience. It seamlessly integrates with Spotify’s API to fetch personalized music recommendations.",
    imageSrc: [morfie1, morfie2, morfie3],
    icon: morfieIcon,
    video: morfieVideo,
    badges: [],
    links: [],
    isVertical: true
  },
  {
    id: 6,
    title: "Tans",
    texto1: "Tans",
    texto2: "Mini-games to practice logic.",
    description: "This app was developed in one month by a dedicated team to enhance logical reasoning and introduce computational thinking through interactive mini-games. Built entirely in Swift using SwiftUI, it offers an engaging experience enriched with haptic feedback for greater immersion. The app features three mini-games, each designed to teach fundamental logic concepts in an intuitive way. Players can identify shapes, understand Boolean logic, and explore greater and lesser comparisons to grasp relational logic. Combining education with gamification, the app makes learning problem-solving skills both fun and accessible.",
    imageSrc: [tans1, tans2, tans3, tans4],
    icon: tansIcon,
    video: tansVideo,
    badges: [appleBadge],
    links: ["https://apple.co/4ehfYzE"],
    isVertical: false
  },
  {
    id: 7,
    title: "Byte Verse",
    texto1: "Byte Verse",
    texto2: "Gyroscope-based game like Space Invaders.",
    description: "Byteverse is a game developed in one month by a team, bringing an innovative gameplay experience by utilizing the gyroscope for realistic character movement. Built with SpriteKit and Core Motion, the game allows players to tilt their device to control the hero, facing off against drones with skill and precision. This dynamic mechanic creates an immersive and unique experience, making motion a key element of gameplay.",
    imageSrc: [byte1],
    icon: byteIcon,
    video: byteVideo,
    badges: [appleBadge],
    links: ["https://apple.co/4dm3fKR"],
    isVertical: true
  },
  {
    id: 8,
    title: "Word Mystery",
    texto1: "Word Mystery",
    texto2: "Hangman game using Apple Watch and iPhone.",
    description: "Mystery Word is a dynamic word game that I developed entirely on my own, handling both design and development. Designed for iPhone and Apple Watch, it offers two gameplay modes: players can either mirror their iPhone screen to a TV for a shared experience or control the game entirely from their Apple Watch for a more immersive interaction. Built with SwiftUI and structured using the MVVM architecture, the game ensures smooth performance, scalability, and a seamless user experience enhanced by SwiftUI animations.",
    imageSrc: [word1, word2, word3, word4],
    icon: wordIcon,
    video: wordVideo,
    badges: [appleBadge],
    links: ["https://apple.co/3MYZC2D"],
    isVertical: false
  },
  {
    id: 9,
    title: "Tardigrade",
    texto1: "Tardigrade",
    texto2: "Save the world in a 2D game.",
    description: "Tardigrade is a game developed in one month by a team, and it was my first project using SpriteKit. The idea originated from research on how a game could raise awareness about environmental impacts, which led to the choice of the tardigrade as the main character. This microscopic organism is known for its extreme resilience, capable of surviving both high and low temperatures, making it a perfect symbol for adaptation and survival. Through engaging gameplay and an educational approach, Tardigrade encourages players to reflect on environmental challenges while enjoying an immersive experience.",
    imageSrc: [tardigrade1, tardigrade2, tardigrade3],
    icon: tardigradoIcon,
    video: tardigradeVideo,
    badges: [appleBadge],
    links: ["https://apple.co/3ZDdEyp"],
    isVertical: false
  },
  {
    id: 10,
    title: "Keyboard Animal",
    texto1: "Keyboard Animal",
    texto2: "Keyboard to recognize animal songs.",
    description: "Keyboard Animal was my first app developed for the Swift Student Challenge, inspired by a childhood toy. Created entirely on my own, the app was designed to help children learn to recognize animal sounds in a fun and interactive way. Developed using SwiftUI and built within Swift Playgrounds, it provides an engaging experience that combines education and entertainment, making learning more intuitive for young users.",
    imageSrc: [animal1, animal2, animal3],
    icon: animalIcon,
    video: animalVideo,
    badges: [appleBadge],
    links: ["https://apple.co/4dm2pxw"],
    isVertical: false
  }
];

export default projectsDetails;