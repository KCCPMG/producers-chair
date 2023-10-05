
const Navbar = () => {
  return (
    <div style={{left: 1060, top: 46, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}}>
      <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>
        Home
      </div>
      <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word'}}>
        Saved
      </div>
      <div style={{width: 24, height: 24, position: 'relative'}}>
          <div style={{width: 18, height: 18, left: 3, top: 3, position: 'absolute', border: '2.50px #F8F8F8 solid'}}></div>
      </div>
    </div>
  )
}

export default Navbar;