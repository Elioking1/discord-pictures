# 🌃 Discord Pictures 🌃

<div align="center">
  <br/>
  <p>
    <img src="https://live.staticflickr.com/65535/51898248210_dee144e609_z.jpg" width="640" height="480" alt="">
  </p>
  <br/>
  <p>
    <a href="https://www.npmjs.com/package/discord-pictures"><img src="https://badgen.net/npm/v/discord-pictures"/></a>
    <a href="https://www.npmjs.com/package/discord-pictures"><img src="https://badgen.net/npm/dt/discord-pictures"/></a>
    <a href="https://www.npmjs.com/package/discord-pictures"><img src="https://badgen.net/packagephobia/install/discord-pictures"></a>
    <a href="https://github.com/Elioking1/discord-pictures"><img src="https://badgen.net/github/watchers/Elioking1/discord-pictures"></a>
  </p>
      <a href="https://npmjs.org/package/discord-pictures"><img src="https://nodei.co/npm/discord-pictures.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

**🔥 We are back 🔥**

Discord Pictures is a powerful [Node.js](https://nodejs.org) module that allows you to generate images in a very simple way:

* 🌃 Differents images categories (anime, animals, games, nsfw)
* 🗽 All the images and gifs have been verified twice by a human
* 😍 Image generated in less than 1 second.

## 📥 Installation

To start using our npm package, let's install it:

```js
npm install discord-pictures
```

## ⚙️ Configuration

Now let's go to the configuration:

```js
const Images = require("discord-pictures")
```

## 🐶 Animals
<div align="center">
<img src="https://api.alexflipnote.dev/dogs/ZLaDsqWwPuA_dogs.png">
</div>

Example:
```js
const animals = new Images.Animals()
animals.function() // Format | Usage
animals.dog() // Example
animals.lizard() // Another Example
```
<table>
  <tr>
     <td align="center"><a href="https://en.wikipedia.org/wiki/Bird"><img src="https://pictures.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZHxlbnwwfHwwfHw%3D&w=1000&q=80" width="100px;" alt=""/><br /><sub><b>🦉 Bird 🦉</b></sub></a><br /></td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Cat"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/pictures/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*" width="100px;" alt=""/><br /><sub><b>😺 Cat 😺</b></sub></a><br /></td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Dog"><img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" width="100px;" alt=""/><br /><sub><b>🐶 Dog 🐶</b></sub></a><br /></td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Lizard"><img src="https://www.eekwi.org/sites/default/files/styles/original/public/2019-12/lizard.jpg" width="100px;" alt=""/><br /><sub><b>🦎 Lizard 🦎</b></sub></a><br /></td>
  </tr>
  
</table>

## ✨ Anime
<div align="center">
<img src="https://c.tenor.com/WQo2-FPrZJYAAAAM/crow-crow-sbr.gif">
</div>

Example:
```js
const anime = new Images.Anime()
anime.function() // Format | Usage
anime.bang() // Example
anime.cold() // Another Example
```

|   Name           | Description                          
| :--------        | -----------                          
| agree            | I agree your opinion 👍
| angry            | Calm down! Don't be such angry 😠
| baka             | Who is the baka? It's you 🤯
| bang             | Shoooot 🔫
| blush            | Blushing? OwO 😊 
| bored            | Doing nothing? Boring 😴
| cold             | Berrrrrr! It's so cold 😰
| confused         | Euhh...... 😕
| cry              | Nooooooo 😢
| dance            | Come on! Let's dance 💃
| feed             | Delicious 😋
| greet            | Hello everyone 👋 
| hero             | It's hero time! 💪
| highfive         | Give me 5 🖐️
| hug              | I love hugs 🤗
| laugh            | Hahahaha it's so funny 🤣
| pat              | Good ✋
| playingGames     | New High Score! 🕹️
| poke             | Hey! 👉
| punch            | Awww! Not the face! 👊
| read             | Oh interesting this story 📖
| run              | RUN! 🏃‍♂️
| sad              | Nobody likes me 😔
| scared           | Is that a ghost? Run.... 😱
| shrug            | I don't know 🤷‍♂️
| sick             | ATCHOUM! 🤒
| sing             | Lalalalalala 🎤
| slap             | Aww! That hurts! ✋
| sleepy           | So tired... 😪
| smile            | Look! My favorite anime 😄
| smug             | Hehe 😏
| stare            | I see you 👀
| tickle           | Stop it! That tickles 😂
| wink             | Your welcome 😉

## 🕹️ Games
<div align="center">
<img src="https://media.vandal.net/i/1280x720/6-2020/20206810424193_1.jpg">
</div>

Example:
```js
const games = new Images.Games()
games.function() // Format | Usage
games.brawlstars() // Example
games.clashroyale() // Another Example
```
<table>
  <tr>
     <td align="center"><a href="https://supercell.com/en/games/brawlstars/"><img src="https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg" width="100px;" alt=""/><br /><sub><b>⭐ Brawl Stars ⭐</b></sub></a><br /></td>
    <td align="center"><a href="https://supercell.com/en/games/clashofclans/"><img src="https://play-lh.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3_dhWpUO80zULf-Pkh6RFleomEp6pZorHuCNm3FbR9oAMunVK" width="100px;" alt=""/><br /><sub><b>🛡 Clash of Clans 🛡</b></sub></a><br /></td>
    <td align="center"><a href="https://supercell.com/en/games/clashroyale/"><img src="https://yt3.ggpht.com/ytc/AKedOLTQZTVfo1DUwhPW7SrMur7wgLTdQVH0JI42PCBFng=s900-c-k-c0x00ffffff-no-rj" width="100px;" alt=""/><br /><sub><b>👑 Clash Royale 👑</b></sub></a><br /></td>
  </tr>
  
</table>

## 🔞 NSFW

Example:
```js
const nsfw = new Images.NSFW()
nsfw.function() // Format | Usage
nsfw.boobs() // Example
nsfw.solo() // Another Example
```

|   Name           | Description                          
| :--------        | -----------                          
| anal             | We all know what it is 😋
| ass              | We all do like ass 🍑
| bdsm             | Bondage / rope play 🔐
| blowjob          | Girl sucking on a sharp blade 🍭
| boobs            | Woman Breast 😍
| cum              | Sticky white stuff that is usually milked from sharpies 🍼
| doujin           | A group of people who share an interest, activity, or hobby 😏
| erokemo          | If you don't know what it is, search it up 🔍
| femdom           | Female Domination? 👩
| fourk            | When you catch someone doing some pretty gross stuff 😊
| futunari         | Pornographic characters in erotic manga or anime 🎎
| glasses          | Girls that wear glasses 👓
| gonewild         | Showing off your nude body 🤩
| hentai           | A work of anime or manga that contains sexual or pornographic art 🐷
| hentaiass        | I know you like anime ass 🍑
| hentaithigh      | Thigh, but anime version 😉
| kitsune          | SFW cat girl 🐱
| kuni             | Be extremely fucked 🍆
| lewd             | Very offensive (in a sexual way of course) 👿
| maid             | Maids, Maid Uniforms, etc, you know what maids are 🧤
| nekofeet         | Feets, but from cat girls 🐾
| nekopussy        | Pussy, but from cat girls 👅
| nekotits         | Boobs, but from cat girls 🤩
| orgy             | Group Lewd Acts 🔞
| pgif             | Porn GIF 😏
| pussy            | The genitals of a female 👅
| solo             | A girl masturbating herself 😋
| sologif          | Solo, but GIF instead of an image 😋
| tentacles        | Squids and octopi go here... With girls, of course 🐙
| thigh            | The top part of your legs, very hot, isn't it? 😝
| uniform          | Military, Konbini, Work, Nurse Uniforms, etc... Sexy 😏

### 💖 Credits

* 💖 Thanks [akaneko](https://www.npmjs.com/package/akaneko) for the idea and the API
* 💖 Thanks for the others developers of the APIs included in this project: [nekobot](https://nekobot.xyz/), [nekos life](https://nekos.life/), and [alexflipnote](https://api.alexflipnote.dev/)
* 💖 Thanks for [Looka](https://looka.com/) for the amazing banner and logo

Copyright (c) 2022 Elioking1