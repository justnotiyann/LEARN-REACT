export default function Button(props) {
    const { color, text } = props
    return (
    <button {...props} className={`btn btn-${color} mt-2`}>{text}</button>
    )
  }