const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const baseUrl = 'https://inamigosfoundation.org.in';
const volunteersListUrl = `${baseUrl}/volunteers`;

async function scrapeVolunteers() {
    console.log(`Fetching ${volunteersListUrl}...`);
    try {
        const res = await axios.get(volunteersListUrl);
        const $ = cheerio.load(res.data);
        
        const volunteers = [];
        const members = $('.single-team-member');
        console.log(`Found ${members.length} volunteers.`);
        
        for (let i = 0; i < members.length; i++) {
            const member = members[i];
            
            // Image
            const bgDiv = $(member).find('.team-member-bg');
            let imgUrl = '';
            const style = bgDiv.attr('style');
            if (style && style.includes("url('")) {
                imgUrl = style.split("url('")[1].split("')")[0];
            }
            
            // Name & Profile URL
            const titleDiv = $(member).find('.team-title');
            const aTag = titleDiv.find('a');
            const name = aTag.text().trim() || 'Unknown';
            const profileUrl = aTag.attr('href') || '';
            
            // Role
            const subtitleDiv = $(member).find('.team-subtitle');
            const role = subtitleDiv.find('p').text().trim() || '';
            
            // Email
            const emailA = $(member).find('a[href^="mailto:"]');
            const email = emailA.attr('href') ? emailA.attr('href').replace('mailto:', '') : '';
            
            // LinkedIn
            const linkedinA = $(member).find('a[href*="linkedin.com"]');
            const linkedin = linkedinA.attr('href') || '';
            
            const volunteerId = name.toLowerCase().replace(/\s+/g, '-');
            
            const volData = {
                id: volunteerId,
                name,
                role,
                image: imgUrl,
                email,
                linkedin,
                biography: '',
                skills: [],
                profileUrl
            };
            
            // Fetch detailed profile
            if (profileUrl) {
                console.log(`[${i+1}/${members.length}] Fetching ${profileUrl}...`);
                try {
                    const pRes = await axios.get(profileUrl);
                    const p$ = cheerio.load(pRes.data);
                    
                    // Extract Bio
                    const aboutTitle = p$('p:contains("About")');
                    if (aboutTitle.length) {
                        const bioP = aboutTitle.next('p');
                        if (bioP.length) {
                            volData.biography = bioP.text().trim();
                        }
                    }
                    
                    // Skills
                    const progressBars = p$('.progress-bar');
                    progressBars.each((idx, bar) => {
                        const skillName = p$(bar).parents('.progress-item').find('h6').text().trim();
                        const val = p$(bar).attr('aria-valuenow');
                        if (skillName && val) {
                            volData.skills.push({ name: skillName, value: parseInt(val, 10) });
                        }
                    });
                } catch (e) {
                    console.error(`Error fetching ${profileUrl}:`, e.message);
                }
            }
            
            volunteers.push(volData);
        }
        
        fs.writeFileSync('data/volunteers.json', JSON.stringify(volunteers, null, 4));
        console.log("Saved to data/volunteers.json");
        
    } catch (err) {
        console.error("Failed to fetch list:", err.message);
    }
}

scrapeVolunteers();
