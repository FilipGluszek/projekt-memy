/**
 * Internal dependencies
 */
import "./style.css";

/**
 * Render component
 *
 * @param {Object} attributes           Component attributes.
 * @param {string} attributes.title     Meme title.
 * @param {string} attributes.img       Meme image source.
 * @param {number} attributes.upvotes   Meme upvotes.
 * @param {number} attributes.downvotes Meme downvotes.
 */
const Meme = ({ title, img, upvotes, downvotes }) => {
    return (
        <div className="meme">
            <h2>{title}</h2>
            <img src={`/img/${img}`} alt={title} loading="lazy" />
            <div className="meme__actions">
                <button className="meme__actions--up">Up {upvotes}</button>
                <button className="meme__actions--down">
                    Down {downvotes}
                </button>
            </div>
        </div>
    );
};

export default Meme;
