// Write your code here.
import './index.css'

const Thumbnail = props => {
  const {eachThumb, isActive, selectedImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumb
  const thumbClassName = isActive ? 'list' : 'listItem'

  const selectFunction = () => {
    selectedImage(id)
  }

  return (
    <li className={thumbClassName}>
      <button className="btn" type="button" onClick={selectFunction}>
        <img className="btn-Logo" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default Thumbnail
