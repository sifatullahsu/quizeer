import Link from 'next/link'

type iProps = {
  text: string
  className?: string
  link?: string
  linkLabel?: string
}

const Heading = ({ text, className, link, linkLabel }: iProps) => {
  return (
    <div className="flex justify-between  mb-5">
      <div className={`text-xl font-semibold ${className}`}>{text}</div>
      {link && (
        <Link href={link} className="btn btn-secondary btn-sm">
          {linkLabel}
        </Link>
      )}
    </div>
  )
}

export default Heading
