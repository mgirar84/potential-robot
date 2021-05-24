import { useEffect, useState } from "react";
import { FilterList } from "../../components/FilterList/FilterList";
import { Loading } from "../../components/Loading/Loading";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { VideoContainer } from "../../components/VideoContainer/VideoContainer";
import { apiData } from "../../constants/apiData";
import "./Videos.scss";

export const Videos = () => {

    const [videoData, setVideoData] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);
    const [presentersFilter, setPresentersFilter] = useState(null);
  
    useEffect(() => {
        setVideoData(apiData);
    }, []);
    
    if (!videoData) return <Loading />

    const clearFilter = () => {
        setActiveFilter(null)
    };

    const filterList = [
        "All",
        "Tech",
        "GCN Show",
        "Science",
        "Presenters"
    ];

    const presentersList = [
        "Manon",
        "Ollie",
        "Conor",
        "Alex",
        "Dan",
        "Simon"
    ];

    const filter = (filter) => {
        let filteredData = [];
        setPresentersFilter(false);
        if (filter === "All") {
            setVideoData(apiData);
        } else if (filter === "Presenters") {
            setPresentersFilter(true);
        } else {

            apiData.forEach((video, index) => {
                let { description } = video;
    
                if (description.includes(filter)) {
                    filteredData.push(video);
                };
            });
            setVideoData(filteredData);
        };
    };

    return (
        <div className="videoScreen">
            <div className="filtersContainer">
                <FilterList 
                    data={filterList} 
                    onClick={filter} 
                    activeFilter={activeFilter} 
                    setActiveFilter={setActiveFilter} 
                />
            </div>
            {presentersFilter &&
                <div className="presentersFilterContainer">
                    <FilterList 
                        data={presentersList} 
                        onClick={filter} 
                        activeFilter={presentersFilter} 
                        setActiveFilter={setPresentersFilter}
                    /> 
                </div>
            }
            <SearchBox onClick={filter} clearFilter={clearFilter}/>
            <div className="videosContainer">
                {videoData.map(({ _id, title}, index) => {
                    return (
                        <VideoContainer
                            {...{
                                key: index,
                                title,
                                _id
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};