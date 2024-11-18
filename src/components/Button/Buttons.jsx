export default function Buttons({ languages, active, onChange }) {

    return (
        <div className="languages-buttons">
            {languages.map((item, index) => (

                <div className="button" key={item.id}>
                    <button onClick={() => onChange(index)} data-index={index} className="buttons" aria-pressed={active == index}>{item.title}</button>
                </div>

            ))}

        </div>
    )

}