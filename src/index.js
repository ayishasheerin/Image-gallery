import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import IMG1 from './images/img1.jpeg'
import IMG2 from './images/img2.jpeg'
import IMG3 from './images/img3.jpeg'
import IMG4 from './images/img4.jpeg'
import IMG5 from './images/img5.jpeg'
import IMG6 from './images/img6.jpeg'
import IMG7 from './images/img7.jpeg'

const root = ReactDOM.createRoot(document.getElementById('root'))

function ImageCard(props) {
    return (
        <div className="image-card">
            <div className="image-container">
                <img src={props.image} alt={props.title} />
                <span className="wonder-number">{props.number}</span>
            </div>

            <div className="image-info">
                <p className="location">{props.location}</p>
                <h2>{props.title}</h2>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}


var wonders = [
    {
        number: "01",
        title: "Great Wall of China",
        location: "CHINA · ASIA",
        description: "An extraordinary ancient wall stretching across mountains and valleys.",
        image: IMG1
    },
    {
        number: "02",
        title: "Petra",
        location: "JORDAN · ASIA",
        description: "A magnificent rose-colored city carved into sandstone cliffs.",
        image: IMG2
    },
    {
        number: "03",
        title: "Christ the Redeemer",
        location: "RIO DE JANEIRO · BRAZIL",
        description: "An iconic statue overlooking a breathtaking coastal city.",
        image: IMG3
    },
    {
        number: "04",
        title: "Machu Picchu",
        location: "CUSCO · PERU",
        description: "An ancient Inca citadel hidden among spectacular mountain peaks.",
        image: IMG4
    },
    {
        number: "05",
        title: "Chichén Itzá",
        location: "YUCATÁN · MEXICO",
        description: "A remarkable Mayan archaeological city famous for its great pyramid.",
        image: IMG5
    },
    {
        number: "06",
        title: "Colosseum",
        location: "ROME · ITALY",
        description: "A legendary Roman amphitheatre that tells stories of the ancient world.",
        image: IMG6
    },
    {
        number: "07",
        title: "Taj Mahal",
        location: "AGRA · INDIA",
        description: "A timeless marble masterpiece celebrated as a symbol of love.",
        image: IMG7
    }
]



root.render(
    <div>
        <header className="hero">
            <h1>Wonders of the World</h1>
        </header>

        <main className="gallery">
            {wonders.map(function(item) {
                return (
                    <ImageCard
                        key={item.number}
                        number={item.number}
                        title={item.title}
                        location={item.location}
                        description={item.description}
                        image={item.image}
                    />
                )
            })}
        </main>

        <footer className="footer">
            <p>WONDERS OF THE WORLD</p>
        </footer>
    </div>
)
