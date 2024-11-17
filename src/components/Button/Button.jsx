export default function Button({ languages, active, onChange }) {

    return (
        <div className="languages">
            {languages.map((item, index) => (

                <div className="language-buttons" key={item.id}>
                    <button onClick={() => onChange(index)} data-index={index} className="language" aria-pressed={active == index}>{item.title}</button>
                </div>

            ))}

        </div>
    )

}