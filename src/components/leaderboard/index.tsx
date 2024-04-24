import Image from "next/image";
import CoinSrc from "@/assets/coin.png";
import Snow from "@/assets/snow.svg";
export const Coin = () =>{
    return (
        <Image className="inline" src={CoinSrc} alt="coin" width={40} height={40} />
    )
}

export default () => {

    const tableItems = [
        {
            UserId: "dszld19281slz0_eq0e8we",
            bet: "30",
            payout: "75"
        },
        {
            UserId: "klsdf9i4k0sdfksldf_slkdf9",
            bet: "50",
            payout: "120"
        },
        {
            UserId: "qweoiu9843klsdqw_lskdf9we",
            bet: "20",
            payout: "40"
        },
        {
            UserId: "asdfkl234klsdfwe_eqwe0234",
            bet: "10",
            payout: "25"
        },
        {
            UserId: "klsef9843lsdflskd_eqwei4kf",
            bet: "100",
            payout: "250"
        },
        {
            UserId: "dszld19281slz0_eq0e8we",
            bet: "30",
            payout: "75"
        },
        {
            UserId: "klsdf9i4k0sdfksldf_slkdf9",
            bet: "50",
            payout: "120"
        },
        {
            UserId: "qweoiu9843klsdqw_lskdf9we",
            bet: "20",
            payout: "40"
        },
        {
            UserId: "asdfkl234klsdfwe_eqwe0234",
            bet: "10",
            payout: "25"
        },
        {
            UserId: "klsef9843lsdflskd_eqwei4kf",
            bet: "100",
            payout: "250"
        },
        {
            UserId: "dszld19281slz0_eq0e8we",
            bet: "30",
            payout: "75"
        },
        {
            UserId: "klsdf9i4k0sdfksldf_slkdf9",
            bet: "50",
            payout: "120"
        },
        {
            UserId: "qweoiu9843klsdqw_lskdf9we",
            bet: "20",
            payout: "40"
        },
        {
            UserId: "asdfkl234klsdfwe_eqwe0234",
            bet: "10",
            payout: "25"
        },
        {
            UserId: "klsef9843lsdflskd_eqwei4kf",
            bet: "100",
            payout: "250"
        },
        {
            UserId: "qwekdf9340sdfkjwe_sdfklw34",
            bet: "5",
            payout: "15"
        },
        {
            UserId: "skldf0943lsdfskld_qweio2304",
            bet: "50",
            payout: "100"
        }
    ];
    return (
        <div className="w-full font-mono   relative mx-auto">
            <div className="py-6 relative shadow-sm  rounded-lg overflow-x-auto">
                <div className="text-5xl mb-5  text-white font-mono mx-6">
                📶 Leaderboard
                </div>
                <table className="w-full table-auto  text-sm text-left">
                    <thead className=" text-xl pt-3 text-white font-medium">
                        <tr>
                            <th className="pb-3 bg-gray-900 pt-6 px-6">User Id</th>
                            <th className="pb-3 bg-gray-900 pt-6 px-6 ">
                                Bet Amount
                            </th>
                            <th className="pb-3 bg-gray-900 pt-6 px-6">Multiplier</th>
                            <th className="pb-3 bg-gray-900  pt-6 px-6">
                            Payout
                            </th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 ">
                        {
                            tableItems.map((item, idx) => {
                                const multiplier = (parseFloat(item.payout) / parseFloat(item.bet)).toFixed(2);
                                return (
                                <tr key={idx} className={(idx%2==0?"":"bg-gray-900")}>
                                    <td className="flex items-center gap-x-3  py-4 px-6 whitespace-nowrap">
                                       <div className="mt-1 text-gray-200">
                                        {item.UserId}

                                       </div>
                                    </td>
                                    <td className="px-6 py-4 text-lg font-bold font-mono text-white   whitespace-nowrap"> <Coin/> {item.bet}</td>
                                    <td className="px-6 py-4 font-bold text-lg font-mono text-gray-400 whitespace-nowrap">{multiplier}x</td>
                                    <td className="px-6 py-4 text-cyan-500 font-mono text-lg  font-bold  whitespace-nowrap"><Coin/> {item.payout}</td>

                                </tr>)
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}