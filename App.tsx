import { StatusBar } from "react-native";
import Home from "./src/screens/home";

//APP E A FUNCAO PADRON DO JSX
export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="default"
        backgroundColor={'transparent'}
        translucent
      />

      <Home></Home>
    </>
  );
};


