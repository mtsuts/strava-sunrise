export default function MyButton({ count, onClick }) {
  return <button onClick={onClick} className='p-4 bg-gray-100 mt-4 rounded-xl'> Clicked {count} times </button>
}