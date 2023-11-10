import { ThemeProvider } from "styled-components";
import { Button } from "./Components/Button";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Button variant="primary"/>
    <Button variant="secundary"/>
    <Button variant="success"/>
    <Button variant="danger"/>
    <Button />
   </ThemeProvider>
  )
}