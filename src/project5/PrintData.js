import React from 'react'

const PrintData = ({items}) => {
    console.log(items);
  return (
    <>
        <div style={{'marginLeft':'35rem','marginTop':'1rem','display':'flex',flexDirection:'column'}}>
        {
            items.map((item)=>{
                return(
                    <div className="card" key={item.id} style={{width:'400px','marginTop':'1rem'}} >
                        <img src={item.img} className='card-img-top' alt=" " width='100px' height='200px' />
                        <div className="card-title">
                            {item.title}
                        </div>
                        <p className="card-text">{item.desc}</p>
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default PrintData