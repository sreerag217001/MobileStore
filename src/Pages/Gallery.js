import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ClipLoader from "react-spinners/ClipLoader";
function Gallery() {
  const [mobileList, setMobileList] = useState([])
  const [loading, setLoading] = useState(false)
  const getMobile = async () => {
    await fetch('https://dummyjson.com/products')
      .then((data) => data.json()
        .then((result) => setMobileList(result.products))
      )

  }
  console.log(mobileList)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    getMobile()
  }, [])
  return (

    <div className='bg-red-400 flex flex-wrap flex-col items-center justify-center p-5 w-full'>
      <h1 className='text-3xl font-bold text-white'>Our Gallery</h1>
      {
        loading ?
          <ClipLoader
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader" className='text-center mt-10'
          />
          :
          <>

            <div className='w-full p-5 mt-5 flex items-center justify-center gap-5 flex-wrap sm:flex'>
              {
                mobileList.map((item) => (
                  <div className=' w-72  flex flex-col gap-2   rounded-md items-center justify-center '>
                    <img src={item.images[0]} alt="image" className='bg-container w-full h-36' />
                    <h1 className='w-full font-bold text-center'>{item.title}</h1>
                    <p className=' flex flex-wrap'>{item.description}</p>

                  </div>
                ))
              }



            </div>
          </>
      }

    </div>

  )
}

export default Gallery
