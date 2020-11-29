import UrlReduceInput from './components/UrlReduceInput'
import OutputTable from './components/OutputTable'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <h1>Cast Reduce spell to shortern Url.</h1>
        <UrlReduceInput />
        <OutputTable />
      </Container>
    </div>
  );
}

export default App;
