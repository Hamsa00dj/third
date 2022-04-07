
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'

const routing = (
    <Router>
        <div>
        <div>
            <Link to = '/'>Home</Link>
        </div>
        <div>
            <Link to = '/about'>About</Link>
        </div>
        <div>
            <Link to = '/contact'>Contact</Link>
        </div>

        <Route path = '/' exact component ={Home}/>
        <Route path = '/about'  exact component ={About}/>
        <Route path = '/contact' exact component ={Contact}/>
        </div>
    </Router>
)

export default routing