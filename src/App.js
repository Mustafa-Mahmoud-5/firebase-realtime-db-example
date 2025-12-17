import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddGroup from "./addGroup";
import GroupList from "./groupList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddGroup />} />
        <Route path="/groups" element={<GroupList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
