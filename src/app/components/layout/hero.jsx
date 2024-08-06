import Model from "../3d_object/hero/Canvas";

export default function Hero() {

  const imgStyle = {
    position: 'absolute',
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
  };

  return (
    <>
      <div className="relative w-screen" >
        <img  style={imgStyle} src="/eindopdracht-Jonasdegroote1/images/sea.gif" alt="" />
        <div className="max-w-screen-xl mx-auto text-por_white-100 flex justify-center items-center h-full relative" >
        <h1 className="align-center text-por-white">
          Welkom bij het portfolio van <br /> Jonas De Groote
        </h1>
        <Model />
        </div>
      </div>
    </>
  );
}
