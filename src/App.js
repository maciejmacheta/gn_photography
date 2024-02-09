import MainHeader from './main_header/MainHeader.js';
import PhotoList from './photos_list/PhotosList.tsx';
import AboutMe from './about_me/AboutMe.js';
import Contact from './contact/Contact.js';
import LinearBox from './components/LinearBox.js'

function App() {
  return (
    <div className="App">
      
      <LinearBox />
      <MainHeader />
      <AboutMe />
      <PhotoList />
      <Contact />
    </div>
  );
}

export default App;
