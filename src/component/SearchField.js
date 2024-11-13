import React, { useState } from "react";
import style from "./SearchField.module.css";
import { useCities } from "../CitiesProvider";

export default function SearchField() {
    const [text, setText] = useState("");
    const {onSearch} = useCities();

    return(
        <section className={style.search_sec}>
            <form 
            action="#" 
            autoComplete="off"
            onSubmit={e => {
                e.preventDefault();
                onSearch(text);
                setText("");
            }}>
                <input 
                className={style.search_field}
                type="search"
                value={text}
                name="search"
                onChange={e => {setText(e.target.value)}} />
            </form>
        </section>
    );
}