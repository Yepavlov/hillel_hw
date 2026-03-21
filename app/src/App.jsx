import MarkdownEditor from './Components/MarkdownEditor';

function App() {
  return <MarkdownEditor onContentChange={console.log} />;
}

export default App;
