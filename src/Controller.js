class Controller {
  constructor(hiker) {
    this.hiker = hiker;

    this.movingClouds();
  }

  movingClouds() {
    const cloud = document.querySelector('#cloud');
    const viewport = document.getElementById('viewport');
    const cloudsMoving = setInterval(() => {
      const cloudLeft = cloud.offsetLeft;
      cloud.style.left = `${cloudLeft + 1}px`;
      if(cloud.style.left === '810px') {
        clearInterval(cloudsMoving);
        cloud.style.left = '0px';
        this.movingClouds();
      }
    }, 250);
  }
}

module.exports = Controller; 