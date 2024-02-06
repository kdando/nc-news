import Icon from '@mdi/react';
import { mdiThumbUp, mdiThumbDown  } from '@mdi/js';

import { useState } from 'react';
import { voteOnArticle } from '../../utils/utils';



export default function AddVote ({ article_id, votes }) {

    const [currentVotes, setCurrentVotes] = useState(votes);
    const [error, setError] = useState(null);

    const handleUpVoteClick = () => {
        setCurrentVotes((displayedVotes) => displayedVotes + 1);
        setError(null);
        voteOnArticle(article_id, 1)
        .catch((error) => {
            setCurrentVotes((displayedVotes) => displayedVotes - 1);
            setError("Something went wrong, please try again.")
        })
    }
    const handleDownVoteClick = () => {
        setCurrentVotes((displayedVotes) => displayedVotes - 1);
        setError(null);
        voteOnArticle(article_id, -1)
        .catch((error) => {
            setCurrentVotes((displayedVotes) => displayedVotes + 1);
            setError("Something went wrong, please try again.")
        })
    }
    
    return (
        <>
        <div className="box level is-mobile">

        {error ? <p className="level-item">{error}</p> : null}

        <p className={`vote-count ${currentVotes > 0 ? 'positive' : currentVotes < 0 ? 'negative' : ''} level-item`}>{currentVotes}</p>
        
        <button className="button level-item is-success is-light is-responsive" onClick={handleUpVoteClick}><Icon path={mdiThumbUp} size={1} /></button>
        <button className="button level-item is-danger is-light is-responsive" onClick={handleDownVoteClick}><Icon path={mdiThumbDown} size={1} /></button>
        </div>
        </>
    )

}