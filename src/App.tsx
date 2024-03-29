import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppBarDrawer from "./components/template/AppBarDrawer";
import CardCreateUpdate from "./pages/CardCreateUpdate";
import Categories from "./pages/Categories";
import CategoryCreateUpdate from "./pages/CategoryCreateUpdate";
import Configuration from "./pages/Configuration";
import EnglishPortugueseIpa from "./pages/EnglishPortugueseIpa";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <Categories />,
    },
    {
      path: "/category-create",
      element: <CategoryCreateUpdate />,
    },
    {
      path: "/category-update/:id",
      element: <CategoryCreateUpdate />,
    },
    {
      path: "/category/:id/:type?",
      element: <Categories />,
    },
    {
      path: "/card-create/:category",
      element: <CardCreateUpdate />,
    },
    {
      path: "/card-update/:id",
      element: <CardCreateUpdate />,
    },
    {
      path: "/configuration",
      element: <Configuration />,
    },
    {
      path: "/english-portuguese-ipa",
      element: <EnglishPortugueseIpa />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <AppBarDrawer />
      <div className="pt-[64px]">
        <div>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
