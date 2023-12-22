type iProps = {
  text: string
}

const Heading = ({ text }: iProps) => {
  return <div className="text-xl font-semibold mb-5">{text}</div>
}

export default Heading
