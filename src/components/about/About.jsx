import "./About.css"
import logo from"../../assets/logo.png"

const About = () => {
    const aboutText = "Добро пожаловать в наш интернет-супермаркет — место, где современный ритм жизни встречается с удобством и качеством сервиса. Мы создали платформу, которая позволяет вам совершать покупки быстро, безопасно и комфортно, не выходя из дома. Наш каталог насчитывает тысячи товаров — от свежих продуктов и бытовой химии до техники, одежды и товаров для дома. "
  return (
    <div className='about'>
        <div className='about-img'>
            <img src={logo}/>
        </div>
        <div className='about-text'>
            <h1>О нашем интернет-супермаркете:</h1>
            <p>{aboutText}</p>
        </div>
    </div>

  )
}

export default About