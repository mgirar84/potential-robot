import './FilterList.scss';

export const FilterList = ({ data, onClick, activeFilter, setActiveFilter}) => {

    return(
        <div className="filterContainer">
            {data.map((filter, index) => {
                return(
                    <div key={index}>
                        <button
                            className={activeFilter === filter ? "activeFilter" : undefined}
                            onClick={() => {
                                onClick(filter);
                                setActiveFilter(filter);
                            }}
                        >
                            {filter}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};