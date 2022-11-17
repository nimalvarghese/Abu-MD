const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
module.exports = {
  VERSION: 'v1.0.0',
  BRANCH: "main",
  STICKER_DATA: process.env.STICKER_DATA === undefined ? 'Nimuzz;Nimuzz' : process.env.STICKER_DATA,
  LOGS: toBool(process.env.LOGS) || true,
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ALIVE: process.env.ALIVE || "https://telegra.ph/file/47842cf7d85784cb4e441.jpg Hey {sender}, I'm alive \n Uptime: {uptime}",
  SESSION_ID:process.env.SESSION_ID || "cWNLU0R_ABU_VVkU=",
  ALIVE_INFO: process.env.ALIVE_INFO || 'https://telegra.ph/file/47842cf7d85784cb4e441.jpg,💝 HY MWONU @${message.pushName} ANTHADA MWONU FEAR AYO,ABU MD,ANTHADA,😌🤍 FEAR AYO',
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  ANTI_SPAM: process.env.ANTI_SPAM || '917025994178-1632403322@g.us',
  LANG: process.env.LANG || "EN",
  AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? 'https://i.imgur.com/cO6Ddfh.jpeg;𝐴𝑏𝑢¹¹ꫂ;Abu MD bot;HY BRO' : process.env.AUDIO_DATA,
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[.]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  PACKNAME: process.env.PACKNAME || "Nimuzz",
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
    "{pp}Hi @user *Honey Rose Bot* Welcome to @gname\nYou're our @count/513 Members ",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "Jsl",
  DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
  BOT_INFO: process.env.BOT_INFO || 'Abu MD,Jsl,Abu SER,Abu MD,https://telegra.ph/file/47842cf7d85784cb4e441.jpg',
  SUDO: process.env.SUDO || "917025994178",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  IMAGE_URL: process.env.IMAGE_URL || "https://telegra.ph/file/47842cf7d85784cb4e441.jpg",
  BOT_NAME: process.env.BOT_NAME || "Abu-MD",
  MODE: process.env.MODE || "public",
  LANGUAGE: process.env.LANGUAGE || 'english',
};
