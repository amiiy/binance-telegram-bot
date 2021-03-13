import * as db from "./db"
/**
 * SetUp binance API
 * @param {Object} ctx
 */
function setupBinance(ctx) {
  ctx.telegram.sendMessage(
    ctx.message.chat.id,
    `Please past your Binance READ ONLY API token below:`
  )
  ctx.reply(`Hello ${ctx.state.role}`)
}
/**
 * SetUp FTX API
 * @param {Object} ctx
 */
function setupFTX(ctx) {
  //TODO
}

/**
 * get user balance
 * @param {Object} ctx
 */
function getBalance(ctx) {
  // get user api key
  // request binance for balance
  // format the response and return
}

export { setupBinance, setupFTX }
