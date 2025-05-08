
export default function TechStack(props) {

    const cardStyle = {
        cardBody: {
            backgroundColor: '#000000',
            width: '9rem',
            height: '10rem',
            boxShadow: '0px 0px 16px white',
            border: '5px white',
            backgroundOpacity: '0.9',
        },
        img: {
            opacity: '1.0',
            width: '100px',
        },
        title: {
            fontWeight: 900,
            color: '#ffff',
        }
    }

    return(
        <div>
            <div className="card" style={cardStyle.cardBody}>
                <div className="stack-img text-center p-1 m-1">
                    <img src={props.img} alt="tech Stack..." className="card-img-top text-center" style={cardStyle.img}/>
                </div>
                <div className="card-body">
                    <div className="card-title text-center" style={cardStyle.title} >{props.title}</div>
                </div>
            </div>
        </div>
    );
}