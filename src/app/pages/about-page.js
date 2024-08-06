import AboutMe from "../components/aboutMe";
import Journey from "../components/journey";
import Skills from "../components/skills";

export default function AboutPage() {
  return (
    <>
    <div className="max-w-screen-xl m-auto">
      <div className="bg-white p-8 mt-8 rounded shadow-lg">

      
      <h1>Who am I?</h1>
      <AboutMe/>

      <Journey/>

      <Skills/>
        </div>
    </div>
    </>
  )
}
