import React, {useState} from 'react';
//import './Style.css';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

    onFormSubmit(term);
};

return(
    //creating a Search Bar
    <div className='search-bar ui segment'>
        <form onSubmit = { onSubmit } className='ui form'>
            <div className='ui field '>
                <label>Search for a Video</label>
                <input 
                type="text" 
                value= {term} 
                onChange = {(event) => setTerm(event.target.value)}
                />
            </div>
        </form>
    </div>
)

};


export default SearchBar;