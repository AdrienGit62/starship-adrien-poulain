// App.tsx

import React from "react";
import {LoginScreen} from "./src/screens/LoginScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import StarshipFeedScreen from "./src/screens/StarshipFeedScreen";
import Navigators from "./src/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigators />
    </QueryClientProvider>
  );
};

export default App;
