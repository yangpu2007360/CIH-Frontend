import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Sitemap() {
    const [sitemap, setSitemap] = useState(null);

    useEffect(() => {
        try {

            axios.get(`/sitemap.xml`).then(
                (response) => {
                    console.log("resonse data", response.data)
                    return (
                        response.data
                    )

                }
            )
        }
        catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <pre>{sitemap}</pre>
    )
}

export default Sitemap