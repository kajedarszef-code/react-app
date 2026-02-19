import "./App.css";
import { News } from "./components/news/news";
import { Nav } from "./components/nav/nav";

function App() {
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
    <>

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
    </>
  );
}

export default App;
