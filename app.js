const express = require("express");
const pool = require('./src/config/database'); // database connection

const ownerRouts = require('./src/routes/ownerRouts');
const ownerRouts = require('./src/routes/passengerRouts');

const app = express();
app.use(express.json());
app.use('/owner', ownerRouts)
app.use('/passenger', passengerRouts)

// Test endpoint
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ message: 'Database connected', timestamp: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ message: 'Database connection error', error: error.message });
  }
});

// HTML content
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Baaa!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hiiiiiii<br>
      Bla Bla Bla Bla
    </section>
  </body>
</html>
`;

// Root route to serve HTML
app.get("/", (req, res) => res.type('html').send(html));

// Set PORT from environment or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Set server timeouts
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
