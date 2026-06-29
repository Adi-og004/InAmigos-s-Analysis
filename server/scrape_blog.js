const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const url = 'https://inamigosfoundation.org.in/blog';

async function scrapeBlog() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const blogs = [];

        $('.single-blog-item').each((i, el) => {
            const title = $(el).find('h5 a').text().trim() || $(el).find('.blog-bg > a').attr('title');
            const link = $(el).find('.blog-bg > a').attr('href');
            let image = $(el).find('.blog-bg > a img').attr('src');
            
            if (image && !image.startsWith('http')) {
                image = `https://inamigosfoundation.org.in${image}`;
            }
            
            const excerpt = $(el).find('.blog-content p').not('.blog-meta').text().trim();
            
            let date = '';
            const metaSpans = $(el).find('.blog-meta span');
            if (metaSpans.length > 0) {
                date = $(metaSpans[0]).text().trim();
            }

            if (title) {
                blogs.push({
                    id: i + 1,
                    title,
                    link: link && !link.startsWith('http') ? `https://inamigosfoundation.org.in${link}` : link,
                    image,
                    excerpt,
                    date
                });
            }
        });

        const dataPath = path.join(__dirname, 'data', 'blog.json');
        fs.writeFileSync(dataPath, JSON.stringify(blogs, null, 4));
        console.log(`Scraped ${blogs.length} blogs and saved to ${dataPath}`);
    } catch (e) {
        console.error(e);
    }
}

scrapeBlog();
