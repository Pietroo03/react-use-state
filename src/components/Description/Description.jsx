export default function Description({ languages, active }) {


    return (

        <div className="descriptions">
            {languages.map((item, index) => (
                <div className="button-description" key={item.id}>
                    <div className={active == index ? 'active' : 'hide'}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    )

}