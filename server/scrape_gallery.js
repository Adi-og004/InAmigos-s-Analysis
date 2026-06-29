const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const url = 'https://inamigosfoundation.org.in/gallery';

async function scrapeGallery() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const images = [];

        // Try to find image links in gallery
        $('a.gal_link').each((i, el) => {
            const src = $(el).attr('href');
            if (src && (src.endsWith('.jpg') || src.endsWith('.JPG') || src.endsWith('.png') || src.endsWith('.jpeg'))) {
                images.push({
                    id: i + 1,
                    src: src.startsWith('http') ? src : `https://inamigosfoundation.org.in${src}`,
                    title: `Gallery Image ${i + 1}`
                });
            }
        });

        if (images.length === 0) {
            // fallback if needed
            $('[style*="background-image"]').each((i, el) => {
                const style = $(el).attr('style');
                const match = style.match(/url\(['"]?(.*?)['"]?\)/);
                if (match && match[1] && match[1].includes('/gallery/')) {
                    images.push({
                        id: i + 1,
                        src: match[1],
                        title: `Gallery Image ${i + 1}`
                    });
                }
            });
        }

        // Deduplicate images by src
        const uniqueImages = [];
        const seen = new Set();
        for (const img of images) {
            if (!seen.has(img.src)) {
                seen.add(img.src);
                uniqueImages.push(img);
            }
        }

        const dataPath = path.join(__dirname, 'data', 'gallery.json');
        fs.writeFileSync(dataPath, JSON.stringify(uniqueImages, null, 4));
        console.log(`Scraped ${uniqueImages.length} images and saved to ${dataPath}`);
    } catch (e) {
        console.error(e);
    }
}

scrapeGallery();
