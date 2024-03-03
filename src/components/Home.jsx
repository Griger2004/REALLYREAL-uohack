import './Home.css'

function Home(props)
{
  return (
    <header className="class-header">
      <h1>Welcome to {props.myCode}</h1>
    </header>
  );
}

export default Home