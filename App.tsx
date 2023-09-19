import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./src/state/theme";
import { NativeWindStyleSheet } from "nativewind";
import SetupNavigation from "./src/navigation/SetupStack";

NativeWindStyleSheet.setOutput({ default: "native" });

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated, and update setIsAuthenticated accordingly
    // For example, you can use AsyncStorage, a token check, or any other method.
    // Once you determine authentication, update setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    // Prevent the splash screen from auto-hiding
  }, []);

  if (!isAuthenticated) {
    return (
      <ThemeProvider>
        <SetupNavigation />
      </ThemeProvider>
    );
  }
}
