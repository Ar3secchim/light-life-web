import LayoutRootIntro from "../components/layout/layoutRoot"

function LayoutIntro({Image, Title, Text, children}) {
  return (
    <LayoutRootIntro>
      <button>Pular</button>
      <div>{Image}</div>
      <h3>{Title}</h3>
      <p>{Text}</p>
      <div>
        {children}
      </div>
      <div>
      <span>Points</span>
      <span>Arrows</span>
      </div>
    </LayoutRootIntro>
  )
}

export default LayoutIntro