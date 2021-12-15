import React, { useState } from "react";
import { RequestStatus, useFetch } from "../hooks/useFetch";
import { responseDemo } from "../mock";
import { axiosOptions, tracksUrl } from "../service";

export interface Track {
  uri:               string;
  index:             number;
  paused:            boolean;
  id:                number;
  percentage:        number;
  played:            boolean;
  currentTime:       number;
  playing:           boolean;
  artist:            string;
  title:             string;
  duration:          number;
  permalink_url:     string;
  favoritings_count: number;
  stream_url:        string;
  artwork_url:       string;
}


function Playlist() {

  const {status,data, error } = useFetch<Track[]>(tracksUrl, axiosOptions)

  if (status === RequestStatus.fetching) {
    return <div>loading</div>;
  }

  if (status === RequestStatus.error) {
    return <div>{error}</div>;
  }
console.log(data)
  return (
    <div className="playlists">
      <div className="list">
        <ul className="track-list">
          {data?.map((track) => (
            <li key={`track-${track.id}`} className="row">
              <button className="btn" onClick={() => console.log(track)}>
                <div className="album">
                  <img
                    className="album__cover"
                    width={80}
                    height={80}
                    src={track.artwork_url}
                    alt={`Album artwork from track ${track.title}.`}
                  />
                </div>
                <div className="info">
                  <h2 className="info__track">{track.title}</h2>
                  <span className="info__artist">{track.artist}</span>
                </div>

                <div className="more">
                  <i className="fas fa-ellipsis-v" />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
