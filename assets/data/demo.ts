import { AccountT, DataT,ChatT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";
import IMAGE_11 from "../images/11.jpg";
const data: DataT[] = [
  {
    id: 1,
    name: "Leanne Graham",
    isOnline: true,
    match: "98",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "31",
    info1: 'Straight, Single, 5"8',
    message:
      "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Clementine Bauch",
    match: "93",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "29",
    info1: 'Straight, Single, 5"7',
    isOnline: false,
    message: "Someone like you. Someone who'll rattle the cages.",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "Ervin Howell",
    match: "85",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "37",
    info1: 'Straight, Single, 5"11',
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "John Lebsack",
    match: "78",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "21",
    info1: 'Straight, Single, 5"10',
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "James Dietrich",
    match: "76",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "32",
    info1: 'Straight, Single, 6"0',
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "Patricia Schulist",
    match: "75",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "20",
    info1: 'Straight, Single, 5"4',
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "Chelsey Weissnat",
    match: "67",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "24",
    info1: 'Straight, Single, 5"8',
    isOnline: true,
    message:
      "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "Nicky Runol",
    match: "65",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "27",
    location: "Irvine, CA",
    info1: 'From a rich family with 2 siblings',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    firstDate:"Restraurant,Cinema,Park",
    isOnline: true,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "Glenna Reichert",
    match: "64",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "This is what happens when an unstoppable force meets an immovable object.",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "Kurtis DuBuque",
    match: "58",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "22",
    info1: 'Straight, Single, 5"5',
    isOnline: false,
    message:
      "You want order in Gotham. Batman must take off his mask and turn himself in.",
    image: IMAGE_10,
  },
];
const Accountdata:AccountT={

  id: 11,
  name: "Goh Way Siang",
  description: "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
  image: IMAGE_11,
  firstDate:"Fine Dining, Fun Fair, Water Park",
  age: "22",
  interest: "Coding, Women, Dedicated relationship, Cute person",
  background: "University Student, Future Software engineer",
  hobby: "Badminton, Meditate, Photography, Video Editing",
  location: "Kuala Lumpur",
};

const ChatData:ChatT[]=[

  
  {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
  {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"},
  {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
  {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
  {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
  {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
  {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
  {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
  {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
      
]


export {data,Accountdata,ChatData};


