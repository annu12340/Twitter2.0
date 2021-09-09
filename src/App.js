import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainFeed from "./components/Feed/MainFeed";
import WhatsHappening from "./components/WhatsHappening";

function App() {
   return (
      <div className='App'>
         {/* Sidebar */}
         <Sidebar />
         {/* Main feed */}
         <MainFeed />
         {/* What's Happening */}
         <WhatsHappening />
      </div>
   );
}

export default App;
