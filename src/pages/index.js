import React from "react"
import { Helmet } from "react-helmet";


const Home = () => (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Brad Porter</title>
        <meta name="description" content="Personal site of Brad Porter" />
    </Helmet>
        <h1>Hi, I'm Brad.</h1>
        <div>
            <p>I'm based in London, UK, where I work with digital products.</p>
            <h3>Work</h3>
            <p>I'm Delivery Lead at <a href="https://www.red-badger.com" target="_blank" rel="noopener noreferrer">Red Badger</a>, managing digital transformation teams for clients including <a href="https://www.nandos.co.uk" target="_blank" rel="noopener noreferrer">Nando's</a> and <a href="https://www.fortnumandmason.com" target="_blank" rel="noopener noreferrer">Fortnum & Mason</a>.</p>
            <p>At <a href="https://www.sixtostart.com" target="_blank" rel="noopener noreferrer">Six to Start</a> I worked on the world's leading fitness games, <a href="https://itunes.apple.com/gb/app/zombies-run/id503519713" target="_blank" rel="noopener noreferrer">Zombies Run</a> and <a href="https://itunes.apple.com/gb/app/walk-fitness-tracker-game/id678971662" target="_blank" rel="noopener noreferrer">The Walk</a>. I also co-created the <a href="https://www.zombiesvirtualrace.com" target="_blank" rel="noopener noreferrer">Zombies, Run! Virtual Race</a> series.</p>
            <p>I have spoken about emerging technology at <a href="https://xponorth.co.uk" target="_blank" rel="noopener noreferrer">XpoNorth</a> and <a href="https://www.ukactive.com/active-uprising/" target="_blank" rel="noopener noreferrer">UKActive</a>.</p>
            <h3>Play</h3>
            <p>I make music, sometimes for <a href="https://www.designfeeling.co/" target="_blank" rel="noopener noreferrer">podcasts</a> and <a href="https://store.steampowered.com/app/346460/Vector_36/" target="_blank" rel="noopener noreferrer">games</a>. You can find my releases on <a href="https://music.equatr.co.uk/" target="_blank" rel="noopener noreferrer">Bandcamp</a> and <a href="https://soundcloud.com/equatr" target="_blank" rel="noopener noreferrer">SoundCloud</a>.</p>
            <h3>Contact</h3>
            <p><a href="mailto:brad@prtr.co">brad@prtr.co</a></p>
        </div>
    </div>
)
export default Home;
