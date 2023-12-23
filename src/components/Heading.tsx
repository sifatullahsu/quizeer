type iProps = {
  text: string
  className?: string
}

const Heading = ({ text, className }: iProps) => {
  return <div className={`text-xl font-semibold mb-5 ${className}`}>{text}</div>
}

export default Heading
