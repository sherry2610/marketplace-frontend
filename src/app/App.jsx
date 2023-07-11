// import { Provider } from "react-redux";
import { MainRoutes } from "Routes/Routes";
import { BrowserRouter } from "react-router-dom";

// import { UserProvider } from 'Context/User';
// import { CoreProvider } from 'Context/Core';

// Pull the mock data
// import { setupStore } from "../store";

// Create the store
// const store = setupStore();

function App() {
  return (
    <>
      {/* // <Provider store={store}> */}
      {/* <UserProvider>
        <CoreProvider> */}
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      {/* </CoreProvider>
      </UserProvider> */}
      {/* // </Provider> */}
    </>
  );
}
export default App;
