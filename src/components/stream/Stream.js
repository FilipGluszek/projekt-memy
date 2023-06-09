/**
 * External dependencies
 */
import { useSelector, useDispatch } from "react-redux";

/**
 * Internal dependencies
 */
import Meme from "../meme/Meme.js";
import { upvote, downvote, starChange } from "../../store/memesSlice.js";
import "./style.css";

/**
 * Render component
 *
 * @param {Object} attributes      Component attributes.
 * @param {string} attributes.type Stream type.
 */

const Stream = ({ type }) => {
    const memes = useSelector((state) =>
        state.memes.value.filter((meme) => {
            const isHot = meme.upvotes - meme.downvotes > 5;
            return "hot" === type ? isHot : !isHot;
        })
    );
    const dispatch = useDispatch();

    return (
        <div className="stream">
            {0 === memes.length ? (
                <div className="notice">
                    <p>
                        Wygląda na to, że nic tu nie ma. Wpadnij za jakiś czas!
                    </p>
                </div>
            ) : (
                memes.map((meme) => {
                    return (
                        <Meme
                            key={meme.id}
                            title={meme.title}
                            img={meme.img}
                            upvotes={meme.upvotes}
                            downvotes={meme.downvotes}
                            isStarred={meme.isStarred}
                            onUpvote={() =>
                                dispatch(upvote({ memeId: meme.id }))
                            }
                            onDownvote={() =>
                                dispatch(downvote({ memeId: meme.id }))
                            }
                            onStarChange={() =>
                                dispatch(starChange({ memeId: meme.id }))
                            }
                        />
                    );
                })
            )}
        </div>
    );
};

export default Stream;
