import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'
import Tools from './Components/Tools/Tools'
import More from './Components/More/More'
import Tools2 from './Components/Tools2/Tools2'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import MoreArticles from './Components/Article/MoreArticles/MoreArticles'
import ArticleCard from './Components/Article/ArticleCard/ArticleCard'
import CreateArticle from './Components/Article/CreateArticle/CreateArticle'
import UpdateArticle from './Components/Article/UpdateArticle'
import "react-loading-skeleton/dist/skeleton.css"
import ArticlePage from './Components/Article/ArticlePage'
import PageCard from './Components/Article/PageCard'
import PageCard1 from './Components/Article/PageCard1'
import ArticlePage1 from './Components/Article/ArticlePage1'
import ArticlePage2 from './Components/Article/ArticlePage2'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App({smoothie}) {

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
          <Route path='/pagecard' element={<ArticlePage  smoothie={smoothie}/>}/>
          <Route path='/pagecard1' element={<ArticlePage1  smoothie={smoothie}/>}/>
          <Route path='/pagecard2' element={<ArticlePage2  smoothie={smoothie}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App