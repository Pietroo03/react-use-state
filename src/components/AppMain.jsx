import { useState } from "react";
import languages from "../data/languages";
import Button from "./Button/Button";
import Description from "./Description/Description";
export default function AppMain() {

    const [active, setActive] = useState(null)

    function handleClick(index) {

        setActive(index)

    }

    return (

        <main>

            <div className="container">

                <Button
                    languages={languages}
                    active={active}
                    onChange={handleClick}
                />
                <Description
                    languages={languages}
                    active={active}
                />

            </div>

        </main>

    )

}