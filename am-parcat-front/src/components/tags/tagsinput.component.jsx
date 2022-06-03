import { Fragment } from 'react';
import { useState } from 'react';

const TagInput = ({ onTagAdded }) => {
    const [currentTag,setCurrentTag]=useState('')

    return (
		<Fragment>
            <br/>
            <label htmlFor={currentTag}>Tags :</label>
			<input
				type="text"
				value={currentTag}
				placeholder="Ex: Constanta"
				onChange={(e) => setCurrentTag(e.target.value)}
			/>
		<button onClick={onTagAdded}>Add Tag</button>
        </Fragment>
	);
};
export default TagInput;
