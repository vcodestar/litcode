import React, { useEffect, useState } from "react";
import LinkComponent from "./LinkComponent";
import MenuHeader from "./MenuHeader";
import { loadWriteups } from "./loadWriteups";

function PythonMenu() {
    const [links, setLinks] = useState([]);
    const writeups = import.meta.glob('/src/languages_menus/python_writeups/*.jsx');
    console.log(writeups);

    useEffect(() => {
        loadWriteups(writeups, 'python_writeups').then((links) => {
            setLinks(links);
        });
    }, []);

    return (
        <div>
            <MenuHeader name="Python" />
            <LinkComponent links={links} />
        </div>
    );
}

export default PythonMenu;
