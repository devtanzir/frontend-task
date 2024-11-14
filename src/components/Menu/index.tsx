import "react-multi-carousel/lib/styles.css";
import SliderItem from "./components/slider-item";
import Slider from "../shared/slider";

const Menu = () => {
  return (
    <div className="bg-cream">
      <Slider
        desktop={4}
        tablet={2}
        mobile={1}
        sideImage="/images/side.png"
        sideImagePosition="w-[360px] absolute top-[100px] left-[-520px] rotate-[-75deg]"
        sectionHeaderTitle="Crispy, Every Bite Taste"
        sectionHeaderDes="POPULAR FOOD ITEMS"
      >
        <SliderItem
          photo="/images/burger.jpg"
          title="vegetables burger"
          des="Barbecue Italian cuisine pizza"
        />
        <SliderItem
          photo="/images/pizza.png"
          title="Spacial Pizza "
          des="Barbecue Italian cuisine pizza"
        />
        <SliderItem
          photo="/images/ff.jpg"
          title="Spacial French fries "
          des="Barbecue Italian cuisine"
        />
        <SliderItem
          photo="/images/fc.jpg"
          title="Cuisine Chicken"
          des="Japanese Cuisine Chicken"
        />
      </Slider>
    </div>
  );
};

export default Menu;
