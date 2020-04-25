import React from 'react';
import background from './assets/bg.jpg';
import moon from './assets/moon.png';
import mountain from './assets/mountain.png';
import road from './assets/road.png';
import style from './App.css';

class App extends React.Component{
  componentDidMount=()=>{
    window.addEventListener('scroll',this.scrollHandler,true);
        
  }
  scrollHandler=(event)=>{
    const bg=document.getElementsByClassName('background');
    const moon=document.getElementsByClassName('moon');
    const mountain=document.getElementsByClassName('mountain');
    const road=document.getElementsByClassName('road');
    const heading=document.getElementsByClassName('heading');
    const value=window.scrollY;
    bg.style.top=value*0.5+'px'
}
  
  render(){
    
    return (
      <div className="App">
       <section>
          <img src={background} alt='background' className='background'/>
          <img src={moon} alt='moon' className='moon'/>
          <img src={mountain} alt='mountain' className='mountain'/>
          <img src={road} alt='road' className='road'/>
          <h2 className='heading'>Moon Light Road</h2>
       </section>
      </div>
    );
  }
}

export default App;
