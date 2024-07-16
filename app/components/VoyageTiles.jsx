import { Link } from '@remix-run/react'

 const Music = () => {

  return (
  <label className="swap">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  {/* volume on icon */}
  <svg
    className="swap-on fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24">
    <path
      d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
  </svg>

  {/* volume off icon */}
  <svg
    className="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24">
    <path
      d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
  </svg>
</label>
)};

const VoyageTiles = ({voyages}) => {

  console.log(voyages);
  return (
    <div className="carousel carousel-center rounded-box">
      {voyages.map((voyage, index)=> (
        <div className=" carousel-item h-96 mx-8 my-8 relative flex " key={index} style={{backgroundImage: `url(${voyage.url})`}} >
        <img src={`${voyage.url}`} alt={`${voyage.name} Cruise`} />
          <div className="absolute top-5 left-5 text-2xl text-white">{`$${voyage.price}`}</div>
          <div className="absolute top-40 left-20 text-5xl text-white">{`${voyage.name} Cruise`}</div>
          <Link to={`/voyages/${voyage.name}`}>
            <button className="absolute bottom-5 right-5 bg-primary text-black py-2 px-4 rounded-full">EXPLORE</button>
          </Link>
          <div className="absolute top-5 right-5 text-white"><Music /></div>
    </div>
      ))}
    </div>
  )
}

export default VoyageTiles
