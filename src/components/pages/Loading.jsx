import { useState, useEffect } from "react"


const Loading = () => {

     /*Timer*/
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)


    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className={`main-load-cont ${isLoading ? 'visible' : 'hidden'}`}>
      <div className={`load-cont ${isLoading ? 'visible' : 'hidden'}`}>
      <div className="pulse">
          <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
        </div>
      </div>
      </div>
    </>
  )
}

export default Loading
