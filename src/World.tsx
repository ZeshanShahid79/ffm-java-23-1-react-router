import {useParams} from "react-router-dom";

export default function World() {
    const urlParams = useParams();

    return <h1>We are living on {urlParams.planet} World</h1>
}