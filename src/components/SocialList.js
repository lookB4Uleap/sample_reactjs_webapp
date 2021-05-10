import React, { useEffect, useState } from 'react'
import axios from 'axios';

function SocialList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/list')
        .then(res => {
        // setList(res.data); 
        // console.log(res);
        // console.log(list);
        setList(res.data);
      })
    },[])

    console.log(list);
    
    return (
        <div className="displist">
            
                {list.map(ele => (
                    <div key={ele.id} className="out">
                        <div className="in">
                            <div>{ele.id}.</div>
                            <div align="center" id="img">
                            <img src={ele.logo} width="40" height="40"/>
                            </div>
                            <img src={ele.logo} id="img2" width="40" height="40"/>
                            <div>{ele.name}</div>
                            <div id="last">Active Users : {ele.activeUsers} million</div>
                        </div> 
                    </div>
                ))}
        </div>
    )
}

export default SocialList;
