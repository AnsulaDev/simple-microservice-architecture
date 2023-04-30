import React , {useState} from "react";
import axios from 'axios';

export default() => {
    const [title, setTitle] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('') ;//after submission when it success it will gonna empty the title box.
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value = {title} 
                    onChange={e => setTitle(e.target.value)} 
                    className="form-control"/>
                </div>
                <button className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    );
};