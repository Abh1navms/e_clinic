import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)

  const [docInfo,setDocInfo] = useState([])

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id == docId)
    setDocInfo(docInfo)
   console.log(docInfo)
  }
   
   useEffect(()=>{
     fetchDocInfo();
    },[doctors,docId])
    

  return (
    <div>
      <div>
        <div>
          {/* {docInfo.image} */}
          <label htmlFor="">{docInfo.name}</label>
          <img src={docInfo.image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Appointment