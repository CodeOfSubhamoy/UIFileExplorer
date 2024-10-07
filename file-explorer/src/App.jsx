import FolderUI from "./FolderUI";
import explorer from "../src/data/folderdata";

function App() {
  return (
    <>
      <FolderUI data={explorer} />
    </>
  );
}

export default App;
