import { BsPersonLinesFill, BsThreeDots } from 'react-icons/bs'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { GiPresent } from 'react-icons/gi'
import { BiSearchAlt2 } from 'react-icons/bi'

function RightSidebar() {
    return (
        <section className="max-w-[360px] lg:w-[360px] bg-purple-200 h-full pr-4">
            <div>

                {/* Personal Page */}
                <div className='pb-2'>
                    <div className="flex justify-between mb-2">
                        <h1 className='text-xl font-semibold'>Pages and your pages</h1>
                        <button 
                            className="border-solid border-[1px] border-black w-[24px] h-[24px] flex items-center justify-center"
                        >
                            <BsThreeDots />
                        </button>
                    </div>

                    <div className="flex items-center">
                        {/* page avatar */}
                        <div>
                            <div className="w-[40px] h-[40px] bg-slate-400">
                                <img src="" alt="" />
                            </div>
                        </div>
                        {/* page name */}
                        <div className="ml-2">
                            <p className='text-l font-semibold'>Page Name</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center'>
                            <BsPersonLinesFill />
                            <p className="ml-2">Move to Page</p>
                        </div>
                        <div className='flex items-center'>
                            <HiOutlineSpeakerphone />
                            <p className="ml-2">Create Ads</p>
                        </div>
                    </div>
                </div>

                {/* Birthday */}
                <div className='border-t border-b border-black pt-2 pb-2 mb-2'>
                    <p className='text-xl font-semibold'>Birthday</p>
                    <div className='flex items-center'>
                        <GiPresent />
                        <p className="ml-2">Today is ... birthday!</p>
                    </div>
                </div>

                {/* Contacts */}
                <div>
                    <div className='flex items-center'>
                        <p className='flex-1 text-xl font-semibold'>Contacts</p>
                        <button className="border-solid border-[1px] border-black w-[24px] h-[24px] flex items-center justify-center">
                            <BiSearchAlt2 />
                        </button>
                        <button className="border-solid border-[1px] border-black w-[24px] h-[24px] flex items-center justify-center ml-3">
                            <BsThreeDots />
                        </button>
                    </div>

                    {/* contact list */}
                    <div>
                        <div className="flex items-center pt-1 pb-1">
                            {/* page avatar */}
                            <div>
                                <div className="w-[40px] h-[40px] bg-slate-400">
                                    <img src="" alt="" />
                                </div>
                            </div>
                            {/* page name */}
                            <div className="ml-2">
                                <p className='text-l font-semibold'>Contact Name</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-1 pb-1">
                            {/* page avatar */}
                            <div>
                                <div className="w-[40px] h-[40px] bg-slate-400">
                                    <img src="" alt="" />
                                </div>
                            </div>
                            {/* page name */}
                            <div className="ml-2">
                                <p className='text-l font-semibold'>Contact Name</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-1 pb-1">
                            {/* page avatar */}
                            <div>
                                <div className="w-[40px] h-[40px] bg-slate-400">
                                    <img src="" alt="" />
                                </div>
                            </div>
                            {/* page name */}
                            <div className="ml-2">
                                <p className='text-l font-semibold'>Contact Name</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-1 pb-1">
                            {/* page avatar */}
                            <div>
                                <div className="w-[40px] h-[40px] bg-slate-400">
                                    <img src="" alt="" />
                                </div>
                            </div>
                            {/* page name */}
                            <div className="ml-2">
                                <p className='text-l font-semibold'>Contact Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RightSidebar;