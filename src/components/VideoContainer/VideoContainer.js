import { thumbnailGenerator } from '../../constants/constants';
import './VideoContainer.scss';

export const VideoContainer = ({ title, _id }) => {
    return (
        <button className="container">
            <div className="videoContainer">
                <img src={thumbnailGenerator(_id)} alt={title}/> 
            </div>
            <p className="videoTitle">{title}</p>
        </button>
       
    );
};