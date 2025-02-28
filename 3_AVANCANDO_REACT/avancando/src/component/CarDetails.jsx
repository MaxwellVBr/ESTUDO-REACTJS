
const CarDetails = ({ brand, km, cor}) => {
  return (
    <div>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
    </div>
  )
}

export default CarDetails