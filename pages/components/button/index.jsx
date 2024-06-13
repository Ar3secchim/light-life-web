import { tv } from "tailwind-variants"

const buttonVariants = tv({
  base: "font-bold rounded-xl",
  variants: {
    color: {
      primary: "bg-green-500",
      secondary: "bg-zinc-200",
    },
    size: {
      default: "h-10 px-2",
      sm: "px-2 py-1",
      md: "px-4 py-2",
      xl: "px-6 py-4",
    },
    style:{
      outline:"bg-transparent border"
    },
    disabled: {
      true: 'opacity-50 bg-gray-500 pointer-events-none'
    }
  },
  compoundVariants: [
    {
      style: 'outline',
      class: 'text-gray-500 hover:bg-gray-100 border-green-300'
    },
    {
      style:'borderless',
      class:'text-gray-700 hover:bg-gray-50' 
    }
  ]
})


function Button({ size, style, color, disabled, ...props }) {
  return (
    <button
      className={buttonVariants({ size, style, color, disabled })}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button