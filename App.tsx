// App.tsx

import React from "react";
import { LoginScreen } from "./src/screens/LoginScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import StarshipFeedScreen from "./src/screens/StarshipFeedScreen";
import Navigators from "./src/navigation/Navigator";
import { NetworkProvider } from "react-native-offline";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <Navigators />
      </NetworkProvider>
    </QueryClientProvider>
  );
};

export default App;
