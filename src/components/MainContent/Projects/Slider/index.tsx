import { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsDot } from 'react-icons/bs'
import { Islider } from '../../../../types/slider';
import '../../../../styles/components/slider.sass';

type Props = {
  slides: Islider[];
}

export default function Slider({slides}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contador, setContador] = useState(0);
  const projectUrl = [
    {url: 'https://aluroni-restaurant.netlify.app'},
    {url: 'https://pokemon-search-app-luiz.netlify.app'},
    {url: 'https://task-list-with-timer.netlify.app'}
  ]
  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  useEffect(() => {
    setTimeout(() => {
      goToNext()
      setContador(oldContador => oldContador + 1)
    }, 7000)
  },[contador])

  
  function goToPrevious() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
    setCurrentIndex(newIndex)
  }
  function goToNext() {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function handleDots(item: number) {
    if (item === currentIndex){
      return <BsDot id='slider-dot-choosed' />
    }else{
      return <BsDot id='slider-dot' />
    }
  }

  return ( 
    <div className='slider-container'>
      <BsFillArrowLeftCircleFill id="left-arrow" onClick={goToPrevious}/>
      <BsFillArrowRightCircleFill id="right-arrow" onClick={goToNext}/>
      <a href={projectUrl[currentIndex].url} className="projects-btn">Ver projeto</a>
      <div style={slideStyles}></div>
      <div className='dots-container'>
        {slides.map((item) => (
          <div key={item.title} onClick={() => setCurrentIndex(item.id)}>{handleDots(item.id)}</div>
        ))}
      </div>
    </div>
  )
}