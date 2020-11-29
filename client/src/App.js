import Header from './components/Header';
import UrlReduceInput from './components/UrlReduceInput'
import OutputTable from './components/OutputTable'
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Header />
        <h1>Cast Reduce spell to shortern Url.</h1>
        <UrlReduceInput />
        <OutputTable />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
