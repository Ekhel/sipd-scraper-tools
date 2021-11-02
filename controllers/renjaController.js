const puppeteer = require('puppeteer');
const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

exports.renja = async function() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://jayapurakab.sipd.kemendagri.go.id/daerah?9t@X@KNKtkYYk83VJQZCDxOieNGmocTBnqER1yCTo81VZKtrYWtirboXTmv@NeE1dqXgkc@c1/Z4AGYp8zple5DzRkBZksRDrnPBnO22yIB@Xun69aQNDCWxFk/h//g5");
    const html = await page.content();
    fs.writeFileSync('./login.html', html);
}