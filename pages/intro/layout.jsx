import Layout from "../layout"

function LayoutIntro({Image, Title, Text, children}) {
  return (
    <Layout>
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
    </Layout>
  )
}

export default LayoutIntro