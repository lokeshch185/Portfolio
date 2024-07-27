import {useState} from 'react';
import Github from './Github';
import Codeforces from './Codeforces';
import Leetcode from './Leetcode';

const Stats = () => {

    const [platform,setPlatform] = useState('Github');

    return(
        <div className=" sm:h-auto    bg-[#0e2840]">
        <div className="flex mx-auto pt-16 pb-8  justify-center text-white">
            <span className="mx-2 hover:text-gray-600 cursor-pointer text-2xl font-bold" onClick={() => setPlatform('Github')}>Github</span>
            {/* <span className="mx-2 hover:text-gray-600 cursor-pointer text-lg" onClick={() => setPlatform('Codeforces')}>Codeforces</span>
            <span className="mx-2 hover:text-gray-600 cursor-pointer text-lg" onClick={() => setPlatform('Leetcode')}>Leetcode</span> */}
        </div>

        <div className="mt-1 mx-auto">
            {platform === 'Github' && <Github />}
            {/* {platform === 'Codeforces' && <Codeforces />}
            {platform === 'Leetcode' && <Leetcode />} */}
        </div>
    </div>
    )
}

export default Stats;