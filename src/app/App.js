import Header from './components/layout/header';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage, BlogPage, BlogPostPage, ContactPage, HomePage, ProjectDetailPage, ProjectPage, ServicesPage } from './pages';
import { ROUTES } from './routes';
import { HygraphProvider } from './services';
import Footer from './components/layout/footer';


function App() {
  return (
    <>
    <HygraphProvider>
      <Header/>
      <div className=''> 
        
      <Routes >
        <Route path={ROUTES.Home} element={<HomePage/>} />
        <Route path={ROUTES.About} element={<AboutPage/>} />

        <Route path={ROUTES.Project}>
          <Route index element={<ProjectPage/>} />
          <Route path={ROUTES.ProjectDetail} element={<ProjectDetailPage/>} />
      </Route>
        <Route path={ROUTES.Services} element={<ServicesPage/>} />

        <Route path={ROUTES.Blog}>
          <Route index element={<BlogPage/>} />
          <Route path={ROUTES.BlogPost} element={<BlogPostPage/>} />
      </Route>
        <Route path={ROUTES.Contact} element={<ContactPage/>} />
      </Routes>
      </div>
      <Footer/>
    </HygraphProvider>
    </>
  );
}

export default App;
