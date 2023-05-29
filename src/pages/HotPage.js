/**
 * External dependencies
 */
import { useSelector } from "react-redux";

/**
 * Internal dependencies
 */
import Meme from "../components/meme/Meme.js";

/**
 * Render components
 */
const HotPage = () => {
    const memes = useSelector((state) => state.memes.value);
    return (
        <div>
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

export default HotPage;
