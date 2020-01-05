import puppeteer from 'puppeteer';

const TIMEOUT = 20000;

test(
  'should return "X" as the winner',
  async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 300,
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    page.evaluate(async () => {
      const squares = Array.from(document.querySelectorAll('.square'));
      await squares[0].click();
      await squares[4].click();
      await squares[1].click();
      await squares[5].click();
      await squares[2].click();
    });

    const winnerText = await page.$eval('.status', el => el.textContent);

    expect(winnerText).toBe('Winner: X');
    await browser.close();
  },
  TIMEOUT
);
