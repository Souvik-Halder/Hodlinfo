
import Table from './components/Table';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import {  useState } from 'react';
function App() {
  const [dark, setDark] = useState(true);
  const toogleMode=()=>{
    if(dark===false)
    setDark(true)
    else
    setDark(false)
  }


  return (
 
<div className={`${dark ? 'bg-[#191d28]':'bg-[#ffffff]'} overflow-y-auto h-[100vh]`}>
<Header toogleMode={toogleMode} dark={dark}/>
<Hero dark={dark}/>
 <Table dark={dark}/>
<Footer dark={dark}/>
</div>

  );
}

export default App;
