import React, { useState } from "react";
import "./styles.css";
var bgColor = "#4B5563";
var color = "black";
var emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🦮": "Guide Dog",
  "🐕": "Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle",
  "🐺": " Wolf",
  "🦊": " Fox",
  "🦝": " Raccoon",
  "🐱": " Cat Face",
  "🐈‍⬛": "Black Cat",
  "🦁": " Lion",
  "🐯": " Tiger Face",
  "🐅": "Tiger",
  "🐆": " Leopard",
  "🐴": " Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": " Zebra",
  "🦌": " Deer",
  "🐮": " Cow Face",
  "🐂": " Ox",
  "🐃": " Water Buffalo",
  "🐄": "Cow",
  "🐷": "Pig Face",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐽": " Pig Nose",
  "🐏": " Ram",
  "🐑": " Ewe",
  "🐐": " Goat",
  "🐪": " Camel",
  "🐫": " Two-Hump Camel",
  "🦙": " Llama",
  "🦒": " Giraffe",
  "🐘": " Elephant",
  "🦏": " Rhinoceros",
  "🦛": " Hippopotamus",
  "🐭": " Mouse Face",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐇": "Rabbit",
  "🐿️": "Chipmunk",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐻❄": "Polar Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw Prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐧": "Penguin",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦩": "Flamingo",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "🐬": "Dolphin",
  "🐟": "Fish",
  "🐠": "Tropical Fish",
  "🐡": "Blowfish",
  "🦈": "Shark",
  "🐙": "Octopus",
  "🐚": "Spiral Shell",
  "🐌": "Snail",
  "🦋": "Butterfly",
  "🐛": "Bug",
  "🐜": "Ant",
  "🐝": "Honeybee",
  "🐞": "Lady Beetle",
  "🦗": "Cricket",
  "🕷️": "Spider",
  "🕸": "Spider Web",
  "🦂": "Scorpion",
  "🦟": "Mosquito",
  "🦠": "Microbe",
  "🦀": "Crab",
  "🦞": "Lobster",
  "🦐": "Shrimp",
  "🦑": "Squid"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setEmojiMeaning] = useState("");
  function emojiEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "sorry we don't have this in our database.";
    }
    setEmojiMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color }}>ANIMALPEDIA</h1>
      <input onChange={emojiEventHandler}></input>
      <h2 style={{ color }}>
        <u>{meaning}</u>
      </h2>
      <h3 style={{ color }}>Emojis we know : </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "2rem",
              margin: "1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
