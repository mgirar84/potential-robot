import './SearchBox.scss';

export const SearchBox = ({ onClick, clearFilter }) => {

    const onChange = (e) => {
        clearFilter();
        onClick(e.target.value)
    };

    return (
        <form>
            <input className="searchBox" type="text" name="search" placeholder=" Search" onChange={e => onChange(e)}/>
        </form>
    );
};