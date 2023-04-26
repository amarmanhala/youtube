import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchContainer from "./components/WatchContainer";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchContainer />
    }
  ]
}])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}>
          <Outlet />
        </RouterProvider>
       
      </Provider>
    </div>
  );
}

export default App;
