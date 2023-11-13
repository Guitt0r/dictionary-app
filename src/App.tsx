import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import AddWordPage from "./pages/AddWordPage/AddWordPage.tsx";
import TestPage from "./pages/TestPage/TestPage.tsx";
import ResultsPage from "./pages/ResultsPage/ResultsPage.tsx";
import CompletedTestsPage from "./pages/CompletedTestsPage/CompletedTestsPage.tsx";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add-word' element={<AddWordPage/>}/>
            <Route path='/test' element={<TestPage/>}/>
            <Route path='/result' element={<ResultsPage/>}/>
            <Route path='/completed-tests' element={<CompletedTestsPage/>}/>
        </Routes>
    )
}
export default App