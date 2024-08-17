import "./App.css";

import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"

import Content from "./components/Content/Content"
import { blogPosts } from './data';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div>
      <Header />
      </div> 

      <div className ="content-card">
        {blogPosts.map(post => (
                <Content 
                    key={post.id} 
                    title={post.title} 
                    body={post.body} 
                />
            ))}
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
