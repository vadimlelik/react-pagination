import React, {useState} from 'react'
import useReducer from "../../hooks/useReducer/useReducer";
import reducer from "../../hooks/useReducer/reducer";

const Reducer = () => {
    const [data, setData] = useState()
    const [state, dispatch] = useReducer(reducer, [])

    console.log(state, 'state')

    const handleChange = (e) => {
        e.preventDefault()
        setData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'add',
            payload: {
                title: data
            }
        })
    }
    return (<>
        <span>Reducer</span>
        <form onSubmit={handleSubmit}>
            <input type='text' value={data || ''} onChange={handleChange}/>
            <button>Отправить</button>
        </form>

    </>)
}


export default Reducer