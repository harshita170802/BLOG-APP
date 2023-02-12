import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./NavBar";


function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
	  const fetchPosts = async () => {
		const result = await axios.get('https://dummyapi.io/data/api/post');
		setPosts(result.data);
	  };
  
	  fetchPosts();
	}, []);
  
	const handleClick = (postId) => {
	  window.location.href = `/post?id=${postId}`;
	};
  
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div id="page-body">
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/about" component={AboutPage} />
			
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
