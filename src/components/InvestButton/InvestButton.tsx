import { roboto } from '../../fonts';

const InvestButton = () => {

  const badButton = (
    <div className="w-[58.23px] h-[35.49px] p-2.5 bg-blue-800 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
      <div className="text-white text-base font-bold font-['Roboto'] capitalize">Invest</div>
    </div>
  )

  return (
    <button className={`${roboto.variable} text-white w-14 h-8 z-10 rounded absolute bottom-2 right-2 bg-blue-800 justify-center items-center gap-2.5  font-bold text-base`}>
      Invest
    </button>
  )
}




export default InvestButton;