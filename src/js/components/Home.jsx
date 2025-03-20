import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnToDots, faX } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const [currentInput, setCurrentInput] = useState("");
	const [todo, setTodo] = useState([]);

	const deleteItem = (currentIndex) => {
		setTodo(todo.filter((item, index ) => index !== currentIndex))
	}


	return (
		<div className="container w-50">
			<div id="row" className="row d-flex jutify-content-center ">
				<h2 className="d-flex justify-content-center" >TODOS</h2>
				<ul className="d-flex flex-column justify-content-center">
					<li>
						<input
							className="ps-5"
							type="text"
							placeholder="What needs to be done"
							onChange={(event) => setCurrentInput(event.target.value)}
							value={currentInput}
							onKeyDown={(event) => {
								if (event.key === "Enter" && currentInput.trim() !== "") {
									setTodo(([...todo, currentInput]))
									setCurrentInput("")
								}
							}}
						>
						</input>
					</li>
					{todo.map((item, index) => (
						<li
							className="ps-5 pe-3 d-flex justify-content-between align-items-center"
							key={index}
						>
							{item}
							<FontAwesomeIcon
							 	onClick={()=> deleteItem(index)}
								icon={faX}
							/>
						</li>
					))}

					<div id="counterList">{todo.length} items in the list</div>
				</ul>
			</div>
		</div>
	);
};
export default Home;