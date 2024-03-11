import React from 'react'

const temp = () => {
    const st = `/api/v1${}` ;
    async function addToDatabase(){
        const resp = await fetch(st , {
            method:"post" ,
            headers:{
                "Content-type":"applicartion/json"
            } , 
            body:{


            }


        })
    }

    
  return (
    <div>

    </div>
  )
}

export default temp