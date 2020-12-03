const onScroll = () => {
    window.removeEventListener('scroll', onScroll);
    setTimeout(() => {
      document.querySelector('.bar-container').classList.add('shown');
    }, 2000);
  };

window.addEventListener('scroll', onScroll);
