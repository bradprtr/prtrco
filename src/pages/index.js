import React from "react"
import { Helmet } from "react-helmet";


export default () => (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Brad Porter</title>
        <meta name="description" content="Personal site of Brad Porter" />
    </Helmet>
        <h1>Hi, I'm Brad.</h1>
        <div>
            <p>I'm currently based in London, UK. I've been working in technology and games since 2013.</p>
            <h3>Work</h3>
            <p>I'm driven to solve creative problems, as Producer, Project Manager or Product Owner. Usually all three.</p>
            <p>At <a href="https://www.maze-theory.com" target="_blank" rel="noopener">Maze Theory</a> I'm working on an unannounced major VR title for PlayStation 4 and PC.</p>
            <p>At <a href="https://www.sixtostart.com" target="_blank" rel="noopener">Six to Start</a> I helped make the world's leading fitness games, <a href="https://itunes.apple.com/gb/app/zombies-run/id503519713" target="_blank" rel="noopener">Zombies Run</a> and <a href="https://itunes.apple.com/gb/app/walk-fitness-tracker-game/id678971662" target="_blank" rel="noopener">The Walk</a>. I also co-created the <a href="https://www.zombiesvirtualrace.com" target="_blank" rel="noopener">Zombies, Run! Virtual Race</a> series.</p>
            <p>I love to learn and share, and have spoken at conferences like <a href="https://xponorth.co.uk" target="_blank" rel="noopener">XpoNorth</a> and <a href="https://www.ukactive.com" target="_blank" rel="noopener">UKActive Flame</a>.</p>
            <h3>Play</h3>
            <p>I make music, sometimes for <a href="https://store.steampowered.com/app/346460/Vector_36/" target="_blank" rel="noopener">games</a>. You can find my releases on <a href="https://music.equatr.co.uk/" target="_blank" rel="noopener">Bandcamp</a> and <a href="https://soundcloud.com/equatr" target="_blank" rel="noopener">SoundCloud</a>.</p>
            <h3>Contact</h3>
            <p>Email me: <a href="mailto:brad@prtr.co">brad@prtr.co</a></p>
        </div>
    </div>
)