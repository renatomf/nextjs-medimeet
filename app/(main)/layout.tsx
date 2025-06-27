interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="container mx-auto my-20">
      {children}
    </div>
  )
}

export default MainLayout;