import "./App.css";
import { News } from "./components/news/news";
import { useContext } from "react";
import { ThemeContext } from "./context/themecontext";

function App() {

   const { theme } = useContext(ThemeContext);
  const name = "Kacper";

  const newsList = [
    {
      title: "Spotkanie w Monachium",
      description:
        "Odbyło się spotkanie światowych liderów w Monachium dotyczące bezpieczeństwa i współpracy międzynarodowej.",
    },
    {
      title: "Nowa misja kosmiczna",
      description:
        "Europejska Agencja Kosmiczna ogłosiła start nowej misji badawczej na Marsa.",
    },
    {
      title: "Rekord na giełdzie",
      description:
        "Warszawska giełda odnotowała najwyższy wzrost indeksu WIG w tym kwartale.",
    },
    {
      title: "Przełom w medycynie",
      description:
        "Naukowcy opracowali nową metodę wczesnego wykrywania chorób serca.",
    },
    {
      title: "Nowe technologie AI",
      description:
        "Powstał innowacyjny model sztucznej inteligencji wspierający edukację i analizę danych.",
    },
    {
      title: "Zmiany klimatyczne",
      description:
        "Opublikowano raport wskazujący na przyspieszone tempo topnienia lodowców.",
    },
  ];

  return (
    <div className={theme}>

      <h1 className="animated-title">HELLO {name}!</h1>

      <main>
        {newsList.map((news, index) => (
          <News
            key={index}
            title={news.title}
            description={news.description}
          ></News>
        ))}
      </main>
    </div>
  );
}

export default App;
