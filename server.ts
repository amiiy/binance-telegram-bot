import * as dotenv from "dotenv"
import express, { Request, Response } from 'express'
import { Telegraf } from 'telegraf'

dotenv.config()
const token = process.env.BOT_TOKEN
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token)
// Set the bot response
bot.on('text', (ctx) => ctx.replyWithHTML('<b>Hello</b>'))
 
// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook('https://terrible-starfish-51.loca.lt')

const app = express()
app.get('/', (req: Request, res: Response) => res.send('Hello World!'))
// Set the bot API endpoint
app.use(bot.webhookCallback('/'))
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})