const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

async function scrapeEvents() {
    try {
        const html = fs.readFileSync(path.join(__dirname, 'events_page.html'), 'utf-8');
        const $ = cheerio.load(html);
        const events = [];

        $('.single-blog-item').each((i, el) => {
            const image = $(el).find('img').attr('src');
            const category = $(el).find('.blog-date a').text().trim();
            const date = $(el).find('.blog-meta').text().trim();
            const title = $(el).find('h5 a').text().trim();
            const desc = $(el).find('p').not('.blog-date').not('.blog-meta').text().trim();
            const link = $(el).find('a.btn-green').attr('href');

            if (title) {
                events.push({
                    title,
                    date,
                    description: desc,
                    category,
                    image,
                    link
                });
            }
        });

        const dataPath = path.join(__dirname, 'data', 'events.json');
        fs.writeFileSync(dataPath, JSON.stringify(events, null, 4));
        console.log(`Scraped ${events.length} events and saved to ${dataPath}`);
    } catch (e) {
        console.error(e);
    }
}

scrapeEvents();
