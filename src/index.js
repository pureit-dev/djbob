import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Contact from "./components/Contact/Contact.component"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App/>}>
			<Route path="contactus" element={<Contact />} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
