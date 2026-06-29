const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route for ping services (cron-job.org, Render uptime, etc.)
app.get('/', (req, res) => {
    res.status(200).send('InAmigos API is active and running smoothly!');
});

// Load volunteers data
const dataPath = path.join(__dirname, 'data', 'volunteers.json');

app.get('/api/volunteers', (req, res) => {
    try {
        if (!fs.existsSync(dataPath)) {
            return res.status(404).json({ message: "Volunteers data not found." });
        }
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        // Send lightweight list (exclude heavy bio if desired, but we'll send all for simplicity)
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.get('/api/events', (req, res) => {
    try {
        const eventsPath = path.join(__dirname, 'data', 'events.json');
        if (!fs.existsSync(eventsPath)) {
            return res.status(404).json({ message: "Events data not found." });
        }
        const data = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'));
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.get('/api/gallery', (req, res) => {
    try {
        const galleryPath = path.join(__dirname, 'data', 'gallery.json');
        if (!fs.existsSync(galleryPath)) {
            return res.status(404).json({ message: "Gallery data not found." });
        }
        const data = JSON.parse(fs.readFileSync(galleryPath, 'utf-8'));
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.get('/api/blog', (req, res) => {
    try {
        const blogPath = path.join(__dirname, 'data', 'blog.json');
        if (!fs.existsSync(blogPath)) {
            return res.status(404).json({ message: "Blog data not found." });
        }
        const data = JSON.parse(fs.readFileSync(blogPath, 'utf-8'));
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.get('/api/volunteers/:id', (req, res) => {
    try {
        if (!fs.existsSync(dataPath)) {
            return res.status(404).json({ message: "Volunteers data not found." });
        }
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        const volunteer = data.find(v => v.id === req.params.id);
        
        if (volunteer) {
            res.json(volunteer);
        } else {
            res.status(404).json({ message: "Volunteer not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
