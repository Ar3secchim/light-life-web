function Layout({ children }) {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#33eeb0_100%)]">
      {children}
    </div>
  )
}

export default Layout;