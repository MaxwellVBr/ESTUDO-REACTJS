import { useState } from "react"

const ManageData = () => {

    const [number, setNumber] = useState(15);

  return (
    <div>
        <p>valor: {number}</p>
        <button onClick={() => setNumber(25)}>Click!</button>
    </div>
  )
}

export default ManageData