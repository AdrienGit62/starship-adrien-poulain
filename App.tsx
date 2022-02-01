// App.tsx

import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import StarshipFeedScreen from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StarshipFeedScreen />
    </QueryClientProvider>
  );
};

export default App;
