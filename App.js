import React from 'react'
import { MainLayout } from './src/MainLayout'
import {TodoState} from "./src/context/todo/todoState";


export default function App() {
	return(
		<TodoState>
			<MainLayout/>
		</TodoState>
	)
}
