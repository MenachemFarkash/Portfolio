import "./App.css";
import ContactLink from "./Components/ContactLink/ContactLink";
import EducationCard from "./Components/EducationCard/EducationCard";
import ProjectCard from "./Components/ProjectCard/ProjectCard";

function App() {
  return (
    <>
      <div className="main_section_container_main">
        <div className="navbar_container"></div>
        <section className="education_section_container">
          <h2>Eduaction</h2>
          <div className="education_cards_container">
            <EducationCard
              school="SVcollege"
              dates={"2023 - 2024"}
              details={"Unity Game Developer, design and create 3D and 2D games"}
              logo="https://svcollege.co.il/wp-content/uploads/2019/04/200_150.png.webp"
            />
            <EducationCard
              school="Cyberpro Israel"
              dates={"2022 - 2023"}
              details={"Fullstack Developer, Desing and develop web apps using the MERN stack"}
              logo="https://media.licdn.com/dms/image/v2/D4E0BAQFR5Cz0DZUueQ/company-logo_200_200/company-logo_200_200/0/1719256427293/cyberpro_israel_logo?e=1749081600&v=beta&t=qx8dvIlKulKqabEvkX-XGMmAh8LWUgEs-5UNYn07l5g"
            />
          </div>
        </section>
        <section className="main_section-container">
          <div className="main_section_content">
            <h1>Menachem Farkash</h1>
            <p>Full Stack & Game Developer</p>
            <div>
              <p>Menachem.farkash1@gmail.com</p>
              <p>054-700-8838</p>
            </div>
          </div>
          <div className="contact_links_container">
            <ContactLink
              icon="https://static-00.iconduck.com/assets.00/itch-io-icon-2048x2048-6n1nulpw.png"
              site="itch.io"
              to="https://p01sen.itch.io/"
            />
            <ContactLink
              icon="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png"
              site="LinkedIn"
              to="https://www.linkedin.com/in/menachem-farkash-939781256"
            />
            <ContactLink
              icon="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-iw6ut8fe.png"
              site="GitHub"
              to="https://github.com/MenachemFarkash?tab=overview&from=2024-12-01&to=2024-12-31"
            />
          </div>
        </section>

        <section className="projects_cards_container">
          <h3 className="projects_cards_container_title">Projects</h3>
          <div className="projects_cards_topics_container">
            <div>
              <h3 className="project_card_topic_title">Game Development</h3>
              <div className="projects_cards_topic_container">
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
            <div>
              <h3 className="project_card_topic_title">Web Development</h3>
              <div className="projects_cards_topic_container">
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="main_section_side_scroll_menu">
        <aside></aside>
      </div>
    </>
  );
}

export default App;
