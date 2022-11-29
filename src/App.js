import {default as data} from "./mock/MOCK_DATA.json";
import Pagination from "@mui/material/Pagination";
import usePagination from './hooks/usePagination';
import {useLocalStorage} from "./hooks/useLocalStorage";
function App() {
    const [notes, setNotes] = useLocalStorage('NOTES', [])




    const perPage = 20;
    const {maxPage, currentData, jump} = usePagination(data, perPage);

    let cdata = currentData()
    const handleChange = (e, p) => {
        jump(p);
    };
    return (<>
        <h1>Pagination</h1>

        <ul>
            {cdata.map((item) => <li key={item.id}> {item.name} </li>)}
        </ul>
        <hr/>
        <Pagination
            count={maxPage}
            onChange={handleChange}
        />
        <hr/>
    </>);
}

export default App;
