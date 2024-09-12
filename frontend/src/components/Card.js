export default function Card(props) {

  return (
    <button onClick={props.onClick} className='bg-white text-darkSpace text-lg p-3 rounded-lg' data-type={props.name}> {props.name} </button>
  )
}