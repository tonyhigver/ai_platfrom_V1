export default function Login(){
  return(
    <div className="max-w-md mx-auto mt-16 card text-center">
      <h2>Login</h2>
      <input className="block w-full p-2 mt-4 text-black" placeholder="Email"/>
      <input className="block w-full p-2 mt-2 text-black" placeholder="Password"/>
      <button className="btn mt-4 w-full">Login</button>
    </div>
  )
}
