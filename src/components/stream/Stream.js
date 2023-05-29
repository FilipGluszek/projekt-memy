/**
 * External dependencies
 */
import { useSelector } from "react-redux";

/**
 * Internal dependencies
 */
import Meme from "../meme/Meme.js";
import "./style.css";

/**
 * Render component
 *
 * @param {Object} attributes      Component attributes.
 * @param {string} attributes.type Stream type.
 */

const Stream = ({ type }) => {
    const memes = useSelector((state) => state.memes.value);

    return (
        <div class="stream">
            {memes.map((meme, index) => {
                return (
                    <Meme
                        key={index}
                        title={meme.title}
                        img={meme.img}
                        upvotes={meme.upvotes}
                        downvotes={meme.downvotes}
                    />
                );
            })}
        </div>
    );
};

export default Stream;
