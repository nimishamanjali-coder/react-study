import './CoreConcepts.css'
export default function CoreConcepts(props) { //props can be subtituted with {image,title,decription} in that case pass as {image}
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}