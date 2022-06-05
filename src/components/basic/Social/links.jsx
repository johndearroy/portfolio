import data from "../../../mock/data.json";

const SocialLinks = () => {
  return (
    <div className="social-links">
      {data && data.social.map((item, index) => (
        <a key={index} href={item.link} className={item.className}>
          <i className={`bx ${item.icon}`} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks;
