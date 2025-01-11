type ErrorMessageProps = {
  children: React.ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="bg-red-50 text-red-600 text-sm p-3 uppercase font-bold text-center">
      {children}
    </p>
  )
}
