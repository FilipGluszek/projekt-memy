/**
 * Internal dependencies
 */
import "./style.css";

/**
 * Render component
 *
 * @param {Object}   attributes               Component attributes.
 * @param {string}   attributes.title         Meme title.
 * @param {string}   attributes.img           Meme image source.
 * @param {number}   attributes.upvotes       Meme upvotes.
 * @param {number}   attributes.downvotes     Meme downvotes.
 * @param {boolean}  attributes.isStarred     Whether if meme is starred or not.
 * @param {Function} attributes.onUpvote      Meme upvote callback.
 * @param {Function} attributes.onDownvote    Meme downvote callback.
 * @param {Function} attributes.onStarChange  Meme star status change.
 */
const Meme = ({
    title,
    img,
    upvotes,
    downvotes,
    isStarred,
    onUpvote,
    onDownvote,
    onStarChange,
}) => {
    return (
        <div className="meme">
            <div className="meme__heading">
                <h2>{title}</h2>
                <button className="meme__star" onClick={() => onStarChange()}>
                    {isStarred ? "❤️" : "🖤"}
                </button>
            </div>
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
