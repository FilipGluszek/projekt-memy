/**
 * Internal dependencies
 */
import "./style.css";

/**
 * Render component
 *
 * @param {Object}   attributes             Component attributes.
 * @param {string}   attributes.title       Meme title.
 * @param {string}   attributes.img         Meme image source.
 * @param {number}   attributes.upvotes     Meme upvotes.
 * @param {number}   attributes.downvotes   Meme downvotes.
 * @param {Function} attributes.onUpvote    Meme upvote callback.
 * @param {Function} attributes.onDownvote  Meme downvote callback.
 */
const Meme = ({ title, img, upvotes, downvotes, onUpvote, onDownvote }) => {
    return (
        <div className="meme">
            <h2>{title}</h2>
            <img src={`/img/${img}`} alt={title} loading="lazy" />
            <div className="meme__actions">
                <button
                    className="meme__actions--up"
                    onClick={() => onUpvote()}
                >
                    Up {upvotes}
                </button>
                <button
                    className="meme__actions--down"
                    onClick={() => onDownvote()}
                >
                    Down {downvotes}
                </button>
            </div>
        </div>
    );
};

export default Meme;
