import React, { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	// 第一題
	function reverseString(str) {
		return str.split("").reverse().join("");
	}

	console.log(reverseString("Hello"));

	// 第二題
	function filterNumbers(numbers) {
		return numbers.filter((number) => number > 5);
	}

	const numbers = [2, 8, 4, 10, 1, 7];
	console.log(filterNumbers(numbers));

	// 第三題 用模板字面量和三元運算符判斷是否有傳入參數 來決定要回傳什麼 接著直接返回結果 不用宣告變數
	function formatName(firstName, lastName) {
		return `${firstName ? firstName : ""}${firstName && lastName ? " " : ""}${
			lastName ? lastName : ""
		}`;
	}

	console.log(formatName("benson", "joseph"));

	// 第四題
	function ConditionalRendering({ isLoggedIn }) {
		// 方法一: 使用 if...else 語句
		if (isLoggedIn) {
			return <div>solution 1</div>;
		} else {
			return <div>solution 2</div>;
		}

		// 或者

		// 方法二: 使用三元運算符
		// return isLoggedIn ? <div>solution 1</div> : <div>solution 2</div>;
	}

	// 第五題
	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div className="App">
			<h1>計數器: {count}</h1>
			<button onClick={increment}>增加</button>
			<button onClick={decrement}>減少</button>
		</div>
	);
}

export default App;
