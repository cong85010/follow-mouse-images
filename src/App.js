import {useState} from 'react'
import './App.css';

const Item = ({ item, onClick, bg="#ffb400", textColor="#fff", width = '350px', height = '230px'}) => {
  const [className, setClassName] = useState("");
  let classNameMouse = ""
  const onMouseOver = (e) => {
    const trucX = e.nativeEvent.layerX;
    const trucY = e.nativeEvent.layerY;
    if (!className.includes("In")) {
      let oldMouse = ""
      if (trucX > 0 && trucX < 50) {
        classNameMouse = "leftToRightIn"
        oldMouse = "leftToRightIn"
      } else if ((trucX > ( Number.parseInt(width)-50)) && trucX < Number.parseInt(width)) {
        classNameMouse = "rightToLeftIn"
        oldMouse = "rightToLeftIn"
      } else if ((trucY < 50) && (trucY > 0)) {
        classNameMouse = "topToBottomIn"
        oldMouse = "topToBottomIn"
      } else if ((trucY > ( Number.parseInt(height) - 50)) && (trucY < Number.parseInt(height))) {
        classNameMouse = "bottomToTopIn"
        oldMouse = "bottomToTopIn"
      }
        setClassName(classNameMouse);

    }
  };
  const onHoverOut = (e) => {
    const trucX = e.nativeEvent.layerX;
    const trucY = e.nativeEvent.layerY;
    if (className.includes("In")) { 
      if (trucX <= 4) {
      setClassName("leftToRightOut");
    } else if (trucX >= ( Number.parseInt(width)-4)) {
      setClassName("rightToLeftOut");
    } else if (trucY <= 4) {
      setClassName("topToBottomOut");
    } else if (trucY >= (Number.parseInt(height) - 15)) {
      setClassName("bottomToTopOut");
    }}

    
  };
  const openPreview = function (e) {
    setClassName("bottomToTopOut");
    onClick(item)
  };
  return (
    <div
      onClick={openPreview}
      onMouseOut={onHoverOut}
      className={`item  ${className}`}
      onMouseMove={onMouseOver}
      style={{ backgroundImage: `url(${item.img})`, width, height }}
    >
      <div className="title flex-center" 
      style={{backgroundColor: bg, color: textColor}}
      >{item.title}</div>
    </div>
  );
};
const Portfolio = (props) => {
 
  return (
    <div className="portfolio" >
      <div className="content">
        <div className="items  flex-center">
          {props.data.map((item, index) => (
            <Item item={item} key={index} {...props}/>
          ))}
        </div>
      </div>
    </div>
  );
};
function App() {
  const arrayData = [
    {
      id: 1,
      title: "SHOP PROJECT",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg",
    },
    { id: 2,
      title: "BLOG PROJECT",
      img: "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
    },
    { id: 3,
      title: "MUSIC PROJECT",
      img: "https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w",
    },
    { id:4,
      title: "SHOP PROJECT",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg",
    },
    { id: 5,
      title: "BLOG PROJECT",
      img: "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
    },
    { id:6,
      title: "MUSIC PROJECT",
      img: "https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w",
    },
    { id:7,
      title: "MUSIC PROJECT",
      img: "https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w",
    },
    { id:8,
      title: "MUSIC PROJECT",
      img: "https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w",
    },
    { id:7,
      title: "MUSIC PROJECT",
      img: "https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w",
    },
    { id:8,
      title: "MUSIC PROJECT",
      img: "https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w",
    },
    { id:7,
      title: "MUSIC PROJECT",
      img: "https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w",
    },
    { id:8,
      title: "MUSIC PROJECT",
      img: "https://images.squarespace-cdn.com/content/v1/5ac322c445776e9ae9b82917/1522744076528-ZCAVMU7JN9UVHY96V5EX/New+York.jpg?format=2500w",
    },
  ];
  const hanleClick =(e) => {
    console.log(e)
  }
  const config = {
    onClick: hanleClick,
    textColor: '#fff',
    bg: "#000",
    width: 300,
    height: 250,
  }
  return (
      <Portfolio data={arrayData} {...config} />
  );
}

export default App;
