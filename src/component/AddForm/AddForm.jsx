import React, {useState} from "react";
import styles from "./addForm.module.scss";
import {useLocalStorage} from "../../hooks/useLocalStorage";

const AddForm = () => {
    const [data, setData] = useState({})
    const [users, setUser] = useLocalStorage('USERS', [])

    const handleChange = (e) => {
        const {target} = e
        setData((prevState) => ({
            ...prevState, [target.name]: target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser((prevState)=>{
            return [...prevState,data]
        })
        setData({})

    }
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1>Add form</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.input__group}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' type='text' placeholder='Добввьте имя' value={data.name || ''}
                           onChange={handleChange}/>
                </div>
                <div className={styles.input__group}>
                    <label htmlFor='firstName'>FirstName</label>
                    <input id='firstName' name='firstName' value={data.firstName || ''} type='text'
                           placeholder='Добввьте Фамилию ' onChange={handleChange}/>
                </div>
                <div className={styles.input__group}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' value={data.email || ''} onChange={handleChange} type='email'
                           placeholder='Добввьте Email '/>
                </div>
                <div>
                    <textarea rows="5" cols='45' name='description' value={data.description || ''}
                              placeholder='Добввьте Описание  ' onChange={handleChange}/>
                </div>
                <button type='submit'> Отправить</button>
            </form>


        </div>
    </div>;
};

export default AddForm;
