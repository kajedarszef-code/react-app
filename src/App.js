import "./App.css";
import { News } from "./components/news/news";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/themecontext";

function App() {

  const [news, setNews] = useState([]);

   const { theme } = useContext(ThemeContext);
  const name = "Kacper";

  
  useEffect(() =>{
    //https://jsonplaceholder.typicode.com/posts?_limit=10
    const fetchNews = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

      if (!response.ok) {
        return
      } 
      const data = await response.json();
      console.log(data);
      setNews(data);
    }
    fetchNews();
    

  }, [])
  return (
    <div className={theme}>

      <h1 className="animated-title">HELLO {name}!</h1>

      <main>
        {news.map((news, index) => (
          <News
            key={index}
            title={news.title}
            description={news.bodys}
          ></News>
        ))}
      </main>
    </div>
  );
}

export default App;
