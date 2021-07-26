
import React,{useState} from 'react';
import data from './data.json';

const SearchBox = ()=>{
	const [searchTerm,setSearchTerm] = useState('');

	return(
		<div>
		<input
		type="text"
		placeholder="Search..."
		onChange={(event) =>{
			setSearchTerm(event.target.value);
		}}/>
		{data.filter((val)=>{
			 if(val.task.toLowerCase().includes(searchTerm.toLowerCase())){
				return val
			}
		}).map((val,key)=>{
			return (
				<>{val.task}</>
				)
				
		})}
		</div>
		)
}
export default SearchBox;