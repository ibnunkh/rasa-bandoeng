export function Card({ children, className = "", ...props }) {
  return (
    <div className={`relative rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h3 className={`text-lg md:text-xl font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )
}

export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-4 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-4 pt-0 flex items-center ${className}`} {...props}>
      {children}
    </div>
  )
}