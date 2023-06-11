import {
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="mt-5">
      <h2 className="my-4 fs-1">I'm Furkan Urhan</h2>
      <p className="my-4 col-md-8">
        I interest frontend development. I love working with Javascript and building something with it. 
        Apart from that, I also enjoy in Camping and Playing Tennis. For more info about me and my journey, 
        click on the button below.
      </p>
      
      <Link to={"./cv"}>
        <Button
          color="info"
          outline
          className='px-4 py-2 my-4'
        >
          My CV
        </Button>
      </Link>
    </div>
  );
}

export default Home;
