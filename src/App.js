import {default as data} from "./mock/MOCK_DATA.json";
import Pagination from "@mui/material/Pagination";
import {Stack} from "@chakra-ui/react";
import usePagination from './hooks/usePagination';
import {useLocalStorage} from "./hooks/useLocalStorage";
import {useEffect} from "react";


function App() {


    // const [page, setPage] = useState(1);
    const [notes, setNotes] = useLocalStorage('NOTES', [])


    // useEffect(()=>{
    //     setNotes(prevNotes=>{
    //         return [
    //             ...notes, {id: 123, name: 'Vadim'}
    //         ]
    //     })
    // },[])

    console.log(notes)

    const perPage = 20;
    const {currentPage, maxPage, currentData, next, jump, setCurrentPage} = usePagination(data, perPage);
    let cdata = currentData()
    const handleChange = (e, p) => {
        console.log(p);
        jump(p);
    };
    return (<>
        <h1>Pagination</h1>

        <ul>
            {cdata.map((item) => <li key={item.id}> {item.name} </li>)}
        </ul>
        <Stack>
            <Pagination
                count={maxPage}
                onChange={handleChange}
            />
        </Stack>
    </>);
}

export default App;
