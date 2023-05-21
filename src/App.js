import { Provider } from "react-redux";
//import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchContainer from "./components/WatchContainer";
import ErrorBoundary from "./components/ErrorBoundary";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/watch",
      element: <WatchContainer />,
      errorElement: <ErrorBoundary />
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
