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

const dataProjectDetails = [
  {
    id: 1,
    title: "Encarte Rápido",
    texto1: "Encarte rápido",
    texto2: "Supermarket flyer generator.",
    description: "Encarte Rápido is a cross-platform app...",
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
    description: "Trendy is a team-developed project...",
    imageSrc: [trendy1, trendy2, trendy3, trendy4],
    icon: trendyIcon,
    video: "",
    badges: [appleBadge],
    links: ["https://apple.co/47mKdCK"],
    isVertical: true
  },
  {
    id: 3,
    title: "Burguer Maker",
    texto1: "Burguer Maker",
    texto2: "Build your burger and compete.",
    description: "Burger Maker: Recipe Rush is a game...",
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
    description: "Flipty is a team-developed app...",
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
    description: "Morfie is a mood tracker...",
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
    description: "This app was developed...",
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
    description: "Byteverse is a game developed...",
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
    description: "Mystery Word is a dynamic word game...",
    imageSrc: [word1, word2, word3, word4],
    icon: wordIcon,
    video: wordVideo,
    badges: [appleBadge],
    links: ["https://apple.co/3MYZC2D"],
    isVertical: false
  }
];

export default dataProjectDetails;