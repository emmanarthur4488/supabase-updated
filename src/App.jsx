import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import DesignToolsBtn from './Components/DesignToolsBtn/DesignToolsBtn'
import WeeklyUpdates from './Components/WeeklyUpdates/WeeklyUpdates'
import TutorialUpdates from './Components/TutorialUpdates/TutorialUpdates'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'
import Tools from './Components/Tools/Tools'
import DesignCard from './Components/DesignCard2/DesignCard'
import More from './Components/More/More'
import Tools2 from './Components/Tools2/Tools2'
import InterestPost from './Components/InterestPost/InterestPost'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import MoreArticles from './Components/Article/MoreArticles/MoreArticles'
import ArticleCard from './Components/Article/ArticleCard/ArticleCard'
import CreateArticle from './Components/Article/CreateArticle/CreateArticle'
import UpdateArticle from './Components/Article/UpdateArticle'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/createarticle' element={<CreateArticle/>}/>
          <Route path='/morearticles' element={<MoreArticles/>}/>
          <Route path='/:id' element={<UpdateArticle/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App