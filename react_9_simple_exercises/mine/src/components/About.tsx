import { Card } from "./Card";

const data = [
    {id: 1, title: 'タイトル1', desc: 'desc1'},
    {id: 2, title: 'タイトル2', desc: 'desc2'},
    {id: 3, title: 'タイトル3', desc: 'desc3'}
    ]

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h2>About Me</h2>
        <div className="about__cards">
          {data.map((item) => (
            <Card key={item.id} className="about__card">
              {/* <span className="about__card-icon">{item.icon}</span> */}
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
        <p>
          ここに文章
        </p>
      </div>
    </section>
  );
};

export default About;
