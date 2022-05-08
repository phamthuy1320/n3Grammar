import Layout from './components/Layout';

function App() {
  const onClick = () => {
    window.location.replace("/lecture")
  }
  return (
    <Layout>
        <p>
         日本語の旅。N3の文型。始めましょう！
        </p>
        <a
          className="App-link"
          href="#lecture"
          rel="noopener noreferrer"
        >
          Let's Go!
        </a>
        <button onClick={onClick}>Go to test</button>








        
    </Layout>
  );
}

export default App;
