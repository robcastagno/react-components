function Button({ text }: { text: string }): React.JSX.Element {

  return (
    <>
      <button className="
      bg-blue-500
      text-white
      font-bold
      py-2
      px-4
      rounded
      hover:bg-blue-700
      ">
        {text}
      </button>
    </>
  )
}

export default Button