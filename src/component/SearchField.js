import React, { useState } from "react";
import style from "./SearchField.module.css";

export default function SearchField({setSearch = f => f}) {
    const [text, setText] = useState("");

    return(
        <section className={style.search_sec}>
            <form 
            action="#" 
            autoComplete="off"
            onSubmit={e => {
                e.preventDefault();
                setSearch(text);
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