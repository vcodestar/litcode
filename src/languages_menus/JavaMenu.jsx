import React, { useEffect, useState } from "react";
import LinkComponent from "./LinkComponent";
import MenuHeader from "./MenuHeader";
import { loadWriteups } from "./loadWriteups";

function JavaMenu() {
    const [links, setLinks] = useState([]);
    const writeups = import.meta.glob('/src/languages_menus/java_writeups/*.jsx');
    console.log(writeups);

    useEffect(() => {
        loadWriteups(writeups, 'java_writeups').then((links) => {
            setLinks(links);
        });
    }, []);

    return (
        <div>
            <MenuHeader name="Java" />
            <LinkComponent links={links} />
        </div>
    );
}

export default JavaMenu;
