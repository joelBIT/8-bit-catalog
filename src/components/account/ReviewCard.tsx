import { ReactElement, useState } from "react";
import { Game, GameRequest } from "../../interfaces";
import { updateRequest } from "../../data/request";
import { COVER_URL, URL_GAME_DETAILS_PAGE } from "../../utils";
import { ReviewModal } from "..";
import { useNavigate } from "react-router-dom";
import { storeGame } from "../../data/game";

export function ReviewCard({ request }: { request: GameRequest }): ReactElement {
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const navigate = useNavigate();
    const [ game ] = useState<Game>(request.game);

    function accept(): void {
        request.status = 'Accepted';
        updateRequest(request);
        storeGame(game);
        navigate(`${URL_GAME_DETAILS_PAGE}/${game.id}`);
    }

    /**
     * Changes status of a request to Denied. The submitter should be informed (by email? on in account tab) why
     * the request was denied. At the moment the reason is only logged to console.
     * 
     * @param reason    is the reason why the request was denied.
     */
    function deny(reason: string): void {
        request.status = 'Denied';
        console.log(reason);
        updateRequest(request);
        navigate(-1);
    }

    return (
        <section id="reviewCard">
            <figure>
                <img src={`../${COVER_URL}/${game.cover}`} alt="Game Cover" />
            </figure>
            
            <article id="gameDetails">
                <h1>{game.title}</h1>
                <h2>Category: <p>{game.category}</p></h2>
                <h2>Released: <p>{game.releaseDate ? game.releaseDate : game.releaseYear}</p></h2>
                <h2>Players: <p>{game.players}</p></h2>
                <h2>Publisher: <p>{game.publisher}</p></h2>
                <h2>Developer: <p>{game.developer}</p></h2>
            </article>

            <article id="description">
                { game.description ? game.description.map((paragraph, index) => <p key={index}>{paragraph}</p>) : <></> }
            </article>
            
            <div id="reviewButtons">
                <button id="denyButton" className="gameButton" onClick={() => setShowModal(true)}>Deny</button>
                <button id="acceptButton" className="gameButton" onClick={() => accept()}>Accept</button>
                { showModal ? <ReviewModal showModal={setShowModal} confirm={deny} /> : <></> }
            </div>
        </section>
    );
}