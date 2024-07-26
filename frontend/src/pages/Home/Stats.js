import {useState} from 'react';
import Github from './Github';
import Codeforces from './Codeforces';
import Leetcode from './Leetcode';

const Stats = () => {

    const [platform,setPlatform] = useState([]);

    return(
        <div className="h-screen bg-slate-700">
        <div className="flex mx-auto pt-16 pb-8  justify-center">
            <span className="mx-2 hover:text-gray-600 cursor-pointer text-lg" onClick={() => setPlatform('Github')}>Github</span>
            <span className="mx-2 hover:text-gray-600 cursor-pointer text-lg" onClick={() => setPlatform('Codeforces')}>Codeforces</span>
            <span className="mx-2 hover:text-gray-600 cursor-pointer text-lg" onClick={() => setPlatform('Leetcode')}>Leetcode</span>
        </div>

        <div className="mt-5 mx-auto">
            {platform === 'Github' && <Github />}
            {platform === 'Codeforces' && <Codeforces />}
            {platform === 'Leetcode' && <Leetcode />}
        </div>
    </div>
    )
}

export default Stats;