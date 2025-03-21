import React from 'react'
import './ComicsList.css'
import Card from '../Card/Card'
import comics from '../../../public/dc-comics-2/comics'

const ComicsList = () => {
    console.log(comics);

    return (
        <div className='comics'>
            {comics.map(comic =>
            (
                <Card
                    key={comic.id}
                    img={comic.thumb}
                    title={comic.series}
                />
            )
            )}
            <div className="w-full justify-center">
                <div className="discover-badge">
                    LOAD MORE
                </div>
            </div>
        </div>
    )
}

export default ComicsList
