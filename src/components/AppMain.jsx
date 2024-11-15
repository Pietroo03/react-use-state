import { useState } from "react";
import languages from "../data/languages";
export default function AppMain() {

    const [active, setActive] = useState(null)

    function handleClick(e) {
        const newActive = e.target.getAttribute('data-index')
        console.log(newActive);

        setActive(newActive)

    }

    return (

        <>
            <main>

                <div className="container">
                    <div className="languages">
                        {languages.map((item, index) => (

                            <div className="language-buttons" key={item.id}>
                                <button onClick={handleClick} data-index={index} className="language">{item.title}</button>
                            </div>

                        ))}

                    </div>
                    <div className="descriptions">
                        {languages.map((item, index) => (
                            <div className="button-description">
                                <div className={active == index ? 'active' : 'hide'}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

        </>

    )

}