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
        <div>
            <h2>{title}</h2>
            <img src={`/img/${img}`} alt={title} loading="lazy" />
            <button>Up {upvotes}</button>
            <button>Down {downvotes}</button>
        </div>
    );
};

export default Meme;
