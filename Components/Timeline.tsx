import React from 'react'
import config from '../config.json'
import {StyledTimeline} from '../Styles/Timeline.js'
import {uuid as uuidv4 } from 'uuidv4'

export default function Timeline() {
    const configPlaylist = Object.keys(config.playlists)
    return (
        <StyledTimeline>
            {configPlaylist.map((configPlay) => {
                const videos = config.playlists[configPlay]
                return (
                    <section>
                        <h2>{configPlay}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} alt="" />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            }
            )}
        </StyledTimeline>
    )
}
