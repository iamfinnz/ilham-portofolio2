import './Header.css'
import HeaderTitle from '../../ui/HeaderTitle'
import { profile1 } from '../../assets'
import CodeBlock from '../../ui/CodeBlock'
import Facts from '../../ui/Facts'
import SocialHandles from '../../ui/SocialHandles'
import BreathCircle from '../../ui/BreathCircle'

const code = `
const developer = {
  firstName: "Ilham", 
  lastName: "Arifin", 
  age: 24, 
  hobby: repeat = () => {
    //eat();
    //sleep();
    //code();
    //repeat();
  }
}
`

const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile1} className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"}
          code={code} />
          <div>
            <p className="text__muted description">
              Hi, I am <span className="color__primary">Ilham Arifin</span>. A software developer who is always challanged to create solution
              that benefit many. Constantly learning and growing for better results.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header