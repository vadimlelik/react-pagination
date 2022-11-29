import {default as data} from "./mock/MOCK_DATA.json";
import Pagination from "@mui/material/Pagination";
import usePagination from './hooks/usePagination';
import {useLocalStorage} from "./hooks/useLocalStorage";
import useDebounce from "./hooks/useDebounce/useDebounce";

function App() {
    const [notes, setNotes] = useLocalStorage('NOTES', [])

    const perPage = 20;
    const {maxPage, currentData, jump} = usePagination(data, perPage);

    const fb = useDebounce(console.log, 3000)

    let cdata = currentData()
    const handleChange = (e, p) => {
        jump(p);
        fb(30000)
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
